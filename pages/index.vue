<template>
    <div class="mx-auto" style="width: 90%">
        <b-table-simple striped hover>
            <thead>
                <tr>
                    <th>Pokemon</th>
                    <th>Url</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pokemon in pokemons.results">
                    <td>{{ pokemon.name }}</td>
                    <td>{{ pokemon.url }}</td>
                    <td>
                        <b-button
                            v-b-tooltip.hover
                            :title="`Detalles de ${pokemon.name}`"
                            v-b-modal.pokemon-modal
                            variant="info"
                            @click="loadModal(pokemon.name)"
                            >Ver Pokemon</b-button
                        >
                        <NuxtLink
                            v-b-tooltip.hover
                            :title="`Habilidades de ${pokemon.name}`"
                            :to="`/${pokemon.name}`"
                            >Ver Habilidades</NuxtLink
                        >
                    </td>
                </tr>
            </tbody>
        </b-table-simple>
        <b-modal id="pokemon-modal" title="Pokemon">
            <div
                v-if="pokemon == null"
                class="text-center mb-3 d-flex justify-content-between"
            >
                <b-spinner variant="dark"></b-spinner>
            </div>
            <div v-if="pokemon != null">
                <h1>{{ pokemon.name }}</h1>
                <div>
                    <b-carousel
                        id="carousel-1"
                        :interval="4000"
                        controls
                        indicators
                        background="#dddddd"
                        img-width="1024"
                        img-height="480"
                        style="text-shadow: 1px 1px 2px #333"
                    >
                        <b-carousel-slide
                            :img-src="pokemon.sprites.front_default"
                        ></b-carousel-slide>
                        <b-carousel-slide
                            :img-src="pokemon.sprites.back_default"
                        ></b-carousel-slide>
                    </b-carousel>
                </div>
                <b-button v-b-toggle.collapse-moves variant="info"
                    >Movimientos</b-button
                >
                <b-collapse id="collapse-moves">
                    <b-card>
                        <b-list-group>
                            <b-list-group-item v-for="move in pokemon.moves" :key="move.name">
                                {{ move.move.name }}
                            </b-list-group-item>
                        </b-list-group>
                    </b-card>
                </b-collapse>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    async fetch({ store }) {
        //es exclusivo de 'pages'
        await store.dispatch("pokemons/get");
    },

    computed: {
        ...mapGetters({
            //... sirve para mezclar objetos
            pokemons: "pokemons/items",
            pokemon: "pokemons/pokemon",
        }),
    },

    methods: {
        async loadModal(pokemon) {

            this.$store.dispatch("pokemons/null");

            await setTimeout(() => {
                this.$store.dispatch("pokemons/find", pokemon);
            }, 2000);
        },
    },

    mounted() {},
};
</script>
