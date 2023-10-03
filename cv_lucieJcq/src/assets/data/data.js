export default {
    parts: [
        {
            name: "Présentation",
            link: "about",
        },
        { name: "Compétences", link: "skills" },
        { name: "Formations", link: "formations" },
        { name: "Expériences", link: "experiences" },
        { name: "Contact", link: "contact" },
    ],
    about: {
        title: "Bonjour!",
        texts: [
            "Je m'appelle <strong>Lucie Jacquemin</strong> et je suis <strong>développeuse front-end</strong>.",
            "Après quelques années dans le milieu des archives, <strong>l'envie de changement</strong> m'a poussé vers le chemin de la <strong>reconversion</strong> vers un métier plus en raccord avec mes envies. Atirée par les possibilités offertes par le <strong>développement web</strong>, j'ai réalisé <strong>la formation développeur Web & Mobile de O'Clock</strong> avec une spécialisation en <strong>React</strong>",
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
                "Apprentissage des langages HTML, CSS, JavaScript, et PHP pour la création de sites web dynamiques.",
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
            date: "2014-2015",
            place: "Université de Lille",
        },
        {
            title: "DEUST métiers des bibliothèques et de la documentation",
            date: "2010-2012",
            place: "Université de Lille",
        },
    ],
};
