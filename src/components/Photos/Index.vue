<template>
  <layout>
    <div v-if="loading" class="container">
      <loading class="loader"></loading>
    </div>
    <div v-else class="container">
      <h1>Photos Index</h1>
    </div>
  </layout>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import swal from 'sweetalert'

export default {
  data () {
    return {
      loading: true,
      photos: null
    }
  },
  computed: {
    ...mapGetters('photo', [
      'getDetailData'
    ])
  },
  mounted () {
    this.$store.dispatch('photo/all')
      .then(data => {
        this.photos = data
        console.log(data)
        this.loading = false
      })
      .catch(error => {
        this.loading = false
        swal('Failed', error.message, 'error')
      })
  },
  methods: {
    ...mapActions('photo', [
      'setDetailData'
    ])
  }
}
</script>
