const services = [
  {
    title: 'ocular',
    description: 'Scratch forum search, post reactions, and more.',
    theme: '~positive',
    icon: 'search',
    href: 'https://ocular.jeffalo.net',
    topic: 446450,
    username: 'Jeffalo'
  },
  {
    title: 'postpercent',
    description: 'Forum leaderboards, statistics, graphs, and more.',
    theme: '~critical',
    icon: 'leaderboard',
    href: 'https://postpercent.rirurin.com/',
    topic: 424580,
    username: 'CatsUnited'
  },
  {
    title: 'Aviate',
    description: 'Create dynamic, component driven statuses on the fly, then use them on Scratch and across the web with Aviate\'s easy to use API.',
    theme: '~cyan',
    icon: 'send',
    href: 'https://aviateapp.eu.org',
    topic: 594464,
    username: 'NFlex23'
  },
  {
    title: 'Itinerary',
    description: 'Discover and participate in Scratch game jams. Embrace the community.',
    type: 'Community',
    theme: '~neutral',
    icon: 'event',
    href: 'https://itinerary.eu.org/',
    topic: 576248,
    username: 'Looky1173'
  },
  {
    title: 'Magnifier',
    description: 'Scratch comment reactions and pinning.',
    type: 'Comments',
    theme: '~gray',
    icon: 'loupe',
    href: 'https://magnifier.potatophant.net/',
    topic: 513823,
    username: 'potatophant'
  },
  {
    title: 'Scratory',
    description: 'Forum signature history and cloud data logs.',
    type: 'Forums & Projects',
    theme: '~blue',
    icon: 'history',
    href: 'https://scratory.vercel.app/',
    topic: 518860,
    username: '9gr'
  },
  {
    title: 'tosh',
    description: 'Tired of dragging colorful blocks? Try out tosh.',
    type: 'Projects',
    theme: '~yellow',
    icon: 'code',
    href: 'https://tosh.blob.codes/',
    topic: 192915,
    username: 'blob8108'
  },
  {
    title: 'Leopard',
    description: 'Convert Scratch projects to readable JavaScript automatically!',
    type: 'Projects',
    theme: '~indigo',
    icon: 'javascript',
    href: 'https://leopardjs.com/',
    topic: 420162,
    username: 'PullJosh'
  },
  {
    title: 'Scratch Profiler',
    description: 'Your new Scratch homepage',
    type: 'Community',
    theme: '~indigo',
    icon: 'person',
    href: 'https://scratchprofiler.vercel.app/',
    topic: 534440,
    username: 'NFlex23'
  },
  {
    title: 'ScratchBackup',
    description: 'Get a small backup of a project that can be opened with the online Scratch editor.',
    type: 'Projects',
    theme: '~purple',
    icon: 'backup',
    href: 'https://scratchbackup.github.io/',
    topic: 537796,
    username: 'ScolderCreations'
  },
  {
    title: 'Scratchinfo',
    description: 'A new website to get Scratch information',
    type: 'Community',
    theme: '~sky',
    icon: 'info',
    href: 'https://scratchinfo.vercel.app/',
    topic: 549251,
    username: 'god286'
  },
  {
    title: 'ScratchTester',
    description: 'Test projects in Scratch, Turbowarp, and Forkphorus.',
    type: 'Projects',
    theme: '~slate',
    icon: 'bug_report',
    href: 'https://scratchtester-v2.kccuber.repl.co/',
    topic: 554264,
    username: 'kccuber'
  },
  {
    title: 'ScratchStats',
    description: 'Your source for Scratch community statistics.',
    type: 'Community',
    theme: '~blue',
    icon: 'trending_up',
    href: 'https://scratchstats.com/',
    username: 'World_Languages'
  },
  {
    title: 'Turbowarp',
    description: 'A Scratch mod that compiles projects to JavaScript to make them run really fast.',
    type: 'Projects',
    theme: '~red',
    icon: 'speed',
    href: 'https://turbowarp.org/',
    username: 'GarboMuffin'
  },
  {
    title: 'MyScratchPage',
    description: 'Statistics such as the topic you post in least and most. Totals, MOTDs, colors, and more.',
    type: 'Community',
    theme: '~blue',
    icon: 'contact_page',
    href: 'https://jdev.eu.org/MyScratchPage',
    topic: 590555,
    username: 'MagicCrayon9342'
  },
  {
    title: 'Project Explorer',
    description: 'Scratch project costume/sound viewing and more!',
    type: 'Projects',
    theme: '~violet',
    icon: 'workspaces',
    href: 'https://cst1229.github.io/project-explorer/',
    topic: 554191,
    username: 'CST1229'
  },
  {
    title: 'Scratch User Info',
    description: 'Command line tool for getting info about a Scratch user',
    type: 'Community',
    theme: '~blue',
    icon: 'terminal',
    href: 'https://github.com/Chiroyce1/scratch-user-data/',
    topic: 542409,
    username: 'Chiroyce'
  }
];


function sortAlphabetically(services) {
  return services.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
}


function sortIntoCategories(services) {
  services = sortAlphabetically(services);

  const categories = {};

  services.forEach(service => {
    const firstLetter = service.title.charAt(0).toLowerCase();
    if (!categories[firstLetter]) categories[firstLetter] = [];
    categories[firstLetter].push(service);
  });

  return categories;
}


export const categories = sortIntoCategories(services);
