export interface Sponsor {
  name: string
  logo: string
  url: string
}

export const sponsors: Sponsor[] = [
  {
    name: "Gridin's Group",
    logo: '/images/gridins-logo.png',
    url: 'https://gridins.com/lt',
  },
  {
    name: 'Klaipėdos miesto savivaldybė',
    logo: '/images/klaipeda-logo.svg',
    url: 'https://www.klaipeda.lt/lt',
  },
  {
    name: 'Lietuvos dziudo federacija',
    logo: '/images/judo-lt-logo.png',
    url: 'https://www.judo.lt/',
  },
  {
    name: 'Klaipėdos Šamas',
    logo: '/images/samas-logo.png',
    url: 'https://rekvizitai.vz.lt/imone/klaipedos_samas/',
  },
  {
    name: 'Klaipėdos Viesulo Sporto Centras',
    logo: '/images/viesulo-logo.svg',
    url: 'https://viesulocentras.lt/',
  },
]

export interface Trainer {
  name: string
  role: string
  image: string
  description: string
}

export const trainers: Trainer[] = [
  {
    name: 'Andrius Mikėnas',
    role: 'Pagrindinis treneris',
    image: '/images/andrius-mikenas.jpg',
    description:
      'Ilgametę patirtį turintis dziudo treneris, daugelio Lietuvos ir tarptautinių varžybų nugalėtojų rengėjas.',
  },
  {
    name: 'Jonas Tilvikas',
    role: 'Treneris',
    image: '/images/jonas-tilvikas.jpg',
    description:
      'Specializuojasi jaunųjų sportininkų ugdyme, ypatingą dėmesį skiria technikos tobulinimui ir disciplinai.',
  },
  {
    name: 'Vidas Pocius',
    role: 'Treneris',
    image: '/images/placeholder.svg',
    description:
      'Patyręs dziudo specialistas, ugdantis tiek vaikus, tiek suaugusiuosius, skatinantis kovos dvasios formavimą.',
  },
]

export interface PressArticle {
  title: string
  url: string
}

export const pressArticles: PressArticle[] = [
  {
    title: 'Klaipėdos dziudo atstovams - tuzinas medalių',
    url: 'https://ve.lt/sportas/klaipedos-dziudo-atstovams-tuzinas-medaliu?page=2',
  },
  {
    title: 'Klaipėdos dziudo atstovai - tarp šalies lyderių',
    url: 'https://ve.lt/sportas/klaipedos-dziudo-atstovai-tarp-salies-lyderiu',
  },
  {
    title: 'Klaipėdos dziudo atstovams - visų spalvų medaliai',
    url: 'https://ve.lt/sportas/klaipedos-dziudo-atstovams-visu-spalvu-medaliai',
  },
  {
    title: 'Klaipėdoje varžėsi per 300 dziudo atstovų iš 7 šalių',
    url: 'https://ve.lt/sportas/klaipedoje-varzesi-per-300-dziudo-atstovu-is-7-saliu-video',
  },
  {
    title: 'Klaipėdos dziudo atstovai - Europos taurės prizininkai',
    url: 'https://ve.lt/sportas/klaipedos-dziudo-atstovai-europos-taures-prizininkai',
  },
]

export interface MoralCode {
  title: string
  subtitle: string
  description: string
}

export const moralCode: MoralCode[] = [
  {
    title: 'Mandagumas',
    subtitle: 'Rei – 礼',
    description:
      'Visada elgtis pagarbiai su kitais – tiek ant tatamio, tiek už jo ribų. „Būk mandagus ir parodyk pagarbą visiems."',
  },
  {
    title: 'Drąsa',
    subtitle: 'Yūki – 勇気',
    description:
      'Išdrįsk siekti teisingo net tada, kai tai sunku. „Drąsa yra daryti, kas teisinga, net kai bijai."',
  },
  {
    title: 'Drausmė',
    subtitle: 'Jisei – 自制',
    description:
      'Laikykis taisyklių, valdyk savo emocijas ir veik su pagarba. „Drausmė yra laisvės pagrindas."',
  },
  {
    title: 'Sąžiningumas',
    subtitle: 'Makoto – 誠',
    description: 'Visada būk atviras, tiesus ir patikimas. „Nėra dziudo be sąžiningumo."',
  },
  {
    title: 'Garbė',
    subtitle: 'Meiyo – 名誉',
    description:
      'Elkis taip, kad galėtum didžiuotis savimi ir savo veiksmų pasekmėmis. „Garbė yra tavo vertybių atspindys."',
  },
  {
    title: 'Kuklumas',
    subtitle: 'Kenkyo – 謙虚',
    description:
      'Niekada nesipuikuok savo laimėjimais, pripažink kitų vertę. „Tik kuklus žmogus gali tobulėti."',
  },
  {
    title: 'Pagarba',
    subtitle: 'Sonkei – 尊敬',
    description:
      'Be pagarbos nėra dziudo – nei mokytojui, nei partneriui, nei priešininkui. „Pagarba sujungia visus dziudo principus."',
  },
  {
    title: 'Draugystė',
    subtitle: 'Jita Kyoei – 自他共栄',
    description:
      'Dziudo siekia abipusės gerovės – sau ir kitiems. „Kartu augdami, tampame stipresni."',
  },
]

export const navLinks = [
  { label: 'Dziudo', href: '/judo' },
  {
    label: 'Apie mus',
    href: '/about',
    children: [
      { label: 'Vadovas', href: '/about/vadovas' },
      { label: 'Veikla', href: '/about/veikla' },
      { label: 'Treneriai', href: '/about/treneriai' },
      { label: 'Sportininkai', href: '/about/sportininkai' },
      { label: 'Parama', href: '/about/parama' },
      { label: 'Spaudoje', href: '/about/spaudoje' },
    ],
  },
  { label: 'Kontaktai', href: '/contact' },
  { label: 'Galerija', href: '/galery' },
]
