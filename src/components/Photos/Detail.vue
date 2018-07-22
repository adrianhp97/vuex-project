<template>
  <div v-if="getDetailData">
    <img class="img-fluid" :src="getDetailData.url" :alt="getDetailData.id">
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters('photo', [
      'getDetailData'
    ])
  }
}
</script>
