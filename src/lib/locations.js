import { reactive } from 'vue'
import airtable from './airtable'

export const locations = reactive({
  error: '',
  loading: false,
  data: [],
})

export async function fetchLocations() {
  locations.loading = true
  try {
    const { data } = await airtable.get(`/locations`, {
      params: {
        view: 'AppView',
      },
    })
    locations.data = data.records
  } catch (error) {
    locations.error = error.message
  } finally {
    locations.loading = false
  }
}

//
export const location = reactive({
  error: '',
  loading: false,
  data: null,
})

export async function fetchLocation(sitecoreItemId) {
  location.loading = true
  try {
    const { data } = await airtable.get(`/locations`, {
      params: {
        filterByFormula: `'${sitecoreItemId}' = {GUID}`,
        view: 'AppView',
      },
    })
    location.data = data.records[0]
  } catch (error) {
    location.error = error.message
  } finally {
    location.loading = false
  }
}
