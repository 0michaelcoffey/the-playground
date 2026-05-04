// =============================================
//  THE PLAYGROUND — experiments.js
//  Add your experiments here!
//
//  Each experiment is an object with:
//    name:     (string)  Display name
//    category: (string)  One of the CATEGORIES keys below
//    icon:     (string)  An emoji
//    desc:     (string)  Short description (1–2 sentences)
//    status:   (string)  'live' | 'wip' | 'idea'
//    file:     (string)  Path to HTML file, e.g. 'experiments/my-app.html'
//                        Leave as '' if not built yet
// =============================================

const CATEGORIES = {
  'ai-tools':    'AI Tools',
  'data-viz':    'Data Viz',
  'games':       'Games',
  'creative':    'Creative Writing',
  'productivity':'Productivity',
  'image-art':   'Image & Art',
};

const EXPERIMENTS = [

  {
    name:     'ARIA — AI Chat Interface',
    category: 'ai-tools',
    icon:     '🤖',
    desc:     'A sci-fi AI assistant with 5 switchable personas. Powered by Claude.',
    status:   'live',
    file:     'experiments/ai-chat.html',
  },

];

// ---- Idea queue — things to build next ----
// These show up as greyed-out inspiration cards.
const IDEAS = [
  { name: 'AI Chat Interface',    category: 'ai-tools',    icon: '🤖', desc: 'Custom chatbot with a persona and memory.' },
  { name: 'Live Data Explorer',   category: 'data-viz',    icon: '📡', desc: 'Visualise any dataset interactively.' },
  { name: 'AI Text Adventure',    category: 'games',       icon: '🎮', desc: 'Infinite branching story engine powered by AI.' },
  { name: 'Story Forge',          category: 'creative',    icon: '✍️', desc: 'AI co-writer for stories, scripts & lore.' },
  { name: 'Smart Task Planner',   category: 'productivity',icon: '⚡', desc: 'AI breaks goals into actionable daily plans.' },
  { name: 'Prompt Painter',       category: 'image-art',   icon: '🎨', desc: 'Generate detailed image prompts from ideas.' },
];
