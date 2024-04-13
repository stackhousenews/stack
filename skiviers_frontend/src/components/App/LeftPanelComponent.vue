<template>
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
    <v-card variant="outlined" color="grey" class="mx-2" max-width="344" v-if="isAuth">
        <v-card-text class="text-center"> </v-card-text>
    </v-card>
    <v-card variant="outlined" color="grey" class="mx-2" max-width="344" v-else>
        <v-card-text class="text-center">
            <a class="text-decoration-underline" :href="signupLink">Signup</a> or
            <a class="text-decoration-underline" :href="loginLink">Login</a> to use the AI Assistant </v-card-text
        ><v-card-text class="text-center mt-0 pt-0">
            <v-btn
                size="x-small"
                class="text-capitalize mr-2"
                href="https://stackhouse.news/accounts/twitter/login/"
                variant="outlined"
            >
                <font-awesome-icon icon="fa-brands fa-x-twitter" class="mr-2" />
                X/Twitter</v-btn
            >

            <v-btn
                size="x-small"
                class="text-capitalize ml-2"
                prepend-icon="mdi-google"
                href="https://stackhouse.news/accounts/google/login/"
                variant="outlined"
                >Google</v-btn
            >
        </v-card-text>
    </v-card>

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
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon';

export default {
  props: {
    lantern: { type: String, required: true },
    isAuth: { type: Boolean, required: true },
  },
  components: {
    SvgIcon,
  },
  data() {
    const loginLink = import.meta.env.VITE_API_URL && '/accounts/login/';
    const signupLink = import.meta.env.VITE_API_URL && '/accounts/signup/';
    const logoutLink = import.meta.env.VITE_API_URL && '/accounts/logout/';
    return {
      loginLink,
      signupLink,
      logoutLink,
    };
  },
};
</script>
