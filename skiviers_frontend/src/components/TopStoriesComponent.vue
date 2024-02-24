<template>
    <v-row no-gutters>
        <v-col v-for="post in posts.slice(0, 3)" :key="post.id" cols="12" md="4">
            <v-sheet class="ma-3" color="grey-lighten-4" height="320" rounded>
                <v-card
                    class="mx-auto"
                    color="grey-lighten-4"
                    hover
                    height="320"
                    :href="post.link"
                    target="_blank"
                    :title="post.source"
                    :subtitle="post.published"
                >
                    <template v-slot:prepend>
                        <v-avatar rounded="0" size="30">
                            <v-img :src="post.source_logo"></v-img>
                        </v-avatar>
                    </template>

                    <v-img
                        :src="post.image_link"
                        cover
                        height="200"
                        class="align-end"
                        gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8)"
                    >
                        <v-card-title class="justify-end">
                            <span
                                class="d-flex text-wrap text-3xl mb-2 mr-2 text-white"
                                style="font-family: 'Playfair Display', serif"
                                >{{ post.title }}</span
                            >
                        </v-card-title>
                    </v-img>

                    <v-card-subtitle>
                        <span
                            class="d-flex text-wrap text-xl"
                            style="font-family: 'Lato', sans-serif"
                            >{{ post.subtitle }}</span
                        >
                    </v-card-subtitle>
                </v-card>
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
