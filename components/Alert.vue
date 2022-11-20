<template>
  <div class="alert" :class="props.color">
    <div class="alert-message">
      {{ props.message }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["message", "color"])
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  bottom: 30px;
  right: 50px;
  width: 250px;
  height: 50px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 5px 5px 10px;
}

.green {
  border: 1px solid $greenAlertText;
  color: $greenAlertText;
}

.red {
  background-color: $redAlertBackground;
  border: 1px solid $redAlertText;
  color: $redAlertText;
  box-shadow: $redShadow;
}

.orange {
  background-color: $orangeAlertBackground;
  border: 1px solid $orangeAlertText;
  color: $orangeAlertText;
  background-image: none;
}
</style>
