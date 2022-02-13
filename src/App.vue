<template>
  <div style="height:100%">
    <header-component/>

    <div class="container-fluid fill-height">
      <div class="d-flex h-100 align-items-stretch">
        <div class="w-25 h-100">
            <Menu/>
        </div>
        <div class="w-75">
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
import ApiList from '@/api/ApiRequest';
export default {

  components: {
    Menu, HeaderComponent
  },
  data : () => {
    return  {};
  },
  methods : {
    initUser : () => {
       ApiList.global.getUserInfo().then(function(res) {
         console.log("returned obj" , res);
       })
      .catch(function(err){
        console.error(err);
      })
    }
  },
  mounted : function(){
    this.initUser();
  },
  //life cycle

}
</script>