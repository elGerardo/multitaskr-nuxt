<template>
    <b-container>
        <h2>Pokemon Abilities</h2>
        <div>
            <b-list-group>
                <b-list-group-item
                    v-for="item in pokemon.abilities"
                    :key="item.ability.name"
                >
                    <NuxtLink :to="`/abilities/${item.ability.name}`">
                        <p>{{ item.ability.name }}</p>
                    </NuxtLink>
                </b-list-group-item>
            </b-list-group>
        </div>
    </b-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    async fetch({ store, params }) {
        await store.dispatch("pokemons/find", params.pokemon);
    },

    computed: {
        ...mapGetters({
            pokemon: "pokemons/pokemon",
        }),
    },
};
</script>
