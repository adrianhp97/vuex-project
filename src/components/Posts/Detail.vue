<template>
  <layout>
    <div class="container">
      <div v-if="formData.id !== null" class="post-list-wrapper">
        <div class="card">
          <div v-if="!isEdit" class="card-body">
            <button class="btn btn btn-primary btn-sm edit-button" @click="edit()">Edit</button>
            <h4 class="card-title">{{ formData.title }}</h4>
            <p class="card-text">{{ formData.body }}</p>
          </div>
          <div v-else class="card-body mt-4">
            <form @submit.prevent="submit">
              <div class="form-row">
                <div class="col">
                  <div :class="['form-group', {'has-error': errors.has('title')}]">
                    <label for="name">title</label>
                    <input
                      data-vv-as="title"
                      type="text"
                      name="title"
                      class="form-control"
                      v-validate="'required'"
                      v-model="formData.title">
                    <div class="text-danger" v-if="errors.has('title')">
                      {{errors.first('title')}}
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="col">
                  <input
                    type="hidden"
                    name="id"
                    class="form-control"
                    v-validate="'required'"
                    v-model="formData.id">
                </div>
                <div class="col">
                  <input
                    type="hidden"
                    name="userId"
                    class="form-control"
                    v-validate="'required'"
                    v-model="formData.userId">
                </div>
              </div>

              <div class="form-row">
                <div class="col">
                  <div :class="['form-group', {'has-error': errors.has('body')}]">
                    <label for="body" class="font-weight-bold">Post</label>
                    <textarea
                      name="body"
                      class="form-control"
                      v-validate="'required'"
                      v-model="formData.body">
                    </textarea>
                    <div class="text-danger" v-if="errors.has('body')">
                      {{errors.first('body')}}
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 mt-3">
                <div class="row form-actions">
                  <div>
                    <button :disabled="loading" type="submit" class="btn btn-primary">Save Post</button>
                  </div>
                </div>
              </div>
            </form>
            <div>
              <button @click="cancel()" class="btn btn-default">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-wrapper" v-for="comment in comments" :key="comment.id">
        <comment-cube :data="comment"></comment-cube>
      </div>
    </div>

    <div class="modal fade" id="detailModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <!-- <detail ref='detail'></detail> -->
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import {mapGetters} from 'vuex'
import CommentCube from '../Comments/CommentCube'

export default {
  components: {
    CommentCube
  },
  data () {
    return {
      loading: false,
      isEdit: false,
      comments: null,
      formData: {
        id: null,
        title: null,
        body: null,
        userId: null
      }
    }
  },
  computed: {
    ...mapGetters('post', [
      'getDetailData'
    ])
  },
  mounted () {
    this.$store.dispatch('post/detail', this.$route.params.id)
      .then(data => {
        this.formData = data.data
      })
      .catch(error => {
        swal('Failed', error.message, 'error')
      })
    const params = {
      postId: this.$route.params.id
    }
    this.$store.dispatch('comment/get', params)
      .then(data => {
        this.comments = data.data
      })
      .catch(error => {
        swal('Failed', error.message, 'error')
      })
  },
  methods: {
    edit () {
      this.isEdit = true
    },
    cancel () {
      this.isEdit = false
    },
    submit () {
      this.$validator.validateAll().then(async (result) => {
        if (result) {
          this.loading = true
          this.save()
        } else {
          swal('Validation Failed', '', 'error')
        }
      })
    },
    save () {
      this.$store.dispatch('post/update', this.formData)
        .then(data => {
          this.formData = data.data
          swal('Great!', 'Post saved successfully!', 'success')
          this.isEdit = false
          this.loading = false
        }).catch(error => {
          swal('Failed to update post', error.message, 'error')
        })
    }
  }
}
</script>
