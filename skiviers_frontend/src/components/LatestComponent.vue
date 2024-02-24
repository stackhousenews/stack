<template>
    <v-row class="mt-2">
        <v-col v-for="post in posts.slice(7, 31)" :key="post.id" cols="2" md="6">
            <v-sheet color="#e8e4db" height="200" rounded>
                <v-card
                    class="mx-auto"
                    color="#e8e4db"
                    hover
                    :href="post.link"
                    target="_blank"
                    height="200"
                >
                    <div class="text-caption ml-2 mt-2">
                        {{ post.source }} - {{ post.published }}
                    </div>
                    <v-card-title class="justify-end">
                        <span
                            class="d-flex text-wrap text-xl mb-2 mr-2"
                            style="font-family: 'Playfair Display', serif"
                            >{{ post.title }}</span
                        >
                    </v-card-title>

                    <v-card-subtitle>
                        <span class="d-flex text-wrap" style="font-family: 'Lato', sans-serif">{{
                            post.subtitle
                        }}</span>
                    </v-card-subtitle>
                </v-card>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
import { RouterLink } from 'vue-router'
import axios from 'axios'

export default {
    props: {
        comment: Object
    },
    components: { RouterLink },
    data() {
        return {
            posts: []
        }
    },

    mounted() {
        this.getFeed()
    },

    methods: {
        getFeed() {
            axios
                .get('/api/content/stories/')
                .then((response) => {
                    this.posts = response.data.results
                })
                .catch((error) => {
                    console.log('error', error)
                })
        }
    }
}
</script>
