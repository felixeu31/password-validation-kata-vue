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
      <article>
        <ul>
          <li :key="validPassword" v-for="validPassword in validPasswords">{{ validPassword }}</li>
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
      errors: new Array<string>(),
      validPasswords: new Array<string>()
    }),
    methods: {
      validatePassword (){
        this.errors = new Array<string>()

        if (this.isTooShort()) {
          this.errors.push(this.errorMessages.TooShort)
        }
        if (this.doesNotHaveNumbers()){
          this.errors.push(this.errorMessages.NoNumbers)
        }

        if (this.doesNotHaveErrors()) {
          this.validPasswords.push(this.password);
        }
      },
      isTooShort(){
          return this.password.length < 8;
      },
      doesNotHaveNumbers(){
        return !this.password.match(/\d+/);
      },
      doesNotHaveErrors(){
        return this.errors.length === 0;
      }
    }
  })

  </script>