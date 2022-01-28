<template>
<!--  <nuxt-content :document="doc"></nuxt-content>-->
  <MainPage/>
</template>

<script lang="ts">
import Vue from 'vue'
import {Context} from "@nuxt/types";

export default Vue.extend({
  name: 'IndexPage',
  components: {},
  async asyncData(context: Context): Promise<object | void> {
    const doc = await context.$content('index').fetch()

    return {
      doc
    }
  }
})
</script>
