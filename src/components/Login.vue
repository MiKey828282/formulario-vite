<template>
    <div>
      <h2>Login</h2>
      <button @click="irAlFormulario">Ir al Formulario</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      irAlFormulario() {
        this.$router.push('/formulario');
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    background-color: #01c38d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  