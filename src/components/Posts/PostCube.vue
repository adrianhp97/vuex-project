<template>
  <div v-if="data !== null && !isDeleted" class="col-sm-12 col-md-4 card-margin">
    <div class="card card-post">
      <div class="card-body text-center mt-4">
        <button class="btn btn btn-primary btn-sm delete-button" @click="deletePost()"><i class="fa fa-close"></i></button>
        <h4 class="card-title">{{ data.title }}</h4>
        <p class="card-text">{{ shortContent(data.body) }}</p>
        <router-link :to="'/user/' + uid + '/post/' + data.id" class="btn btn-primary btn-sm" @click="setSelectedData(data)">
          More
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  props: ['uid', 'data'],
  data () {
    return {
      isDeleted: false
    }
  },
  computed: {
    ...mapGetters('post', [
      'getDetailData'
    ])
  },
  methods: {
    ...mapActions('post', [
      'setDetailData'
    ]),
    shortContent (text) {
      if (text.length > 100) {
        return text.substr(0, text.lastIndexOf(' ', 97)) + '...'
      }
      return text
    },
    deletePost () {
      swal({
        title: 'Do you want to delete this post?',
        text: 'Once deleted, you will not be able to recover this data!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$store.dispatch('post/remove', this.data.id).then(data => {
              this.isDeleted = true
              swal('Poof! Your data has been deleted!', {
                icon: 'success'
              })
            }).catch(err => {
              swal('Failed', err.message, 'error')
            })
          }
        })
    }
  }
}
</script>
