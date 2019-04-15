<template lang="html">
  <g-sheet v-slot="{ gsheet }" :sheet-id="sheetId" :fields="fields">
    <h3 class="text-capitalize">
      <template v-if="filteredInstances(gsheet.instances).length">
        {{ filteredInstances(gsheet.instances)[0].center }}
      </template>

      {{ $route.name }}
    </h3>

    <div class="table-responsive">
      <table class="table table-striped table-sm table-bordered">
        <thead>
          <tr>
            <th>Day</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Activity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(model, i) in filteredInstances(gsheet.instances)" :key="i">
            <td class="text-nowrap"><strong>{{ model.day }}</strong></td>
            <td class="text-nowrap">{{ model.starttime }}</td>
            <td class="text-nowrap">{{ model.endtime }}</td>
            <td>{{ model.activity }}</td>
            <td>{{ model.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <em>Last Updated: <small>{{ gsheet.updated }}</small></em>
  </g-sheet>
</template>

<script>
import gSheet from '../mixins/googleSheet'

export default {
  name: 'show',
  mixins: [gSheet]
}
</script>
