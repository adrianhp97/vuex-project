<template>
  <router-link :to="'/user/' + uid + '/album/' + data.id" class="btn btn-primary btn-sm btn-album" @click="setSelectedData(data)">
    {{ data.title }}
  </router-link>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  props: ['uid', 'data'],
  computed: {
    ...mapGetters('album', [
      'getDetailData'
    ])
  },
  methods: {
    ...mapActions('album', [
      'setDetailData'
    ])
  }
}
</script>
