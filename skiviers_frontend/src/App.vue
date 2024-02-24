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

                <div class="menu-center flex space-x-12" v-if="isAuth">
                    <RouterLink to="/feed" class="text-purple-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                    </RouterLink>

                    <RouterLink to="/chat">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                            ></path>
                        </svg>
                    </RouterLink>

                    <RouterLink to="/notifications">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                            ></path>
                        </svg>
                    </RouterLink>

                    <RouterLink to="/search">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            ></path>
                        </svg>
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
</template>

<script>
import axios from 'axios'
import ToastComponent from '@/components/ToastComponent.vue'
import { ref } from 'vue'

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
            isAuth
        }
    },

    components: {
        ToastComponent
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
