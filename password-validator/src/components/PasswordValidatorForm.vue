<template>
    <h1>{{ labels.FormTitle }}</h1>
    <div>
      <section class="password-form">
        <input :placeholder="labels.InputPlaceHolder" v-model="password">
        <button @click="validatePassword">{{ labels.ValidateButton_Text }}</button>
      </section>
      <span>{{ error }}</span>
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
      error: ''
    }),
    methods: {
      validatePassword (){
        if (this.password.length < 8) {
          this.error = this.errorMessages.TooShort;
        }
        if (this.password == 'password'){
          this.error = this.errorMessages.NoNumbers;
        }
      }
    }
  })

  </script>