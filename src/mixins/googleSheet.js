import GoogleSheetModel from '@hcflgov/vue-google-sheet-model'

export default {
  props: ['sheetId'],
  components: {
    gSheet: GoogleSheetModel
  },
  computed: {
    fields () {
      return ['guid','center','day','starttime','endtime','endtime','activity','description']
    }
  }
}
