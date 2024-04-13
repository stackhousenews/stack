<template>
    <v-row :class="lgAndUp ? 'mt-2' : 'mt-1'">
        <v-col
            v-for="post in latest_posts"
            :key="post.id"
            cols="12"
            md="3"
            xl="2"
            :class="lgAndUp ? '' : 'pb-1'"
        >
            <v-sheet color="grey-lighten-" :height="lgAndUp ? 180 : 140" rounded>
                <v-card
                    class="mx-auto"
                    color="#e8e4db"
                    hover
                    :href="post.link"
                    target="_blank"
                    :height="lgAndUp ? 180 : 140"
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
    latest_posts: { type: Array, required: true },
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
