<template>
    <b-container>
        <h2>Abilities</h2>
        <Pagination :value="form" :load="loading" />
        <b-table-simple striped hover>
            <thead>
                <tr>
                    <th>Ability</th>
                    <th>url</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in abilites.results" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>
                        <NuxtLink :to="`/abilities/${item.name}`"
                            >Ver Mas</NuxtLink
                        >
                    </td>
                </tr>
            </tbody>
        </b-table-simple>
    </b-container>
</template>
<script>
import Pagination from "../../components/Pagination.vue";
import { mapGetters } from "vuex";
import { debounce } from "lodash"
export default {
    components: { Pagination },
    async fetch({ store, route }) {
        await store.dispatch("abilities/get", route.query);
    },

    data() {
        let query = this.$route.query;
        return {
            form: {
                limit: query.limit == undefined ? 20 : parseInt(query.limit),
                offset: query.offset == undefined ? 0 : parseInt(query.offset),
                search: query.limit ?? null,
            },
            loading: false,
        };
    },

    watch: {
        form: {
            deep: true,
            handler: debounce(async function (value) {
                this.loading = false;
                this.$router.push({
                    query: value,
                });
                await this.$store.dispatch("abilities/get", value);
                this.loading = true;
            }, 2000),
        },
    },

    computed: {
        ...mapGetters({
            abilites: "abilities/items",
        }),
    },
};
</script>
