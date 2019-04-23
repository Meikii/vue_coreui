<script>
import { Line } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'
import moment from 'moment-jalaali'
import Axios from 'axios'
import Var from '../../../variables'

var data1 = []

export default {
  extends: Line,
  props: ['height', 'width'],
  data() {
    return {
      baseUrl: Var.url
    }
  },
  mounted() {
    var days = 6 // Days you want to subtract
    var date = new Date()
    var last_5 = new Date(
      new Date().getTime() - (days - 5) * 24 * 60 * 60 * 1000
    )
    var last_4 = new Date(
      new Date().getTime() - (days - 4) * 24 * 60 * 60 * 1000
    )
    var last_3 = new Date(
      new Date().getTime() - (days - 3) * 24 * 60 * 60 * 1000
    )
    var last_2 = new Date(
      new Date().getTime() - (days - 2) * 24 * 60 * 60 * 1000
    )
    var last_1 = new Date(
      new Date().getTime() - (days - 1) * 24 * 60 * 60 * 1000
    )
    var last = new Date(new Date().getTime() - days * 24 * 60 * 60 * 1000)
    Axios.get(
      this.baseUrl +
        'issues.json?status_id=closed&closed_on=%3E%3C' +
        last.toISOString().split('T')[0] +
        '|' +
        new Date().toISOString().split('T')[0] +
        '&assigned_to_id=me',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Redmine-API-Key': window.localStorage.api_key
        }
      }
    )
      .catch(err => {
        // alert('Connection Error!', err)
      })
      .then(res => {
        console.log(res)

        data1.push(
          res.data.issues.filter(
            x => x.closed_on.split('T')[0] == last.toISOString().split('T')[0]
          ).length
        )
        console.log(last.toISOString())
        data1.push(
          res.data.issues.filter(
            x => x.closed_on.split('T')[0] == last_1.toISOString().split('T')[0]
          ).length
        )
        console.log(last_1.toISOString())
        data1.push(
          res.data.issues.filter(
            x => x.closed_on.split('T')[0] == last_2.toISOString().split('T')[0]
          ).length
        )
        console.log(last_2.toISOString())
        data1.push(
          res.data.issues.filter(
            x => x.closed_on.split('T')[0] == last_3.toISOString().split('T')[0]
          ).length
        )
        console.log(last_3.toISOString())
        data1.push(
          res.data.issues.filter(
            x => x.closed_on.split('T')[0] == last_4.toISOString().split('T')[0]
          ).length
        )
        console.log(last_4.toISOString())
        data1.push(
          res.data.issues.filter(
            x => x.closed_on.split('T')[0] == last_5.toISOString().split('T')[0]
          ).length
        )
        console.log(last_5.toISOString())
        data1.push(
          res.data.issues.filter(
            x =>
              x.closed_on.split('T')[0] ==
              new Date().toISOString().split('T')[0]
          ).length
        )
        console.log(new Date().toISOString())
        console.log(data1)

        const brandInfo = getStyle('--light-green') || '#78bb8f'
        const datasets2 = [
          {
            label: ' تسک بسته شده ',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: data1 // [65, 59, 84, 84, 51, 55, 70] // data1
          }
        ]

        this.renderChart(
          {
            labels: [
              moment(last).format('dddd'),
              moment(last_1).format('dddd'),
              moment(last_2).format('dddd'),
              moment(last_3).format('dddd'),
              moment(last_4).format('dddd'),
              moment(last_5).format('dddd'),
              moment(new Date()).format('dddd')
            ],
            datasets: datasets2
          },
          {
            tooltips: {
              enabled: false,
              custom: CustomTooltips
            },
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  display: false
                }
              ],
              yAxes: [
                {
                  display: false,
                  ticks: {
                    display: false,
                    min: Math.min.apply(Math, data1) ,
                    max: Math.max.apply(Math, data1) 
                  }
                }
              ]
            },
            elements: {
              line: {
                // tension: 0.6,
                borderWidth: 2
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4
              }
            }
          }
        )
      })
  }
}
</script>
