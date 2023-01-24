<template>
  <header>
    <h1>Bloggy vue</h1>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/create">Create</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
    header {
        display:flex;
        justify-content: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
        align-items: center;
    }
    header h1{
        color: #dfdfdf ;
        font-size: 48px;
    }
    header a {
        color: #bbb;
        text-decoration: none;
        margin-left: 20px;
    }
</style>