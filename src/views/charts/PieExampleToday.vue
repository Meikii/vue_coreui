<script>
import { Pie } from 'vue-chartjs'
import Axios from 'axios'
import moment from 'moment-jalaali'
import Var from '../../../variables'

export default {
  extends: Pie,
  data() {
    return {
      activities_name: [],
      activities_data: [],

      baseUrl: Var.url,

      data: []
    }
  },
  methods: {},
  mounted() {
    // alert('OK')
    const data1 = []

    Axios.get(this.baseUrl +  'time_entries.json?user_id=me', {
      headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': window.localStorage.api_key
      }
    })
      .catch(err => {
        // alert('Connection Error!')
      })
      .then(res => {
        this.activities_name = res.data.time_entries
          .map(x => x.activity.name)
          .filter((v, i, a) => a.indexOf(v) === i)

        let processed = res.data.time_entries
          .filter(x => x.spent_on == new Date().toISOString().split('T')[0])
          .map(element => {
            return {
              activity: element.activity,
              hours: element.hours
            }
          })

        var result = []

        processed.forEach(function(obj) {
          var id = obj.activity.id
          if (!this[id]) result.push((this[id] = obj))
          else this[id].hours += obj.hours
        }, Object.create(null))

        // console.log(result)

        this.renderChart(
          {
            labels: result.map(x => x.activity.name) || this.activities_name,
            datasets: [
              {
                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                data: result.map(x => x.hours)
              }
            ]
          },
          { responsive: true, maintainAspectRatio: true }
        )
      })
  }
}
</script>
