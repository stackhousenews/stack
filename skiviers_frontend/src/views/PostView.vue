<template>
      <v-row dense v-if="post">

        <v-col cols="12" md="7">

          <router-link to="/"><v-btn variant="text" class="mb-1 ml-2">Home</v-btn></router-link>
<v-card color="transparent" flat>
      <v-card-title class="justify-end mb-2" style="line-height: 240%">
                        <span
                            class="d-flex text-wrap"
                            style="font-family: 'Playfair Display', serif; font-size: 200%"
                            >{{ post.headline }}</span
                        ></v-card-title>      
                        <v-card-text class="pl-2 mt-2">
                        <span
                            class="d-flex text-wrap"
                            style="font-family: 'Lato', sans-serif"
                            ><div v-html="post.body" /></span
                        >

                    </v-card-text>
</v-card>


        </v-col>
        <v-col cols="12" md="5">
          <span
                        style="font-family: 'Montserrat', sans-serif; font-weight: 500"
                        >LATEST</span
                    >
                    
          <div v-for="post in latest_posts">
                    <router-link v-bind="$attrs" :to="{ name: 'postview', params: { id: post.id }, force: true}" @click.native="clickHandler">
                        
                <v-card
                    class="mt-2 pb-2"
                    color="#DAD4C6"
                    hover
                >
                    <div class="ml-2 mt-2" style="font-size: 60%">
                        {{ post.published }}
                    </div>
                    <v-card-title class="justify-end" style="line-height: 90%">
                        <span
                            class="d-flex text-wrap mb-1 mr-2"
                            style="font-family: 'Playfair Display', serif; font-size: 90%"
                            >{{ post.headline }}</span
                        >

                    </v-card-title>

                </v-card></router-link></div>
        </v-col>


      
</v-row>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostView',
  components: {},

  data() {
    return {
      post:null,
      latest_posts:[],
      currentRoute: null,
    };
  },
  created() {
    this.currentRoute = this.$route.name;
  },
  mounted() {
    this.getPost();
    this.getLatest();
  },

  methods: {
    getPost() {
      axios
        .get(`/api/posts/view/${this.$route.params.id}/`)
        .then((response) => {
          console.log('data', response.data);

          this.post = response.data.post;
        })
        .catch((error) => {
          console.log('error', error);
        });
    },
    getLatest() {
      axios
        .get('/api/posts/news/')
        .then((response) => {

          console.log(response.data)

            this.latest_posts = response.data.slice(0,10);

        })
        .catch((error) => {
          console.log('error', error);
        });
    },
    clickHandler($event) {
      if (!($event.ctrlKey || $event.metaKey) && this.currentRoute === this.to.name) {
        const query = { ...this.$route.query, _: new Date().getTime() };
        const newRoute = { ...this.$route, query };
        this.$router.replace(newRoute);
      }
    },
  },
};
</script>
