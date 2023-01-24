<template>
    <div v-if="error">
        {{error}}
    </div>
  <div v-if="post" class="post">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
import { useRoute } from 'vue-router';
export default {
  components: { Spinner },
    props:['id'],  //this.$route.params.id
    setup(props) {
      let route = useRoute(); //this.$route.params.id
      console.log(route.params.id);
      // this.$route.params.id
        let {post, error, load} = getPost(route.params.id);

        load();
        return {post,error}
    }
}
</script>

<style>
 .post{
        margin: 0 40px 30px;
        padding-bottom: 30px;
        border-bottom: 1px dashed #575656;
    }
    .post h2 {
        display: inline-block;
        position: relative;
        font-size: 26px;
        color: rgb(61, 60, 60);
        margin-bottom: 10px;
        max-width: 400px;
        background: orangered;
    }
    .tag {
        font-size: 20px;
        font-weight: bold;
        border-radius: 8px;
        background: rgb(154, 141, 141);
        padding: 20px;
        display: inline-block;
        margin: 5px;
    }
 
</style>