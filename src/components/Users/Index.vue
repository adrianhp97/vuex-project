<template>
  <layout>
    <div v-if="loading" class="container">
      <loading class="loader"></loading>
    </div>
    <div v-else class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4" v-for="user in users" :key="user.id">
          <card :data="user"></card>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Card from './Card'

export default {
  components: {
    Card
  },
  data () {
    return {
      loading: true,
      users: null
    }
  },
  mounted () {
    this.$store.dispatch('user/all')
      .then(data => {
        this.users = data.data
        this.loading = false
      })
      .catch(error => {
        this.loading = false
        swal('Failed', error.message, 'error')
      })
  }
}
</script>
