<template>
  <div class="device-switcher">
    <div
      class="icon-wrapper mobile-switcher active"
      @click="$emit('device-switched', true)"
    >
      <Icon name="ph:device-mobile" size="24" />
    </div>
    <div
      class="icon-wrapper desktop-switcher"
      @click="$emit('device-switched', false)"
    >
      <Icon name="ph:desktop-tower-light" size="24" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.device-switcher {
  display: flex;

  .icon-wrapper {
    background-color: black;
    width: 50px;
    text-align: center;
    padding: 5px;
    border: 1px solid white;
    cursor: pointer;
  }

  .mobile-switcher {
    border-radius: 5px 0px 0px 5px;
  }
  .desktop-switcher {
    border-radius: 0px 5px 5px 0px;
  }

  .mobile-switcher:hover,
  .desktop-switcher:hover,
  .active {
    background-color: $secondary;
    color: black;
  }
}
</style>
