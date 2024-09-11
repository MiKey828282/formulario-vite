<template>
  <div class="form-container">
    <h2>Formulario de Registro</h2>

    <!-- Formulario -->
    <form @submit.prevent="registrarUsuario">
      <div>
        <label for="nombre">Nombre: </label>
        <input type="text" id="nombre" v-model="nuevoUsuario.nombre" />
        <p v-if="errores.nombre" style="color: red;">{{ errores.nombre }}</p>
      </div>

      <div>
        <label for="edad">Edad: </label>
        <input type="number" id="edad" v-model="nuevoUsuario.edad" />
        <p v-if="errores.edad" style="color: red;">{{ errores.edad }}</p>
      </div>

      <div>
        <label for="email">Email: </label>
        <input type="email" id="email" v-model="nuevoUsuario.email" />
        <p v-if="errores.email" style="color: red;">{{ errores.email }}</p>
      </div>

      <div>
        <p><label for="genero">Género:</label></p>
        <div class="radio-group">
          <input type="radio" id="hombre" value="Hombre" v-model="nuevoUsuario.genero" />
          <label for="hombre">Hombre</label>
          <input type="radio" id="mujer" value="Mujer" v-model="nuevoUsuario.genero" />
          <label for="mujer">Mujer</label>
        </div>
        <!-- Mensaje de error del campo género -->
        <p v-if="errores.genero" style="color: red;">{{ errores.genero }}</p>
      </div>

      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoUsuario: {
        nombre: '',
        edad: '',
        email: '',
        genero: '',
      },
      usuarios: [],
      errores: {
        nombre: '',
        edad: '',
        email: '',
        genero: '',
      },
    };
  },
  methods: {
  registrarUsuario() {
    // Reiniciar los mensajes de error
    this.errores = {
      nombre: '',
      edad: '',
      email: '',
      genero: '',
    };

    let esValido = true;

    // Validaciones
    if (!this.nuevoUsuario.nombre) {
      this.errores.nombre = 'El campo "Nombre" es obligatorio.';
      esValido = false;
    }

    if (!this.nuevoUsuario.edad) {
      this.errores.edad = 'El campo "Edad" es obligatorio.';
      esValido = false;
    }

    if (!this.nuevoUsuario.email) {
      this.errores.email = 'El campo "Email" es obligatorio.';
      esValido = false;
    }

    if (!this.nuevoUsuario.genero) {
      this.errores.genero = 'Selecciona un "Género".';
      esValido = false;
    }

    // Si es válido, agregar usuario y redirigir
    if (esValido) {
      this.usuarios.push({ ...this.nuevoUsuario });

      // Mostrar los datos en la consola
      console.log("Datos registrados:", this.nuevoUsuario);

      // Limpiar el formulario
      this.nuevoUsuario = {
        nombre: '',
        edad: '',
        email: '',
        genero: '',
      };

      // Redirigir a la página de gracias
      this.$router.push('/gracias');
    }
  }
}
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 1em;
}

.form-container {
  background: #191e29;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

form {
  margin-bottom: 20px;
}

form div {
  display: block;
  align-items: center;
  margin-bottom: 30px;
}

p {
  margin: 0;
}

label {
  margin-bottom: 0.5em;
  margin-right: 10px;
  font-weight: bold;
  width: 100px;
}

input {
  padding: 0.5em;
  margin-bottom: 1em;
  border: transparent;
  border-radius: 5px;
  background-color: #696e79;
}

button {
  padding: 0.75em;
  border: none;
  border-radius: 5px;
  background: #01c38d;
  color: white;
  font-weight: bold;
}
</style>
