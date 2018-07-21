<template>
  <div class="profile-wrapper">
    <div class="card">
      <div class="card-body row">
        <div class="col-sm-12 col-md-3 text-center profile-left">
          <p><img class=" img-fluid" src="../../assets/img/people.png" alt="User Image"></p>
          <h4 class="card-title">{{ data.name }}</h4>
          <p class="card-text"><i class="fa fa-building-o"></i> {{ data.company.name }}</p>
          <i class="fa fa-bullseye"></i>
        </div>
        <div class="col-sm-12 col-md-9 profile-right">
          <h4 class="card-title">Profile</h4>
          <table>
            <tr>
              <td class="profile-icon"><i class="fa fa-user"></i></td>
              <td class="profile-key">Username</td>
              <td>:</td>
              <td class="profile-value">{{ data.username }}</td>
            </tr>
            <tr>
              <td class="profile-icon"><i class="fa fa-envelope"></i></td>
              <td class="profile-key">Email</td>
              <td>:</td>
              <td class="profile-value">{{ data.email }}</td>
            </tr>
            <tr>
              <td class="profile-icon"><i class="fa fa-map-marker"></i></td>
              <td class="profile-key">Address</td>
              <td>:</td>
              <td class="profile-value">{{ data.address.street }}, {{ data.address.suite }}, {{ data.address.city }}</td>
            </tr>
            <tr>
              <td class="profile-icon"><i class="	fa fa-phone"></i></td>
              <td class="profile-key">Phone</td>
              <td>:</td>
              <td class="profile-value">{{ data.phone }}</td>
            </tr>
          </table>
          <h4 class="card-title">Company</h4>
          <div>
            <p class="card-text">{{ data.company.catchPhrase }}</p>
            <p class="card-text">{{ data.company.bs }}</p>
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
