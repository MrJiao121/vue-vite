<template>
  <div class="docs">
    <Navbar />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ul>
          <li></li>
        </ul>
      </aside>
      <main></main>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
export default {}
</script>
<style lang="scss">
.docs {
  .content {
  }
}
</style>
