<template>
  <div class="container">
    <v-table fixed-header>
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">CNPJ</th>
          <th class="text-left">Estado</th>
          <th class="text-left">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hotel in hotels" :key="hotel.id">
          <td>{{ hotel.nome }}</td>
          <td>{{ hotel.cnpj }}</td>
          <td>{{ hotel.estado }}</td>
          <td>
            <button>
              <router-link :to="hotel.linkEdit"
                ><v-icon icon="mdi-pencil"></v-icon
              ></router-link>
            </button>
            <button>
              <router-link :to="hotel.linkPath"
                ><v-icon icon="mdi-eye"></v-icon
              ></router-link>
            </button>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  name: "ListHotel",
  props: {
    hotels: Array,
  },
  data() {
    return {
      filteredHotel: [],
    };
  },
  methods: {},
  filters: {},
  mounted() {},
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
}

a {
  text-decoration: none;
  color: black;
}

a i {
  margin: 0 2px;
}
</style>
