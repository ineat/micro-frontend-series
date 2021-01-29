<template>
  <div class="sw-search">
    <input
      type="text"
      name="searchField"
      v-model="search"
    />
    <button class="btn-clear" v-if="search !== ''" @click="handleClear">
      clear
    </button>
    <button @click="handleSearch">
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: 'CharacterSearch',
  data: () => ({
    search: ''
  }),
  methods: {
    handleSearch() {
      this.$emit('searchChange', this.search)
    },
    handleClear() {
      this.search = ''
      this.$emit('searchChange', this.search)
    }
  }
}
</script>

<style lang="scss" scoped>
.sw-search {
  display: flex;
  flex-direction: row;
  width: 100%;

  button {
    min-width: 6rem;
    margin-left: 1rem;
    border: 1px solid rgba(darkred, 0.7);
    background: darkred;
    color: #fff;

    &.btn-clear {
      border: 1px solid rgba(grey, 0.7);
      background: lightgrey;
      color: grey;
    }
  }

  input {
    width: 100%;
    height: 35px;
    padding-left: 1rem;
    border: 1px solid #eee;
    background: #fafafa;
    font-size: 1.125rem;
  }
}
</style>