<template lang="">
  <img
    @mouseover="toggleTooltip()"
    @mouseleave="toggleTooltip()"
    :src="props.icon.image"
    :alt="props.icon.alt"
  />
  <p class="tooltip" v-if="showTooltip && props.icon.name">{{ props.icon.name }}</p>
</template>

<script setup lang="ts">
import { Ref } from "vue"

const props = defineProps(["icon"])
let showTooltip: Ref<boolean> = ref(false)

function toggleTooltip(): void {
  showTooltip.value = !showTooltip.value
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  max-height: 40px;
  transition: 0.5s;
}

img:hover {
  transition: 0.5s;
  transform: scale(1.2);
}

.tooltip {
  position: absolute;
  background-color: black;
  color: white;
  font-size: 12px;
  padding: 2px 5px;
  z-index: 1;
  text-align: center;
  left: 20px;
  bottom: 35px;
  width: max-content;
}
</style>
