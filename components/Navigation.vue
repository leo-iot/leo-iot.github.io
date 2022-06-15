<template>
  <div v-if="navigationData !== null" id="navigation">
    <nav>
      <div id="home-entry">
        <NavigationEntry :data="navigationData.home" />
      </div>
      <div id="navigation-entries">
        <NavigationEntry
          v-for="(navigationEntry, index) in navigationData.entries"
          :key="index"
          :data="navigationEntry"
          class="navigation-entry"
        />
      </div>
      <burger-menu class="burger-menu" @activated="toggleDropDown()"/>
    </nav>
    <div id="navigation-entries-drop-down" :class="dropDownExpanded ? 'drop-down-expanded' : ''">
      <NavigationEntry
        v-for="(navigationEntry, index) in navigationData.entries"
        :key="index"
        :data="navigationEntry"
        class="navigation-entry"
        @activated="toggleDropDown()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavigationData from '~/src/typings/NavigationData'
import NavigationEntry from '~/components/NavigationEntry.vue'
@Component({
  components: { NavigationEntry },
})
export default class Navigation extends Vue {
  navigationData: NavigationData | null = null
  dropDownExpanded: boolean = false

  async created() {
    const fetchReturn = await this.$nuxt.context
      .$content('navigation/navigation-data')
      .fetch()

    this.navigationData = fetchReturn as any
  }

  toggleDropDown() {
    this.dropDownExpanded = !this.dropDownExpanded
  }
}
</script>

<style scoped>
#navigation {
  width: 100vw;
  position: fixed;
  z-index: 1;
  top: 0;
  font-size: 30px;
  isolation: isolate;
}

#navigation nav {
  width: 100%;
  height: 100px;
  background-color: white;
  box-shadow: 0 0 12px -4px #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  z-index: 1;
}

#navigation #home-entry {
  margin-left: 10px;
  height: 100px;
  aspect-ratio: 19/16;
  display: flex;
  align-items: center;
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
  background: linear-gradient(
    90deg,
    rgba(233 78 27 / 100%) 0%,
    rgba(191 23 34 / 100%) 100%
  );
  width: 100%;
  height: 6px;
  transform: translateY(20px);
  border-radius: 30px;
  opacity: 0;
  transition: 0.3s;
}

#navigation #navigation-entries .navigation-entry:hover::after {
  opacity: 1;
  transform: translateY(15px);
}

.burger-menu {
  display: none;
  width: 60px;
  height: 60%;
}

#navigation-entries-drop-down {
  display: none;
  position: relative;
  width: 100%;
  transform: translateY(-500px);
  opacity: 0;
  background-color: white;
  box-shadow: 0 0 12px -4px #000;
  z-index: -1;
  transition: all 0.5s;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.drop-down-expanded {
  transform: translateY(0) !important;
  opacity: 1 !important;
}

@media (max-width: 812px) {
  #navigation #navigation-entries {
    display: none;
  }

  .burger-menu {
    display: flex;
  }

  #navigation-entries-drop-down {
    display: flex;
  }
}

</style>
