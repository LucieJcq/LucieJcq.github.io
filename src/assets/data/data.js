export default {
    parts: [
        {
            name: "Présentation",
            ref: "about",
        },
        { name: "Compétences", ref: "skills" },
        { name: "Projets", ref: "projects" },
        { name: "Formations", ref: "formations" },
        { name: "Expériences", ref: "experiences" },
    ],
    about: {
        title: "Bonjour!",
        texts: [
            "Je m'appelle <strong>Lucie Jacquemin</strong> et je suis <strong>développeuse front-end</strong>.",
            "Après quelques années dans le milieu des archives, <strong>l'envie de changement</strong> m'a poussé vers le chemin de la <strong>reconversion</strong> vers un métier plus en raccord avec mes envies. Attirée par les possibilités offertes par le <strong>développement web</strong>, j'ai réalisé <strong>la formation développeur Web & Mobile de O'Clock</strong> avec une spécialisation en <strong>React</strong>",
            "Désormais je cherche à mettre en pratique mes connaissances et gagner en expérience dans le cadre d'une <strong>alternance</strong>.",
        ],
        informations: [
            {
                title: "Age",
                text: "32 ans",
            },
            {
                title: "Localisation",
                text: "Lille",
            },
            {
                title: "Hobbies",
                text: [
                    "jeux vidéos",
                    "lecture",
                    "cinéma",
                    "photographie",
                    "jardinage",
                    "escalade",
                ],
            },
            {
                title: "Langues",
                text: ["français", "anglais"],
            },
        ],
        socialNetworks: [
            {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/lucie-jacquemin-0976196a/",
                icon: "LinkedInIcon",
            },
            {
                name: "Github",
                link: "https://github.com/LucieJcq",
                icon: "GitHubIcon",
            },
        ],
    },
    skills: [
        {
            hardskills: [
                {
                    name: "Hardskills",
                    skills: [
                        {
                            name: "HTML",
                            icon: " faHtml5",
                        },
                        {
                            name: "CSS",
                            icon: " CssSharpIcon",
                        },
                        {
                            name: "Javascript",
                            icon: " fa-js-square",
                        },
                        {
                            name: "React",
                            icon: " fa-react",
                        },
                        {
                            name: "Git",
                            icon: " fa-git-alt",
                        },
                        {
                            name: "Wordpress",
                            icon: " fa-wordpress-simple",
                        },
                        {
                            name: "PHP",
                            icon: " fa-php",
                        },
                        {
                            name: "SQL",
                            icon: "fas fa-database",
                        },
                    ],
                },
            ],
            softskills: [
                {
                    name: "Softskills",
                    skills: [
                        {
                            name: "Curieuse",
                            icon: "fas fa-search",
                        },
                        {
                            name: "Autonome",
                            icon: "fas fa-user",
                        },
                        {
                            name: "Travail en équipe",
                            icon: "fas fa-users",
                        },
                        {
                            name: "Communication",
                            icon: "fas fa-comments",
                        },
                        {
                            name: "Adaptabilité",
                            icon: "fas fa-adjust",
                        },
                        {
                            name: "Analyse constructive",
                            icon: "fas fa-chart-line",
                        },
                    ],
                },
            ],
        },
    ],
    formations: [
        {
            title: "Développeur Web & Web Mobile",
            date: "2023 - 6mois",
            place: "O'Clock",
            resume: "Formation intensive de 5 mois en téléprésentiel avec une spécialisation en React",
            description: [
                "3 mois de socle avec l'apprentissage des langages HTML, CSS, JavaScript, et PHP pour la création de sites web dynamiques.",
                "1 mois de spécialisation en React",
                "Expérience en Programmation Orientée Objet, développement mobile, et gestion des bases de données.",
                "Maîtrise des outils tels que Git, Linux, et GitHub.",
                "Connaissance des concepts avancés tels que l'optimisation du référencement naturel et l'utilisation de design patterns.",
                "Expérience pratique avec la structuration d'applications, la sécurité, et la gestion des interfaces clients.",
                "Utilisation de micro-frameworks, d'API et de la technique AJAX pour la communication entre services.",
                "Utilisation de WordPress.",
            ],
        },
        {
            title: "Master Histoire Archives et Monde du travail",
            date: "2015 - 2017",
            place: "Université de Lille",
        },
        {
            title: "Licence  Ressources documentaires et bases de données (spécialisation archives)",
            date: "2014 - 2015",
            place: "Université de Lille",
        },
        {
            title: "DEUST métiers des bibliothèques et de la documentation",
            date: "2010 - 2012",
            place: "Université de Lille",
        },
    ],
    experiences: [
        {
            name: "Archiviste",
            place: "AGS Records Management",
            duration: "2019 - 2023",
            skills: ["Audit", "Communication avec les clients", "Reporting"],
        },
        {
            name: "Responsable des archives vacataire",
            place: "Direction Régionale de l'Environnement, de l'Aménagement et du Logement Hauts-de-France",
            duration: "2018 - 2019",
            skills: [
                "Programmation et gestion de prestation",
                "Gestion de projet",
                "Sensibilisation des agents",
            ],
        },
    ],
    projects: [
        {
            name: "Cosmokids",
            description:
                "Projet de fin de formation dans une équipe de 4 développeurs. Il s'agit d'une plateforme d'apprentissage pour les enfants sur la thématique de l'espace. L'application est réalisé en React et Laravel.",
            link: "https://cosmokids.eu",
            picture: "cosmokids",
        },
    ],
};
