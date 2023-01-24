<template>
    <div class="container">
            <div v-if="error">
                {{ error }}
            </div>
        <div v-if="posts.length" class="layout">
            <div>
                <PostsList :posts="filteredPosts"></PostsList>
            </div>
            <div>
                <TagCloud :posts="posts"></TagCloud>
            </div>

        </div>

        <div v-else>
            loading
        </div>

    </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostsList from '../components/PostsList'
import getPosts from '@/composables/getPosts';
import { computed } from '@vue/runtime-core';

export default {
  components: {
    TagCloud, PostsList },
    props:['tag'],
    setup(props) {
        let {posts, error, load} = getPosts();
        load();
        let filteredPosts = computed(() => {
            return posts.value.filter((post) => {
                return post.tags.includes(props.tag)
            })
        })

        
        return {posts, error, filteredPosts}
    }
}
    

</script>

<style>
    .container{
        max-width: 1200px !important;
        margin: 0 auto !important; 
    }
</style>