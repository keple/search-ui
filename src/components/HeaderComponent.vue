<template>
  <div id="nav" class="navbar sticky-top navbar-expand-lg bg-dark text-white no-padding">
    <div class="container-fluid">
      <div class="w-25 h-100">
        ??
      </div>
      <div class="d-flex justify-content-center align-items-center me-md-5 pointer" >
        <div id="avatar" class="d-flex justify-content-center bg-white m-2 " >
          <img id="avatar-img" class="w-100 h-100" src="@/assets/logo.png">
        </div>
        <div class="d-inline">
          <li class="nav-item dropdown">
            <a class="dropdown-toggle text-white" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">avatar</a>
            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end text-white">
              <li><a class="dropdown-item text-white" href="/profile">프로필수정</a></li>
              <li><hr class="dropdown-divider"></li>
              <li class="p-2">
                <button class="btn btn-danger">로그아웃</button>
              </li>
            </ul>
          </li>
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