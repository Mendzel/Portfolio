<template>
  <div id="nav" class="navbar">
    <div class="navbar_icon-container" v-for="icon in icons">
      <a :href="icon.linkDestination">
        <CustomIcon class="navbar_icon" :icon="icon" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICONS } from "~~/assets/portfolio-data";
import { Icon } from "~~/interfaces/icon"

const icons: Icon[] = ICONS

function showNavBar() {
  const navbar = document.getElementById("nav")

  if (window.scrollY >= 500) {
    navbar.classList.add("scale-in")
  }
}

window.addEventListener("scroll", showNavBar)
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 30%;
  right: 50px;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 450px;
  border: 2px solid $secondary;
  border-radius: 20px;
  z-index: 1;

  &_icon {
    &-container {
      padding: 5px 10px;
      width: 35px;
    }
  }
}

.scale-in {
  display: flex;
  animation: scaleInCenter 1s ease 0s 1 normal forwards;
}

@media screen and (max-width: 600px) {
  .scale-in {
    display: none;
  }
}
</style>
