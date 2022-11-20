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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis aliquam nunc, eu aliquam nunc facilisis luctus. Ut sed eros odio. Fusce libero nulla, consectetur et malesuada a, molestie tincidunt lectus. Sed massa eros, tincidunt id metus in, accumsan",
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
        desktopPreview: "https://i.imgur.com/Od2dJMq.png"
    },
    {
        name: "Fantasy PLK",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis aliquam nunc, eu aliquam nunc facilisis luctus. Ut sed eros odio. Fusce libero nulla, consectetur et malesuada a, molestie tincidunt lectus. Sed massa eros, tincidunt id metus in, accumsan",
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
        mobilePreview: "https://i.imgur.com/cAkfqeJ.jpg",
        desktopPreview: "https://i.imgur.com/Od2dJMq.png"
    },
    {
        name: "This Portfolio",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis aliquam nunc, eu aliquam nunc facilisis luctus. Ut sed eros odio. Fusce libero nulla, consectetur et malesuada a, molestie tincidunt lectus. Sed massa eros, tincidunt id metus in, accumsan",
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
        mobilePreview: "https://i.imgur.com/cAkfqeJ.jpg",
        desktopPreview: "https://i.imgur.com/Od2dJMq.png"
    }
]