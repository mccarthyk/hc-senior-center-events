import _uniqBy from 'lodash.uniqby'
import GoogleSheetModel from '@hcflgov/vue-google-sheet-model'

export default {
  props: ['sheetId'],
  components: {
    gSheet: GoogleSheetModel
  },
  methods: {
    filteredInstances (instances) {
      return instances.filter(x => x.guid == this.$route.params.id)
    },
    locations (instances) {
      return _uniqBy(instances, 'guid')
    }
  },
  computed: {
    fields () {
      return ['guid','center','day','starttime','endtime','endtime','activity','description']
    }
  }
}
