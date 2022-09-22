export const state = () => ({
    items: {
        results: [],
    },
});

export const getters = {
    items: (state) => state.items,
};

export const mutations = {
    items(state, data) {
        state.items = data;
    },
};

export const actions = {
    async get({ commit }, params) {
        let response = await this.$axios.get(
            "https://pokeapi.co/api/v2/location",
            {
                params: params,
            }
        );
        commit("items", response.data);
    },
};
