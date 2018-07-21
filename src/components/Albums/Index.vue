<template>
  <layout>
    <div v-if="loading" class="container">
      <loading class="loader"></loading>
    </div>
    <div v-else class="container">
      <h1>albums Index</h1>
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
      albums: null
    }
  },
  computed: {
    ...mapGetters('album', [
      'getDetailData'
    ])
  },
  mounted () {
    this.$store.dispatch('album/all')
      .then(data => {
        this.albums = data
        console.log(data)
        this.loading = false
      })
      .catch(error => {
        this.loading = false
        swal('Failed', error.message, 'error')
      })
  },
  methods: {
    ...mapActions('album', [
      'setDetailData'
    ])
  }
}
</script>
