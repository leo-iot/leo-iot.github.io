<template>
<div class="container" @click="notifyParent()">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-dom";

export default defineComponent({
  methods: {
    notifyParent() {
      this.$emit('activated')
    }
  }
})

</script>

<style scoped>

.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 30px;
}

.line {
  width: 100%;
  height: 15%;
  background-color: black;
  border-radius: 20px;
}

</style>
