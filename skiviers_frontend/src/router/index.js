import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../../pages/HomeView.vue';
import PostView from '../../pages/PostView.vue';
import FeedView from '../views/FeedView.vue';
import SearchView from '../views/SearchView.vue';
import ProfileView from '../views/ProfileView.vue';
import EditProfileView from '../views/EditProfileView.vue';
import EditPasswordView from '../views/EditPasswordView.vue';
import NotificationsView from '../views/NotificationsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView,
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/profile/edit',
      name: 'editprofile',
      component: EditProfileView,
    },
    {
      path: '/profile/edit/password',
      name: 'editpassword',
      component: EditPasswordView,
    },
    {
      path: '/post/:id',
      name: 'postview',
      component: PostView,
    },

    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationsView,
    },
  ],
});

export default router;
