export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/ghibli.png',
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Projects',
      href: '/projects',
    },
  ] as NavItem[],
};
