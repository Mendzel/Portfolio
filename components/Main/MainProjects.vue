<template>
    <div class="section projects-section reveal" id="projects">
        <h2 class="section-title">Projects</h2>
        <MainProjectSingleProject />
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.projects-section {
    margin-top: 15vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}

@media screen and (max-width: 1050px) {
    .projects-section {
        margin-top: 8vh;
    }
}
</style>