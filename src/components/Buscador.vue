<template>
    <input type="text" name="" id=""
        class="form-control my-3"
        placeholder="Ingrese el nombre del pais"    
        v-model="texto"
        @keyup="procesarInput"
    >
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
    export default {
        setup(props) {
            const store = useStore()

            const texto = ref('')

            // funcion que recibe lo ingresado en el buscador
            const procesarInput = () =>{
                console.log(texto.value)
                store.dispatch('filtroNombre', texto.value)
            }

            return {texto, procesarInput}
        }
    }
</script>