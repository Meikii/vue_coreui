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
      today_7: new Date(),
      today_8: new Date(),
      today_9: new Date(),
      today_10: new Date(),
      today_11: new Date(),
      today_12: new Date(),
      today_13: new Date(),
      today_14: new Date(),
      today_15: new Date(),
      today_16: new Date(),
      today_17: new Date(),
      today_18: new Date(),
      today_19: new Date(),
      today_20: new Date(),
      today_21: new Date(),
      today_22: new Date(),
      today_23: new Date(),
      today_24: new Date(),
      today_25: new Date(),
      today_26: new Date(),
      today_27: new Date(),
      today_28: new Date(),
      today_29: new Date(),
      today_30: new Date(),

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
      this.today_7 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_8 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_9 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_10 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_11 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_12 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_13 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_14 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_15 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_16 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_17 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_18 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_19 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_20 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_21 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_22 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_23 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_24 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_25 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_26 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_27 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_28 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_29 = moment(
        new Date(this.today.setDate(this.today.getDate() - 1))
      )
      this.today_30 = moment(
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
      t_6 = 0,
      t_7 = 0,
      t_8 = 0,
      t_9 = 0,
      t_10 = 0,
      t_11 = 0,
      t_12 = 0,
      t_13 = 0,
      t_14 = 0,
      t_15 = 0,
      t_16 = 0,
      t_17 = 0,
      t_18 = 0,
      t_19 = 0,
      t_20 = 0,
      t_21 = 0,
      t_22 = 0,
      t_23 = 0,
      t_24 = 0,
      t_25 = 0,
      t_26 = 0,
      t_27 = 0,
      t_28 = 0,
      t_29 = 0,
      t_30 = 0

    this.setWeekDays()

    Axios.get(
      this.baseUrl +  'time_entries.json?user_id=me',
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
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 7
          ) {
            t_7 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 8
          ) {
            t_8 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 9
          ) {
            t_9 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 10
          ) {
            t_10 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 11
          ) {
            t_11 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 12
          ) {
            t_12 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 13
          ) {
            t_13 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 14
          ) {
            t_14 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 15
          ) {
            t_15 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 16
          ) {
            t_16 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 17
          ) {
            t_17 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 18
          ) {
            t_18 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 19
          ) {
            t_19 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 20
          ) {
            t_20 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 21
          ) {
            t_21 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 22
          ) {
            t_22 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 23
          ) {
            t_23 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 24
          ) {
            t_24 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 25
          ) {
            t_25 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 26
          ) {
            t_26 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 27
          ) {
            t_27 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 28
          ) {
            t_28 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 29
          ) {
            t_29 += temp1[i].hours
          }
          if (
            new Date(temp1[i].spent_on).getDate() ==
            new Date().getDate() - 30
          ) {
            t_30 += temp1[i].hours
          }
        }
        data1.push(t)
        data1.push(t_1)
        data1.push(t_2)
        data1.push(t_3)
        data1.push(t_4)
        data1.push(t_5)
        data1.push(t_6)
        data1.push(t_7)
        data1.push(t_8)
        data1.push(t_9)
        data1.push(t_10)
        data1.push(t_11)
        data1.push(t_12)
        data1.push(t_13)
        data1.push(t_14)
        data1.push(t_15)
        data1.push(t_16)
        data1.push(t_17)
        data1.push(t_18)
        data1.push(t_19)
        data1.push(t_20)
        data1.push(t_21)
        data1.push(t_22)
        data1.push(t_23)
        data1.push(t_24)
        data1.push(t_25)
        data1.push(t_26)
        data1.push(t_27)
        data1.push(t_28)
        data1.push(t_29)
        data1.push(t_30)

        this.renderChart(
          {
            labels: [
              moment(new Date()).format('jYYYY/jM/jD'),
              this.today_1.format('jYYYY/jM/jD'),
              this.today_2.format('jYYYY/jM/jD'),
              this.today_3.format('jYYYY/jM/jD'),
              this.today_4.format('jYYYY/jM/jD'),
              this.today_5.format('jYYYY/jM/jD'),
              this.today_6.format('jYYYY/jM/jD'),
              this.today_7.format('jYYYY/jM/jD'),
              this.today_8.format('jYYYY/jM/jD'),
              this.today_9.format('jYYYY/jM/jD'),
              this.today_10.format('jYYYY/jM/jD'),
              this.today_11.format('jYYYY/jM/jD'),
              this.today_12.format('jYYYY/jM/jD'),
              this.today_13.format('jYYYY/jM/jD'),
              this.today_14.format('jYYYY/jM/jD'),
              this.today_15.format('jYYYY/jM/jD'),
              this.today_16.format('jYYYY/jM/jD'),
              this.today_17.format('jYYYY/jM/jD'),
              this.today_18.format('jYYYY/jM/jD'),
              this.today_19.format('jYYYY/jM/jD'),
              this.today_20.format('jYYYY/jM/jD'),
              this.today_21.format('jYYYY/jM/jD'),
              this.today_22.format('jYYYY/jM/jD'),
              this.today_23.format('jYYYY/jM/jD'),
              this.today_24.format('jYYYY/jM/jD'),
              this.today_25.format('jYYYY/jM/jD'),
              this.today_26.format('jYYYY/jM/jD'),
              this.today_27.format('jYYYY/jM/jD'),
              this.today_28.format('jYYYY/jM/jD'),
              this.today_29.format('jYYYY/jM/jD'),
              this.today_30.format('jYYYY/jM/jD')
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
                    max:
                      Math.max(
                        t,
                        t_1,
                        t_2,
                        t_3,
                        t_4,
                        t_5,
                        t_6,
                        t_7,
                        t_8,
                        t_9,
                        t_10,
                        t_11,
                        t_12,
                        t_13,
                        t_14,
                        t_15,
                        t_16,
                        t_17,
                        t_18,
                        t_19,
                        t_20,
                        t_21,
                        t_22,
                        t_23,
                        t_24,
                        t_25,
                        t_26,
                        t_27,
                        t_28,
                        t_29,
                        t_30
                      ) + 10
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
