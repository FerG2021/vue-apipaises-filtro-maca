import { createStore } from 'vuex'

export default createStore({
  state: {
    // array de todos los paises
    paises: [],
    // array de los paises filtrados
    paisesFiltrados: []
  },
  mutations: {
    setPaises(state, payload){
      state.paises = payload
    },

    setPaisesFiltrados(state, payload){
      state.paisesFiltrados = payload
    }
  },
  actions: {
    // funcion que consume la api de paises
    async getPaises({commit}){
      try {

        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        // console.log(data)
        commit('setPaises', data)

      } catch (error) {
      
        console.log(error)
      
      }
    },

    // filtrar paises por region
    filtrarRegion({commit, state}, region){
      const filtro = state.paises.filter(pais =>{
        return pais.region.includes(region)
      })

      commit('setPaisesFiltrados', filtro)
    },

    // buscador en tiempo real
    filtroNombre({commit, state}, texto){
      // coloco todo lo que ingresa el usuario en minuscula
      const textoCliente = texto.toLowerCase()
      // recorro cada uno de los paises para ver si su nombre coindice con el input ingresado por el cliente
      const filtro = state.paises.filter(pais => {
        // paso el texto del nombre del pais que esta en la api a minuscula
        const textoAPI = pais.name.common.toLowerCase()

        // pregunto si el texto que se ingreso se encuentra en el nombre del pais
        if (textoAPI.includes(textoCliente)) {
          return pais
        }
      })

      commit('setPaisesFiltrados', filtro)
    }
  },
  getters:{
    // los getters siempre deben tener un valor de retorno
    topPaisesPoblacion(state){
      // con el sort ordeno los paises por poblacion
      return state.paisesFiltrados.sort((a, b) =>{
        return a.population < b.population ? 1 : -1
      })
    }
  },
  modules: {
  }
})
