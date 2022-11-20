<template>
  <div class="phone">
    <div class="phone_frame">
      <img :src="props.framePicture" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["framePicture"])
</script>

<style lang="scss" scoped>
.phone {
  height: 35vh;
  margin: 8vh auto;
  width: auto;

  &_frame {
    height: 100%;
    position: relative;

    img {
      height: 100%;
      display: block;
      border: 1.334vh solid #111;
      border-radius: 4.5vh;
    }
  }
}

@media screen and (max-width: 1030px) {
  .phone {
    margin: 3vh auto;
  }
}
</style>
