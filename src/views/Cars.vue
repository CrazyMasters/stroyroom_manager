<template>
  <div class="cars">
    <div class="cars_wrapper">
        <CarsInfo />
        <CarsArray />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import CarsInfo from '@/components/cars/CarsInfo.vue';
import CarsArray from '@/components/cars/CarsArray.vue';

export default defineComponent({
  name: 'Cars',
  components: {
    CarsInfo,
    CarsArray,
  },
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  mounted() {
  },
});
</script>
<style lang="scss">
@import '../scss/Cars.scss';
</style>