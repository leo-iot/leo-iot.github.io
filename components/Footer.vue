<template>
  <div id="footer">
    <div id="background"></div>

    <div id="content">
      <div id="cols">
        <div class="col">
          <div class="col-content">
            <h1>Links</h1>
            <a>GitHub</a>
            <a>YouTrack</a>
            <a>3d Modell</a>
            <a>Dashboard</a>
          </div>
        </div>
        <div class="col">
          <div class="col-content">
            <h1>Content</h1>
            <a>About</a>
            <a>Preview</a>
            <a>Team</a>
            <a>Technology</a>
            <a>Architecture</a>
          </div>
        </div>
        <div class="col">
          <div class="col-content">
            <h1>Languages</h1>
            <a>English</a>
            <a>German</a>
          </div>
        </div>
        <div class="col">
          <div id="logo-container">
            <img src="~/assets/logo.png" alt="logo">
          </div>
        </div>
      </div>

      <div id="copyright">
        Copyright © 2022 LeoIOT
      </div>
    </div>
  </div>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Footer extends Vue {

}

</script>

<style scoped>
#footer {
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

#footer #background {
  position: absolute;
  height: 100%;
  width: 100vw;
  z-index: -1;
  border-radius: 50px 50px 0 0;
  box-shadow: 0 0 12px -4px #000;
  background: rgb(233 78 27);
  background: linear-gradient(90deg, rgba(233 78 27 / 100%) 0%, rgba(191 23 34 / 100%) 100%);
}

#footer #content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#footer #content #cols {
  position: relative;
  width: 100vw;
  display: grid;
  padding: 3vw;
  grid-template-columns: repeat(4, 1fr);
}

#footer #content #cols .col {
  display: flex;
  justify-content: center;
}

#footer #content #cols .col .col-content {
  display: flex;
  flex-direction: column;
  color: white;
  line-height: 4vh;
  font-size: 1.5vw ;
}

#footer #content #cols .col .col-content a {
  color: white;
  cursor: pointer;
  transition: all 0.5s;
}

#footer #content #cols .col .col-content a:hover {
  color: rgba(255 255 255 / 60%);
}

#footer #content #cols .col .col-content h1 {
  font-size: 2vw;
  color: white;
  cursor: pointer;
  line-height: 0.2vw;
}

#footer #content #cols .col #logo-container {
  width: 15vw;
  height: 15vw;
  border-radius: 100%;
  aspect-ratio: 1 / 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 12px -4px #000;
}

#footer #content #cols .col #logo-container img {
  width: 60%;
}

#footer #copyright {
  color: white;
  font-size: 2vw;
}

</style>
