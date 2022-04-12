const services = [
  {
    title: 'ocular',
    description: 'Scratch forum search, post reactions, and more.',
    theme: '~positive',
    icon: 'search',
    href: 'https://ocular.jeffalo.net',
    topic: 446450
  },
  {
    title: 'postpercent',
    description: 'Forum leaderboards, statistics, graphs, and more.',
    theme: '~critical',
    icon: 'leaderboard',
    href: 'https://postpercent.rirurin.com/',
    topic: 424580
  },
  {
    title: 'Aviate',
    description: 'Create dynamic, component driven statuses on the fly, then use them on Scratch and across the web with Aviate\'s easy to use API.',
    theme: '~cyan',
    icon: 'send',
    href: 'https://aviateapp.eu.org',
    topic: 594464
  },
  {
    title: 'Itinerary',
    description: 'Discover and participate in Scratch game jams. Embrace the community.',
    type: 'Community',
    theme: '~neutral',
    icon: 'event',
    href: 'https://itinerary.eu.org/',
    topic: 576248
  },
  {
    title: 'Magnifier',
    description: 'Scratch comment reactions and pinning.',
    type: 'Comments',
    theme: '~gray',
    icon: 'loupe',
    href: 'https://magnifier.potatophant.net/',
    topic: 513823
  },
  {
    title: 'Scratory',
    description: 'Forum signature history and cloud data logs.',
    type: 'Forums & Projects',
    theme: '~blue',
    icon: 'history',
    href: 'https://scratory.vercel.app/',
    topic: 518860
  },
  {
    title: 'tosh',
    description: 'Tired of dragging colorful blocks? Try out tosh.',
    type: 'Projects',
    theme: '~yellow',
    icon: 'code',
    href: 'https://tosh.blob.codes/',
    topic: 192915
  },
  {
    title: 'Leopard',
    description: 'Convert Scratch projects to readable JavaScript automatically!',
    type: 'Projects',
    theme: '~indigo',
    icon: 'javascript',
    href: 'https://leopardjs.com/',
    topic: 420162
  },
  {
    title: 'Scratch Profiler',
    description: 'Your new Scratch homepage',
    type: 'Community',
    theme: '~indigo',
    icon: 'person',
    href: 'https://scratchprofiler.vercel.app/',
    topic: 534440
  },
  {
    title: 'ScratchBackup',
    description: 'Get a small backup of a project that can be opened with the online Scratch editor.',
    type: 'Projects',
    theme: '~purple',
    icon: 'backup',
    href: 'https://scratchbackup.github.io/',
    topic: 537796
  },
  {
    title: 'Scratchinfo',
    description: 'A new website to get Scratch information',
    type: 'Community',
    theme: '~sky',
    icon: 'info',
    href: 'https://scratchinfo.vercel.app/',
    topic: 549251
  },
  {
    title: 'ScratchTester',
    description: 'Test projects in Scratch, Turbowarp, and Forkphorus.',
    type: 'Projects',
    theme: '~slate',
    icon: 'bug_report',
    href: 'https://scratchtester-v2.kccuber.repl.co/',
    topic: 554264
  },
  {
    title: 'ScratchStats',
    description: 'Your source for Scratch community statistics.',
    type: 'Community',
    theme: '~blue',
    icon: 'trending_up',
    href: 'https://scratchstats.com/'
  },
  {
    title: 'Turbowarp',
    description: 'A Scratch mod that compiles projects to JavaScript to make them run really fast.',
    type: 'Projects',
    theme: '~red',
    icon: 'speed',
    href: 'https://turbowarp.org/'
  },
  {
    title: 'MyScratchPage',
    description: 'Statistics such as the topic you post in least and most. Totals, MOTDs, colors, and more.',
    type: 'Community',
    theme: '~blue',
    icon: 'contact_page',
    href: 'https://jaydendev.github.io/MyScratchPage/',
    topic: 590555
  },
  {
    title: 'Project Explorer',
    description: 'Scratch project costume/sound viewing and more!',
    type: 'Projects',
    theme: '~violet',
    icon: 'workspaces',
    href: 'https://cst1229.github.io/project-explorer/',
    topic: 554191
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