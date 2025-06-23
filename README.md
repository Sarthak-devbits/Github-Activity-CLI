Project Url: https://roadmap.sh/projects/github-user-activity

===========================================
 GitHub Activity CLI - TypeScript + Axios
===========================================

A simple Command Line Interface (CLI) tool to fetch and display the recent public activity of a GitHub user.

-------------------------------------------
 Features
-------------------------------------------
- Fetches recent GitHub events using GitHub's public API
- Accepts a GitHub username as a CLI argument
- Displays readable activities like:
  - Pushed commits
  - Starred repositories
  - Opened issues
  - Merged pull requests
- Handles errors (invalid username, API failure)
- Built using Node.js, TypeScript, Axios

-------------------------------------------
 Installation
-------------------------------------------

1. Clone the repository or create a new folder:

   mkdir github-activity-cli && cd github-activity-cli

2. Initialize a project and install dependencies:

   pnpm init -y
   pnpm add axios
   pnpm add -D typescript ts-node

3. Create the following files:
   - tsconfig.json
   - package.json (edit scripts as needed)
   - src/index.ts
   - src/github.ts

4. Copy the respective content into each file (from implementation).

-------------------------------------------
 Usage
-------------------------------------------

Run the CLI using:

   pnpm start <github-username>

Example:

   pnpm start kamranahmedse

-------------------------------------------
 Sample Output
-------------------------------------------

🔍 Fetching recent activity for: kamranahmedse...

🚀 Pushed 3 commits to kamranahmedse/developer-roadmap
⭐ Starred kamranahmedse/awesome-project
📬 opened an issue in kamranahmedse/dev-utils
🔀 merged a PR in kamranahmedse/docs

-------------------------------------------
 Scripts
-------------------------------------------

To run the CLI:

   pnpm start <username>

To build for production:

   pnpm build

-------------------------------------------
 Advanced Ideas
-------------------------------------------

- Filter by event type (e.g., only "PushEvent")
- Limit result count (e.g., --limit=5)
- Cache results using a file system
- Pretty-print with color and layout enhancements
- Support for authentication token (for higher rate limit)

-------------------------------------------
 Notes
-------------------------------------------

- GitHub API has a limit of 60 unauthenticated requests per hour
- This CLI only uses public data available via:
  https://api.github.com/users/<username>/events

-------------------------------------------
 License
-------------------------------------------

MIT License
