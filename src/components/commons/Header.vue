<template>
      <q-toolbar
        color="primary"
       
        :inverted="$q.theme === 'ios'"
        glossy
      >
        <q-toolbar-title>
          <img src='../../assets/UCF_logo.png' class='logo_styl'/>
        </q-toolbar-title>
        <a class='header-links' @click="showNotification">Live Scores</a>
        <a class='header-links' @click="showNotification">Verify</a>
        <a class='header-links'>
          <q-btn-dropdown
            color="secondary"
            label="dhruv@quatra.com"
          >
        <q-list link>
          <q-item  v-close-overlay @click.native="showNotification">
            <q-item-side icon="person" inverted color="primary" />
            <q-item-main>
              <q-item-tile label>Edit Profile</q-item-tile>
              <q-item-tile sublabel>Change profile details so we understand you better</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
          <q-item  v-close-overlay @click.native="showNotification">
            <q-item-side icon="lock" inverted color="primary" />
            <q-item-main>
              <q-item-tile label>Change Password</q-item-tile>
              <q-item-tile sublabel>Change password regularly! Give hackers a hard time with us</q-item-tile>
            </q-item-main>
            <q-item-side right icon="priority high" color="amber" />
          </q-item>
          <q-item-separator inset />
          <q-list-header inset>Money</q-list-header>
          <q-item v-close-overlay @click.native="showNotification">
            <q-item-side icon="mood" inverted color="secondary" />
            <q-item-main>
              <q-item-tile label>Wallet</q-item-tile>
              <q-item-tile sublabel>See details of your wallet</q-item-tile>
            </q-item-main>
            <q-item-side right icon="attach money" color="amber" />
          </q-item>
          <q-item v-close-overlay @click.native="showNotification">
            <q-item-side icon="all inclusive" inverted color="secondary" />
            <q-item-main>
              <q-item-tile label>Withdraw</q-item-tile>
              <q-item-tile sublabel>Minimum withdraw of ₹ 200</q-item-tile>
            </q-item-main>
            <q-item-side right icon="widgets" color="amber" />
          </q-item>
          <q-item v-close-overlay @click.native="showNotification">
            <q-item-side icon="loupe" inverted color="secondary" />
            <q-item-main>
              <q-item-tile label>Add Money</q-item-tile>
              <q-item-tile sublabel>Add money to make bets</q-item-tile>
            </q-item-main>
            <q-item-side right icon="graphic eq" color="amber" />
          </q-item>
        
          <q-item-separator inset />
           <q-item v-close-overlay @click.native="showNotification">
            <q-item-side icon="vpn_key" inverted color="negative" />
            <q-item-main>
              <q-item-tile label>Logout</q-item-tile>
              <q-item-tile sublabel>Logout of the account</q-item-tile>
            </q-item-main>
            <q-item-side right icon="mood bad" color="amber" />
          </q-item>
        </q-list>
      </q-btn-dropdown>
        </a>
      </q-toolbar>

</template>

<script>
export default {
   methods: {
    
     showNotification () {
      this.$q.notify('Site under construction')
    }
  }
}
</script>
<style>

</style>