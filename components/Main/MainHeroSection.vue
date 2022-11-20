<template>
  <div class="section hero-section" id="hero">
    <div class="hero-section_description">
      <div>
        <div class="hero-section_description-header">Frontend</div>
        <div class="hero-section_description-header">Developer</div>
        <div class="hero-section_description-name">Konrad Mendzelewski</div>
        <div class="hero-section_description-icons">
          <a href="https://www.linkedin.com/in/konrad-mendzelewski/" target="_blank">
            <img
              class="icon"
              src="~/assets/icons/linkedin.png"
              alt="LinkedIn Icon"
            />
          </a>
          <a href="https://github.com/Mendzel" target="_blank">
            <img
              class="icon"
              src="~/assets/icons/github.png"
              alt="GitHub Icon"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="hero-section_image">
      <img src="~/assets/Optimized-picture-of-myself.png" alt="My picture" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
@import "@/assets/animations.scss";

.hero-section {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &_description {
    width: 60%;
    margin: auto;
    text-align: center;
    border: 8px solid $secondary;
    animation: 2s slideLeft;

    &-header {
      font-size: 10vw;
    }

    &-name {
      font-size: 3vw;
      color: black;
    }

    &-icons {
      display: flex;
      justify-content: center;

      .icon {
        width: 80px;
        margin: 20px;
        filter: invert(85%) sepia(77%) saturate(565%) hue-rotate(7deg)
          brightness(58%) contrast(89%);
        animation: jello 2s ease 2s 1 normal forwards;
      }
      .icon:hover {
        cursor: pointer;
        filter: invert(85%) sepia(77%) saturate(565%) hue-rotate(7deg)
          brightness(98%) contrast(89%);
      }
    }
  }

  &_image {
    display: flex;
    width: 30vw;
    justify-content: center;
    align-items: flex-end;

    img {
      max-width: 1000px;
      max-height: 1000px;
    }
  }
}

@media screen and (max-width: 1500px) {
  .hero-section {
    &_image {
      img {
        max-width: 800px;
        max-height: 800px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .hero-section {
    height: 80vh;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    &_description {
      width: 78%;
      border: 4px solid $secondary;

      &-icons {
        .icon {
          width: 40px;
        }
      }
    }
    &_image {
      width: 20vw;
      img {
        max-width: 500px;
        max-height: 500px;
      }
    }
  }
}
</style>
