<template>
  <div id="main-page">
    <NavBar />
    <MainHeroSection />
    <MainProjects />
    <MainCV />
    <MainContact />
  </div>
</template>

<script setup lang="ts">
  window.addEventListener("scroll", revealSections)

  function revealSections() {
    const elements = document.querySelectorAll(".reveal")

    elements.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top
      const revealPoint = 150;

      if(elementTop < windowHeight - revealPoint) {
        element.classList.add('show-section')
      }
    })
  }
</script>

<style lang="scss">
.header {
  text-align: center;
  font-size: 25px;
  margin: 20px 0;
}

.section-title {
  font-size: 40px;
  text-transform: uppercase;
}

.divider {
  width: 1px;
  border: 1px solid gray;
  border-radius: 20px;
}

.reveal {
  opacity: 0;
}

.show-section {
  animation: reveal 1s ease-in 0s 1 normal forwards;
}
</style>
