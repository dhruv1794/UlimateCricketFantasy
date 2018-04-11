<template>
    <q-layout-footer class='custom-footer'>
      
      <q-toolbar :inverted="$q.theme === 'ios'" style="background:#fff !important">
       
        <q-toolbar-title class='footer-text'>
           <a class='header-links' @click='gotoAbout'>About us</a>
           <a class='header-links' @click='gotoFAQ'>FAQS</a>
           <a class='header-links' @click='gotoFantasyCricketLegalities'>Fantasy cricket Legalities</a>
           <a class='header-links' @click='showNotification'>Contact us</a>
           <a class='header-links' @click='showNotification'>Fantasy point system</a>
           <a class='header-links' @click='showNotification'>Terms &amp; conditions</a>
           <br/>
          <br/>
          <p>Follow us on </p>
          <p>
            <i class="fab fa-facebook fb-icon footer-icons" @click='showNotification'></i>
            <i class="fab fa-google-plus-square google-icon footer-icons" @click='showNotification'></i>
            <i class="fab fa-twitter-square twitter-icon footer-icons" @click='showNotification'></i>
          </p>
         <div class='footer-content'>
          UCF is not affiliated in any way to and claims no association, in any capacity whatsoever, with the<br/> (i) International Cricket Council ("ICC") or any national cricket board or team,<br/>  (ii) Board of Control for Cricket in India ("BCCI"), the Indian Premier League ("IPL") or any IPL franchises, or <br/> (iii) any other domestic cricket tournament/league, or tournament franchise/team (other than where specifically stated).<br/>  UCF acknowledges that the ICC, BCCI/IPL and its franchises, respective national cricket boards, domestic tournament organisers and franchises/teams, respectively, own all proprietary names and marks relating to the relevant tournament or competition.
          </div>
      
         
        </q-toolbar-title>
       
      
      </q-toolbar>
    </q-layout-footer>
</template>
<script>
export default {
  methods:{
     showNotification () {
      this.$q.notify('Site under construction!')
    },
    gotoAbout(){
        this.$router.push({name:'AboutUs'})
    },
    gotoFAQ(){
        this.$router.push({name:'FAQ'})
    },
    gotoFantasyCricketLegalities(){
        this.$router.push({name:'FantasyCricketLegalities'})
    }
  }
}
</script>
<style>

</style>
