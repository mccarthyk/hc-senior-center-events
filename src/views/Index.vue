<template>
  <g-sheet @success="dataReceived" v-slot="{ gsheet }" :sheet-id="sheetId" :fields="fields">

    <div v-if="gsheet.loading" class="h3 text-center">
      Loading...
    </div>

    <template v-else>
      <h2>
        {{ title }}
      </h2>

      <router-view></router-view>

      <ul>
        <li v-for="x in locations" :key="x.guid">
          <router-link :to="`/${routeName}/${x.guid}`">
            {{ x.center }}
          </router-link>
        </li>
      </ul>
    </template>

  </g-sheet>
</template>

<script>
import gSheet from '../mixins/googleSheet'
import _uniqBy from 'lodash.uniqby'

export default {
  name: 'index',
  mixins: [gSheet],
  props: ['title', 'routeName'],
  data: () => ({
    locations: []
  }),
  methods: {
    dataReceived (data) {
      this.locations = _uniqBy(data.instances, 'guid')
    }
  }
}
</script>
