<script>
import { Line } from 'vue-chartjs'
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
// import { random } from '@/shared/utils'
import Axios from 'axios'
import moment from 'moment-jalaali'
import Var from '../../../variables'

export default {
  extends: Line,
  data() {
    return {
      spent_ons: [],
      spent_on_hours: [],
      today: new Date(),
      today_1: new Date(),
      today_2: new Date(),
      today_3: new Date(),
      today_4: new Date(),
      today_5: new Date(),
      today_6: new Date(),

      baseUrl: Var.url
    }
  },
  props: ['height'],
  methods: {
    setWeekDays() {
      this.today_1 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_2 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_3 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_4 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_5 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_6 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
    }
  },
  mounted() {
    moment.loadPersian({
      usePersianDigits: true,
      dialect: 'persian-modern'
    })

    const brandSuccess = getStyle('--success') || '#4dbd74'

    const data1 = []

    let t = 0,
      t_1 = 0,
      t_2 = 0,
      t_3 = 0,
      t_4 = 0,
      t_5 = 0,
      t_6 = 0

    this.setWeekDays()

    Axios.get(this.baseUrl +  'time_entries.json?user_id=me', {
      headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': window.localStorage.api_key
      }
    })
      .catch(err => {
       // alert('Connection Error!', err)
      })
      .then(res => {
        var temp1 = res.data.time_entries

        for (var i in temp1) {
          if (new Date(temp1[i].spent_on).getDate() == new Date().getDate()) {
            t += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 1
          ) {
            t_1 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 2
          ) {
            t_2 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 3
          ) {
            t_3 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 4
          ) {
            t_4 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 5
          ) {
            t_5 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 6
          ) {
            t_6 += temp1[i].hours
          }
        }
        data1.push(t)
        data1.push(t_1)
        data1.push(t_2)
        data1.push(t_3)
        data1.push(t_4)
        data1.push(t_5)
        data1.push(t_6)

        this.renderChart(
          {
            labels: [
              moment(new Date()).format('jYYYY/jM/jD'),
              this.today_1.format('jYYYY/jM/jD'),
              this.today_2.format('jYYYY/jM/jD'),
              this.today_3.format('jYYYY/jM/jD'),
              this.today_4.format('jYYYY/jM/jD'),
              this.today_5.format('jYYYY/jM/jD'),
              this.today_6.format('jYYYY/jM/jD')
            ],
            datasets: [
              {
                label: 'Current User',
                backgroundColor: hexToRgba(brandSuccess, 10),
                borderColor: brandSuccess,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                data: data1
              }
            ]
          },
          {
            tooltips: {
              enabled: false,
              custom: CustomTooltips,
              intersect: true,
              mode: 'index',
              position: 'nearest',
              callbacks: {
                labelColor: function(tooltipItem, chart) {
                  return {
                    backgroundColor:
                      chart.data.datasets[tooltipItem.datasetIndex].borderColor
                  }
                }
              }
            },
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    drawOnChartArea: true
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 10,
                    stepSize: 1, // Math.ceil(),
                    max: Math.max(t, t_1, t_2, t_3, t_4, t_5, t_6) + 10
                  },

                  id: 'y-axis-1',
                  type: 'linear',
                  display: true,
                  // position: 'left'
                  gridLines: {
                    display: true
                  }
                }
              ]
            },
            elements: {
              line: {
                tension: 0,
                borderWidth: 1
              },
              point: {
                radius: 5,
                hitRadius: 10,
                hoverRadius: 10,
                hoverBorderWidth: 3
              }
            }
          }
        )
      })
  }
}
</script>
<style>
@font-face {
  font-family: iransans;
  src: url('../../assets/fonts/IRANSansWeb.woff');
}
.chartjs-render-monitor {
  font-family: iransans !important;
}
</style>
