<template lang="html">
  <div v-if="activeCenter">
    <h3>
      <a :href="activeCenterLink">
        {{ activeCenter.center }} Senior Center
      </a>
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
          <tr v-for="(model, i) in instances" :key="i">
            <td class="text-nowrap"><strong>{{ model.day }}</strong></td>
            <td class="text-nowrap">{{ model.starttime }}</td>
            <td class="text-nowrap">{{ model.endtime }}</td>
            <td>{{ model.activity }}</td>
            <td>{{ model.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <em>Last Updated: <small>{{ $parent.updated }}</small></em>

    <hr>
  </div>
</template>

<script>
export default {
  name: 'show',
  computed: {
    instances () {
      return this.$parent.instances.filter(x => x.guid == this.$route.params.id)
    },
    activeCenter () {
      return this.instances[0]
    },
    activeCenterLink () {
      let id = this.activeCenter.guid.replace(/[^a-z0-9]/gi,'')
      return `https://www.hillsboroughcounty.org/~/link.aspx?_id=${id}`
    }
  }
}
</script>
