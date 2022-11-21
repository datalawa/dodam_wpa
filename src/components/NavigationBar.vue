<template>
<!--  <nav>-->
<!--      <router-link to="/">dash</router-link> |-->
<!--      <router-link to="/free">free</router-link> |-->
<!--      <router-link to="/complain">complain</router-link> |-->
<!--      <router-link to="/survey">survey</router-link>-->
    <!-- convert -->
    <!-- <a href="#/main" class="">main</a> -->
<!--  </nav>-->
  <nav class="navbar-top">
    <div class="navbar-right">
      <span class="material-icons-round">menu</span>
      <div class="navbar-title">아파트 통합 시스템</div>
    </div>
    <div class="navbar-alert">
      <span class="material-icons-outlined icon-color-button-gray">notifications</span>
    </div>
    <div class="navbar-user-left">
      <div class="navbar-user-name">userName</div>
      <div class="navbar-user-profile"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>
.navbar-top {
  background: var(--secondary-background-color);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 20px;
  gap: 19px;
}
.navbar-title {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: var(--primary-text-color);
}

.navbar-right {
  display: flex;
  flex-direction: row;
  flex: 1;
  order: 0;
  gap: 19px;
  align-items: center;
}

.navbar-alert {
  flex: none;
  order: 1;
  flex-grow: 0;
  width: 25px;
  height: 25px;
}

.navbar-user-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;

  flex: none;
  order: 2;
  flex-grow: 0;
}

.navbar-user-name {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: var(--secondary-text-color);

  flex: none;
  order: 0;
  flex-grow: 0;
}

.navbar-user-profile {
  width: 32px;
  height: 32px;

  background-image: url('../assets/test_profile.png');
  background-position: center;
  border-radius: 16px;
  background-size: 100%;

  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>