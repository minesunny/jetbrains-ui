export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://jetbrains-ui.maien.site/#website',
      url: 'https://jetbrains-ui.maien.site',
      name: 'JetBrains UI',
      description:
        'Fully animated, open-source component distribution built with React, TypeScript, Tailwind CSS, Motion and Shadcn CLI. Browse a list of components you can install, modify, and use in your projects.',
      inLanguage: 'en',
      publisher: {
        '@id': 'https://jetbrains-ui.maien.site/#organization',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://jetbrains-ui.maien.site/#organization',
      name: 'JetBrains UI',
      url: 'https://jetbrains-ui.maien.site',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jetbrains-ui.maien.site/icon-logo.png',
        width: 512,
        height: 512,
      },
    },
  ],
};
