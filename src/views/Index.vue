<template>
  <g-sheet v-slot="{ gsheet }" :sheet-id="sheetId" :fields="fields">

    <h3 class="text-capitalize">
      {{ $route.name }} Senior Center Events
    </h3>

    <ul>
      <li v-for="x in locations(gsheet.instances)" :key="x.guid">
        <router-link :to="`${$route.path}/${x.guid}`">
          {{ x.center }}
        </router-link>
      </li>
    </ul>

  </g-sheet>
</template>

<script>
import gSheet from '../mixins/googleSheet'

export default {
  name: 'index',
  mixins: [gSheet]
}
</script>
