<script setup>
import { location, fetchLocation } from '../lib/locations'
import { events, fetchEvents, fullCalEvents } from '../lib/events'

import { useRoute, useRouter } from 'vue-router'
// import { Tooltip } from 'bootstrap'

import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import adaptivePlugin from '@fullcalendar/adaptive'

const router = useRouter()
const route = useRoute()

const props = defineProps({
  sitecoreItemId: String,
})

fetchLocation(props.sitecoreItemId)

const calendarOptions = {
  plugins: [dayGridPlugin, adaptivePlugin],
  initialView: 'dayGridMonth',
  height: 'auto',

  events: async () => {
    await fetchEvents(props.sitecoreItemId)
    return fullCalEvents.value
  },

  // eventDidMount: function ({ el, event }) {
  //   new Tooltip(el, {
  //     title: event.title,
  //     placement: 'top',
  //     trigger: 'hover',
  //     container: 'body',
  //   })
  // },

  eventClick: function ({ event }) {
    router.push({
      name: 'Location',
      params: { sitecoreItemId: props.sitecoreItemId },
      hash: `#${event.id}`,
      query: route.query,
    })
  },
}
</script>

<template>
  <h1 v-if="location.data">{{ location.data.fields?.name }} Events</h1>

  <FullCalendar :options="calendarOptions" />

  <div v-if="events.loading" class="text-center my-5">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else-if="events.data.length">
    <h1 v-if="location.data">{{ location.data.fields?.name }} Events</h1>

    <section
      v-for="{ id, fields } in events.data"
      :key="id"
      :id="id"
      class="card my-3"
    >
      <div class="card-body">
        <dl class="row">
          <!--  -->
          <dt class="col-sm-4 col-lg-3">Event Type</dt>
          <dd class="col-sm-8 col-lg-9">
            <span class="badge bg-secondary">{{ fields.Type }}</span>
          </dd>

          <!--  -->
          <dt class="col-sm-4 col-lg-3">Activity</dt>
          <dd class="col-sm-8 col-lg-9">
            {{ fields.Activity }}
          </dd>

          <!--  -->
          <dt class="col-sm-4 col-lg-3">Date/time</dt>
          <dd class="col-sm-8 col-lg-9">
            <mark>
              <span v-if="fields.DayNames && fields.Spanish">
                {{ fields.DayNamesSpanish.join(', ') }}
              </span>
              <span v-else-if="fields.DayNames">
                {{ fields.DayNames.join(', ') }}
              </span>

              <span v-if="fields.Date">
                {{ dateFormat(fields.Date) }}
              </span>

              <br />

              <span>{{ fields.StartTimeName.join(' ') }}</span>
              <span v-if="fields.EndTimeName">
                - {{ fields.EndTimeName.join(' ') }}
              </span>
            </mark>
          </dd>

          <!--  -->
          <dt class="col-sm-4 col-lg-3">Description</dt>
          <dd class="col-sm-8 col-lg-9" v-markdown="fields.Description"></dd>
        </dl>
      </div>
    </section>
  </div>

  <div v-else class="alert alert-info" role="alert">
    There are no events at this time.
  </div>
</template>

<style>
a:not([href]) {
  text-decoration: none;
}
</style>
