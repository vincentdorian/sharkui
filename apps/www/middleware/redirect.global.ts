export default defineNuxtRouteMiddleware((to) => {
    if (to.path === '/components') {
        return navigateTo('/components/accordion')
    }
  })
  