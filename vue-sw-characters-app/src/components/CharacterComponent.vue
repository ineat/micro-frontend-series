<template>
  <div>
    <h2>{{title}}</h2>
    <div class="sw-bloc">
      <CharacterSearch @searchChange="onSearch" />
      <div class="sw-list">
        <ul class="list">
          <CharacterTile
            v-for="item in characters"
            :key="item.uid"
            :character="item"
          />
        </ul>
      </div>
      <Pagination
        v-if="pageNumber > 1"
        :currentPage="currentPage"
        :pageNumber="pageNumber"
        @changePage="onChangePage"
      />
    </div>
  </div>
</template>

<script>
import CharacterTile from './CharacterTile.vue'
import CharacterSearch from './CharacterSearch.vue'
import Pagination from './Pagination.vue'
import ApiService from '../services/api.service.js'

const apiService = new ApiService()

export default {
  name: 'CharacterComponent',
  components: {
    CharacterTile,
    CharacterSearch,
    Pagination
  },
  props: {
    title: {
      type: String,
      default: 'Liste des personnages'
    },
  },
  data: () => ({
    characters: [],
    currentPage: 1,
    pageNumber: 1,
    isSearch: false,
  }),
  mounted() {
    this.fetchCharacters()
  },
  methods: {
    async fetchCharacters(page = 1) {
      const response = await apiService.getCharacters(page)
      const data = await response.json()
      this.characters = [...data.results]
      this.pageNumber = data.total_pages
    },
    async onChangePage(event) {
      if(!this.isSearch) {
        this.currentPage = event
        this.fetchCharacters(event)
      }
    },
    async onSearch(event) {
      if(event !== '') {
        this.isSearch = true
        const response = await apiService.searchCharacters(event)
        const data = await response.json()
        const searchData = data.result.map(d => d.properties)
        this.characters = [...searchData]
        this.pageNumber = 1
      } else {
        this.isSearch = false
        this.fetchCharacters()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sw-bloc {
  padding: 0rem 1rem;
}

.sw-list {
  flex: 1;

  ul {
    margin: 0;
    padding: 0;
  }
}
</style>