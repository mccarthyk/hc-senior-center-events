import { reactive, computed } from 'vue'
import airtable from './airtable'
import { convertTime12to24 } from '../lib/util'

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
        filterByFormula: `AND({Published}, FIND('${sitecoreItemId}', ARRAYJOIN({LocationGUID})))`,
        view: import.meta.env.DEV ? 'DevView' : 'AppView',
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

export const fullCalEvents = computed(() => {
  //
  const DAYS = {
    Daily: [0, 1, 2, 3, 4, 5, 6],
    Sundays: [0],
    Mondays: [1],
    Tuesdays: [2],
    Wednesdays: [3],
    Thursdays: [4],
    Fridays: [5],
    Saturdays: [6],
  }

  const ongoingEvent = (fields) => ({
    daysOfWeek: fields.DayNames.flatMap((d) => DAYS[d]),
    startTime: convertTime12to24(fields.StartTimeName.join(' ')),
    endTime: convertTime12to24(fields.EndTimeName.join(' ')),
    color: 'grey',
  })

  const specialEvent = (fields) => ({
    start: `${fields.Date}T${convertTime12to24(
      fields.StartTimeName.join(' ')
    )}`,
    color: 'red',
  })

  //
  return events.data.map(({ id, fields }) => {
    const details =
      fields.Type === 'Special Event'
        ? specialEvent(fields)
        : ongoingEvent(fields)

    return {
      id,
      title: fields.Activity,
      description: fields.Description,
      ...details,
    }
  })
})
