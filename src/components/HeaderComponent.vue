<template>
  <div id="nav" class="navbar sticky-top navbar-expand-lg bg-dark text-white no-padding">
    <div class="container-fluid">
      <div class="w-25 h-100">
        ??
      </div>
      <div class="d-flex justify-content-center align-items-center me-md-5">
        <div id="avatar" class="d-flex justify-content-center bg-white m-2">
          <img id="avatar-img" class="w-100 h-100" src="@/assets/logo.png">
        </div>
        <div class="d-inline">
          <span>avatar aria</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

  name: "HeaderComponent",
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  $avatar-radius : 50%;
  #nav {

  }
  #avatar {
    z-index : 999;
    width:45px;
    height:45px;
    border-radius : $avatar-radius;
  }
  #avatar-img{
    border-radius : $avatar-radius;
  }
</style>