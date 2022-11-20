import { Icon } from "~~/interfaces/icon";
import { Project } from "~~/interfaces/project";

export const ICONS: Icon[] = [
    {
        alt: "About me Icon",
        image: "https://i.imgur.com/nppaTEn.png",
        linkDestination: "#hero"
    },
    {
        alt: "Projects Icon",
        image: "https://i.imgur.com/foMWib6.png",
        linkDestination: "#projects"
    },
    {
        alt: "CV Icon",
        image: "https://i.imgur.com/GSVG8kG.png",
        linkDestination: "#cv"
    },
    {
        alt: "Contact Icon",
        image: "https://i.imgur.com/Gl2LAQO.png",
        linkDestination: "#contact"
    }
]

export const PROJECTS: Project[] = [
    {
        name: "Fantasy Euroleague",
        description:
            "*under development*\nSecond edition of my fantasy basketball app. With experience from previous version and fresh new ideas I've decided that the basic app could become a real browser game.\n\nThis time app will have actual users that can login and manage their teams.",
        stackIcons: [
            {
                name: "Vue 3",
                alt: "Vue Icon",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
            },
            {
                name: "JavaScript",
                alt: "JS Icon",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            },
            {
                name: "Pinia",
                alt: "Pinia Icon",
                image: "https://pinia.vuejs.org/logo.svg"
            },
            {
                name: "Prime Vue",
                alt: "Prime Vue Icon",
                image:
                    "https://www.primefaces.org/wp-content/uploads/2019/12/primevue-logo.png"
            },
            {
                name: "Sass",
                alt: "Sass Icon",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"
            }
        ],
        mobilePreview: "https://i.imgur.com/cAkfqeJ.jpg",
        desktopPreview: "https://i.imgur.com/Od2dJMq.png",
        websiteLink: "https://fantasy-plk-dev.herokuapp.com",
        repoLink: "https://github.com/Mendzel/Fantasy-euroleague"
    },
    {
        name: "Fantasy PLK",
        description: `My first real app as a programmer.\n
        It's custom fantasy game app, based on Polish basketball league used by me and my friends. App is in polish and is hosted on Google Firebase with a basic realtime database.\n
        Most of it's functionality was to provide list of teams, squads and also scores of each player and match. App also has a hidden admin panel for me to update scores and squads rather than doing it manually in excel spreadsheet.`,
        stackIcons: [
            {
                name: "Angular 12",
                alt: "Angular Icon",
                image:
                    "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
            },
            {
                name: "TypeScript",
                alt: "TS Icon",
                image:
                    "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            },
            {
                name: "Angular Material",
                alt: "Material Icon",
                image:
                    "https://i.imgur.com/xicAOw7.png"
            }
        ],
        mobilePreview: "https://i.imgur.com/mOe7Zjd.jpg",
        desktopPreview: "https://i.imgur.com/EFJhUsw.png",
        websiteLink: "https://fantasy-plk.pl/playoffs",
        repoLink: "https://github.com/Mendzel/Fantasy-PLK"
    },
    {
        name: "This Portfolio",
        description:
            "Portfolio page with a showcase of my personal projects.\n App is built with Vue 3 + Nuxt3, but it's Client Side Rendered to simplify DOM access.",
        stackIcons: [
            {
                name: "Vue 3",
                alt: "Vue Icon",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
            },
            {
                name: "TypeScript",
                alt: "TS Icon",
                image:
                    "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            },
            {
                name: "Nuxt 3",
                alt: "Nuxt Icon",
                image:
                    "https://nuxtjs.org/design-kit/colored-logo.svg"
            },
            {
                name: "Sass",
                alt: "Sass Icon",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"
            }
        ],
        mobilePreview: "https://i.imgur.com/sjl3ns5.png",
        desktopPreview: "https://i.imgur.com/FAHYPl3.png",
        websiteLink: "https://mendzel-dev.netlify.app/",
        repoLink: "https://github.com/Mendzel/Portfolio"
    }
]