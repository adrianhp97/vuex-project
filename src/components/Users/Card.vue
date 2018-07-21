<template>
  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    <div class="mainflip">
      <div class="frontside">
        <div class="card">
          <div class="card-body text-center">
            <p><img class=" img-fluid" src="../../assets/img/people.png" alt="User Image"></p>
            <h4 class="card-title">{{ data.name }}</h4>
            <p class="card-text"><i class="fa fa-building-o"></i> {{ data.company.name }}</p>
            <i class="fa fa-bullseye"></i>
          </div>
        </div>
      </div>
      <div class="backside">
        <div class="card">
          <div class="card-body text-center mt-4">
            <h4 class="card-title">{{ data.company.name }}</h4>
            <p class="card-text">{{ data.company.catchPhrase }}</p>
            <p class="card-text"><i class="fa fa-globe"></i> {{ data.website }}</p>
            <router-link :to="'/user/' + data.id" class="btn btn-primary btn-sm">
              <i class="fa fa-info-circle"></i> Detail
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  props: ['data'],
  computed: {
    ...mapGetters('user', [
      'getDetailData'
    ])
  },
  methods: {
    ...mapActions('user', [
      'setDetailData'
    ])
  }
}
</script>
