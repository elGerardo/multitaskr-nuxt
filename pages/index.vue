<template>
  <table>
    <thead>
      <tr>
        <th>Pokemon</th>
        <th>Url</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pokemon in pokemons.results">
        <td>{{pokemon.name}}</td>
        <td>{{pokemon.url}}</td>
        <td>
          <NuxtLink :to="`/${pokemon.name}`">Ver mas</NuxtLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  async fetch({ store }) {//es exclusivo de 'pages'
    await store.dispatch('pokemons/get');
  },

  computed: {
    ...mapGetters({//... sirve para mezclar 
      pokemons: 'pokemons/items'
    })
  },

  mounted() {
  },

}
</script>