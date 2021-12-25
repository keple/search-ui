<template>
  <div id="behind" class="container-fluid m-0 p-0 min-vh-100 h-100 bg-light">
    <!-- header-->
    <!--profile icon-->
    <div  class="container-fluid align-content-start p-sm-5 p-md-5 p-lg-5 ">
      <div class="d-flex justify-content-start  mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5">
        <div id="avatar-big" class="bg-white">
          <img class="w-100 h-100" src="@/assets/logo.png"/>
        </div>
        <div class="mt-auto">
          <button id="upload-profile" class="bg-light btn rounded-circle p-0">
            <font-awesome-icon :icon="['fas' , 'camera']" size="3x"/>
          </button>
        </div>
      </div>
    </div>
    <div class="wrapper align-content-start">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style lang="scss" scoped>
$translateX : -100%;
  #behind {
    z-index:-1;
    background:linear-gradient(#C180F0 10%, #ffffff 32%);
  }
  .height20{
    position:static;
    z-index:1;
    min-height:14%;

  }
  #header-gradient{

  }
  #avatar-big {
    z-index:999;
    width:300px;
    height:300px;
    border-radius: 50%;


    img {
      border-radius: 50%;
    }
  }
  #upload-profile {
    position:relative;
    z-index:999;
    width:66px;
    height:66px;
    border-radius: 50%;
    transform : translateX($translateX);
  }
</style>