<template>
    <div class="post">
        <router-link :to="{name:'Detail', params:{id:post.id}}">
        <h2>{{post.title}}</h2>
        </router-link>

        <p>{{cutPostBody}}</p>
        <div v-for="tag in post.tags" :key="tag" class="tag">
            <router-link :to="{name:'Tag', params:{tag}}">
                {{ tag }}
            </router-link>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';

export default {
    props:['post'],
    setup(props) {
        let cutPostBody = computed(() => {
            return props.post.body.substring(0,100) + "...";
        })
        return {cutPostBody}
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