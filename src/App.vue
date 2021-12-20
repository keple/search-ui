<template>

  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">My Title</span>
    </md-app-toolbar>

    <md-app-drawer md-permanent="full">
      <md-toolbar class="md-transparent" md-elevation="0">
        Navigation
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>

    </md-app-content>
  </md-app>

</template>

<script>
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import VueMaterial from 'vue-material'

export default {
  install : (app , options) => {

    app.provide(VueMaterial , options);
  },

  name: 'App',

  components: {

  }
}
</script>

<style>
  @import "./assets/globalCss/globalCss.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#logo {
  width: 70px;
  height:60px;
  
}
</style>
