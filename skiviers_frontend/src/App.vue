<template>

    <v-card rounded="0" tile flat color="#DAD4C6" image="https://images.unsplash.com/photo-1714508862788-44e45c4315d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
     
      <v-toolbar
        color="blue-grey"
        dark
        extended
        extension-height="64"
        flat
        rounded="0" tile
        image="https://images.unsplash.com/photo-1714419991258-7172e140af4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
      >           <v-spacer></v-spacer>

        <v-avatar class="ms-2" color="surface-variant" size="32" variant="flat"
                ><v-img
                    src="https://stackhouse.s3.us-east-2.amazonaws.com/static/stackhouse_blue.png"
                    alt="Stackhouse News"
                ></v-img
            ></v-avatar>
            <a
                href="#"
                class="text-3xl ml-2 mr-4"
                style="font-family: 'Oswald', serif; color: #ffffff"
                >STACKHOUSE</a
            >

            <v-spacer></v-spacer>
      </v-toolbar>

      <v-card
      
        class="mx-auto mb-2"
        max-width="1300"
        style="margin-top: -64px;"
        tile
      >
        <v-sheet color="#DAD4C6" class="px-4 py-2 pb-6">


          <RouterView :key='$route.fullPath' />


            </v-sheet>

      </v-card>

    </v-card>
   <v-card tile rounded="0" color="blue-grey"><v-card-text class="text-center caption">Stackhouse News 2024 | All Rights Reserved | <a href="https://stackhouse.s3.us-east-2.amazonaws.com/static/terms_of_service.html">Terms of Service</a> | <a href="https://stackhouse.s3.us-east-2.amazonaws.com/static/privacy_policy.html">Privacy Policy</a> | <a href="mailto:contact@stackhouse.news">Contact Us</a></v-card-text></v-card>

  </template>

<script>
import SystemBarComponent from '@/components/App/SystemBarComponent.vue';
import { useHead } from '@unhead/vue'

export default {



  setup() {
    useHead({
  title: 'Stackhouse News | Scaling Truth, Scoping Tomorrow',
  meta: [
    {
      name: 'description',
      content: 'Stackhouse News | Scaling Truth, Scoping Tomorrow',
    },
  ],
})

    return {

    };
  },

  data() {
    return {

    };
  },

  components: {

    SystemBarComponent,
  },


  methods: {

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
