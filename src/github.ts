import axios from 'axios';

export async function fetchGitHubEvents(username: string): Promise<any[]> {
  const url = `https://api.github.com/users/${username}/events`;

  try {
    const response = await axios.get(url, {
      headers: { 'User-Agent': 'github-activity-cli' },
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      throw new Error('❌ GitHub user not found.');
    } else if (error.response) {
      throw new Error(
        `❌ GitHub API error: ${error.response.status} ${error.response.statusText}`
      );
    } else {
      throw new Error(`❌ Network error: ${error.message}`);
    }
  }
}
