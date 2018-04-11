<template>
  <q-layout view="lHh Lpr lFf"  @scroll='changeDirection'>
    <q-layout-header>
      <app-header/>
    </q-layout-header>

    <div  class='paddingTop-92' >
      <!-- <router-view /> -->
      <div  class="row justify-center main-body">
         <div class="q-pa-sm">
           <router-view/>
         </div>
      </div>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
  
  
      <q-fab
        icon="add"
        :direction="direction"
        color="primary"
        glossy
        class='color-tertiary'
       
      >

       <q-fab-action @click="gotoHome" color="secondary" class="white" icon="home" v-if=" direction =='down' " />
        <span class='menu-title' v-if=" direction =='down' ">
           Home
        </span>
      <!-- my league -->
        <q-fab-action @click="alert" color="secondary" class="white" icon="whatshot" />
        <span class='menu-title'>
           My Leagues
        </span>
        <!-- my wallet -->
        <q-fab-action @click="notify('mail')" color="secondary" class="white" icon="attach money" />
        <span class='menu-title'>
           Wallet
        </span>
        <!-- add team -->
        <q-fab-action @click="notify('mail')" color="secondary" class="white" icon="surround sound" />
        <span class='menu-title'>
           Team
        </span>
        <!-- show leagues -->
        <q-fab-action @click="notify('mail')" color="secondary" class="white" icon="remove from queue" />
        <span class='menu-title'>
           All Leagues
        </span>
      </q-fab>
    </q-page-sticky>
    <app-footer/>
    </div>
  
  </q-layout>
</template>




<script>
import { openURL, easing } from 'quasar'
import Header from '../components/commons/Header.vue'
import Footer from '../components/commons/Footer.vue'


export default {
  name: 'LayoutDefault',
  data () {
    return {
      
      direction:'down',
     
   
    lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum! Repellendus sed totam earum exercitationem, veritatis rerum? Aliquid.',
    overshoot: easing.overshoot,
    }
  },
  components:{
    'app-header':Header,
    'app-footer':Footer,
  
  },
  methods: {
    openURL,
    changeDirection(e){
      console.log(e)
        if(e.position > 376){
          this.direction = 'up'
        }else{
           this.direction = 'down'
        }

    },
    gotoHome(){
      this.$router.push({name:'Home'})
    },

     showNotification () {
      this.$q.notify('Site under construction!')
    },
       joinLeague () {
      this.$q.dialog({
        title: 'Oops',
        message: 'We are under construction'
      })
    }
    ,
        alert () {
      this.$q.dialog({
        title: 'FAB',
        message: 'Good job! Keep it going.'
      })
    },
    notify (icon) {
      this.$q.notify({
        icon,
        message: 'We will mail you soon!'
      })
    }
   
  
  },
  created () {
    
  }
}
</script>

<style>
</style>
