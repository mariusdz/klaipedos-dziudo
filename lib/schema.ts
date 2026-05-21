export const sportsOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsOrganization',
  name: 'Klaipėdos Dziudo Klubas',
  alternateName: 'Dziudo Klaipėda',
  url: 'https://klaipedosdziudo.lt',
  logo: 'https://klaipedosdziudo.lt/images/Klaipedos-Dziudo.svg',
  description:
    'Profesionalus dziudo klubas Klaipėdoje. Treniruotės vaikams, jaunimui ir suaugusiems.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Klaipėda',
    addressCountry: 'LT',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+370-608-02482',
    email: 'klaipedosdziudo@gmail.com',
    contactType: 'General Inquiry',
    availableLanguage: ['Lithuanian'],
  },
  sameAs: [
    'https://www.judo.lt/',
  ],
  sport: 'Judo',
  memberOf: {
    '@type': 'SportsOrganization',
    name: 'Lietuvos Dziudo Federacija',
    url: 'https://www.judo.lt/',
  },
}
