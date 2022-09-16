<template>
    <b-container>
        <h2>Pokemon</h2>
        <p>{{this.loading}}</p>
        <Pagination :value="form" />
        <b-table-simple striped hover>
            <thead>
                <tr>
                    <th>Pokemon</th>
                    <th>Url</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pokemon in pokemons.results" :key="pokemon.name">
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
                            <b-list-group-item
                                v-for="move in pokemon.moves"
                                :key="move.name"
                            >
                                {{ move.move.name }}
                            </b-list-group-item>
                        </b-list-group>
                    </b-card>
                </b-collapse>
            </div>
        </b-modal>
    </b-container>
</template>

<script>
import { debounce } from "lodash";
import { mapGetters } from "vuex";
import Pagination from "../components/Pagination.vue";
export default {
    components: {
        Pagination,
    },

    async fetch({ store, route }) {
        //fetch no contiene .this
        await store.dispatch("pokemons/get", route.query); //es exclusivo de 'pages'
        //        let pokemon = store.getters["pokemons/pokemon"];
    },

    data() {
        let query = this.$route.query;

        return {
            form: {
                limit: query.limit == undefined ? 20 : parseInt(query.limit),
                offset: query.offset == undefined ? 0 : parseInt(query.offset),
                search: query.limit ?? "0",
            },
        };
    },

    watch: {
        form: {
            deep: true,
            handler: debounce(async function (value) {
                this.$router.push({
                    query: value,
                });
                await this.$store.dispatch("pokemons/get", value);
            }, 2000),
        },
    },

    computed: {
        ...mapGetters({
            //... sirve para mezclar objetos o declarar funciones dentro de objetos
            pokemons: "pokemons/items",
            pokemon: "pokemons/pokemon",
        }),
    },

    methods: {
        async loadModal(pokemon) {
            this.$store.commit("pokemons/pokemon", null); //entra directamente a la mutation
            await setTimeout(() => {
                this.$store.dispatch("pokemons/find", pokemon);
            }, 2000);
        },
    },
};
</script>
