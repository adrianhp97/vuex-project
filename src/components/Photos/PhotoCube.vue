<template>
  <div v-if="data !== null" class="card">
    <div class="card-body text-center mt-4">
      <a data-toggle="modal" data-target="#detailModal" :data-id="data" @click="detailClick()">
        <p><img class="img-fluid" :src="data.thumbnailUrl" :alt="data.id"></p>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['data'],
  methods: {
    ...mapActions('photo', [
      'setDetailData'
    ]),
    detailClick () {
      this.setDetailData(this.data)
      this.$refs.detail.showDetail(this.data.id)
    }
  }
}
</script>
