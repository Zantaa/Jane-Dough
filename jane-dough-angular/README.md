# Jane Dough Foods — Angular Website

The Angular 20 and TypeScript edition of the Jane Dough gluten-free dumpling wrapper website.

## Requirements

- Node.js 20.19+ or 22.12+
- pnpm 10+

If pnpm is not installed:

```bash
npm install --global pnpm
```

## Open and run in VS Code

1. Extract the ZIP file.
2. In VS Code, choose **File → Open Folder** and select `jane-dough-angular`.
3. Open a VS Code terminal.
4. Install and start the project:

```bash
pnpm install
pnpm start
```

5. Open `http://localhost:4200` in your browser.

## Useful commands

```bash
pnpm start       # Start the local development server
pnpm run build   # Create a production build
pnpm test        # Run the Angular unit tests
```

## Project structure

- `src/app/app.ts` — standalone Angular component, signals, FAQ state, and reactive form logic.
- `src/app/app.html` — homepage template using Angular `@if` and `@for` control flow.
- `src/styles.scss` — full responsive Jane Dough design system.
- `src/index.html` — page title, description, keywords, and favicon.
- `public/` — hero, story, served-dumpling imagery, and favicon.
- The footer includes a linked Brother Bear Web Development design credit and published logo.

## Before the real launch

- Replace the concept imagery with Jane Dough's product photography when available.
- Connect the signup form to the company's chosen email provider. It currently demonstrates the front-end experience only.
- Confirm the product, ingredient, allergen, certification, availability, and founder-story copy.

## Angular implementation

- Angular 20 standalone component architecture
- Strict TypeScript configuration
- Signals for mobile navigation, FAQ, and signup states
- Reactive Forms with required/email validation
- Modern Angular template control flow
- Responsive desktop, tablet, and mobile layouts
- Keyboard-visible focus states and reduced-motion support
