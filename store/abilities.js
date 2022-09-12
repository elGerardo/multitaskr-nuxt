export const state = () => ({//declarar variables
    items: {
        results: []
    },
    ability: null
})

export const getters = {//tomar variables
    items: state => state.abilities,
    ability: state => state.ability
}

export const mutations = {
    items(state, data) {
        state.abilities = data;
    },
    ability(state, data) {
        state.ability = data;
    },
}

export const actions = {
    async get({commit}){
        let response = await this.$axios.get('https://pokeapi.co/api/v2/ability');
        commit('items', response.data);
    },

    async find({commit}, ability){
        let response = await this.$axios.get('https://pokeapi.co/api/v2/ability/' + ability);
        commit('ability', response.data);
    },
}