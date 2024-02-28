<template>
    <v-row no-gutters>
        <v-col
            v-for="post in featured_posts"
            :key="post.id"
            cols="12"
            md="3"
            :class="mdAndUp ? '' : 'mb-2 pb-2'"
        >
            <v-sheet color="grey-lighten-2" height="170" rounded>
                <v-col cols="12" :class="mdAndUp ? '' : 'px-2'">
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
                                <div class="ml-2 mt-1" style="font-size: 60%">
                                    {{ post.source }} - {{ post.published }}
                                </div>
                                <v-card-title class="justify-end" style="line-height: 120%">
                                    <span
                                        v-if="post.title.length < 36"
                                        class="d-flex text-wrap mb-1 mr-2"
                                        style="
                                            font-family: 'Playfair Display', serif;
                                            font-size: 110%;
                                        "
                                        >{{ post.title }}</span
                                    >
                                    <span
                                        v-else
                                        class="d-flex text-wrap mb-1 mr-2"
                                        style="
                                            font-family: 'Playfair Display', serif;
                                            font-size: 90%;
                                        "
                                        >{{ post.title }}</span
                                    >
                                </v-card-title>

                                <v-card-subtitle>
                                    <span
                                        v-if="post.subtitle.length < 48"
                                        class="d-flex text-wrap"
                                        style="font-family: 'Lato', sans-serif"
                                        >{{ post.subtitle }}</span
                                    >
                                    <span
                                        v-else
                                        class="d-flex text-wrap"
                                        style="font-family: 'Lato', sans-serif"
                                        >{{ post.subtitle.slice(0, 48) }}...</span
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
export default {
    props: {
        featured_posts: Array,
        required: true
    },
    components: {},
    data() {
        return {}
    }
}
</script>
