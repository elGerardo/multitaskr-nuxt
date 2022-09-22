export const state = () => ({
    //declarar variables
    items: {
        results: [],
    },
    pokemon: null,
});

export const getters = {
    //tomar variables
    items: (state) => state.items,
    pokemon: (state) => state.pokemon,
};

export const mutations = {
    //cambiar cualquier state
    items(state, data) {
        state.items = data;
    },
    pokemon(state, data) {
        state.pokemon = data;
    }
};

export const actions = {
    //crear funciones
    async get({ commit }, params) { // dentro de los parametros de la funcion, el primero siempre es el contexto
        //        let query =  Object.keys(params).map( key => key + '=' + params[key] ).join('&');
        let response = await this.$axios.get(
            "https://pokeapi.co/api/v2/pokemon",
            {
                params: params,
            }
        );
        commit("items", response.data);//data viene por defecto para axios
    },

    async find({ commit }, pokemon) {
        let response = await this.$axios.get(
            "https://pokeapi.co/api/v2/pokemon/" + pokemon
        );
        commit("pokemon", response.data);
    },
};
