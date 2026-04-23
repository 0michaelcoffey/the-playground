# The Playground 🚀

My personal AI experiment hub — built with Claude, hosted on GitHub Pages.

## Live site
`https://YOUR-USERNAME.github.io/the-playground`

## Folder structure
```
the-playground/
├── index.html              ← Dashboard (don't need to edit)
├── css/
│   └── style.css           ← All styling (don't need to edit)
├── js/
│   ├── experiments.js      ← ⭐ ADD YOUR EXPERIMENTS HERE
│   └── main.js             ← Dashboard logic (don't need to edit)
├── experiments/
│   ├── my-first-app.html   ← Your experiment files go here
│   └── another-app.html
└── README.md
```

## How to add a new experiment

1. Save your experiment as an `.html` file in the `experiments/` folder
2. Open `js/experiments.js`
3. Add a new entry to the `EXPERIMENTS` array:

```js
{
  name:     'My Cool App',
  category: 'ai-tools',   // see CATEGORIES in experiments.js
  icon:     '🤖',
  desc:     'A short description of what it does.',
  status:   'live',        // 'live' | 'wip' | 'idea'
  file:     'experiments/my-cool-app.html',
},
```

4. Commit and push — your site updates automatically!

## Categories
- `ai-tools` — AI chatbots and assistants
- `data-viz` — Charts and data visualisations
- `games` — Interactive games and toys
- `creative` — Writing and storytelling tools
- `productivity` — Planning and utility apps
- `image-art` — Art and image generation tools

---
Built with ❤️ and [Claude](https://claude.ai)
