<template>
  <div class='app flex-row align-items-center'>
    <div class='container'>
      <b-row class='justify-content-center'>
        <b-col md='6' sm='8'>
          <b-card no-body class='mx-4'>
            <b-card-body class='p-4'>
              <b-form @submit='onSubmit'>
                <h1>عضویت</h1>
                <p class='text-muted'>حساب کاربری خود را بسازید!</p>
                <b-input-group class='mb-3'>
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <i class='icon-user'></i>
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    v-model='username'
                    type='text'
                    class='form-control'
                    placeholder='نام کاربری'
                    autocomplete='username'
                  />
                </b-input-group>
                <b-input-group class='mb-3'>
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <i class='icon-name'></i>
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    v-model='firstname'
                    type='text'
                    class='form-control'
                    placeholder='نام'
                    autocomplete='name'
                  />
                </b-input-group>
                <b-input-group class='mb-3'>
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <i class='icon-user'></i>
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    v-model='lastname'
                    type='text'
                    class='form-control'
                    placeholder='نام خانوادگی'
                    autocomplete='familyname'
                  />
                </b-input-group>
                <b-input-group class='mb-3'>
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    v-model='email'
                    type='text'
                    class='form-control'
                    placeholder='ایمیل'
                    autocomplete='email'
                  />
                </b-input-group>

                <b-input-group class='mb-3'>
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <i class='icon-lock'></i>
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    v-model='password'
                    type='password'
                    class='form-control'
                    placeholder='رمز عبور'
                    autocomplete='new-password'
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
                    class='form-control'
                    placeholder='تکرار رمز'
                    autocomplete='new-password'
                  />
                </b-input-group>

                <b-button type='submit' variant='success' block>
                  <i class='icon-user-follow'></i>
                  نام نویسی
                </b-button>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
var username,firstname,lastname,email,password
export default {
  name: 'Register',
  data() {
    return {
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      Axios.post('http://admin:admin1234@demo.satrapp.com/users.json', 
        {
          user: {
            login: "" + this.username + "",
            firstname: "" + this.firstname + "",
            lastname: "" + this.lastname + "",
            mail: "" + this.email + "",
            password: "" + this.password + ""
          }
        ,
        headers: {
          // 'X-Redmine-API-Key': '74544f408985b051d7310b9644f1622482d70d6f',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
        },
        
      }).then(res => alert(res.statusText))
    }
  },
  mounted() {}
};
</script>
