import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import('../views/ActivitiesView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../views/JoinView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/healthy-habits',
      name: 'healthy-habits',
      component: () => import('../views/HealthyHabitsView.vue')
    },
    {
      path: '/office-exercises',
      name: 'office-exercises',
      component: () => import('../views/OfficeExercisesView.vue')
    },
    {
      path: '/home-exercises',
      name: 'home-exercises',
      component: () => import('../views/HomeExercisesView.vue')
    },
    {
      path: '/reading-club',
      name: 'reading-club',
      component: () => import('../views/ReadingClubView.vue')
    },
    {
      path: '/slam-poetry',
      name: 'slam-poetry',
      component: () => import('../views/SlamPoetryView.vue')
    },
    {
      path: '/theater',
      name: 'theater',
      component: () => import('../views/TheaterView.vue')
    },
    {
      path: '/legal',
      name: 'legal',
      component: () => import('../views/LegalView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 