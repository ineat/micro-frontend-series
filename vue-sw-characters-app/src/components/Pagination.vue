<template>
  <div class="pagination-wrapper">
    <ul>
      <li 
        v-for="page in pages"
        :key="page.id"
        :class="{current: currentPage === page.id}"
        @click="handleClick(page.id)"
      >
        <span>{{ page.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageNumber: {
      type: Number,
      required: true
    }    
  },
  data: () => ({
    pages: [],
    current: 1
  }),
  mounted() {
    this.createPagination()
  },
  methods: {
    createPagination() {
      this.pages = [];
      for(let i = 1; i <= this.pageNumber; i++) {
        this.pages = [...this.pages, {id: i, text: i }]
      }
    },
    handleClick(pageIndex) {
      this.$emit('changePage', pageIndex)
    }
  },
  watch: {
    currentPage() {
      this.current = this.currentPage
    },
    pageNumber() {
      this.createPagination()
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-wrapper {
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem 0;

  ul {
    display:flex;
    margin: 0;
    padding: 0;
    flex-direction: row;
    align-items: center;

    li {
      list-style: none;
      padding: 0.25rem .5rem;
      margin: 0 0.125rem;
      border: 1px solid #fff;
      cursor: pointer;

      &:hover {
        color: #fff;
        background: rgba($color: #FF2200, $alpha: 0.5);
        border: 1px solid rgba($color: #FF2200, $alpha: 0.5);
      }

      &.current {
        border: 1px solid darkred;
        cursor: default;
        color: #fff;
        background: darkred;
      }
    }
  }
}
</style>