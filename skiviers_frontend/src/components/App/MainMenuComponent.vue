<template>
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
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon';

export default {
  props: {
    substack: { type: String, required: true },
  },
  components: {
    SvgIcon,
  },
  data() {
    return {};
  },
};
</script>
