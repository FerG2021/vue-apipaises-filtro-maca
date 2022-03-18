<template>
    <div class="row">
        <div 
            class="col-12"
            v-for="pais in paises" :key="pais.name.common"
        >
            <!-- <Card :pais="pais"/> -->
            <Card :pais="pais"/>
        </div>
    </div>
</template>

<script>
    
    import { onMounted } from '@vue/runtime-core'
    import {computed} from 'vue'
    //importo la tienda para poder usarla en el setup
    import {useStore} from 'vuex'
    import Card from './Card.vue'

    

    export default {     
        components:{
            Card
        },           
        setup(props) {
            // guardo en una constante la tienda para poder usarla
            const store = useStore()

            //guardo los paises en una const paises
            const paises = computed(() =>{ 
                // tomo de la tienda el getter que ordena los paises por poblacion
                return store.getters.topPaisesPoblacion
            })

            onMounted(async() => {
                // para ejecutar una accion del store se debe usar dispatch
                await store.dispatch('getPaises')

                // cuando se cargue la pagina filtro los paises por region
                await store.dispatch('filtrarRegion', '')
            })

            return {paises}
        }
    }
</script>