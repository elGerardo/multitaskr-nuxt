export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "multitaskr-nuxt",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    // Run scripts before to load the component
    plugins: [
      "~/plugins/mixins.js",
      "~/plugins/axios.js",
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        "bootstrap-vue/nuxt",
        "@nuxtjs/axios",
        "@nuxtjs/auth",
    ],
    auth: {
        // Options
        strategies: {
            local: {
                /*token: {
                    // property: "token",
                    // global: true,
                    // required: true,
                    // type: 'Bearer'
                },
                user: {
                    property: "user",
                    // autoFetch: true
                },*/
                endpoints: {
                    login: { url: "https://develop.gomultitaskr.com/sso/oauth/token", method: "post", propertyName: "access_token" },
                    logout: { url: "https://develop.gomultitaskr.com/sso/oauth/logout", method: "post", propertyName: "access_token" },
                    user: { url: "https://develop.gomultitaskr.com/sso/account", method: "get", propertyName: "data" },
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
