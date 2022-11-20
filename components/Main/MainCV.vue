<template>
  <div class="section cv-section reveal" id="cv">
    <h2 class="section-title">CV</h2>
    <div class="cv-section_content">
      <a href="~/assets/Konrad_Mendzelewski_-_Frontend_Developer-2.pdf" target="_blank">
        <div class="cv-section_content-box">
          <Icon name="mdi:file-pdf" size="130" />
          <p>Download my CV</p>
        </div>
      </a>
      <!-- <div class="divider"></div>
      <div class="cv-section_content-box">
        <Icon name="mdi:web" size="100" />
        <p>Check my Virtual CV</p>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.cv-section {
  padding-top: 2vh;
  background-color: black;
  width: 100%;
  text-align: center;

  &_content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;

    a {
      color: $secondary;
      text-decoration: none;
    }

    &-box {
      margin: 20px 50px;
      width: 10vw;
      animation: heartbeat 4s ease-out 3s infinite normal forwards;
    }
  }
}

.divider {
  height: 200px;
  margin: 20px;
}

@media  screen and (max-width: 600px) {
  .cv-section_content-box {
    margin: 0;
    width: 100%;
  }
}
</style>
