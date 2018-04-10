<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <app-header/>
    </q-layout-header>

    <div style='padding-top:92px;'>
      <!-- <router-view /> -->
      <div  class="row justify-center" style='min-height:80vh;'>
         <div class="q-pa-sm">
          <p class="caption">
     
    
    </p>
    <q-carousel
      v-model="slide"
      color="amber"
      quick-nav
      infinite
      :autoplay="autoplay"
      height="400px"
      class='carousel-main-page'
    >
      <q-carousel-slide
        v-for="(match,n) in matches" :key="`car-${n}`"
        class="flex flex-center"
        :class="`bg-${colors[n % 5]}`"
      >
        <div class="text-center">
          <!-- <div class="q-display-3">
          
          </div> -->
          <div class='row'>
            <div class='col-6'>
              <div class='image-wrapper'>
                <img class='image-content' :src='match.opponent_one_logo'/>
                <p> {{match.opponent_one}}</p>
              </div>
            </div>
            <div class='col-6'>
                <div class='image-wrapper'>
                  <img class='image-content' :src='match.opponent_two_logo'/>
                   <p> {{match.opponent_two}}</p>
                </div>
            </div>
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-control
        slot="control"
        position="top-right"
        :offset="[18, 18]"
        class="text-white"
        style="background: rgba(0, 0, 0, .3); padding: 4px; border-radius: 4px"
      >
        <q-toggle dark color="amber" v-model="autoplay" label="Auto Play" />
      </q-carousel-control>

      <q-carousel-control
        slot="control-button"
        slot-scope="carousel"
        position="bottom-right"
        :offset="[18, 22]"
      >
       
      </q-carousel-control>

      <q-carousel-control slot="control-progress" slot-scope="carousel" position="bottom" :offset="[42, 100]">
        <q-progress :percentage="carousel.percentage" stripe color="amber" :animate="autoplay" />
      </q-carousel-control>
    </q-carousel>
     <h3 class='in-site-head'>Public Leagues </h3>
    <div class='row justify-center'>
     
      <div class='gametile-div col-md-4' :key='index' v-for='(item,index) in GameTileJson'>
        <app-game-tile :information='item'></app-game-tile>
      </div>
    </div>
      </div>
    </div>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        icon="add"
        direction="up"
        color="primary"
      >
        <q-fab-action @click="alert" color="blue" class="white" icon="person add" />
        <q-fab-action @click="notify('mail')" color="blue" class="white" icon="mail" />
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
import GameTile from '../components/commons/GameTile.vue'
import GameTileJson from '../statics/gametile.js'
import matches from '../statics/matches.js'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      slide: 0,
      GameTileJson:GameTileJson,
      matches:matches,
    autoplay: true,
    colors: [
      'primary',
      'secondary',
      'yellow',
      'red',
      'orange',
      'grey-2'
    ],
    lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum! Repellendus sed totam earum exercitationem, veritatis rerum? Aliquid.',
    overshoot: easing.overshoot,
    }
  },
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-game-tile':GameTile,
  },
  methods: {
    openURL,
     showNotification () {
      this.$q.notify('Site under construction!')
    },
        alert () {
      this.$q.dialog({
        title: 'FAB',
        message: 'Good job! Keep it going.'
      })
    },
    notify (icon) {
      this.$q.notify({
        icon,
        message: 'So you want your ' + icon + 's, huh?'
      })
    }
   
  
  }
}
</script>

<style>
</style>
