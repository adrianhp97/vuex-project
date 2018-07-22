<template>
  <layout>
    <div class="container">
      <profile :data="user"></profile>

      <div v-if="albumList !== null" class="album-list-wrapper">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Albums</h4>
            <album-cube :data="album" :uid="user.id" v-for="album in albumList" :key="album.id"></album-cube>
          </div>
        </div>
      </div>

      <div v-if="postList !== null" class="post-list-wrapper">
        <div class="card">
          <div class="card-body row">
            <h4 class="card-title">Posts</h4>
            <div class="col-sm-12 col-md-4 card-margin" v-for="post in postList" :key="post.id">
              <post-cube :data="post" :uid="user.id"></post-cube>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import {mapGetters} from 'vuex'
import AlbumCube from '../Albums/AlbumCube'
import Profile from './Profile'
import PostCube from '../Posts/PostCube'

export default {
  components: {
    AlbumCube,
    Profile,
    PostCube
  },
  data () {
    return {
      user: null,
      albumList: null,
      postList: null
    }
  },
  computed: {
    ...mapGetters('user', [
      'getDetailData'
    ])
  },
  mounted () {
    this.$store.dispatch('user/detail', this.$route.params.uid)
      .then(data => {
        this.user = data.data
      })
      .catch(error => {
        swal('Failed', error.message, 'error')
      })
    const params = {
      userId: this.$route.params.uid
    }
    this.$store.dispatch('album/get', params)
      .then(data => {
        this.albumList = data.data
      })
      .catch(error => {
        this.isLoading = false
        swal('Failed', error.message, 'error')
      })
    this.$store.dispatch('post/get', params)
      .then(data => {
        this.postList = data.data
      })
      .catch(error => {
        this.isLoading = false
        swal('Failed', error.message, 'error')
      })
  },
  methods: {}
}
</script>
