<template>
    <v-app id="inspire">
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
        </v-system-bar>

        <v-app-bar color="grey-lighten-4" flat height="72">
            <v-avatar class="ms-2" color="surface-variant" size="32" variant="flat"
                ><v-img
                    src="https://stackhouse.s3.us-east-2.amazonaws.com/static/stackhouse_blue.png"
                    alt="Stackhouse"
                ></v-img
            ></v-avatar>
            <a
                href="#"
                class="text-4xl ml-2 mr-4"
                style="font-family: 'Oswald', serif; color: #003594"
                >STACKHOUSE</a
            >

            <RouterLink to="/feed"
                ><v-btn
                    class="me-2"
                    height="40"
                    variant="flat"
                    prepend-icon="mdi-home-outline"
                    color="grey-lighten-4"
                    >Home
                </v-btn></RouterLink
            >

            <RouterLink to="/feed"
                ><v-btn class="me-2" height="40" variant="flat" color="grey-lighten-4">
                    <svg-icon type="mdi" size="16" :path="substack" class="mr-2"></svg-icon>
                    Bookmarks
                </v-btn>
            </RouterLink>

            <v-spacer></v-spacer>
        </v-app-bar>

        <v-footer app color="grey" height="44"></v-footer>

        <v-navigation-drawer floating>
            <div class="d-flex px-2 my-2">
                <v-btn class="flex-grow-1" color="grey" height="40" variant="flat"
                    ><span class="" style="font-family: 'Montserrat', sans-serif; font-weight: 500"
                        >AI ASSISTANT</span
                    ></v-btn
                >

                <v-avatar class="ms-2" color="surface-variant" rounded variant="flat"
                    ><svg-icon type="mdi" :path="lantern"></svg-icon
                ></v-avatar>
            </div>

            <div class="d-flex px-2 my-2 align-center">
                <v-btn color="grey-lighten-4" variant="flat" height="40" class="flex-grow-1 me-2"
                    ><span class="" style="font-family: 'Montserrat', sans-serif; font-weight: 500"
                        >NEWSLETTERS</span
                    ></v-btn
                >

                <v-avatar color="surface-variant" size="18"></v-avatar>

                <v-avatar class="ms-1" color="surface-variant" size="18"></v-avatar>
            </div>

            <div class="px-2 my-2">
                <v-text-field
                    class="mb-4"
                    density="compact"
                    flat
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    variant="solo-filled"
                ></v-text-field>

                <v-sheet
                    class="mb-2"
                    color="surface-variant"
                    height="24"
                    rounded="pill"
                    width="50%"
                ></v-sheet>

                <v-sheet
                    class="mb-1"
                    color="grey-lighten-1"
                    height="12"
                    rounded="pill"
                    width="40%"
                ></v-sheet>

                <v-sheet
                    class="mb-1"
                    color="grey-lighten-1"
                    height="12"
                    rounded="pill"
                    width="20%"
                ></v-sheet>

                <v-sheet
                    class="mb-1"
                    color="grey-lighten-1"
                    height="12"
                    rounded="pill"
                    width="90%"
                ></v-sheet>

                <v-sheet color="grey-lighten-1" height="12" rounded="pill" width="70%"></v-sheet>

                <v-divider class="my-6"></v-divider>

                <v-sheet
                    class="mb-2"
                    color="surface-variant"
                    height="24"
                    rounded="pill"
                    width="30%"
                ></v-sheet>

                <v-sheet
                    class="mb-1"
                    color="grey-lighten-1"
                    height="12"
                    rounded="pill"
                    width="65%"
                ></v-sheet>

                <v-sheet
                    class="mb-1"
                    color="grey-lighten-1"
                    height="12"
                    rounded="pill"
                    width="70%"
                ></v-sheet>

                <v-sheet
                    class="mb-1"
                    color="grey-lighten-1"
                    height="12"
                    rounded="pill"
                    width="40%"
                ></v-sheet>

                <v-sheet color="grey-lighten-1" height="12" rounded="pill" width="100%"></v-sheet>

                <v-divider class="my-6"></v-divider>
            </div>
        </v-navigation-drawer>

        <v-main>
            <v-sheet class="mx-auto pa-2 pt-2" color="grey-lighten-4">
                <span
                    class="text-xl ml-2 mr-4"
                    style="font-family: 'Montserrat', sans-serif; font-weight: 500"
                    >TOP STORIES</span
                >

                <TopStoriesComponent />
            </v-sheet>

            <v-sheet class="mx-auto pa-2 pt-4" color="grey-lighten-2">
                <span
                    class="text-xl ml-2 mr-4"
                    style="font-family: 'Montserrat', sans-serif; font-weight: 500"
                    >FEATURED</span
                >

                <FeaturedComponent />

                <v-container fluid class="mt-2">
                    <span
                        class="text-xl ml-2 mr-4"
                        style="font-family: 'Montserrat', sans-serif; font-weight: 500"
                        >LATEST</span
                    >
                    <LatestComponent />
                </v-container>
            </v-sheet>
        </v-main>
    </v-app>
</template>

<script>
import axios from 'axios'
import ToastComponent from '@/components/ToastComponent.vue'
import TopStoriesComponent from '@/components/TopStoriesComponent.vue'
import FeaturedComponent from '@/components/FeaturedComponent.vue'
import LatestComponent from '@/components/LatestComponent.vue'
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
        TopStoriesComponent,
        FeaturedComponent,
        LatestComponent,
        SvgIcon
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
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
