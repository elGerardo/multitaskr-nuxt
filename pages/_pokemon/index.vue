<template>
    <div>
        <h1>Pokemon id</h1>
        <div>
            <NuxtLink v-for="item in pokemon.abilities" :to="`/abilities/${item.ability.name}`">
                <p>{{item.ability.name}}</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

    async fetch({ store, params }) {
        await store.dispatch('pokemons/find', params.pokemon);
    },

    computed: {
        ...mapGetters({
            pokemon: 'pokemons/pokemon'
        })
    },

}
</script>