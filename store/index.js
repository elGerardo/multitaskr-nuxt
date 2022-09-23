export const state = () => ({
    errors: {},
});

export const getters = {
    user: (state) => state.auth.user,
    errors: (state) => state.errors,
};

export const mutations = {
    errors(state, data) {
        state.errors = data;
    },
    clearError(state, name){
        delete state.errors[name];
    }
};
//mixins son configs globales para todos los
//componentes
