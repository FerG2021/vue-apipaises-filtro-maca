<template>
    <div class="text-center">
        <h3>Filtrar por Continentes</h3>
        <div class="btn-group mb-3" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-dark" @click="filtro('Americas')">AM</button>
            <button type="button" class="btn btn-dark" @click="filtro('Europe')">EU</button>
            <button type="button" class="btn btn-dark" @click="filtro('Asia')">AS</button>
            <button type="button" class="btn btn-dark" @click="filtro('Oceania')">OC</button>
            <button type="button" class="btn btn-dark" @click="filtro('Africa')">AF</button>
            <button type="button" class="btn btn-dark" @click="filtro('')">TODOS</button>    
        </div>  
    </div>
</template>

<script>
import { useStore } from 'vuex'
    export default {
        setup(props) {
            // tomo los datos de la tienda
            const store = useStore()

            // funcion filtrar los paises
            const filtro = (region) => {
                store.dispatch('filtrarRegion', region)
            }

            return {filtro}
        }
    }
</script>