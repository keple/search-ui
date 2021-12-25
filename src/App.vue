<template>
  <div>
    <header-component/>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <Menu/>
        </div>
        <div class="col-sm-9 col-md-9 col-lg-9 col-xl-9 m-0 p-0">
          <router-view/>
        </div>

      </div>
    </div>
  </div>
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
import Menu from "@/components/Menu";
export default {
  components: {Menu, HeaderComponent}
}
</script>