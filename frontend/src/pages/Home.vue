<template>
  <div>
    <div class="create-reserva">
      <v-btn variant="flat" color="info"
        ><router-link to="/hotel/create/">Cadastrar Hotel</router-link></v-btn
      >
    </div>
    <ListHotel :hotels="hotels" />
  </div>
</template>

<script>
import ListHotel from "../components/ListHotel/ListHotel.vue";
import HotelServices from "../services/hotelServices";
const { listAll } = HotelServices;

export default {
  name: "Home",
  components: {
    ListHotel,
  },
  data() {
    return {
      hotels: [],
    };
  },
  methods: {
    async getListHotel() {
      const data = await listAll();
      this.hotels = data.map((hotel) => ({
        ...hotel,
        linkPath: `/hotel/${hotel.id}`,
        linkEdit: `/hotel/edit/${hotel.id}`,
      }));
    },
  },
  mounted() {
    this.getListHotel();
  },
};
</script>

<style scoped>
.create-reserva {
  margin: 20px auto;
  width: fit-content;
}
.create-reserva a {
  margin: auto;
  color: white;
  text-decoration: none;
}
</style>
