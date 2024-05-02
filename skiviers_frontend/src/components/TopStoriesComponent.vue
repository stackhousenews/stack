<template>

            <v-row no-gutters>
        <v-col
            v-for="post in top_posts"
            :key="post.id"
            cols="12"
            md="4"
            lg="4"
            :class="!mobile ? 'pb-2' : 'px-0'"
        >
            <v-sheet :class="!mobile ? 'my-1 mx-2' : 'ma-2'" height="320" rounded>
                <v-card
                    class="mx-auto"
                    color="grey-lighten-4"
                    hover
                    height="100%"
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
                            :class="
                                lgAndUp
                                    ? 'd-flex text-wrap text-subtitle-1'
                                    : 'd-flex text-wrap text-body-1 mt-2'
                            "
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
export default {
  props: {
    top_posts: { type: Array, required: true },
    lgAndUp: {
      type: Boolean,
      required: true,
    },
    mobile: {
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
