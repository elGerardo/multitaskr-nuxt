import Vue from "vue";
import { mapGetters } from "vuex";

Vue.mixin({
    methods:{
        hasError(property) {
            return this.errors.hasOwnProperty(property) ? false : null;
        },
        clearError(event){
            console.log(event.target.name);
            this.$store.commit("clearError", event.target.name)
        },
    },
    computed: {
        ...mapGetters({
            user: "user",
            errors: "errors",
        }),
    },
});





