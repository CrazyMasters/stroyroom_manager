<template>
  <div class="proods">
    <div class="proods_wrapper">
      товары
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'Proods',
  components: {
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
@import '../scss/Proods.scss';
</style>