<template>
  <div v-if="data !== null && !isDeleted" class="card card-comment">
    <div v-if="!isEdit" class="card-body mt-4">
      <button class="btn btn btn-primary btn-sm edit-button" @click="edit()">Edit</button>
      <button class="btn btn btn-primary btn-sm delete-button" @click="deleteComment()">Delete</button>
      <p class="card-text"><b>Name</b>  : {{ formData.name }}</p>
      <p class="card-text"><b>Email</b> : {{ formData.email }}</p>
      <p class="card-text">{{ formData.body }}</p>
    </div>
    <div v-else class="card-body mt-4">
      <form @submit.prevent="submit">

        <div class="form-row">
          <div class="col">
            <div :class="['form-group', {'has-error': errors.has('name')}]">
              <label for="name">Name</label>
              <input
                data-vv-as="name"
                type="text"
                name="name"
                class="form-control"
                v-validate="'required'"
                v-model="formData.name">
              <div class="text-danger" v-if="errors.has('name')">
                {{errors.first('name')}}
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
              name="postId"
              class="form-control"
              v-validate="'required'"
              v-model="formData.postId">
          </div>
        </div>

        <div class="form-row">
          <div class="col">
            <div :class="['form-group', {'has-error': errors.has('email')}]">
              <label for="email">Email</label>
              <input
                data-vv-as="email"
                type="email"
                name="email"
                class="form-control"
                v-validate="'required|email'"
                v-model="formData.email">
              <div class="text-danger" v-if="errors.has('email')">
                {{errors.first('email')}}
              </div>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="col">
            <div :class="['form-group', {'has-error': errors.has('body')}]">
              <label for="body" class="font-weight-bold">Comment</label>
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
              <button :disabled="loading" type="submit" class="btn btn-primary">Save Comment</button>
            </div>
          </div>
        </div>
      </form>
      <div>
        <button @click="cancel()" class="btn btn-default">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      isDeleted: false,
      loading: false,
      isEdit: false,
      formData: {
        id: this.data.id,
        name: this.data.name,
        email: this.data.email,
        body: this.data.body,
        postId: this.data.postId
      }
    }
  },
  mounted () {
    this.$store.dispatch('comment/detail', this.data.id)
      .then(data => {
        // console.log(data)
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
    deleteComment () {
      swal({
        title: 'Do you want to delete this comment?',
        text: 'Once deleted, you will not be able to recover this data!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.loading = true
            this.$store.dispatch('comment/remove', this.formData.id).then(data => {
              this.loading = false
              this.isDeleted = true
              swal('Poof! Your data has been deleted!', {
                icon: 'success'
              })
            }).catch(err => {
              swal('Failed', err.message, 'error')
              this.loading = false
            })
          }
        })
    },
    save () {
      this.$store.dispatch('comment/update', this.formData)
        .then(data => {
          this.formData = data.data
          swal('Great!', 'Comment saved successfully!', 'success')
          this.isEdit = false
          this.loading = false
        }).catch(error => {
          swal('Failed to update comment', error.message, 'error')
        })
    }
  }
}
</script>
