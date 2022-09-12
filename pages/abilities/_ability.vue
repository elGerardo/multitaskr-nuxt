<template>
    <div>
    <h1>ability</h1>
    <p>{{ability.name}}</p>
    <pre>{{ability}}</pre>
    </div>
</template>
<script>

    import { mapGetters } from 'vuex';

    export default{
        async fetch({store, params}){
            await store.dispatch('abilities/find', params.ability);
        },

        computed:{
            ...mapGetters({
                ability: 'abilities/ability',
            })
        }
    }
</script>