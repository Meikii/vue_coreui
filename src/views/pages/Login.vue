<template>
  <div class='app flex-row align-items-center'>
    <div class='container'>
      <b-row class='justify-content-center'>
        <b-col md='8'>
          <b-card-group>
            <b-card
              no-body
              class='p-4'
            >
              <b-card-body>
                <b-form @submit='onSubmit'>
                  <h1>ورود</h1>
                  <p class='text-muted'>وارد حساب کاربری خود شوید</p>
                  <b-input-group class='mb-3'>
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class='icon-user'></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type='text'
                      v-model='username'
                      class='form-control'
                      placeholder='نام کاربری'
                      autocomplete='username email'
                    />
                  </b-input-group>
                  <b-input-group class='mb-4'>
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class='icon-lock'></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type='password'
                      v-model='password'
                      class='form-control'
                      placeholder='رمز ورود'
                      autocomplete='current-password'
                    />
                  </b-input-group>
                  <b-row>
                    <b-col cols='6'>
                      <b-button
                        type='submit'
                        variant='primary'
                        class='px-4'
                      >
                        <i class='icon-login'></i>ورود
                      </b-button>
                    </b-col>
                    <b-col
                      cols='6'
                      class='text-right'
                    >
                      <b-button
                        variant='link'
                        class='px-0'
                      >فراموشی رمز عبور</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card
              no-body
              class='text-white bg-primary py-5 d-md-down-none'
              style='width:44%'
            >
              <b-card-body class='text-center'>
                <div>
                  <h2>ثبت نام</h2>
                  <p>اگر در سامانه عضو نیستید به راحتی می توانید همین الان نام نویسی کنید.</p>
                  <b-button
                    variant='primary'
                    to='/pages/register'
                    class='active mt-3'
                  >عضویت</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import Vue from 'vue'
import Var from '../../../variables'

var username,
  password,
  users,
  selected_user_id,
  selected_user,
  api_key,
  flag = false

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',

      baseUrl: Var.url,
      token: Var.token
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      username = this.username
      for (var i in users) if (users[i].login === username) this.flag = true

      if (this.flag == false) {
        // alert('User/Pass not valid!')
        return
      }
      // Axios.get('http://'+this.username+':'+this.password+'@demo.satrapp.com/issues.json',
      Axios.get(
        'http://' +
          this.username +
          ':' +
          this.password +
          '@pm.sarmadbs.com/issues.json',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: '*',
            'Access-Control-Allow-Credentials': 'true'
          }
        }
      )
        .catch(function(err) {
          console.log('FIRST################  ' + err)
        })
        .then(function(res) {
          if (res.status == 200) {
            for (var i in users)
              if (users[i].login == username) {
                selected_user = users[i]
                selected_user_id = users[i].id
              }

            window.localStorage.setItem('username',selected_user.login)
            Axios.get(Var.url + 'users/' + selected_user_id + '.json', {
              headers: {
                'X-Redmine-API-Key': Var.token,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'
              }
            }).then(res => {
              api_key = res.data.user.api_key
              console.log(api_key)
              window.localStorage.setItem('api_key', api_key)
              window.location.replace('/')
            })
          } else {
            // alert('User/Password Not Valid')
          }
        })
      // .catch(err => console.log(err))
    }
  },
  mounted() {
    // this.baseUrl = Var.url
    // this.token = Var.token
    // alert(Var.url)
    // console.log('base ' + this.baseUrl)
    // console.log('var ' + Var.url)
    Axios.get(this.baseUrl + 'users.json', {
      headers: {
        'X-Redmine-API-Key': this.token,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      }
    }).then(res => {
      users = res.data.users
      console.log(res)
    })
  }
}
</script>
