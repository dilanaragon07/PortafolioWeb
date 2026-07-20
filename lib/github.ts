const USERNAME = "dilanaragon07";
const REVALIDATE_SECONDS = 3600;

export type GithubLanguage = { name: string; pct: number };
export type GithubCalendarDay = { date: string; level: number };

export type GithubData = {
  login: string;
  name: string;
  avatarUrl: string;
  profileUrl: string;
  publicRepos: number;
  totalStars: number;
  contributionsLastYear: number;
  longestStreakDays: number;
  languages: GithubLanguage[];
  calendar: GithubCalendarDay[];
};

type GhRepo = {
  name: string;
  fork: boolean;
  stargazers_count: number;
  languages_url: string;
};

function computeLongestStreak(calendar: GithubCalendarDay[]): number {
  let longest = 0;
  let current = 0;
  for (const day of calendar) {
    if (day.level > 0) {
      current += 1;
      longest = Math.max(longest, current);
    } else {
      current = 0;
    }
  }
  return longest;
}

function parseContributionCalendar(html: string): { calendar: GithubCalendarDay[]; total: number } {
  const calendar: GithubCalendarDay[] = [];
  const cellRegex = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g;
  for (const match of html.matchAll(cellRegex)) {
    calendar.push({ date: match[1] ?? "", level: Number(match[2] ?? 0) });
  }
  calendar.sort((a, b) => a.date.localeCompare(b.date));

  const totalMatch = html.match(/(\d[\d,]*)\s+contributions?\s+in the last year/);
  const total = totalMatch ? Number(totalMatch[1]?.replace(/,/g, "")) : calendar.reduce((sum, d) => sum + (d.level > 0 ? 1 : 0), 0);

  return { calendar, total };
}

async function aggregateLanguages(repos: GhRepo[]): Promise<GithubLanguage[]> {
  const bytesByLanguage: Record<string, number> = {};

  await Promise.all(
    repos.map(async (repo) => {
      try {
        const res = await fetch(repo.languages_url, { next: { revalidate: REVALIDATE_SECONDS } });
        if (!res.ok) return;
        const languages: Record<string, number> = await res.json();
        for (const [lang, bytes] of Object.entries(languages)) {
          bytesByLanguage[lang] = (bytesByLanguage[lang] ?? 0) + bytes;
        }
      } catch {
        // one repo failing to report languages shouldn't break the whole panel
      }
    }),
  );

  const totalBytes = Object.values(bytesByLanguage).reduce((a, b) => a + b, 0);
  if (totalBytes === 0) return [];

  const sorted = Object.entries(bytesByLanguage).sort((a, b) => b[1] - a[1]);
  const top = sorted.slice(0, 4);
  const restBytes = sorted.slice(4).reduce((sum, [, bytes]) => sum + bytes, 0);

  const languages: GithubLanguage[] = top.map(([name, bytes]) => ({
    name,
    pct: Math.round((bytes / totalBytes) * 100),
  }));
  if (restBytes > 0) {
    languages.push({ name: "Other", pct: Math.round((restBytes / totalBytes) * 100) });
  }
  return languages;
}

/** Fetches real, live data from dilanaragon07's public GitHub profile. Returns null on any failure so the UI can fall back to static content instead of breaking the build. */
export async function getGithubData(): Promise<GithubData | null> {
  try {
    const [profileRes, reposRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { next: { revalidate: REVALIDATE_SECONDS } }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, { next: { revalidate: REVALIDATE_SECONDS } }),
      fetch(`https://github.com/users/${USERNAME}/contributions`, { next: { revalidate: REVALIDATE_SECONDS } }),
    ]);

    if (!profileRes.ok || !reposRes.ok) return null;

    const profile = await profileRes.json();
    const repos: GhRepo[] = await reposRes.json();
    const nonForkRepos = repos.filter((r) => !r.fork);

    const totalStars = nonForkRepos.reduce((sum, r) => sum + r.stargazers_count, 0);
    const languages = await aggregateLanguages(nonForkRepos);

    let calendar: GithubCalendarDay[] = [];
    let contributionsLastYear = 0;
    if (contribRes.ok) {
      const html = await contribRes.text();
      const parsed = parseContributionCalendar(html);
      calendar = parsed.calendar;
      contributionsLastYear = parsed.total;
    }

    return {
      login: profile.login,
      name: profile.name ?? profile.login,
      avatarUrl: profile.avatar_url,
      profileUrl: profile.html_url,
      publicRepos: nonForkRepos.length,
      totalStars,
      contributionsLastYear,
      longestStreakDays: computeLongestStreak(calendar),
      languages,
      calendar,
    };
  } catch {
    return null;
  }
}
