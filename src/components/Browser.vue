<template>
  <div class="browser">
    <iframe :src="url" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'Browser',
    props: ['url'],
    methods: {

    }
  }
</script>

<style scoped>
  .browser {
    width: 100%;
    min-height: 100%;
    background: #fff;
  }

  iframe {
    display: block;
    width: 100%;
    min-height: 100%;
    outline: none;
    border: none;
  }
</style>
