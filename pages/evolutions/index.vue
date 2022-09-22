<template>
    <b-container>
        <h2>Evolution</h2>
        <Pagination v-model="loading" :counted="count" />
        <b-table-simple striped hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Url</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(evolution, index) in evolutions.results"
                    :key="evolution.url"
                >
                    <td>{{ getIndex(index) }}</td>
                    <td>{{ evolution.url }}</td>
                </tr>
            </tbody>
        </b-table-simple>
    </b-container>
</template>
<script>
import { mapGetters } from "vuex";
import { debounce } from "lodash";
import Pagination from "../../components/Pagination.vue";
export default {
    async fetch({ store, route }) {
        await store.dispatch("evolution/get", route.query);
    },

    data() {
        return {
            loading: false,
            count:
                this.evolutions == undefined
                    ? 0
                    : parseInt(this.evolutions.count),
        };
    },

    computed: {
        ...mapGetters({
            evolutions: "evolution/items",
        }),
    },

    watch: {
        "$route.query": {
            deep: true,
            handler: debounce(async function (value) {
                await this.$store.dispatch("evolution/get", value);
                this.loading = false;
            }, 2000),
        },
    },

    created() {
        this.count = this.evolutions.count;
    },

    methods: {
        getIndex(value) {
            let offset = this.$route.query.offset ?? 0;
            return value + 1 + parseInt(offset);
        },
    },
};
</script>
