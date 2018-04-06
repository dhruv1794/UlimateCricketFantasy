<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <app-header/>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
     
    }
  },
  methods: {
    openURL
    
  }
}
</script>

<style>
</style>


<script>
import { openURL } from 'quasar'
import Header from '../components/Header.vue'

export default {
  name: 'LayoutDefault',
  data () {
    return {
     
    }
  },
  components:{
    'app-header':Header
  },
  methods: {
    openURL,
     showNotification () {
      this.$q.notify('Site under construction!')
    }
  }
}
</script>

<style>
</style>
