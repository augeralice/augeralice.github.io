
const PROJECT_TAGS = {
    artisanat: "Artisanat",
    graphisme: "Graphisme"
};

const PROJECTS_DATA = [


    {
        id: "volatiles",
        title: "L'empreinte d'un geste",
        displayTitle: "L'empreinte <br>d'un geste",
        tags: ["artisanat"], // filtres de l'accueil (clés de PROJECT_TAGS)
        home: {
            order: 1,
            layout: "portrait",
            image: "image/home/vol.webp",
            alt: "Animation de gravure personnalisée sur verre — cave à vin Volatiles",
            title: "Volatiles",
            label: "Animation · Création",
            date: "2025-2026"
        },
        client: "Volatiles", // ⚠️ provisoire : client et prestations à vérifier
        prestations: [
            "Direction artistique et recherche de personnalisation",
            "Communication (affiche, Instagram, reel)",
            "Gravure sur verre",
            "Animation événementielle",
            "Personnalisation live"
        ],
        displayCategory: "Événement & gravure",
        year: "2025-2026",
        type: "ARTISANAT & ÉVÉNEMENT",
        discipline: "DESIGN & ARTISANAT",
        description: `“Créer une expérience de gravure artisanale en direct dans un univers de dégustation.”\n\nÀ travers une série d’animations de gravure personnalisée réalisées à la cave à vin Volatiles, j’ai exploré la rencontre entre l’univers du vin et celui du geste artisanal.\n\nDe la phase d’expérimentation à la création de motifs sur mesure, jusqu’à la conception de la communication de l’événement, j’ai développé l’ensemble du dispositif. Chaque support — verre, bouteille, carafe ou sous-verre — a nécessité des tests spécifiques afin d’adapter la technique de gravure à ses contraintes d’usage et de matière.\n\nCe projet a été l’occasion d’interroger ma pratique et la place du geste artisanal dans un contexte où la personnalisation reste encore rare. Il s’est construit comme une expérience de rencontre et de découverte, autant pour moi que pour les personnes présentes lors de l’événement.`,
        imageHero: "image/projets/volatiles/grav.webp",
        heroAlt: "",
        gallery: [
            { src: "image/projets/volatiles/client-illu(1).webp", layout: "portrait col-span-3", alt: "" },
            { src: "image/projets/volatiles/tavel.webp", layout: "tall col-span-3", alt: "" },
            { src: "image/projets/volatiles/reel-2.mp4", layout: "portrait col-span-3", alt: "" },
            { src: "image/projets/volatiles/volatiles0.webp", layout: "square col-span-3", alt: "" }, 
            { src: "image/projets/volatiles/client-illu(2).webp", layout: "square col-span-3", alt: "" },
            { src: "image/projets/volatiles/raisin.webp", layout: "portrait col-span-3", alt: "" }

        ]
    },

    {
        id: "lvmh",
        title: "Partout à Paris",
        tags: ["artisanat"], // filtres de l'accueil (clés de PROJECT_TAGS)
        home: {
            order: 5,
            layout: "square", // volontairement vide = rendu actuel de la carte (mettre "square" pour un carré)
            image: "image/home/guer.webp",
            alt: "Prestations de personnalisation artisanal en direct - Partout à Paris",
            title: "Guerlain - Animations live",
            label: "Animation",
            date: "depuis 2019"
        },
        client: "Guerlain", // ⚠️ provisoire : client et prestations à vérifier
        prestations: [
            "Animation live en boutique",
            "Événements spécifiques"
        ],
        displayCategory: "ANIMATION GRAVURE",
        year: "depuis 2019",
        type: "Animation gravure",
        discipline: "Gravure artisanale",
        description: "Prestations de gravure événementielle en direct au cœur de Paris...",
        imageHero: "image/projets/animation/anim-calli(1).webp",
        heroAlt: "",
        gallery: [
            { src: "image/projets/animation/GUERLAIN-02.jpg", layout: "portrait col-span-3", alt: "" },
            { src: "image/projets/animation/GLH-2.webp", layout: "square col-span-3", alt: "" },
            { src: "image/projets/animation/GLH-9 (2).webp", layout: "portrait col-span-3", alt: "" }        ]
    },

    {
        id: "lucie-allard",
        title: "Lucie Allard Design",
        tags: ["graphisme"], // filtres de l'accueil (clés de PROJECT_TAGS)
        home: {
            order: 2,
            layout: "square",
            image: "image/home/lucie.webp",
            alt: "Lucie Allard Design",
            title: "Lucie Allard",
            label: "Création",
            date: "2024"
        },
        client: "Lucie Allard Design", // ⚠️ provisoire : client et prestations à vérifier
        prestations: [
            "Identité visuelle éco-conçue",
            "Logo et typographies",
            "Gamme colorimétrique"
        ],
        displayCategory: "IDENTITÉ VISUELLE",
        year: "2024",
        type: "Graphisme",
        discipline: "Identité visuelle",
        description: `Création de l’identité visuelle de la designer et artisane éco-responsable Lucie Allard.\n\nCe projet explore les possibilités et les limites d’une identité graphique éco-conçue. Comment tendre vers une identité visuelle plus responsable sans compromettre sa lisibilité et son impact ? Peut-on réellement concevoir une identité visuelle 100 % responsable ?\n\nLe logo a été développé à partir de typographies conçues dans une logique de réduction des ressources, notamment en limitant la consommation d’encre lors de l’impression et en optimisant la lisibilité. La gamme colorimétrique suit également cette approche.\n\nSi ces choix sont pertinents dans un contexte imprimé, ils révèlent rapidement leurs limites dans un environnement numérique, où les teintes trop claires nuisent à la lisibilité et à l’impact visuel.\n\nAu-delà de la création d’une identité, ce projet a permis d’expérimenter des méthodes de conception plus responsables et de questionner les compromis entre intention écologique et efficacité graphique.`,
        imageHero: "image/projets/lucie/lucie-3.webp",
        heroAlt: "",
        gallery: [
            { src: "image/projets/lucie/gif.gif", layout: "portrait col-span-2", alt: "" },
            { src: "image/projets/lucie/lucie-3.webp", layout: "landscape col-span-3", alt: "" },
            { src: "image/projets/lucie/lucie-1.jpg", layout: "portrait ", alt: "" }

        ]
    },

    {
        id: "signature",
        title: "Gravure Signature",
        tags: ["artisanat"], // filtres de l'accueil (clés de PROJECT_TAGS)
        home: {
            order: 3,
            layout: "",
            image: "image/home/thuizat.webp",
            alt: "Gravure d'exception sur carafe en cristal",
            title: "Gravure Signature",
            label: "Commande",
            date: "2025"
        },
        client: "Riedel", // ⚠️ provisoire : client et prestations à vérifier
        prestations: [
            "Gravure sur mesure sur cristal",
            "Reproduction de signature",
            "Création d'un pochoir sur mesure"
        ],
        displayCategory: "DESIGN & GRAVURE",
        year: "2025",
        type: "Artisanat",
        discipline: "Design & Artisanat",
        description: `Personnalisation réalisée par l'intermédiaire et sur les produits de la maison RIEDEL.\n\nÀ la suite d'un événement de gravure personnalisée dans la cave à vin Volatiles, j'ai réalisé des gravures sur mesure pour des clients de Riedel.\n\nCe fut l'opportunité de pratiquer cette technique et mon savoir-faire sur de nouveaux supports avec des caractéristiques différentes.\n\nPenser la gravure autrement en fonction de ces caractéristiques.`,
        imageHero: "image/projets/thuizat/client-logo(1).webp",
        heroAlt: "",
        gallery: [
            { src: "image/projets/thuizat/client-logo(2).webp", layout: "square", alt: "" }
        ]
    },



    {
        id: "particulier",
        title: "Conception particulière",
        tags: ["artisanat"], // filtres de l'accueil (clés de PROJECT_TAGS)
        home: {
            order: 4,
            layout: "portrait",
            image: "image/home/client-illu(3).webp",
            alt: "Design & Artisanat",
            title: "Conception particulière",
            label: "Commande",
            date: "depuis 2024"
        },
        client: "Particuliers", // ⚠️ provisoire : client et prestations à vérifier
        prestations: [
            "Recherche graphique",
            "Création sur mesure",
            "Gravure personnalisée"
        ],
        displayCategory: "RECHERCHE & CREATION",
        year: "depuis 2024",
        type: "Artisanat",
        discipline: "Design artisanal",
        description: "Recherche graphique, création personnelle et expérimentations autour du geste...",
        imageHero: "image/home/client-illu(3).webp",
        heroAlt: "",
        gallery: [
            { src: "image/projets/perso/client-illu(4).webp", layout: "portrait", alt: "" }
        ]
    },

    {
        id: "hibou",
        title: "Posters Illustrés",
        tags: ["graphisme"], // filtres de l'accueil (clés de PROJECT_TAGS)
        home: {
            order: 7,
            layout: "portrait",
            image: "image/home/lucas.webp",
            alt: "Conception de posters illustrés sur l'univers du vin",
            title: "Posters Illustrés",
            label: "Création",
            date: "2025"
        },
        client: "Projet personnel", // ⚠️ provisoire : client et prestations à vérifier
        prestations: [
            "Illustration",
            "Conception graphique",
            "Mise en page de posters"
        ],
        displayCategory: "Conception graphique",
        year: "2025",
        type: "Graphisme & Illustration",
        discipline: "Design graphique",
        description: "Recherche graphique, création personnelle et expérimentations autour du geste...",
        imageHero: "image/projets/archi/archi1.webp",
        heroAlt: "",
        gallery: [
            { src: "image/projets/archi/archi3.webp", layout: "portrait", alt: "" },
            { src: "image/projets/archi/archi3.webp", layout: "portrait", alt: "" },
            { src: "image/projets/archi/perso-archi(2).webp", layout: "landscape", alt: "" }

        ]
    },
    {
        id: "tasaki",
        title: "Oeufs de Pâques",
        tags: ["artisanat"], // filtres de l'accueil (clés de PROJECT_TAGS)
        home: {
            order: 6,
            layout: "portrait",
            image: "image/home/tasaki.webp",
            alt: "Projet personnalisé sur mesure pour la maison Tasaki sur des oeufs de paques",
            title: "Animation Maison Tasaki",
            label: "Animation",
            date: "2025"
        },
        client: "Maison Tasaki", // ⚠️ provisoire : client et prestations à vérifier
        prestations: [
            "Personnalisation sur mesure",
            "Gravure sur œufs de Pâques",
            "Animation"
        ],
        displayCategory: "Animation & personnalisation",
        year: "2025",
        type: "Graphisme & Illustration",
        discipline: "Design graphique",
        description: "Recherche graphique, création personnelle et expérimentations autour du geste...",
        imageHero: "image/projets/tasaki/tasaki.webp",
        heroAlt: "",
        gallery: [
            { src: "image/projets/archi/archi3.webp", layout: "portrait", alt: "" },
            { src: "image/projets/archi/archi3.webp", layout: "portrait", alt: "" },
            { src: "image/projets/archi/perso-archi(2).webp", layout: "landscape", alt: "" }

        ]
    }



];