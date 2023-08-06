<template>
    <h1>{{ labels.FormTitle }}</h1>
    <div>
      <section class="password-form">
        <input :placeholder="labels.InputPlaceHolder" v-model="password">
        <button @click="validatePassword">{{ labels.ValidateButton_Text }}</button>
      </section>
      <article>
        <ul>
          <li :key="error" v-for="error in errors">{{ error }}</li>
        </ul>
      </article>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export const LABELS = {
    FormTitle: 'Password Validator',
    InputPlaceHolder: 'Introduce tu contraseña',
    ValidateButton_Text: 'Enviar consulta'
  }

  export const ERRORMESSAGES = {
    TooShort: 'Password should have at leat 8 characters',
    NoNumbers: 'Password should contain numbers'
  }

  export default defineComponent({
    data: () => ({
      labels: LABELS,
      errorMessages: ERRORMESSAGES,
      password: '',
      errors: new Array<string>()
    }),
    methods: {
      validatePassword (){
        if (this.password.length < 8) {
          this.errors.push(this.errorMessages.TooShort)
        }
        if (!this.password.match(/\d+/)){
          this.errors.push(this.errorMessages.NoNumbers)
        }
      }
    }
  })

  </script>