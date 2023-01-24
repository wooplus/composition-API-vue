<template>
    <h1>
        {{post.title}}
    </h1>
    <p>
        {{post.body}}
    </p>
</template>

<script>

export default {
    props:['post'],
    setup(props) {
        
    }
   
}
</script>

<style>

</style>