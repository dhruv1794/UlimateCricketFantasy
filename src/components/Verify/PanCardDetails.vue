<template>
  <div>
      <h5 class='tab-header'>PAN Card Details</h5>
      <q-field
        icon="accessibility"
        helper="Enter your Name"
        >
            <q-input inverted-light color="secondary" v-model="name" stack-label="Full Name" />
      </q-field>
      
      <q-field
        icon="perm identity"
        helper="Enter your PAN number"
        >
            <q-input inverted-light color="secondary" v-model="pan" stack-label="PAN Number" />
      </q-field>
       <q-field
        icon="terrain"
        helper="Enter your State"
        >
            <q-input inverted-light color="secondary" v-model="state" stack-label="State" />
      </q-field>
      <q-field
        icon="bubble chart"
        helper="Enter your State"
        >
            <q-datetime inverted-light color="secondary" v-model="dob" type="date" />

      </q-field>
      <q-field
        icon="image"
        helper="Upload Pan Image"
        >
            <q-uploader inverted-light color="secondary" stack-label="Pan Image" :url="url" />

      </q-field>
      <q-btn color='primary' class='verify-button' icon-right='send'>Submit PAN Card Details</q-btn>
  </div>
</template>
<script>
export default {
  data(){
      return{
          name:'',
          pan:'',
          state:'',
          dob:'',
          url:''
      }
  }
}
</script>
