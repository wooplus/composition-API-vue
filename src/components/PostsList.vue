<template>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import SinglePost from './SinglePost'
import PostList from './PostList'
export default {
  components: {
    SinglePost, PostList },
    props:['posts']
}
</script>

<style>

</style>