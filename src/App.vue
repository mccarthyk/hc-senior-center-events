<template>
  <div id="app">

    <ul class="nav nav-tabs d-flex justify-content-center mb-3">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Senior Center Events</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/special" class="nav-link">Special Events</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/ongoing" class="nav-link">Ongoing Events</router-link>
      </li>
    </ul>

    <router-view :key="$route.fullPath "/>
  </div>
</template>

<script>
import router from './router'

export default {
  router
}
</script>
