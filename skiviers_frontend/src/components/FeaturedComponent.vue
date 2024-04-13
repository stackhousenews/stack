<template>
    <v-row no-gutters>
        <v-col
            v-for="post in featured_posts"
            :key="post.id"
            cols="12"
            lg="4"
            :class="lgAndUp ? '' : 'mb-2 pb-2'"
        >
            <v-sheet color="grey-lighten-2" height="170" rounded>
                <v-col cols="12" :class="lgAndUp ? '' : 'px-2'">
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
                                <v-card-title
                                    :class="lgAndUp ? 'justify-end' : 'justify-end mt-0'"
                                    style="line-height: 120%"
                                >
                                    <span
                                        v-if="post.title.length < 36"
                                        class="d-flex text-wrap mb-1 mr-2"
                                        style="
                                            font-family: 'Playfair Display', serif;
                                            font-size: 100%;
                                        "
                                        >{{ post.title }}</span
                                    >
                                    <span
                                        v-else
                                        class="d-flex text-wrap mb-1 mr-2"
                                        style="
                                            font-family: 'Playfair Display', serif;
                                            font-size: 80%;
                                        "
                                        >{{ post.title }}</span
                                    >
                                </v-card-title>

                                <v-card-subtitle>
                                    <span
                                        v-if="post.subtitle.length < 48"
                                        :class="
                                            lgAndUp
                                                ? 'd-flex text-wrap text-subtitle-2'
                                                : 'd-flex text-wrap text-body-1'
                                        "
                                        style="font-family: 'Lato', sans-serif"
                                        >{{ post.subtitle }}</span
                                    >
                                    <span
                                        v-else
                                        :class="
                                            lgAndUp
                                                ? 'd-flex text-wrap text-subtitle-2'
                                                : 'd-flex text-wrap text-body-1'
                                        "
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
export default {
  props: {
    featured_posts: { type: Array, required: true },
    lgAndUp: {
      type: Boolean,
      required: true,
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>
