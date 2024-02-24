<template>
    <v-layout>
        <v-system-bar color="grey-darken-4 py-2">
            <template v-if="isAuth">
                <v-btn
                    size="x-small"
                    class="text-capitalize mr-2"
                    prepend-icon="mdi-logout"
                    :href="logoutLink"
                    variant="outlined"
                    >Signout</v-btn
                >
            </template>

            <template v-else>
                <div class="text-caption">
                    <a class="text-decoration-underline" :href="signupLink">Signup</a> or
                    <a class="text-decoration-underline" :href="loginLink">Login</a> with:
                </div>
                <v-btn
                    size="x-small"
                    class="text-capitalize mr-2 ml-2"
                    href="https://stackhouse.news/accounts/twitter/login/"
                    variant="outlined"
                >
                    <font-awesome-icon icon="fa-brands fa-x-twitter" class="mr-2" />
                    X/Twitter</v-btn
                >
                <v-btn
                    size="x-small"
                    class="text-capitalize mr-2"
                    prepend-icon="mdi-google"
                    href="https://stackhouse.news/accounts/google/login/"
                    variant="outlined"
                    >Google</v-btn
                >
            </template>

            <v-icon icon="mdi-wifi-strength-4" class="ms-2"></v-icon>
            <v-icon icon="mdi-signal-cellular-outline" class="ms-2"></v-icon>
            <v-icon icon="mdi-battery" class="ms-2"></v-icon>
            <span class="ms-2">7:43PM</span>
        </v-system-bar>
    </v-layout>
    <nav class="pt-8 pb-4 px-8 border-b" style="background-color: #e8e4db">
        <div class="max-w-[88rem] mx-auto">
            <div class="flex items-center justify-between">
                <div class="menu-left">
                    <a
                        href="#"
                        class="text-4xl"
                        style="font-family: 'Oswald', serif; color: #003594"
                        >STACKHOUSE</a
                    >
                </div>

                <div class="menu-center flex space-x-12">
                    <RouterLink to="/chat">
                        <svg-icon type="mdi" :path="home"></svg-icon>
                    </RouterLink>
                    <RouterLink to="/">
                        <svg-icon type="mdi" :path="lantern"></svg-icon>
                    </RouterLink>

                    <RouterLink to="/feed">
                        <svg-icon type="mdi" :path="substack"></svg-icon>
                    </RouterLink>

                    <RouterLink to="/notifications">
                        <svg-icon type="mdi" :path="bell"></svg-icon>
                    </RouterLink>

                    <RouterLink to="/search">
                        <svg-icon type="mdi" :path="search"></svg-icon>
                    </RouterLink>
                </div>

                <div class="menu-right"></div>
            </div>
        </div>
    </nav>

    <main class="px-8 py-6" style="background-color: #e8e4db">
        <RouterView />
    </main>

    <ToastComponent />
    <template>
        <v-footer class="bg-grey-lighten-1">
            <v-row justify="center" no-gutters>
                <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    variant="text"
                    class="mx-2"
                    rounded="xl"
                >
                    {{ link }}
                </v-btn>
                <v-col class="text-center mt-4" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
            </v-row>
        </v-footer></template
    >
</template>

<script>
import axios from 'axios'
import ToastComponent from '@/components/ToastComponent.vue'
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import {
    mdiPostLamp,
    mdiHomeOutline,
    mdiBookmarkMultipleOutline,
    mdiMagnify,
    mdiBellOutline
} from '@mdi/js'

export default {
    setup() {
        const isAuth = ref([])

        ;(async () => {
            let res = null
            await axios
                .get('/api/is_authenticated/')
                .then((response) => {
                    res = response.data.message
                })
                .catch((error) => {
                    console.log(error)
                    res = null
                })
            isAuth.value = res
        })()

        document.title = 'Stackhouse | Scaling Truth, Scoping Tomorrow'
        const loginLink = import.meta.env.VITE_API_URL && '/accounts/login/'
        const signupLink = import.meta.env.VITE_API_URL && '/accounts/signup/'
        const logoutLink = import.meta.env.VITE_API_URL && '/accounts/logout/'

        return {
            loginLink,
            signupLink,
            logoutLink,
            isAuth,
            lantern: mdiPostLamp,
            home: mdiHomeOutline,
            substack: mdiBookmarkMultipleOutline,
            search: mdiMagnify,
            bell: mdiBellOutline
        }
    },

    components: {
        ToastComponent,
        SvgIcon
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css');

.v-card-item__content .v-card-title {
    font-size: 14px !important;
    line-height: 1rem !important;
    padding-left: 0 !important;
}
.v-card-item__content .v-card-subtitle {
    font-size: 12px !important;
    line-height: 1rem !important;
    padding-left: 0 !important;
}

.v-card-item {
    padding: 4 0 0 8 !important;
    margin: 0 0 0 0 !important;
}

.v-card-title {
    padding: 0 8 0 8 !important;
}
.v-card-subtitle {
    padding: 0 8 4 8 !important;
}
.v-card-item__prepend {
    padding-right: 6 !important;
}
</style>
