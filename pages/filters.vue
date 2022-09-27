<template>
    <b-container>
        <h1>{{ "Filter" | toUpper }}</h1>
        <b-form-input type="number" v-model="n1"> </b-form-input>
        <b-form-input type="number" v-model="n2"> </b-form-input>
        <p>{{ 0 | sum(n1, n2) | fixedThree }}</p>
        <b-form-input type="date" v-model="date1"> </b-form-input>
        <p>{{ date1 | formatDate }}</p>
        <b-form-input type="date" v-model="date2"> </b-form-input>
        <p>{{ date2 | formatDate }}</p>
        <p>Difference Days: {{ date1 | differenceDate(date2) }}</p>
    </b-container>
</template>

<script>
export default {
    middleware: "auth",

    data() {
        return {
            n1: 0,
            n2: 0,
            date1: "",
            date2: "",
        };
    },
    filter: {
        //filter methods
    },
};
</script>
