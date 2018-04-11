<template>
  <div>
      <h5 class='tab-header'>Bank Account Details</h5>
      <q-field
        icon="account balance"
        helper="Enter your Account Number"
        >
            <q-input inverted-light color="secondary" v-model="accno" stack-label="Account Number" />
      </q-field>
      
      <q-field
        icon="supervisor account
"
        helper="Enter your IFSC Code"
        >
            <q-input inverted-light color="secondary" v-model="ifsc" stack-label="IFSC Code" />
      </q-field>
       <q-field
        icon="attach money"
        helper="Enter your Bank Name"
        >
            <q-input inverted-light color="secondary" v-model="bank" stack-label="Bank Name" />
      </q-field>
      <q-field
        icon="home"
        helper="Enter your Bank Branch"
        >
             <q-input inverted-light color="secondary" v-model="branch" stack-label="Bank Branch" />
      </q-field>
      <q-field
        icon="image"
        helper="Upload Passbook Image"
        >
            <q-uploader inverted-light color="secondary" stack-label="Passbook Imagee" :url="url" />

      </q-field>
      <q-btn color='primary' class='verify-button' icon-right='send'>Submit Bank Details</q-btn>
  </div>
</template>
<script>
export default {
  data(){
      return{
          accno:'',
          ifsc:'',
          bank:'',
          branch:'',
          url:''
      }
  }
}
</script>
