<template>
    <b-container>
        <h2>Locations</h2>
        <Pagination v-model="loading" :counted="count" />
        <b-table-simple striped hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Url</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(location, index) in locations.results"
                    :key="location.url"
                >
                    <td>{{ getIndex(index) }}</td>
                    <td>{{ location.name }}</td>
                    <td>{{ location.url }}</td>
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
        await store.dispatch("locations/get", route.query);
    },

    data() {
        return {
            loading: false,
            count:
                this.locations == undefined
                    ? 0
                    : parseInt(this.locations.count),
        };
    },

    computed: {
        ...mapGetters({
            locations: "locations/items",
        }),
    },

    watch: {
        "$route.query": {
            deep: true,
            handler: debounce(async function (value) {
                await this.$store.dispatch("locations/get", value);
                this.loading = false;
            }, 2000),
        },
    },

    created() {
        this.count = this.locations.count;
    },

    methods: {
        getIndex(value) {
            let offset = this.$route.query.offset ?? 0;
            return value + 1 + parseInt(offset);
        },
    },
};
</script>
