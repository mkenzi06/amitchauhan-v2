import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Destivoyage",
    href: "/projects",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "JQuery", "Ajax"],
    image: {
      LIGHT: "/images/projects/desti.webp",
      DARK: "/images/projects/desti.webp",
    },
  },
  {
    index: 1,
    title: "Tous sport individuels",
    href: "/projects",
    tags: [
      "Java",
      "Mysql",
      "Hibernate",
      "Java Swing",
    ],
    image: {
      LIGHT: "/images/projects/Ca_pdi.webp",
      DARK: "/images/projects/Ca_pdi.webp",
    },
  },
  {
    index: 2,
    title: "Football Stats",
    href: "/projects",
    tags: ["Java", "JEE", "JAX-RS", "JAX-WS", "Mysql", "Java FX"],
    image: {
      LIGHT: "/images/projects/ws.webp",
      DARK: "/images/projects/ws.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Destivoyage",
    favicon: "/images/projects/logos/favicon.ico",
    imageUrl: [
      "/images/projects/desti.webp",
      "/images/projects/desti.webp",
    ],
    description:
      "plateforme de voyage novatrice, où l’exploration est sans engagement et la découverte sans contraintes. Notre site propose trois catégories distinctes – Vol, Hôtel et Recommandations de Destinations – ainsi qu’une Page Profil personnalisée pour rendre votre expérience de voyage mémorable.",
    sourceCodeHref: "https://github.com/mkenzi06/DestiVoyage",
    liveWebsiteHref: "https://destivoyage.alwaysdata.net/",
  },
  {
    name: "Tous sport individuels",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/Ca_pdi.webp",
      "/images/projects/Ca_pdi.webp",
      "/images/projects/Ca_pdi.webp",
    ],
    description:
      "Cette application permettra aux utilisateurs de s'inscrire, de choisir jusqu'à 3-4 sports parmi une liste prédéfinie, et de saisir, sauvegarder et modifier leurs données sportives. Les données ainsi enregistrées seront utilisées par l'application pour comparer les performances de l’utilisateur avec ses amis, à l’aide de graphiques spécifiques à chaque sport",
    sourceCodeHref: "https://github.com/mkenzi06/PDI-SPORT",
    
  },
  {
    name: "Football Stats",
    favicon: "/images/projects/logos/foot.ico",
    imageUrl: [
      "/images/projects/ws.webp",
    ],
    description:
      "Ce projet vise à fournir plusieurs fonctionnalités permettant aux utilisateurs de créer et de gérer des équipes de football, ainsi que d'ajouter, de supprimer et de mettre à jour des joueurs au sein de ces équipes. En utilisant les services fournis, les utilisateurs peuvent interagir avec l'API externe (footballapi) pour récupérer les statistiques des joueurs, les équipes de différentes ligues et aussi les predictions de matchs de premier league (championnat anglais).",
    sourceCodeHref: "https://github.com/mkenzi06/projet_ws",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/Capture_portfolio.webp",
     
    ],
    description:
      "Mon portfolio en utilisant next , tailwind et typescript",
    sourceCodeHref: "",
  },
  {
    name: "Communication en morse entre 2 microcontrolleurs",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/code_morse.webp",
    ],
    description:
      "Communication UART entre 2 microcontroleurs en utilsant un buzzer et une led pour l'envoie et la reception des messages en morse avec microphone et Recepteur infrarouge",
    sourceCodeHref: "https://github.com/mkenzi06/Projet_IntroMicro",
  },
];
