<template>
  <q-card class='game-tile-card'>
  <q-card-title>
    {{information.title}}
  </q-card-title>
  <q-card-separator />
  <q-card-main>
    <p>Pay:{{information.pay_amount}}</p>
    <p>{{information.total_players}} / {{information.total_allowed}}</p>
    <p class='game-tile-icon-layer'>
        <q-icon name='monetization on' color='neutral' v-if='information.paid'></q-icon>
        <q-icon name='block' color='neutral' v-if='information.CANCEL' >
            <q-tooltip>These contest wont cancel!</q-tooltip>
        </q-icon>
        <q-icon name='supervisor account' color='neutral' v-if='information.MULTIPLE'>
            <q-tooltip>Multiple enteries allowed </q-tooltip>
        </q-icon>
    </p>
  </q-card-main>
   <q-card-actions>
        <q-btn  color='primary'>Join</q-btn>
       
      </q-card-actions>
    </q-card>
</template>
<script>
export default {
    props:[
        'information'
    ]
}
</script>
<style lang="stylus">

</style>
