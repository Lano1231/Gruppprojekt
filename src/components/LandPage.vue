<script>
  export default {
    props: {
      // eslint-disable-next-line vue/require-default-prop
      msg: String
    }
  }
</script>

<template>
  <div>
    <img left src="https://picsum.photos/125/125/?image=58" alt="Left image" />
    <img
      right
      src="https://picsum.photos/125/125/?image=58"
      alt="Right image"
    />
  </div>
</template>
