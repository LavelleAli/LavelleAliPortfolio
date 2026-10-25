# Lavelle Ali — Portfolio

My personal portfolio site: who I am, what I've built, and how to reach me. It's built with Next.js, Tailwind CSS, GSAP and three.js.

**Live site:** https://lavelle-ali-portfolio.vercel.app

## Features

- **3D space background** built with three.js: a rotating Earth and drifting particles. The camera follows the mouse on desktop and the finger on touch screens, then drifts slowly on its own when idle.
- **Animated pages** using GSAP: a letter-by-letter name intro, fade-ins, and sections that reveal as you scroll.
- **Project carousel** built with keen-slider, with arrow buttons on desktop and swiping on phones.
- **Light and dark themes**, remembered between visits.
- **Contact form** in a pop-up window, sent through Formspree.
- **Custom audio player** on the About page.
- **Responsive layout** tested from small phones (320px wide) up to 4K TVs (3840px wide).

## Built with

| Area | Tools |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router), React 19, React Compiler |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) with CSS variables for theme colors |
| Animation | [GSAP](https://gsap.com) with the ScrollTrigger and SplitText plugins |
| 3D | [three.js](https://threejs.org), [three-nebula](https://github.com/creativelifeform/three-nebula) for particles |
| Carousel | [keen-slider](https://keen-slider.io) |
| Icons | [Font Awesome](https://fontawesome.com) |
| Contact form | [Formspree](https://formspree.io) via axios |
| Hosting | [Vercel](https://vercel.com) |

## Getting started

You need [Node.js](https://nodejs.org) 20.9 or newer.

```bash
npm install
npm run dev
```

Then open the address the terminal prints, usually http://localhost:3000.

To test on your phone, connect it to the same Wi-Fi as your computer and open the **Network** address that `npm run dev` prints, for example `http://192.168.1.20:3000`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server with hot reloading |
| `npm run build` | Builds the production version of the site |
| `npm run start` | Serves the production build (run `npm run build` first) |
| `npm run lint` | Checks the code with ESLint |

## Environment variables

None are needed. The contact form posts to a public Formspree endpoint set in `components/Modals/ContactModals.js`. If you ever add secret keys, keep them in a `.env.local` file, which `.gitignore` already excludes, and add a `.env.example` listing each variable with a placeholder value.

## Project structure

```
app/
  layout.js          Shared layout: navigation, theme toggle, 3D background, footer
  page.js            Home page
  about/page.js      About page
  projects/page.js   Projects page
  globals.css        Theme colors (dark and light) and large-screen scaling
components/
  Animations/        GSAP animations, cursor follower and project carousels
  AudioPlayer/       Custom audio player
  Modals/            Contact form pop-up
  threejs/           3D background (Space3d) and particle system (threeNebula)
  ...                Navbar, MobileNav, Footer, ProjectCard, SectionHeading, ThemeToggle
data/
  projects.js        Project list shown on the site
  skills.js          Skills list shown on the home page
public/              Images, audio and the Earth texture
```

## Editing content

Most content changes don't need any component code.

- **Projects:** add or edit an entry in `data/projects.js`. Each project has a `title`, `description`, `tags`, `liveUrl`, `repoUrl` and `featured`. Projects with `featured: true` appear on the home page.
- **Skills:** edit the groups in `data/skills.js`.
- **Photo, audio and images:** put files in `public/` and reference them from the root, for example `/Me.png`.

## Deployment

The site is hosted on Vercel and connected to this GitHub repository. Every push to `main` deploys automatically, usually within a minute.

If a push doesn't trigger a deployment, push an empty commit to send GitHub's notification to Vercel again:

```bash
git commit --allow-empty -m "Trigger Vercel deployment" && git push
```

## Testing

There are no automated tests yet. Before deploying, I run `npm run lint` and `npm run build` and check the site by hand:

- **Screen sizes:** phones (320–430px), tablets (768px), laptops (1440px), 1080p and 4K screens.
- **Browser engines:** Chrome's engine (Chrome, Edge, Android) and WebKit (Safari, and every browser on iPhone and iPad).

## Key decisions

- **Theme colors are CSS variables.** `globals.css` defines each color once for dark mode and once for light mode, and Tailwind classes like `bg-ink` and `text-snow` read from them. A small script in `layout.js` applies the saved theme before the page appears, so returning visitors don't see a flash of the wrong theme.
- **Large screens scale everything up.** Tailwind sizes are in `rem`, so `globals.css` raises the root font size on screens 2200px and wider, and again from 3200px. A 4K TV then shows the same layout as a 1080p screen instead of a small column in the middle.
- **The 3D background stays out of the way.** It sits behind all content (`-z-10`), ignores clicks (`pointer-events-none`), is hidden from screen readers, and caps its pixel ratio at 2 so it doesn't slow down high-resolution screens.
- **Scroll animations re-measure the page.** The project carousel changes the page height after it loads, so `ScrollReveal` recalculates its trigger points whenever the page height changes. Visitors who have reduced motion turned on get no scroll animations.
- **Touch screens use touch events.** Phones stop sending pointer events once a finger starts scrolling, so the cursor follower and 3D camera also listen for `touchstart` and `touchmove`.
- **The About photo sets its own height.** Its frame used to force a square shape, which older iPhone Safari sized differently from other browsers, so the photo overflowed onto the text. The frame now takes its height from the photo.

## Troubleshooting

**`npm run dev` prints "Ready" and then exits, mentioning Turbopack and native bindings.** Next.js's compiler file is missing from `node_modules`, which can happen if a cleanup tool deletes it. Reinstall it:

```bash
rm -rf node_modules/@next/swc-darwin-arm64 && npm install
```

This is for Apple Silicon Macs. On other computers, the package name ends in your platform instead, such as `swc-win32-x64-msvc` on Windows.
