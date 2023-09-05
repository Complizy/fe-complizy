<script setup>
import { useRouter } from 'vue-router'
import DefaultLayoutWithVerticalNav from './components/DefaultLayoutWithVerticalNav.vue'

const router = useRouter()
const isAuth = localStorage.getItem('auth')
if(!isAuth){
  router.push('/login')
}
</script>

<template>
  <DefaultLayoutWithVerticalNav v-if="isAuth">    
    <RouterView />
  </DefaultLayoutWithVerticalNav>
</template>

<style lang="scss">
// As we are using `layouts` plugin we need its styles to be imported
@use "@layouts/styles/default-layout";
</style>
