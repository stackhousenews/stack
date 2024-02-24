<template>
    <div class="max-w-[88rem] mx-auto grid grid-cols-4 gap-4">
        <div class="main-right col-span-1 space-y-4">
            <v-card
                hover
                v-for="(post, n) in posts.slice(6, 16)"
                v-bind:key="post.id"
                :href="post.link"
                target="_blank"
                :title="post.source"
                :subtitle="post.published"
                class="pb-2 mx-auto"
                style="background-color: #e8e4db"
            >
                <template v-slot:prepend>
                    <v-avatar rounded="0" size="30">
                        <v-img :src="post.source_logo"></v-img>
                    </v-avatar>
                </template>

                <template v-slot:append>
                    <v-avatar size="30" class="mr-2">
                        <v-icon icon="mdi-bookmark"></v-icon>
                    </v-avatar>
                </template>

                <v-card-title class="pt-0">
                    <span
                        style="font-family: 'Playfair Display', serif"
                        class="d-flex text-wrap font-weight-bold text-h5"
                        >{{ post.title }}</span
                    >
                </v-card-title>
                <v-card-subtitle>
                    <span
                        class="d-flex text-wrap text-body-1"
                        style="font-family: 'Lato', sans-serif"
                        >{{ post.subtitle }}</span
                    >
                </v-card-subtitle>
                <v-img class="mx-2" v-if="n == 0" :src="post.image_link"></v-img>
            </v-card>
        </div>

        <div class="main-center col-span-2 space-y-4">
            <v-card
                class="mx-auto"
                hover
                v-for="post in posts.slice(0, 6)"
                v-bind:key="post.id"
                :href="post.link"
                target="_blank"
                :title="post.source"
                :subtitle="post.published"
                style="background-color: #e8e4db"
            >
                <template v-slot:prepend>
                    <v-avatar rounded="0" size="30">
                        <v-img :src="post.source_logo"></v-img>
                    </v-avatar>
                </template>

                <v-card-title>
                    <span
                        class="d-flex text-wrap text-4xl mb-2"
                        style="font-family: 'Playfair Display', serif"
                        >{{ post.title }}</span
                    >
                </v-card-title>
                <v-card-subtitle>
                    <span
                        class="d-flex text-wrap text-2xl"
                        style="font-family: 'Lato', sans-serif"
                        >{{ post.subtitle }}</span
                    >
                </v-card-subtitle>
                <v-img :src="post.image_link"></v-img>
            </v-card>
        </div>

        <div class="main-right col-span-1 space-y-4">
            <v-card
                class="mx-auto"
                hover
                v-for="post in posts.slice(16, 30)"
                v-bind:key="post.id"
                :href="post.link"
                target="_blank"
                :title="post.source"
                :subtitle="post.published"
                style="background-color: #e8e4db"
            >
                <template v-slot:prepend>
                    <v-avatar rounded="0" size="24">
                        <v-img :src="post.source_logo"></v-img>
                    </v-avatar>
                </template>

                <v-card-title>
                    <span
                        class="d-flex text-wrap text-4xl"
                        style="font-family: 'Playfair Display', serif"
                        >{{ post.title }}</span
                    >
                </v-card-title>
                <v-card-subtitle>
                    <span class="text-2xl" style="font-family: 'Lato', sans-serif">{{
                        post.subtitle
                    }}</span>
                </v-card-subtitle>
                <v-img :src="post.image_link"></v-img>
            </v-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'HomeView',

    components: {},

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
                    console.log(response.data)

                    this.posts = response.data.results
                })
                .catch((error) => {
                    console.log('error', error)
                })
        }
    }
}
</script>
