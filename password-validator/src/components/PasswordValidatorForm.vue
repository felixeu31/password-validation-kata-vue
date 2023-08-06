<template>
    <h1>Password Validator</h1>
    <div>
      <section class="password-form">
        <input placeholder="Introduce tu contraseña" v-model="password">
        <button @click="validatePassword">Enviar consulta</button>
      </section>
      <span>{{ error }}</span>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    data: () => ({
      password: '',
      error: ''
    }),
    methods: {
      validatePassword (){
        if (this.password.length < 8) {
          this.error = 'Password should have at leat 8 characters';
        }
      }
    }
  })
  </script>