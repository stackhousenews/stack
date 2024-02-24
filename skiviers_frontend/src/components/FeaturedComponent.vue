<template>
    <v-row no-gutters>
        <v-col v-for="post in posts.slice(3, 7)" :key="post.id" cols="3" md="12">
            <v-sheet color="grey-lighten-2" height="170" rounded>
                <v-col cols="12">
                    <v-card
                        color="grey-lighten-2"
                        hover
                        height="170"
                        :href="post.link"
                        target="_blank"
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <v-avatar size="170" class="" rounded="0">
                                <v-img :src="post.image_link"></v-img>
                            </v-avatar>
                            <div>
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
                                    <span
                                        class="d-flex text-wrap"
                                        style="font-family: 'Lato', sans-serif"
                                        >{{ post.subtitle }}</span
                                    >
                                </v-card-subtitle>
                            </div>
                        </div>
                    </v-card></v-col
                >
            </v-sheet>
        </v-col></v-row
    >
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
