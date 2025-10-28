import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      icon: 'tabler:map-pin',
      text: 'UK',
    },
    {
      icon: 'tabler:brand-linkedin',
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anthonywithah',
      external: true,
    },
    {
      icon: 'tabler:brand-dribbble',
      text: 'Portfolio',
      href: 'https://dribbble.com/anthonywithah/collections',
      external: true,
    },
    {
      icon: 'tabler:brand-github',
      text: 'Github',
      href: 'https://github.com/anthonywithah',
      external: true,
    },
    {
      icon: 'tabler:bolt',
      text: 'Consulting',
      href: 'https://weirdbeardit.com',
      external: true,
    },
    {
      icon: 'tabler:mug',
      text: 'Buy me a coffee',
      href: 'https://ko-fi.com/anthonywithah',
      external: true,
    },
    {
      icon: 'tabler:message',
      text: 'Contact',
      href: '/#contact',
    },
  ],

  // HIDE NAV BUTTON: actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};
