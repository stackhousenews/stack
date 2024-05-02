<template>
    <v-card rounded="0" tile flat >

      
      <v-toolbar
        color="primary"
        dark
        extended
        extension-height="64"
        flat
        rounded="0" tile
        
      >

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-avatar class="ms-2" color="surface-variant" size="32" variant="flat"
                ><v-img
                    src="https://stackhouse.s3.us-east-2.amazonaws.com/static/stackhouse_blue.png"
                    alt="Stackhouse"
                ></v-img
            ></v-avatar>
            <a
                href="#"
                class="text-3xl ml-2 mr-4"
                style="font-family: 'Oswald', serif; color: #ffffff"
                >STACKHOUSE</a
            >
            
            <v-spacer></v-spacer>
            <SystemBarComponent :isAuth="isAuth" />

      </v-toolbar>

      <v-card
      
        class="mx-auto mb-2"
        max-width="1300"
        style="margin-top: -64px;"
        :flat="!diogenesReply"
        tile
      >
        <v-toolbar v-if="1==0" flat>
            <v-avatar class="ms-2" rounded variant="flat"
            ><svg-icon type="mdi" :path="lantern"></svg-icon
        ></v-avatar>

          <v-toolbar-title class="text-grey">
            <TypewriterComponent v-if="showTypewriter" @click="showTypewriter = false" />

    <v-text-field v-model="askQuestion" class="mt-2" tile variant="plain" dense autofocus v-if="!showTypewriter" placeholder="Ask something"></v-text-field>

          </v-toolbar-title>

          <v-spacer v-if="!showTypewriter"></v-spacer>
          <v-btn v-if="!showTypewriter&& !processing" @click="question=askQuestion;askDiogenes()">

            Send

        </v-btn>

        <div class="text-center" v-if="processing">
    <v-progress-circular
      color="primary"
      indeterminate
      size=24 width="4"
    ></v-progress-circular>
    </div>
          <v-btn v-if="!showTypewriter&& !processing" @click="askQuestion=null;diogenesReply=null;">Clear</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-apps</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>

        <v-divider></v-divider>

        <v-card flat color="grey-lighten-3" v-if="diogenesReply">

        <v-card-text>
        {{ diogenesReply }}
        </v-card-text></v-card>

        <v-sheet :class="!mobile ? 'mx-auto pa-0 pt-0' : 'mx-auto'" >
            <v-row no-gutters>

<v-col cols="12" lg="12" md="12">

                <LatestComponent :latest_posts="top_posts" :lgAndUp="lgAndUp" :mobile="mobile" />

            </v-col>
        <v-col cols="4" lg="4" md="4">

                        <v-card v-if="1==0" variant="outlined" height="320" class="mt-1 pb-0" >

<v-card-title class="text-center mt-2 mb-2"><span
                class="text-3xl"
                style="font-family: 'UnifrakturCook', cursive; color:#023020;"
                >The Rubicon Lantern</span
            ></v-card-title>
            <v-card-title v-if="!caroussel_news">Loading news...</v-card-title>
            <v-carousel
    height="400"
    progress="green-darken-4"
    hide-delimiters
    cycle
    v-if="caroussel_news"
  >

    <v-carousel-item
    v-for="hl in headlines"
    


    >
      <v-sheet
        height="100%"
      ><v-card height="100%">

            <v-card-title class="mt-2 d-block font-weight-regular text-wrap" style="font-family: 'Lato', sans-serif; word-break: break-word">
                    {{ hl.headline }}

            </v-card-title>

            <v-card-text class="px-2 mt-2">{{ hl.body.slice(0,200) }}... (read more)</v-card-text>
          </v-card>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>


                        </v-card>

</v-col>
    </v-row>
            </v-sheet>

            <v-sheet v-if="1==0" :class="lgAndUp ? 'mx-auto pa-2 pt-0' : 'mx-auto pt-2'" color="grey-lighten-4">




                <v-container :fluid="lgAndUp" :class="lgAndUp ? 'mt-0' : 'mx-0 px-2'">
                    <span
                        :class="lgAndUp ? 'text-xl' : 'text-xl'"
                        style="font-family: 'Montserrat', sans-serif; font-weight: 500"
                        >LATEST</span
                    >
                    <LatestComponent  :latest_posts="latest_posts" :lgAndUp="lgAndUp" />
                </v-container>
            </v-sheet>

      </v-card>

    </v-card>
    <v-container class="text-center" fluid><span class="caption">Stackhouse News - All Rights Reserved - Terms of Service - Privacy Policy</span></v-container>

  </template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiPostLamp,
  mdiHomeOutline,
  mdiBookmarkMultipleOutline,
  mdiMagnify,
  mdiBellOutline,
} from '@mdi/js';
import { useDisplay } from 'vuetify';
import LatestComponent from '@/components/LatestComponent.vue';
import SystemBarComponent from '@/components/App/SystemBarComponent.vue';
import FeaturedComponent from '@/components/FeaturedComponent.vue';
import LatestComponent from '@/components/LatestComponent.vue';
import TypewriterComponent from '@/components/App/TypewriterComponent.vue';

export default {
  setup() {
    const isAuth = ref(false);
    const { name, lgAndUp, mobile } = useDisplay();
    (async () => {
      await axios
        .get('/api/is_authenticated/')
        .then((response) => {
          res = response.data.message;
          isAuth.value = true;
        })
        .catch((error) => {
          console.log(error);
          res = null;
        });
    })();

    document.title = 'Stackhouse | Scaling Truth, Scoping Tomorrow';
    const drawer = false;
    const group = null;
    console.log(name);

    return {
      isAuth,
      lantern: mdiPostLamp,
      home: mdiHomeOutline,
      substack: mdiBookmarkMultipleOutline,
      search: mdiMagnify,
      bell: mdiBellOutline,
      drawer,
      group,
      lgAndUp,
      mobile,
    };
  },

  data() {
    return {
      top_posts: [],
      featured_posts: [],
      latest_posts: [],
      showTypewriter: true,
      diogenesReply: null,
      question: null,
      askQuestion: null,
      processing: null,
      headlines: null,
      caroussel_news:false,

    };
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },

  components: {
    LatestComponent,
    SvgIcon,
    TypewriterComponent,
    SystemBarComponent,
  },
  mounted() {
    this.getFeed();
    this.getHeadlines();
  },

  methods: {
    getFeed() {
      axios
        .get('/api/content/stories/')
        .then((response) => {
          if (this.mobile || this.lgAndUp) {
            this.top_posts = response.data.results.slice(0, 30);
            this.featured_posts = response.data.results.slice(4, 7);
            this.latest_posts = response.data.results.slice(7, 31);
          } else {
            this.top_posts = response.data.results.slice(0, 30);
            this.featured_posts = response.data.results.slice(3, 6);
            this.latest_posts = response.data.results.slice(6, 34);
          }
        })
        .catch((error) => {
          console.log('error', error);
        });
    },
    askDiogenes() {
      this.processing = 1;
      this.diogenesReply = null;
      axios.post('/api/content/diogenes/ask/', {
        question: this.askQuestion,
      })
        .then((response) => {
          console.log(response);
          this.diogenesReply = response.data;
          this.processing = null;
        })
        .catch(function (error) {
          console.log(error);
          this.processing = null;
        });
    },

    getHeadlines() {
      axios
        .get('/api/posts/news/')
        .then((response) => {
          this.headlines = response.data;
          this.caroussel_news = true
        })
        .catch((error) => {
          console.log('error', error);
        });
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css');
@import url('https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap');

.v-card-item__content .v-card-title {
    font-size: 14px !important;
    line-height: 1rem !important;
    padding-left: 0 !important;
}
.v-card-item__content .v-card-subtitle {
    font-size: 12px !important;
    line-height: 1rem !important;
    padding-left: 0 !important;
}

.v-card-item {
    padding: 4 0 0 8 !important;
    margin: 0 0 0 0 !important;
}

.v-card-title {
    padding: 0 8 0 8 !important;
}
.v-card-subtitle {
    padding: 0 8 4 8 !important;
}
.v-card-item__prepend {
    padding-right: 6 !important;
}
</style>
