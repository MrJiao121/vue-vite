<template>
  <div class="topnav">
    <div class="left">咕噜UI</div>
    <ul class="right">
      <li>文档</li>

      <li>捐款</li>
    </ul>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
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
</style>
