<template>
  <layout>
    <div v-if="loading" class="container">
      <loading class="loader"></loading>
    </div>
    <div v-else class="container">
      <h1>Posts Index</h1>
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
      posts: null
    }
  },
  computed: {
    ...mapGetters('post', [
      'getDetailData'
    ])
  },
  mounted () {
    this.$store.dispatch('post/all')
      .then(data => {
        this.posts = data
        console.log(data)
        this.loading = false
      })
      .catch(error => {
        this.loading = false
        swal('Failed', error.message, 'error')
      })
  },
  methods: {
    ...mapActions('post', [
      'setDetailData'
    ])
  }
}
</script>
