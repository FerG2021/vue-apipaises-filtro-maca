<template>
   

    <div class="card mb-2">
        <div class="card-body">
            <h5 class="card-title">{{pais.name.common}}</h5>
            <p class="text-center">
                <img :src="pais.flags.png" alt="`bandera - ${pais.name.common}`" class="img-fluid w-50">    
            </p>            
            <p class="card-text">
                <span class="badge bg-info p-3 d-block mb-1">Poblacion: {{numeroFormato(pais.population)}}</span>
                <span class="badge bg-dark d-block mb-1">Continente: {{pais.continents}}</span>                
                <span class="badge bg-dark d-block mb-1">Capital: {{pais.capital}}</span>
                <!-- <span class="badge bg-dark d-block mb-1">Moneda oficial: {{pais.currencies.UYU.name}}</span> -->

            </p>   
        </div>
    </div>
</template>

<script>
    export default {
        props: ['pais'],
        setup(props) {
            // funcion para agregar puntos a los numeros
            const numeroFormato = (num) =>{
                return new Intl.NumberFormat('de-DE').format(num)
            }

            return {numeroFormato}
        }
    }
</script>