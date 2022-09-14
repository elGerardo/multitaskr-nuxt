export const state = () => ({//declarar variables
    items: { 
        results: [],
     },
     pokemon: null,
})

export const getters = {//tomar variables
    items: state => state.items,
    pokemon: state => state.pokemon,
}

export const mutations = {//cambiar cualquier state
    items(state, data) {
        state.items = data;
    },
    pokemon(state, data){
        state.pokemon = data;
    }
}

export const actions = {//crear funciones
    async get({commit}){
        let response = await this.$axios.get('https://pokeapi.co/api/v2/pokemon');
        commit('items', response.data);//data viene por defecto para axios
    },

    async find({commit}, pokemon){
        let response = await this.$axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon);
        commit('pokemon', response.data);
    },

    null({commit}){
        commit('pokemon', null);
    }
}