<template>
  <InProgress />
</template>

<script lang="ts">
import Vue from 'vue'
import InProgress from "~/components/InProgress.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {InProgress},
})
</script>
