<template>
    <v-row>
        <v-col
            v-for="post in latest_posts"
            :key="post.id"
            cols="12"
            md="4"
            xl="4"
            class="mb-0 mx-auto pb-0 px-1"
        >
        <router-link :to="{ name: 'postview', params: { id: post.id }}">
                        
                <v-card
                    class="mb-1"
                    color="#DAD4C6"
                    hover
                    height="100%"
                >
                    <div class="ml-2 mt-2 mb-1" style="font-size: 70%">
                        
                        {{ post.published }}

                        <v-chip variant="outlined" density="comfortable" size="x-small" class="ml-2 mt-0 mb-1" v-for="tag in post.tags">
                            {{ tag.tag }}
                        </v-chip>
                        
                        
                        
                    </div>
                    <v-card-title class="justify-end mb-1" style="line-height: 160%">
                        <span
                            class="d-flex text-wrap mb-1 mr-2"
                            style="font-family: 'Playfair Display', serif; font-size: 140%"
                            >{{ post.headline }}</span
                        >

                    </v-card-title>

                    <v-card-subtitle style="line-height: 135%">
                        <span
                            class="d-flex text-wrap"
                            style="font-family: 'Lato', sans-serif; font-size: 105%"
                            >{{ post.abstract }}</span
                        >

                    </v-card-subtitle>
                </v-card></router-link>

        </v-col>
    </v-row>
</template>

<script>
export default {
  props: {
    latest_posts: { type: Array, required: true },

  },
  components: {},
  data() {
    return {};
  },
};
</script>
