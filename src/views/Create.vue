<template>
  <form @submit="addPost">
    <label>Title</label> 
    <input type="text" required v-model="title">

    <label>Body</label>
    <textarea required v-model="body"></textarea>

    <label>Tags(hit enter to add a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">

    <div v-for="tag in tags" :key="tag" class="tag">
        {{tag}}
    </div>

    <button>add post</button>

  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'
export default {
    setup() {
        let router = useRouter();  // this.$router
        console.log(router)
        let title = ref(""); //title
        let body = ref("");  //body
        let tag = ref("");  //html
        let tags = ref([]);


        let handleKeydown = () => {
            if(!tags.value.includes(tag.value)) {
                tags.value.push(tag.value)
                tag.value = ""
            }
        }

        let addPost = async() => {       
            await fetch("http://localhost:3000/posts", {
                method:"POST",    
                headers:{   
                    "Content-type":"application/json"
                },
                body:JSON.stringify(  
                    {
                        title:title.value,
                        body:body.value,
                        tags:tags.value
                    }
                )
            })
            // redirect user to home page
            router.push("/");

        }
        return {title, body, tag, handleKeydown, tags, addPost}
    },
    
}
</script>

<style>
    form{
        max-width: 800px;
        margin: 0 auto;
    }
    input{
        display: block;
        /* margin: 30px ; */
        width: 100%;
        border: none;
        padding: 10px;
        border-bottom: 1px solid rgb(179, 179, 179);
    }
    label{
        text-align: left;
        text-transform: uppercase;
        display: block;
        color: rgb(205, 134, 2);
        font-size: 20px;
        font-weight: bold;
        margin: 5px 0px 15px;
    }
    textarea{
        width: 500px;
        height: 500px;
        text-align: left;
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
    button{
        width: 100px;
        background: crimson;
        border: none;
        border-radius: 10px;
        margin-top: 20px;
        height: 50px;
        display: block;
        cursor: pointer;
    }
</style>

