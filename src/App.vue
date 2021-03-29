<template>
  <div>
    <!-- <span> count {{ count }} </span>

    <span> object.foo {{ object.foo }} </span>
    <button @click="add">add</button> -->

    <router-view></router-view>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const object = reactive({ foo: 123 })
    /*  
    ref  相当于一个盒子  简单类型

    reactive  object是{foo:123}的代理  引用类型
    
     */
    setTimeout(() => {
      // count++
      object.foo++
    }, 3000)
    return {
      count,
      object,
    }
  },
  components: {},
  methods: {
    add() {
      this.count += 1
      this.object.foo += 1
    },
  },
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
