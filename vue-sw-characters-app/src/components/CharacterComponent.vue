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
    search: ''
  }),
  mounted() {
    this.fetchCharacters()
  },
  methods: {
    async fetchCharacters(page = 1) {
      const response = await apiService.getCharacters(page)
      const characterCount = response.headers.get('X-Total-Count')
      const data = await response.json()
      this.characters = [...data]

      this.pageNumber = Math.round(parseInt(characterCount) / 10)
    },
    async onChangePage(event) {
      this.currentPage = event
      if(!this.isSearch) {
        this.fetchCharacters(event)
      } else {
        this.onSearch(this.search, event)
      }
    },
    async onSearch(event, page = 1) {
      if(event !== '') {
        this.isSearch = true
        this.search = event
        const response = await apiService.searchCharacters(this.search, page)
        const characterCount = response.headers.get('X-Total-Count')
        const data = await response.json()
        this.characters = [...data]
        this.pageNumber = Math.round(parseInt(characterCount) / 10)
      } else {
        this.isSearch = false
        this.search = ''
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