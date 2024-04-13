<template>
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
</template>
<script>
export default {
  props: {
    isAuth: { type: Boolean, required: true },
  },
  components: {},
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
