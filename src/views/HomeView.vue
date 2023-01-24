<template>
  
  <div class="home">
    
    <div v-if="error">
      {{error}}
    </div>
    <div v-if="posts.length>0" class="layout">
      <div>
        <PostsList :posts="posts"></PostsList>
      </div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import SinglePost from '../components/SinglePost'
import PostsList from '../components/PostsList'
import { ref } from '@vue/reactivity'
import getPosts from '../composables/getPosts';
// @ is an alias to /src

export default {
  components: {
    TagCloud,
    Spinner,
    SinglePost,
    PostsList 
  },

  setup() {

   let {posts,error,load} = getPosts(); //{posts, error, load}

    load();

    return {posts, error};
  }
}
</script>

<style >
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 50px;
  }
</style>
