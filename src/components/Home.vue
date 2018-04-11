<template>
  <div>
      <h3 class='in-site-head'>Top Matches</h3>
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
           <p style='text-align:center' justify-center>
              <q-btn @click='joinLeague'>Join
                <q-tooltip>
                  join this league by creating a team
                </q-tooltip>
              </q-btn>
            </p>
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
        <app-game-tile :information='item' @joinLeague='joinLeague'></app-game-tile>
      </div>
    </div>
      </div>
      
</template>
<script>
import GameTile from '../components/commons/GameTile.vue'
import GameTileJson from '../statics/gametile.js'
import matches from '../statics/matches.js'
export default {
  data(){
      return{
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
      }
  },
   components:{
    'app-game-tile':GameTile,
  },
  methods:{
    joinLeague () {
      this.$q.dialog({
        title: 'Oops',
        message: 'We are under construction'
      })
    }
    ,
  }
}
</script>
<style>

</style>
