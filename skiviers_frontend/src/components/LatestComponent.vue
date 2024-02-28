<template>
    <v-row class="mt-2">
        <v-col v-for="post in latest_posts" :key="post.id" cols="6" md="2">
            <v-sheet color="grey-lighten-" height="200" rounded>
                <v-card
                    class="mx-auto"
                    color="#e8e4db"
                    hover
                    :href="post.link"
                    target="_blank"
                    height="200"
                >
                    <div class="ml-2 mt-2" style="font-size: 60%">
                        {{ post.source }} - {{ post.published }}
                    </div>
                    <v-card-title class="justify-end" style="line-height: 120%">
                        <span
                            v-if="post.title.length < 60"
                            class="d-flex text-wrap mb-1 mr-2"
                            style="font-family: 'Playfair Display', serif; font-size: 110%"
                            >{{ post.title }}</span
                        >
                        <span
                            v-else
                            class="d-flex text-wrap mb-1 mr-2"
                            style="font-family: 'Playfair Display', serif; font-size: 90%"
                            >{{ post.title }}</span
                        >
                    </v-card-title>

                    <v-card-subtitle>
                        <span
                            v-if="post.title.length + post.subtitle.length < 128"
                            class="d-flex text-wrap"
                            style="font-family: 'Lato', sans-serif"
                            >{{ post.subtitle }}</span
                        >
                        <span
                            v-else
                            class="d-flex text-wrap"
                            style="font-family: 'Lato', sans-serif"
                            >{{ post.subtitle.slice(0, 128 - post.title.length) }}...</span
                        >
                    </v-card-subtitle>
                </v-card>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        latest_posts: Array,
        required: true
    },
    components: {},
    data() {
        return {}
    }
}
</script>
