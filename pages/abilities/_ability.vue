<template>
    <b-container>
        <h2>Ability</h2>
        <b-card :title="ability.name">
            <b-card-text>
                {{ ability.effect_entries[1].effect }}
            </b-card-text>
            <b-button to="/abilities" variant="info">Back</b-button>
        </b-card>
    </b-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    async fetch({ store, params }) {
        await store.dispatch("abilities/find", params.ability);
    },

    computed: {
        ...mapGetters({
            ability: "abilities/ability",
        }),
    },
};
</script>
