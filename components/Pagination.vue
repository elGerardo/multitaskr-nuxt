<template>
    <div>
        <b-row class="py-3 px-3">
            <b-col cols="8">
                <b-form-input
                    v-model="form.search"
                    type="search"
                    placeholder="search pokemon"
                    required
                ></b-form-input>
            </b-col>
            <b-col>
                <b-form-select
                    v-model="form.limit"
                    :options="[20, 40, 60, 80, 100]"
                >
                </b-form-select>
            </b-col>
            <b-col>
                <b-button-group>
                    <b-button
                        :disabled="form.offset == 0 || loading"
                        @click="form.offset -= form.limit"
                        >Previous</b-button
                    >
                    <b-button
                        :disabled="loading || form.offset + form.limit >= count"
                        @click="form.offset += form.limit"
                        >Next</b-button
                    >
                </b-button-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    props: ["value", "counted"],

    data() {
        let query = this.$route.query;
        return {
            form: {
                limit: query.limit == undefined ? 20 : parseInt(query.limit),
                offset: query.offset == undefined ? 0 : parseInt(query.offset),
                search: query.limit ?? 0,
            },
            count: this.counted,
        };
    },

    computed:{
        loading: ({value}) => value
    },

    watch: {
        form: {
            deep: true,
            handler(value) {
                this.$emit("input", true);
                this.$router.push({
                    query: value,
                });
                
            },
        },
        
    },
};
</script>
