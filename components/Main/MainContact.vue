<template>
  <div class="section contact-section reveal" id="contact">
    <h2 class="section-title">Contact</h2>
    <div class="contact-section_content">
      <div class="contact-section_content-box">
        <div class="email-box">
          Feel free to contact me via my email:
          <p class="email">mendzelewski.dev@gmail.com</p>
        </div>
      </div>

      <div class="contact-section_content-box">
        <form ref="form" @submit.prevent="sendEmail">
          <label for="email">Email: </label>
          <input id="email" type="text" placeholder="Email" v-model="email" />
          <label for="subject">Subject: </label>
          <input id="subject" type="text" placeholder="..." v-model="subject" />
          <label for="message">Message: </label>
          <textarea
            rows="10"
            id="message"
            placeholder="Type your message here"
            v-model="message"
          ></textarea>
          <Button color="blue" icon="ri:send-plane-line">Submit</Button>
        </form>
      </div>
    </div>

    <Alert
      v-if="isAlertVisible"
      :color="alertData.color"
      :message="alertData.message"
    />
  </div>
</template>

<script setup lang="ts">
import emailjs from "@emailjs/browser"
import { Ref } from "vue"

const email: Ref<string> = ref("")
const subject: Ref<string> = ref("")
const message: Ref<string> = ref("")
const isAlertVisible: Ref<boolean> = ref(false)
const alertData = ref({ color: "", message: "" })

function sendEmail() {
  showAlert("orange", "Sending...")

  emailjs
    .send(
      "service_aqh4g8m",
      "template_id0tacx",
      buildEmailData(),
      "btxpUM_4ZI4XCK_u5"
    )
    .then(
      (resolved) => {
        showAlert("green", "Email sent successfully!", true)
      },
      (error) => {
        showAlert("red", "Network error! Please try again later.", true)
      }
    )
  clearInputs()
}

function clearInputs() {
  email.value = ""
  subject.value = ""
  message.value = ""
}

function showAlert(color, message, requestCompleted = false) {
  alertData.value = { color, message }
  isAlertVisible.value = true

  if (requestCompleted) {
    setTimeout(() => {
      isAlertVisible.value = false
    }, 2000)
  }
}

function buildEmailData() {
  return { email: email.value, subject: subject.value, message: message.value }
}
</script>

<style lang="scss">
.contact-section {
  width: 100%;
  text-align: center;
  padding-top: 2vh;

  &_content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;

    &-box {
      width: 50%;

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2vh;

        input,
        textarea {
          width: 50%;
          margin-bottom: 20px;
          padding: 7px;
          border-radius: 6px;
          border: none;
        }

        label {
          width: 50%;
          text-align: left;
          margin: 5px 0;
          font-weight: bold;
        }
      }

      .email {
        font-weight: bold;

        &-box {
          font-size: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .contact-section {
    &_content-box {
      width: 100%;

      form {
        input,
        textarea,
        label {
          width: 80%;
        }
      }
    }
    &_content {
      flex-direction: column;
    }
  }
}

@media screen and (max-width: 1050px) {
  .contact-section {
    form {
      input,
      textarea,
      label {
        width: 80%;
      }
    }
  }
}
</style>
