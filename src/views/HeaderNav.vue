<template>
  <div>
    <div class="bg-dark pt-5 pb-5">
      <div class="container d-flex justify-content-between">
        <div class="text-secondary">{{ searchVal }}</div>
        <div class="text-secondary">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              v-model="searchVal"
            />
            <button
              @click="search"
              class="btn btn-info"
              type="button"
              id="button-addon1"
            >
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVal: "",
    };
  },
  methods: {
    search: function () {
      this.$router.push({
        name: "Search",
        params: { token: this.searchVal.toUpperCase() || undefined },
        query: {
          token: this.searchVal || undefined,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>