<template>
  <div v-if="navigationData !== null" id="navigation" >
    <nav>
      <div id="home">
        <img :src="require(`~/assets/logo.png`)"  alt="Logo">
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
import NavigationData from "~/src/typings/NavigationData";

@Component
export default class Navigation extends Vue{

  navigationData: NavigationData | null = null

  async created() {
    const fetchReturn = await this.$nuxt
      .context.$content('navigation-data').fetch()

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

#navigation #navigation-entries .navigation-entry {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}

#navigation #navigation-entries .navigation-entry::after {
  position: absolute;
  content: '';
  background: rgb(233 78 27);
  background: linear-gradient(90deg, rgba(233 78 27 / 100%) 0%, rgba(191 23 34 / 100%) 100%);
  width: 100%;
  height: 0.5vh;
  transform: translateY(15px);
  border-radius: 30px;
  opacity: 0;
  transition: 0.3s;
}

#navigation #navigation-entries .navigation-entry:hover::after {
  opacity: 1;
  transform: translateY(12px);
}

</style>
