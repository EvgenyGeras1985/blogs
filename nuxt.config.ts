// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    css:['@/assets/scss/main.scss'],
    runtimeConfig:{
        apiSecret : 'video',
        public : {
            apiBase : 'https://jsonplaceholder.typicode.com/posts',
            apiUsers: 'https://jsonplaceholder.typicode.com/users',
            apiPhotos: 'https://jsonplaceholder.typicode.com/photos',
            apiAlbums: 'https://jsonplaceholder.typicode.com/albums'
        }
    }
})
