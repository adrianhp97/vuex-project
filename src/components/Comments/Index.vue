<template>
  <layout>
    <div v-if="loading" class="container">
      <loading class="loader"></loading>
    </div>
    <div v-else class="container">
      <h1>comments Index</h1>
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
      comments: null
    }
  },
  computed: {
    ...mapGetters('comment', [
      'getDetailData'
    ])
  },
  mounted () {
    this.$store.dispatch('comment/all')
      .then(data => {
        this.comments = data
        console.log(data)
        this.loading = false
      })
      .catch(error => {
        this.loading = false
        swal('Failed', error.message, 'error')
      })
  },
  methods: {
    ...mapActions('comment', [
      'setDetailData'
    ])
  }
}
</script>
