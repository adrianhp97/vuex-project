<template>
  <layout>
    <div class="container">
      <div class="album-list-wrapper">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Albums</h4>
            <div class="row">
              <div class="col-sm-12 col-md-3 card-margin" v-for="photo in photos" :key="photo.id">
                <photo-cube :data="photo"></photo-cube>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="detailModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <detail ref='detail'></detail>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import {mapGetters} from 'vuex'
import Detail from '../Photos/Detail'
import PhotoCube from '../Photos/PhotoCube'

export default {
  props: ['data'],
  components: {
    Detail,
    PhotoCube
  },
  data () {
    return {
      photos: null
    }
  },
  computed: {
    ...mapGetters('photo', [
      'getDetailData'
    ])
  },
  mounted () {
    const params = {
      albumId: this.$route.params.id
    }
    this.$store.dispatch('photo/get', params)
      .then(data => {
        this.photos = data.data
      })
      .catch(error => {
        swal('Failed', error.message, 'error')
      })
  },
  methods: {}
}
</script>
