<template>
  <div class="card card-post">
    <div class="card-body text-center mt-4">
      <h4 class="card-title">{{ data.title }}</h4>
      <p class="card-text">{{ shortContent(data.body) }}</p>
      <router-link :to="'/user/' + uid + '/post/' + data.id" class="btn btn-primary btn-sm" @click="setSelectedData(data)">
        More
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  props: ['uid', 'data'],
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
    }
  }
}
</script>
