<template>
    <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4">
        <div class="main-center col-span-3 space-y-4">
            <div class="bg-white border border-gray-200 rounded-lg"></div>

            <div
                class="p-4 bg-white border border-gray-200 rounded-lg"
                v-for="post in posts"
                v-bind:key="post.id"
            ></div>
        </div>

        <div class="main-right col-span-1 space-y-4"></div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FeedView',

  components: {},

  data() {
    return {
      posts: [],
      body: '',
    };
  },

  mounted() {
    this.getFeed();
  },

  methods: {
    getFeed() {
      axios
        .get('/api/posts/')
        .then((response) => {
          console.log('data', response.data);

          this.posts = response.data;
        })
        .catch((error) => {
          console.log('error', error);
        });
    },

    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
  },
};
</script>
