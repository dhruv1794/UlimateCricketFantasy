<template>
    <div class='create-bottom-space'>
        <h3 class='in-site-head'>Verify Details</h3>
        <q-tabs color='secondary' glossy>
  <!-- Tabs - notice slot="title" -->
            <q-tab alert  slot="title" :default=true label='Mobile &amp; Email Verification' name="tab-1" icon="message" />
            <q-tab alert slot="title" label='PAN card Details' name="tab-2" icon="fingerprint" />
            <q-tab alert slot="title" label='Bank Account Details' name="tab-3" icon="account_box" />
          

            <!-- Targets -->
             <q-tab-pane name="tab-1" >
                <app-email-phone ></app-email-phone>
            </q-tab-pane>
            <q-tab-pane name="tab-2">
                <app-pan></app-pan>
            </q-tab-pane>
            <q-tab-pane name="tab-3">
                <app-bank></app-bank>
            </q-tab-pane>
           
        </q-tabs>
    </div>
</template>
<script>
import BankAccountDetails from './BankAccountDetails.vue'
import PanCardDetails from './PanCardDetails.vue'
import PhoneAndEmail from './PhoneAndEmail.vue'
export default {
  components:{
      'app-email-phone':PhoneAndEmail,
      'app-bank':BankAccountDetails,
      'app-pan':PanCardDetails,
  }
}
</script>
