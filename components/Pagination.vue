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
                        @click="form.offset -= form.limit, loading = true"
                        >Previous</b-button
                    >
                    <b-button
                        :disabled="loading"
                        @click="form.offset += form.limit, loading = true"
                        >Next</b-button
                    >
                </b-button-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { debounce } from "lodash";
export default {
    props: ["value"],

    data() {
        return {
            form: this.value,
            loading: false,
        };
    },

    watch: {
        form: {
            deep: true,
            handler(value) {
                this.loading = true;
                this.$emit("input", value);
            },
        },
        loading: {
            handler: debounce(function(value) {
                this.loading = false;
            }, 2000),
        },
    },
};
</script>
