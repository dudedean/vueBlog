<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
        <label>Blog title : </label>
        <input type="text" required v-model.lazy="blog.title">
        <label for="blogContent">Blog Content</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
            <label>Ninjas</label>
            <input type="checkbox" value="ninjas" v-model="blog.categories" name="ninjas" id="ninjas">
            <label>Wizard</label>
            <input type="checkbox" value="wizard" v-model="blog.categories" name="wizard" id="wizard">
            <label>Mario</label>
            <input type="checkbox" value="mario" v-model="blog.categories" name="mario" id="mario">
            <label>Cheese</label>
            <input type="checkbox" value="cheese" v-model="blog.categories" name="cheese" id="cheese">
        </div>
        <label for="author">Author : </label>
        <select v-model="blog.author">
            <option v-for="author in authors" v-bind:key="author.id">{{ author }}</option>
        </select>

        <button v-on:click.prevent="post">Add Blog</button>

    </form>

    <div v-if="submitted">
        <h3>Thanks for adding your post.</h3>
    </div>

    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title : {{ blog.title }}</p>
        <p>Blog content : </p>
        <p>{{ blog.content }}</p>
        <p>Blog Categories : </p>
        <ul>
            <li v-for="category in blog.categories" v-bind:key="category.id">{{ category }}</li>
        </ul>
        <p>Author : {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
        blog: {
            title: '',
            content: '',
            categories: [],
            author: ''
        },
        authors: ['The Net Ninja','DudeDean','The Vue Vindicator'],
        submitted: false,
    }
  },
  methods: {
    post: function(){
        this.$http.post('https://jsonplaceholder.typicode.com/posts',{
            title: this.blog.title,
            body: this.blog.content,
            userID: 1
        }).then(function(data){
            console.log(data);
            this.submitted = true;
        });
    }
  },
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display:inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display:inline-block;
}
</style>
