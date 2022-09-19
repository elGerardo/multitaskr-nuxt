export const state = () => ({
    //declarar variables
    user:{

    }
});

export const getters = {
    //tomar variables

    user: (state) => state.user,
};

export const mutations = {
    user(state, data) {
        state.user = data;
    },
};

export const actions = {
    create(state,param) {
        return this.$axios.post(
            "https://develop.gomultitaskr.com/deals/users",
            param
        );
    },
};
