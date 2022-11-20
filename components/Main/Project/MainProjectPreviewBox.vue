<template>
  <div class="visualization">
    <div class="visualization-device-switcher" :id="props.projectName">
      <MainProjectDeviceSwitcher @device-switched="deviceSwitcher" />
    </div>
    <div class="visualization-frame">
      <MainProjectMobileFrame
        v-if="showMobile"
        :framePicture="props.mobilePreview"
      />
      <MainProjectDektopFrame
        v-if="!showMobile"
        :framePicture="props.desktopPreview"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue"

const props = defineProps(["mobilePreview", "desktopPreview", "projectName"])
const MOBILE_SWITCHER_CLASS = ".mobile-switcher",
  DESKTOP_SWITCHER_CLASS = ".desktop-switcher"

let showMobile: Ref<boolean> = ref(true)

function deviceSwitcher(isMobile: boolean): void {
  isMobile ? changeToMobile() : changeToDesktop()
}

function changeToMobile() {
  const element = document.getElementById(props.projectName)

  showMobile.value = true
  element.querySelector(MOBILE_SWITCHER_CLASS).classList.add("active")
  element.querySelector(DESKTOP_SWITCHER_CLASS).classList.remove("active")
}

function changeToDesktop() {
  const element = document.getElementById(props.projectName)

  showMobile.value = false
  element.querySelector(MOBILE_SWITCHER_CLASS).classList.remove("active")
  element.querySelector(DESKTOP_SWITCHER_CLASS).classList.add("active")
}
</script>

<style lang="scss">
.visualization {
  width: 40%;

  &-device-switcher {
    height: 20%;
  }

  &-frame {
    height: 80%;
    width: 100%;
    justify-content: flex-end !important;
    overflow: hidden;
  }
}

.visualization,
.visualization-device-switcher,
.visualization-frame {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
