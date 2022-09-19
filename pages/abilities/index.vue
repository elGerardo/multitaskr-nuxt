<template>
    <b-container>
        <h2>Abilities</h2>
        <Pagination :counted="count" v-model="loading" />
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
        return {
            count: this.abilites == undefined ? 0 : parseInt(this.abilites.count),
            loading: false,
        };
    },

    watch: {
        '$route.query': {
            deep: true,
            handler: debounce(async function (value) {
                await this.$store.dispatch("abilities/get", value);
                this.loading = false;
            }, 2000),
        },
    },

    computed: {
        ...mapGetters({
            abilites: "abilities/items",
        }),
    },

    created(){
        this.count = this.abilites.count;
        console.log(this.count)
    }
};
</script>
