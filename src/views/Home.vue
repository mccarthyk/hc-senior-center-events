<template>
  <div class="row my-5">

    <div class="col-md-6">
      <router-link to="/special" class="btn btn-lg btn-block btn-secondary py-5">Special Events</router-link>
    </div>
    <div class="col-md-6">
      <router-link to="/ongoing" class="btn btn-lg btn-block btn-secondary py-5">Ongoing Events</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
