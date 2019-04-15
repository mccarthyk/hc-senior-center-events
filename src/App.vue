<template>
  <div id="app">

    <div class="nav justify-content-center">
      <router-link to="/" class="nav-link">Senior Center Events</router-link>
      <router-link to="/special" class="nav-link">Special Events</router-link>
      <router-link to="/ongoing" class="nav-link">Ongoing Events</router-link>
    </div>

    <router-view :key="$route.fullPath "/>
  </div>
</template>

<script>
import router from './router'

export default {
  router
}
</script>
