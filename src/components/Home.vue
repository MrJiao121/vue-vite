<template>
  <div class="home">
    <div class="topnav">
      <div class="left">咕噜UI</div>
      <ul class="right">
        <li>文档</li>

        <li>捐款</li>
      </ul>
    </div>

    <router-link to="/doc">开始</router-link>
    <div class="content">
      <aside>边栏</aside>

      <main>内容</main>
    </div>

    <!-- 
  <router-link to="/contact">go Contact</router-link> -->
  </div>
</template>
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
