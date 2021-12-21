<template>

  <header-component/>


    <router-view/>

</template>

<style lang="scss">
@import "~@/assets/globalCss/common.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color:#383635;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>


import HeaderComponent from "@/components/HeaderComponent";
export default {
  components: {HeaderComponent}
}
</script>