<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col
        sm="6"
        lg="3"
      >
        <b-card
          no-body
          class="bg-primary"
        >
          <b-card-body class="pb-0">
            <!-- <b-dropdown
              class="float-right"
              variant="transparent p-0"
               -->

            <a href="/#"><i
                class="float-right icon-eyeglass"
                v-b-tooltip.hover
                title="مشاهده پروژه ها"
                style="color:white;"
              ></i> </a>
            <!-- <b-button ></b-button> -->

            <!-- <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
            <!-- </b-dropdown>   -->
            <h4 class="mb-0">{{projects_total_count}}</h4>
            <p>پروژه های من</p>
          </b-card-body>
          <card-line1-chart-example
            chartId="card-chart-01"
            class="chart-wrapper px-3"
            style="height:70px;"
            :height="10"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        lg="3"
      >
        <b-card
          no-body
          class="bg-success"
        >
          <b-card-body class="pb-0">
            <b-dropdown
              class="float-right"
              variant="transparent p-0"
              right
              no-caret
            >
              <template slot="button-content">
                <i class="icon-list"></i>
              </template>
              <b-dropdown-item>تسک های تاریخ گذشته</b-dropdown-item>
              <b-dropdown-item>کارهای با اولویت بالا</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">{{issues_total_count}}</h4>
            <p>تسک های من</p>
          </b-card-body>
          <card-line2-chart-example
            chartId="card-chart-02"
            class="chart-wrapper"
            style="height:70px;"
            :height="70"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        lg="3"
      >
        <b-card
          no-body
          class="bg-warning"
        >
          <b-card-body class="pb-0">
            <b-dropdown
              class="float-right"
              variant="transparent p-0"
              right
              no-caret
            >
              <template slot="button-content">
                <i class="icon-speedometer"></i>
              </template>
              <b-dropdown-item>ثبت زمان جدید</b-dropdown-item>
              <b-dropdown-item>زمانهای یک هفته اخیر</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">{{spent_on_hours}}</h4>
            <p>زمان های من</p>
          </b-card-body>
          <card-line3-chart-example
            chartId="card-chart-03"
            class="chart-wrapper"
            style="height:70px;"
            height="70"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        lg="3"
      >
        <b-card
          no-body
          class="bg-danger"
        >
          <b-card-body class="pb-0">
            <a href="/#"><i
                class="float-right icon-settings"
                v-b-tooltip.hover
                title="ویرایش حساب کاربری"
                style="color:white; ;"
              ></i> </a>
            <!-- <b-card-body class="pb-0">
            <b-dropdown
              class="float-right"
              variant="transparent p-0"
              right
            >
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>ثبت زمان جدید</b-dropdown-item>
              <b-dropdown-item>زمانهای یک هفته اخیر</b-dropdown-item>
            </b-dropdown> -->
            <h5 class="mb-0">نام کاربری: {{this.user.login}}</h5>
            <h5 class="mb-0">نام: {{this.user.firstname +' '+this.user.lastname}}</h5>
            <p class="mb-0">آخرین ورود: {{moment(this.user.last_login_on).format('jYYYY/jM/jD HH:mm:ss')}}</p>
            <p class="mb-0">تسک های واگذارشده: {{this.issues_ass_me_count}}</p>
            <p class="mb-0">تسک های تخصیص شده: {{this.issues_author_me_count}}</p>
            <p class="mb-0"><br></p>
            <!-- <p>اطلاعات پروفایل</p> -->
          </b-card-body>
          <!-- <card-bar-chart-example
            chartId="card-chart-04"
            class="chart-wrapper px-3"
            style="height:70px;"
            height="70"
          /> -->
        </b-card>
      </b-col>
    </b-row>

    <b-card>
      <b-row>
        <b-col sm="5">
          <h4
            id="traffic"
            class="card-title mb-0"
          >زمان صرف شده </h4>
          <div class="large text-muted">{{this_month }}</div>

        </b-col>
        <b-col
          sm="7"
          class=""
        >
          <!-- <b-button type="button" variant="primary" class="float-right"><i class="icon-cloud-download"></i></b-button> -->
          <b-button-toolbar
            class="float-right"
            aria-label="Toolbar with buttons group"
          >
            <b-form-radio-group
              class="auto"
              id="radiosBtn"
              buttons
              button-variant="outline-secondary"
              v-model="selected"
              name="radiosBtn"
            >
              <b-form-radio
                class="auto"
                value="Month"
              >ماه</b-form-radio>
              <b-form-radio
                class="auto"
                value="Week"
              >هفته</b-form-radio>
            </b-form-radio-group>
          </b-button-toolbar>
        </b-col>
      </b-row>

      <main-chart-example
        v-if="selected=='Week'"
        chartId="main-chart-01"
        class="chart-wrapper"
        style="height:300px;margin-top:40px; font-family:iransans;"
        height="300"
      ></main-chart-example>
      <main-chart-example-Month
        v-if="selected=='Month'"
        chartId="main-chart-01"
        class="chart-wrapper"
        style="height:300px;margin-top:40px; font-family:iransans;"
        height="300"
      ></main-chart-example-Month>
    </b-card>

    <b-card-group
      columns
      class="card-columns"
    >
      <b-card header="Line Chart">
        <div class="chart-wrapper">
          <line-example chartId="chart-line-01" />
        </div>
      </b-card>
      <b-card header="Bar Chart">
        <div class="chart-wrapper">
          <bar-example chartId="chart-bar-01" />
        </div>
      </b-card>
      <b-card header="Doughnut Chart">
        <div class="chart-wrapper">
          <doughnut-example chartId="chart-doughnut-01" />
        </div>
      </b-card>
      <b-card header="Radar Chart">
        <div class="chart-wrapper">
          <radar-example chartId="chart-radar-01" />
        </div>
      </b-card>
      <b-card>
        <b-row>
          <b-col
            sm="7"
            mx="7"
          >
            <h6 class="card-title float-left ">زمان صرف شده فعالیت ها</h6>
          </b-col>
          <b-col
            sm="5"
            mx="5"
            class=""
            style="bottom: 1.5em;"
          >
            <b-button-toolbar
              size="sm"
              class="float-right mt-3"
              aria-label="Toolbar with buttons group"
            >
              <b-form-radio-group
                class="auto"
                id="radiosBtn"
                buttons
                button-variant="outline-secondary"
                v-model="selected2"
                name="radiosBtn"
                size="sm"
              >
                <b-form-radio
                  class="auto"
                  value="ThisWeek"
                >این هفته</b-form-radio>
                <b-form-radio
                  class="auto"
                  value="Today"
                >امروز</b-form-radio>
              </b-form-radio-group>
            </b-button-toolbar>
          </b-col>
        </b-row>
        <div class="chart-wrapper">
          <pie-example-this-week
            v-if="selected2=='ThisWeek'"
            chartId="chart-pie-01"
          />
          <pie-example-today
            v-if="selected2=='Today'"
            chartId="chart-pie-01"
          />
        </div>
      </b-card>
      <b-card>
        <b-row>
          <b-col
            sm="7"
            mx="7"
          >
            <h6 class="card-title float-left ">زمان صرف شده فعالیت ها</h6>
          </b-col>
          <b-col
            sm="5"
            mx="5"
            class=""
            style="bottom: 1.5em;"
          >
            <b-button-toolbar
              size="sm"
              class="float-right mt-3"
              aria-label="Toolbar with buttons group"
            >
              <b-form-radio-group
                class="auto"
                id="radiosBtn"
                buttons
                button-variant="outline-secondary"
                v-model="selected2"
                name="radiosBtn"
                size="sm"
              >
                <b-form-radio
                  class="auto"
                  value="ThisWeek"
                >این هفته</b-form-radio>
                <b-form-radio
                  class="auto"
                  value="Today"
                >امروز</b-form-radio>
              </b-form-radio-group>
            </b-button-toolbar>
          </b-col>
        </b-row>
        <div class="chart-wrapper">
          <!-- <pie-example-this-week v-if="selected2=='ThisWeek'" chartId="chart-pie-01" />
          <pie-example-today v-if="selected2=='Today'" chartId="chart-pie-01" /> -->
        </div>
      </b-card>
    </b-card-group>

    <b-card>
      <b-row>
        <b-col sm="5">
          <h4
            id="traffic"
            class="card-title mb-0"
          >زمان صرف شده </h4>
          <div class="large text-muted">{{this_month }}</div>

        </b-col>
        <b-col
          sm="7"
          class=""
        >
          <!-- <b-button type="button" variant="primary" class="float-right"><i class="icon-cloud-download"></i></b-button> -->
          <b-button-toolbar
            class="float-right"
            aria-label="Toolbar with buttons group"
          >
            <b-form-radio-group
              class="auto"
              id="radiosBtn"
              buttons
              button-variant="outline-secondary"
              v-model="selected"
              name="radiosBtn"
            >
              <b-form-radio
                class="auto"
                value="ThisMonth"
              >جاری ماه</b-form-radio>
              <b-form-radio
                class="auto"
                value="ThisWeek"
              > هفته جاری</b-form-radio>
            </b-form-radio-group>
          </b-button-toolbar>
        </b-col>
      </b-row>

      <main-chart-example-this-week
        v-if="this_week_month=='ThisWeek'"
        chartId="main-chart-01"
        class="chart-wrapper"
        style="height:300px;margin-top:40px; font-family:iransans;"
        height="300"
      ></main-chart-example-this-week>
      <main-chart-example-this-month
        v-if="this_week_month=='ThisMonth'"
        chartId="main-chart-01"
        class="chart-wrapper"
        style="height:300px;margin-top:40px; font-family:iransans;"
        height="300"
      ></main-chart-example-this-month>
    </b-card>

  </div>

</template>

<script>
import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'

import MainChartExampleMonth from './dashboard/MainChartExampleMonth'
import MainChartExampleThisWeek from './dashboard/MainChartExampleThisWeek'
import MainChartExampleThisMonth from './dashboard/MainChartExampleThisMonth'

import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import CalloutChartExample from './dashboard/CalloutChartExample'
import PieExample from './charts/PieExample'
import PolarAreaExample from './charts/PolarAreaExample'
import BarExample from './charts/BarExample'
import RadarExample from './charts/RadarExample'
import DoughnutExample from './charts/DoughnutExample'
import LineExample from './charts/LineExample'
import PieExampleThisWeek from './charts/PieExampleThisWeek'
import PieExampleToday from './charts/PieExampleToday'
import { Callout } from '@coreui/vue'
import Axios from 'axios'
import moment from 'moment-jalaali'

import $ from 'jquery'


import Var from '../../variables'

export default {
  name: 'dashboard',
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    MainChartExampleMonth,
    SocialBoxChartExample,
    CalloutChartExample,
    PieExample,
    RadarExample,
    BarExample,
    DoughnutExample,
    PolarAreaExample,
    LineExample,
    PieExampleThisWeek,
    PieExampleToday,
    MainChartExampleThisWeek,
    MainChartExampleThisMonth
  },
  data: function() {
    return {
      moment: moment,
      date: '',
      projects_total_count: '',
      issues_total_count: '',
      spent_on_hours: '',
      this_month: '',
      selected: 'Week',
      selected2: 'ThisWeek',
      this_week_month: 'ThisWeek',

      baseUrl: Var.url,

      user: '',
      issues_ass_me_count: '',
      issues_author_me_count: ''
    }
  },
  methods: {
    toPersianDigits() {
      var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
      return this.replace(/[0-9]/g, function(w) {
        return id[+w]
      })
    },

    variant(value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    flag(value) {
      return 'flag-icon flag-icon-' + value
    }
  },
  mounted() {
    
    $('body').html($('body').html() + '' + $('body').html().toPersianDigits())
    // alert(this.baseUrl)
    this.this_month = moment().format('LL')

    moment.loadPersian({
      usePersianDigits: true,
      dialect: 'persian-modern'
    })

    if (window.localStorage.api_key == undefined)
      window.location.replace('/#/pages/login')

    Axios.get(this.baseUrl + 'projects.json', {
      headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': window.localStorage.api_key
      }
    }).then(res => {
      this.projects_total_count = res.data.total_count
    })

    Axios.get(this.baseUrl + 'issues.json', {
      headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': window.localStorage.api_key
      }
    }).then(res => {
      this.issues_total_count = res.data.total_count
    })

    Axios.get(this.baseUrl + 'time_entries.json', {
      headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': window.localStorage.api_key
      }
    }).then(res => {
      var hs = 0
      for (var i in res.data.time_entries) {
        hs += res.data.time_entries[i].hours
      }

      this.spent_on_hours = hs
    })
    Axios.get(this.baseUrl + '/users/current.json', {
      headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': window.localStorage.api_key
      }
    }).then(res => {
      this.user = res.data.user
    })

    Axios.get(this.baseUrl + '/issues.json?status_id=*&assigned_to_id=me', {
      headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': window.localStorage.api_key
      }
    }).then(res => {
      this.issues_ass_me_count = res.data.total_count
    })

    Axios.get(this.baseUrl + '/issues.json?status_id=*&assigned_to_id=me', {
      headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': window.localStorage.api_key
      }
    }).then(res => {
      this.issues_ass_me_count = res.data.total_count
    })

    Axios.get(this.baseUrl + '/issues.json?status_id=*&author_id=me', {
      headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': window.localStorage.api_key
      }
    }).then(res => {
      this.issues_author_me_count = res.data.total_count
    })
  }
}
</script>

<style>
/* IE fix */
/*#card-chart-01,
#card-chart-02 {
  width: 100% !important;
}*/

@font-face {
  font-family: iransans;
  src: url('../assets/fonts/IRANSansWeb.woff');
}
</style>
