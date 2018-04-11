<template>
  <div>
      <h5 class='tab-header'>Email And Phone Verification</h5>
      <q-field
        icon="phone"
        helper="Enter your Mobile Number"
        >
            <q-input inverted-light color="secondary" v-model="mobile" stack-label="Mobile" />
      </q-field>
      <q-btn color='primary' class='verify-button' icon-right='remove red eye'>Send OTP</q-btn>
      <q-field
        icon="email"
        helper="Enter your email"
        >
            <q-input inverted-light color="secondary" v-model="email" stack-label="Email" />
      </q-field>
       <q-btn color='primary' class='verify-button' icon-right='email'>Verify Email</q-btn>
  </div>
</template>
<script>
export default {
  data(){
      return{
          mobile:'',
          email:''
      }
  }
}
</script>
