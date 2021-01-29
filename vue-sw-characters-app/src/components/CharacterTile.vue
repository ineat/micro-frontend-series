<template>
  <li>
    <span>{{ character.name }}</span>
    <a class="btn btn-primary">Voir</a>
  </li>
</template>

<script>
export default {
  name: 'CharacterTile',
  props: {
    character: {
      type: Object
    },
  },
}
</script>

<style lang="scss" scoped>
  li {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-bottom: 1px solid #efefef;

    span {
      font-size: 1.2rem;
      font-weight: 500;
    }

    .btn {
      background: firebrick;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 0.5rem;
      border: 1px solid firebrick
    }
  }
</style>