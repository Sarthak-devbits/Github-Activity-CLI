import { fetchGitHubEvents } from './github';

const username = process.argv[2];

if (!username) {
  console.error('⚠️  Please provide a GitHub username:');
  console.error('   $ github-activity <username>');
  process.exit(1);
}

console.log(`🔍 Fetching recent activity for: ${username}...\n`);

fetchGitHubEvents(username)
  .then((events) => {
    if (!events.length) {
      console.log('ℹ️  No public activity found.');
      return;
    }

    for (const event of events.slice(0, 10)) {
      const repo = event.repo.name;
      const type = event.type;

      switch (type) {
        case 'PushEvent':
          console.log(
            `🚀 Pushed ${event.payload.commits.length} commits to ${repo}`
          );
          break;
        case 'IssuesEvent':
          console.log(`📬 ${event.payload.action} an issue in ${repo}`);
          break;
        case 'WatchEvent':
          console.log(`⭐ Starred ${repo}`);
          break;
        case 'ForkEvent':
          console.log(`🍴 Forked ${repo}`);
          break;
        case 'PullRequestEvent':
          console.log(`🔀 ${event.payload.action} a PR in ${repo}`);
          break;
        default:
          console.log(`📌 ${type} in ${repo}`);
      }
    }
  })
  .catch((err) => {
    console.error(err.message);
  });
