<template>
    <div>
        <h1>index abilities</h1>
        <table>
            <thead>
                <tr>
                    <th>Ability</th>
                    <th>url</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in abilites.results">
                    <td>{{ item.name }}</td>
                    <td><NuxtLink :to="`/abilities/${item.name}`">Ver Mas</NuxtLink></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default{

        async fetch({store}){
            await store.dispatch('abilities/get');
        },


        computed:{
            ...mapGetters({
                abilites: 'abilities/items'
            })
        }


    }
</script>