import { getGithubData } from "@/lib/github";
import { GitHubActivityClient } from "./GitHubActivityClient";

export async function GitHubActivity() {
  const data = await getGithubData();
  return <GitHubActivityClient data={data} />;
}
