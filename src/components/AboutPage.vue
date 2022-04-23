<template>
    <div class='about'>
        <h1>Hello {{ their_name }}, this is an about page</h1>
        <p>blblblblblblbblblblbl</p>
    </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>