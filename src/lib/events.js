import { reactive } from 'vue'
import airtable from './airtable'

export const events = reactive({
  error: '',
  loading: false,
  data: [],
})

export async function fetchEvents(sitecoreItemId) {
  events.loading = true
  try {
    const { data } = await airtable.get(`/events`, {
      params: {
        filterByFormula: `AND({Published}, '${sitecoreItemId}' = ARRAYJOIN({LocationGUID}))`,
        view: 'AppView',
      },
    })

    events.data = data.records
  } catch (error) {
    // error
    // 401 unauth
    // 422 (Unprocessable Entity)

    events.error = error.message
  } finally {
    events.loading = false
  }
}
