<template>
  <div class="project" v-for="project in projects">
    <div class="project_info">
      <div class="project_info-name">{{ project.name }}</div>
      <div class="project_info-section">
        <div class="project_info-section-label">Description</div>
        <div class="project_info-section-description">
          {{ project.description }}
        </div>
      </div>
      <div class="project_info-section">
        <div class="project_info-section-label">Tech Stack</div>
        <div class="project_info-section-icons">
          <div class="icon" v-for="icon in project.stackIcons">
            <CustomIcon :icon="icon" />
          </div>
        </div>
      </div>
      <div class="project_info-buttons">
        <div style="display: flex">
          <a v-if="project.websiteLink" :href="project.websiteLink" target="_blank">
            <Button color="blue" icon="mdi:web">Website</Button>
          </a>
          <a :href="project.repoLink" target="_blank">
            <Button color="orange" icon="mdi:github">Repo</Button>
          </a>
        </div>
        <div>
          <Button
            color="green"
            icon="majesticons:checkbox-list-detail"
            v-if="project.moreDetailsLink"
            >More Details</Button
          >
        </div>
      </div>
    </div>
    <MainProjectPreviewBox
      :mobilePreview="project.mobilePreview"
      :desktopPreview="project.desktopPreview"
      :projectName="project.name"
    />
  </div>
</template>

<script setup lang="ts">
import { Project } from "@/interfaces/project"
import { PROJECTS } from "~~/assets/portfolio-data"

const projects: Project[] = PROJECTS
</script>

<style lang="scss">
.project {
  display: flex;
  width: 60vw;
  border: 10px solid black;
  border-radius: 10px;
  height: 600px;
  margin-bottom: 20vh;

  &_info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 60%;
    padding: 10px;

    &-name {
      font-size: 30px;
      color: white;
      font-weight: bold;
    }

    &-section {
      &-label {
        margin-bottom: 20px;
        font-size: 20px;
        color: white;
      }

      &-description {
        line-height: 1.5;
        white-space: pre-line;
      }

      &-icons {
        display: flex;

        .icon {
          margin: 0 8px;
          filter: grayscale(70%);
          max-width: 40px;
          max-height: 40px;
          transition: 1s;
          position: relative;
        }

        .icon:hover {
          filter: grayscale(0%);
          transform: scale(1.2);
          transition: 1s;
        }
      }
    }

    &-buttons {
      display: flex;
      justify-content: space-between;

      a {
        text-decoration: none;
      }
    }
  }
}

@media screen and (max-width: 1450px) {
  .project {
    width: 90vw;
  }
}

@media screen and (max-width: 1030px) {
  .project {
    width: 95vw;
    flex-direction: column;
    height: 100%;
    align-items: center;
    margin-bottom: 8vh;

    &_info,
    &_visualization {
      width: 95%;
      margin: 20px 0;
      padding: 20px;
    }

    &_info {
      &-section {
        &-label {
          margin-top: 20px;
          margin-bottom: 0;
        }
      }

      &-buttons {
        margin-top: 20px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .project_info-section-label {
    margin-bottom: 10px;
  }

  .project_info-buttons {
    margin-top: 40px;
  }
}
</style>
