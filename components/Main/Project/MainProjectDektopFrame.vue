<template>
  <div class="desktop">
    <div class="desktop_frame">
      <img :src="props.framePicture" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["framePicture"])
</script>

<style lang="scss" scoped>
.desktop {
  height: 100%;

  &:before {
    content: "";
    display: block;
    position: relative;
    background: #222;
    width: 100px;
    height: 40px;
    top: 322px;
    left: 175px;
  }

  &:after {
    content: "";
    display: block;
    position: relative;
    background: #333;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    width: 270px;
    height: 15px;
    top: 40px;
    left: 90px;
  }

  &_frame {
    width: 415px;
    height: 250px;
    overflow-y: scroll;
    border: solid 1em #333;
    border-radius: 0.5em;

    img {
      width: 400px;
    }

    &::-webkit-scrollbar {
      width: 15px;
    }

    &::-webkit-scrollbar-thumb {
      background: #666;
    }
  }
}

::-webkit-scrollbar-track {
  background-color: #888;
}

@media screen and (max-width: 1030px) {
  .desktop {
    margin: 4vh auto;
  }
}

@media screen and (max-width: 450px) {
  .desktop {
    &:before {
      width: 80px;
      height: 30px;
      top: 262px;
      left: 130px;
    }

    &:after {
      width: 200px;
      height: 15px;
      top: 30px;
      left: 70px;
    }

    &_frame {
      width: 310px;
      height: 200px;

      img {
        width: 295px;
      }
    }
  }
}
</style>
