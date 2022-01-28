<template>
  <div v-if="navigationData !== null" id="navigation" >
    <nav>
      <div id="home">
        <img :src="require(`${navigationData.home.img}`)"  alt="Logo">
      </div>
      <div id="navigation-entries">
        <div v-for="navigationEntry in navigationData.entries" :key="navigationEntry.text" class="navigation-entry">
           {{ navigationEntry.text }}
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import NavigationData from "~/src/content-typings/NavigationData";

@Component
export default class Navigation extends Vue{

  navigationData: NavigationData | null = null

  async created() {
    const fetchReturn = await this.$nuxt
      .context.$content('navigation').fetch()

    this.navigationData = fetchReturn as any
  }

}
</script>

<style scoped>

#navigation {
  height: 10vh;
  background-color: black;
  font-size: 2vw;
}

#navigation nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 10vh;
  background-color: white;
  box-shadow: 0 0 12px -4px #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

#navigation #home {
  width: 10%;
  height: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
}

#navigation #navigation-entries {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

</style>
