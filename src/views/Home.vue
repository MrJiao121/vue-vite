<template>
  <div class="home">
    <Navbar />
    <div class="banner">
      <h2>一个UI框架库</h2>
      <p class="actions">
        <a href="https://github.com" target="_blank">GitHub</a>
        <router-link to="/docs">开始</router-link>
      </p>
    </div>
    <!-- 
  <router-link to="/contact">go Contact</router-link> -->
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {}
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .topnav {
    padding: 5px;
    background: red;
    display: flex;
    justify-content: space-between;
    .right > li {
      float: right;
    }
    li + li {
      margin-right: 5px;
    }
  }
  .content {
    flex-grow: 1;
    display: flex;
    > aside {
      width: 200px;

      background: pink;
    }
    > main {
      flex-grow: 1;

      background: gray;
    }
  }
}
</style>
