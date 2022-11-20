// https://v3.nuxtjs.org/api/configuration/nuxt.config
const analytics = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-CHM59Y53Y0');`

export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/colors.scss" as *;'
                }
            }
        }
    },
    modules: ['nuxt-icon'],
    ssr: false,
    app: {
        head: {
            script: [{ children: analytics }],
        },
    }
})