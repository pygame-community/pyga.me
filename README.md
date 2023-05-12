# Pygame: Community Edition Website

<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="prs: welcome"> <img src="https://img.shields.io/github/license/pygame-community/pyga.me" alt="license"/> <img src="https://img.shields.io/github/actions/workflow/status/pygame-community/pyga.me/prettier.yml?label=lint status" alt="lint status"/> <img src="https://img.shields.io/website?down_message=offline&label=website&up_message=online&url=https%3A%2F%2Fpyga.me%2F" alt="website status"> <img src="https://img.shields.io/website?down_message=offline&label=docs&up_message=online&url=https%3A%2F%2Fpyga.me%2Fdocs%2F" alt="docs status"> <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="code style: prettier"/> <img src="https://img.shields.io/badge/code%20style-black-000000.svg" alt="code style: black">

## About

The official website representing Pygame: Community Edition utilizing NextJS, ReactJS, and TypeScript. We are currently using GitHub Pages to deploy our website, which might change in the future if we decide to add a database to store user projects.

## Frequently Asked Questions

1. Why the fancy tech stack?

In the future, this will not be just a fancy static website, we will be adding blog and user project showcase support and NextJS would be a big help in making it happen while Tailwind CSS would allow us to add CSS easier.

2. Can I add my game to the website?

Maybe! We currently do not have an official way to request for your game to be featured, but for now just message `Novial#1450` through Discord. If your game impresses us, we will add it to the site's homepage.

3. Why is the domain [pyga.me](https://pyga.me) instead of [pygame.org](https://pygame.org)

[pygame.org](https://pygame.org) is not associated with the Pygame Community.

## Contributing

Pull requests from outside the core development team are welcome, check out the [good-first-issue](https://github.com/pygame-community/pyga.me/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) tag.
Before you create a pull request, please create an issue using our [issue tracker](https://github.com/pygame-community/pyga.me/issues) to avoid any work efforts being lost.

### Limitations to Outside Contributors

We welcome all outside contributors to help out on building our website, but there are some limitations if you are not a core member of the development team.

1. Your pull request must have a low impact
2. You cannot make a complete redesign of a website page
3. New design choices are decided by the core development team

### Instructions to Build

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions for Visual Studio Code
3. Install [NodeJS](https://nodejs.org/en/)
4. Run `npm install` to install all dependencies
5. Run `npm run dev` to create a local server to start contributing!
6. Open [http://localhost:3000](http://localhost:3000) to view your changes
7. Before pushing a commit, please run `npx prettier --write .` and `black .`, although Visual Studio Code should automatically perform this task for you
