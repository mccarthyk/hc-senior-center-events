<script setup>
import { location } from './lib/locations'
</script>

<template>
  <main class="container-fluid py-3">
    <nav v-if="$route.query.index" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Senior Center Events</a>
        </li>
        <li
          v-if="location.data"
          class="breadcrumb-item active"
          aria-current="page"
        >
          {{ location.data.fields?.name }}
        </li>
      </ol>
    </nav>

    <router-view />
  </main>
</template>

<style lang="scss" src="./assets/main.scss"></style>
