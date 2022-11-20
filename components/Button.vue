<template>
    <button class="button" :class="props.color">
        <span></span>
        <Icon v-if="props.icon" :name="props.icon" size="20" class="button_icon"/>
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps(['color', 'icon'])
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;1,400&display=swap');

.button {
    padding: 10px 15px;
    margin: 5px 10px;
    border: none;
    border-radius: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Rubik', sans-serif;
    color: $white;
    overflow: hidden;
    transition: 0.5s;
    position: relative;

    &_icon {
        margin-right: 5px;
    }
}

.button span {
    position: absolute;
    top: 0;
    left: -110%;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.4);
    transform: skewX(10deg);
    transition: 0.5s;
}

.button:hover {
    transform: scale(1.1);
}

.button:hover span{
   left: 110%;
}

@media screen and (max-width: 450px) {
    .button {
        font-size: 11px;
    }
}

@media screen and (max-width: 350px) {
    .button {
        font-size: 10px;
        padding: 8px 10px;
        margin: 5px 7px;
    }
}

.blue {
    background-image: $darkBlue;
    box-shadow: 1px 1px 5px $blueShadow;
}

.orange {
    background-image: $reddishOrange;
    box-shadow: 1px 1px 5px $redShadow;
}

.green {
    background-image: $darkGreen;
    box-shadow: 1px 1px 5px $greenShadow;
}
</style>