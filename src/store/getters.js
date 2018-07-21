const getters = {
  isLoading: state => state.loading,
  isDeleting: state => state.deleting,
  isUpdating: state => state.updating,
  isCreating: state => state.creating,
  isUploading: state => state.uploading
}

export default getters
