const services = [
  {
    title: 'ocular',
    description: 'Scratch forum search, post reactions, and more.',
    theme: '~positive',
    icon: 'search',
    href: 'https://ocular.jeffalo.net',
    topic: 446450,
    username: 'Jeffalo',
  },
  {
    title: 'postpercent',
    description: 'Forum leaderboards, statistics, graphs, and more.',
    theme: '~critical',
    icon: 'leaderboard',
    href: 'https://postpercent.rirurin.com/',
    topic: 424580,
    username: 'CatsUnited',
  },
  {
    title: 'Aviate',
    description:
      "Create dynamic, component driven statuses on the fly, then use them on Scratch and across the web with Aviate's easy to use API.",
    theme: '~cyan',
    icon: 'send',
    href: 'https://aviateapp.eu.org',
    topic: 594464,
    username: 'NFlex23',
  },
  {
    title: 'Itinerary',
    description:
      'Discover and participate in Scratch game jams. Embrace the community.',
    type: 'Community',
    theme: '~neutral',
    icon: 'event',
    href: 'https://itinerary.eu.org/',
    topic: 576248,
    username: 'Looky1173',
  },
  {
    title: 'Magnifier',
    description: 'Scratch comment reactions and pinning.',
    type: 'Comments',
    theme: '~gray',
    icon: 'loupe',
    href: 'https://magnifier.potatophant.net/',
    topic: 513823,
    username: 'potatophant',
  },
  {
    title: 'Scratory',
    description: 'Forum signature history and cloud data logs.',
    type: 'Forums & Projects',
    theme: '~blue',
    icon: 'history',
    href: 'https://scratory.vercel.app/',
    topic: 518860,
    username: '9gr',
  },
  {
    title: 'tosh',
    description: 'Tired of dragging colorful blocks? Try out tosh.',
    type: 'Projects',
    theme: '~yellow',
    icon: 'code',
    href: 'https://tosh.blob.codes/',
    topic: 192915,
    username: 'blob8108',
  },
  {
    title: 'Leopard',
    description:
      'Convert Scratch projects to readable JavaScript automatically!',
    type: 'Projects',
    theme: '~indigo',
    icon: 'javascript',
    href: 'https://leopardjs.com/',
    topic: 420162,
    username: 'PullJosh',
  },
  {
    title: 'Scratch Profiler',
    description: 'Your new Scratch homepage',
    type: 'Community',
    theme: '~indigo',
    icon: 'person',
    href: 'https://scratchprofiler.vercel.app/',
    topic: 534440,
    username: 'NFlex23',
  },
  {
    title: 'Scratchinfo',
    description: 'A new website to get Scratch information',
    type: 'Community',
    theme: '~sky',
    icon: 'info',
    href: 'https://scratchinfo.vercel.app/',
    topic: 549251,
    username: 'god286',
  },
  {
    title: 'ScratchTester',
    description: 'Test projects in Scratch, Turbowarp, and Forkphorus.',
    type: 'Projects',
    theme: '~slate',
    icon: 'bug_report',
    href: 'https://scratchtester-v2.kccuber.repl.co/',
    topic: 554264,
    username: 'kccuber',
  },
  {
    title: 'ScratchStats',
    description: 'Your source for Scratch community statistics.',
    type: 'Community',
    theme: '~blue',
    icon: 'trending_up',
    href: 'https://scratchstats.com/',
    username: 'World_Languages',
  },
  {
    title: 'TurboWarp',
    description:
      'A Scratch mod that compiles projects to JavaScript to make them run really fast.',
    type: 'Projects',
    theme: '~red',
    icon: 'speed',
    href: 'https://turbowarp.org/',
    topic: 641251,
    username: 'GarboMuffin',
  },
  {
    title: 'MyScratchPage',
    description:
      'Statistics such as the topic you post in least and most. Totals, MOTDs, colors, and more.',
    type: 'Community',
    theme: '~blue',
    icon: 'contact_page',
    href: 'https://jdev.eu.org/MyScratchPage',
    topic: 590555,
    username: 'MagicCrayon9342',
  },
  {
    title: 'Project Explorer',
    description: 'Scratch project costume/sound viewing and more!',
    type: 'Projects',
    theme: '~violet',
    icon: 'workspaces',
    href: 'https://cst1229.github.io/project-explorer/',
    topic: 554191,
    username: 'CST1229',
  },
  {
    title: 'Scratch User Info',
    description: 'Command line tool for getting info about a Scratch user',
    type: 'Community',
    theme: '~blue',
    icon: 'terminal',
    href: 'https://github.com/Chiroyce1/scratch-user-data/',
    topic: 542409,
    username: 'Chiroyce',
  },
  {
    title: 'ScratchConnect',
    description:
      'Python library to connect the Scratch API and perform many more actions.',
    type: 'Library',
    theme: '~lime',
    icon: 'link',
    href: 'https://github.com/Sid72020123/scratchconnect',
    topic: 553038,
    username: 'Sid72020123',
  },
  {
    title: 'Forkphorus',
    description:
      'Run Scratch 3, 2, and 1 projects really fast by compiling them to JavaScript.',
    type: 'Projects',
    theme: '~slate',
    icon: 'speed',
    href: 'https://forkphorus.github.io',
    username: 'GarboMuffin',
  },
  {
    title: 'Visualize',
    description:
      'Visualize is the website you can rely on when getting information about Scratch studios like how many followers a studio has or the description of what the studio is',
    type: 'Studios',
    theme: '~sky',
    icon: 'graphic_eq',
    href: 'https://visualize.eu.org/',
    topic: 596951,
    username: 'PoIygon',
  },
  {
    title: 'meowclient',
    description:
      'Library for connecting to Scratch with JavaScript/TypeScript.',
    type: 'Library',
    theme: '~yellow',
    icon: 'link',
    href: 'https://webdev03.github.io/meowclient/',
    topic: 574321,
    username: 'god286',
  },
  {
    title: 'Scratch Auth',
    description:
      'Scratch OAuth made easy. It comes with a simple API, is fully customizable, and looks fantastic!',
    type: 'Community',
    theme: '~amber',
    icon: 'login',
    href: 'https://auth.itinerary.eu.org/',
    topic: 597434,
    username: 'Looky1173',
  },
  {
    title: 'Scratch Tutorials',
    description:
      'Share your knowledge or learn something new with Scratchers worldwide',
    type: 'Community',
    theme: '~amber',
    icon: 'school',
    href: 'https://scratchtutorials.vercel.app/',
    topic: 607432,
    username: 'NFlex23',
  },
  {
    title: 'Personal Stickies',
    description: 'Save topics to your own profile.',
    type: 'Forums',
    theme: '~gray',
    icon: 'person_pin_circle',
    href: 'https://personal-stickies.stevesgreatness.repl.co',
    topic: 604367,
    username: 'Steve0Greatness',
  },
  {
    title: 'Periscope-Search',
    description: "A scratch user stat viewer that doesn't use ScratchDB",
    type: 'Community',
    theme: '~orange',
    icon: 'search',
    href: 'https://periscope-search.github.io',
    username: 'ISTILLMAKESTUFF',
  },
  {
    title: 'Boiga',
    description: 'Generate Scratch code using Python',
    type: 'Library',
    theme: '~lime',
    icon: 'auto_fix_normal',
    href: 'https://github.com/DavidBuchanan314/boiga',
    topic: 612517,
    username: 'Retr0id',
  },
  {
    title: 'Gobomatic',
    description:
      'Generate Scratch projects from an Object-Oriented representation of Scratch projects in Python code.',
    type: 'Library',
    theme: '~rose',
    icon: 'flare',
    href: 'https://github.com/aspizu/gobomatic',
    topic: 614567,
    username: 'aspizu',
  },
  {
    title: 'Cloud Viewer',
    description: 'View cloud data for any Scratch project',
    type: 'Projects',
    theme: '~orange',
    icon: 'cloud',
    href: 'https://cloud.lindsey.studio/',
    topic: 616358,
    username: 'scratchusername40',
  },
  {
    title: 'Forumoji',
    description: 'Find amazing forum-supported emoticons for any situation.',
    type: 'Forums',
    theme: '~blue',
    icon: 'emoji_emotions',
    href: 'https://lopste.github.io/forumoji/',
    topic: 557083,
    username: 'lolecksdeehaha',
  },
  {
    title: 'ScratchGoal',
    username: 'coderwe2',
    description: 'Make scratch forum post goals, explore about certain goals.',
    href: 'https://coderwe1.github.io/ScratchGoal/',
    type: 'Forums',
    topic: 617471,
    theme: '~amber',
    icon: 'flag_circle',
  },
  {
    title: 'The Daily Gobo',
    username: ['MaterArc', 'rgantzos'],
    description: 'The biggest and best moderated blog site for Scratch!',
    href: 'https://thedailygobo.scratchtools.app/',
    type: 'Community',
    theme: '~amber',
    icon: 'edit_note',
  },
  {
    title: 'Commenstudio',
    username: 'mybearworld',
    description: 'Organizes all studio comments in one place - mark them as read and pin them so you can be sure you\'ll see them all.',
    href: 'https://mybearworld.github.io/commenstudio',
    type: 'Studios',
    topic: 717430,
    theme: '~sky',
    icon: 'chat',
  },
];

function sortAlphabetically(services) {
  return services.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  });
}

function sortIntoCategories(services) {
  services = sortAlphabetically(services);

  const categories = {};

  services.forEach((service) => {
    const firstLetter = service.title.charAt(0).toLowerCase();
    if (!categories[firstLetter]) categories[firstLetter] = [];
    categories[firstLetter].push(service);
  });

  return categories;
}

export const categories = sortIntoCategories(services);
