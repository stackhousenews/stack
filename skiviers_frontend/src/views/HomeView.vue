<template>
<LatestComponent :latest_posts="top_posts" />
</template>

<script>
import axios from 'axios';
import LatestComponent from '@/components/LatestComponent.vue';

export default {
  name: 'HomeView',

  components: {    LatestComponent,},

  data() {
    return {
        top_posts: [],
    };
  },

  mounted() {
    this.getFeed();
  },

  methods: {
    getFeed() {
      axios
        .get('/api/posts/news/')
        .then((response) => {

          console.log(response.data)

            this.top_posts = response.data;

        })
        .catch((error) => {
          console.log('error', error);
        });
    },
  },
};
</script>
