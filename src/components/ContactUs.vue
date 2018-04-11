<template>
    <div>
        <h3 class='in-site-head'>Contact Us</h3>
        <div class='row'>
            <div class='internal-padding'>
                <q-field
                icon="accessibility"
                helper="Enter your Name"
                >
                    <q-input inverted-light color="secondary" v-model="name" stack-label="Name" />
                </q-field>
                <q-field
                icon="email"
                helper="Enter your email address"
                >
                    <q-input inverted-light color="secondary" v-model="email" stack-label="Email" />
                </q-field>
                <q-field
                icon="chat"
                
                helper="Enter your message"
                >
                    <q-input type='textarea' inverted-light color="secondary" v-model="message" stack-label="Message" />
                </q-field>
            </div>
            <div class='internal-padding'>
                <q-card class='game-tile-card'>
                    <q-card-title>
                        Get in Touch
                    </q-card-title>
                    <q-card-separator />
                    <q-card-main>
                        <p class='static-card-title'>Ultimate Cricket Fantasy</p>
                        <p class='static-card-content'> <q-icon name='location on'></q-icon> Bangalore</p>
                        <br/>
                        <br/>
                        <br/>
                         <p class='static-card-content'> <q-icon name='phone'></q-icon> +918123039286</p>
                         <p class='static-card-content'> <q-icon name='email'></q-icon> info@ultimatecricketfantasy.com</p>
                    </q-card-main>
                </q-card>
            </div>
             
        </div>
    </div>

</template>
<script>
export default {
  data(){
      return{
          email:'',
          name:'',
          message:''

      }
  }
}
</script>
<style >

   
</style>

