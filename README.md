View this app at: [https://kaibyao.github.io/my-resume](https://kaibyao.github.io/my-resume).

# My Résumé

Once upon a time, people (myself included) wrote their résumés using an application called Microsoft Word. These days, I rarely use Word and don’t have it installed on any of my machines.

At some point I had converted my résumé to the Adobe Illustrator (and later Affinity Designer) format, but found that as I stopped using Illustrator day-to-day, my muscle memory of its actions faded and I had a harder time editing previous job experiences + adding new ones. I also found that it’s not actually that great of a tool when the main thing I needed to do was edit text.

Now, given how far we’ve come with web frameworks and that I will probably always be writing web applications as my day job, why not convert my résumé to code? This repo houses my current résumé, built on [React](https://react.dev/) + [Astro](https://astro.build/). Astro makes it easy to edit textual information in [Markdown (MDX)](https://mdxjs.com/), while still allowing for the sprinkles of UI customization that I need.

## 🧞 Astro Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## To dos

* Highlight technologies used per job responsibility.
* react-a11y / address accessibility.
* Links for companies.
* Dark vs light mode toggle.
* Collapsible experiences.
