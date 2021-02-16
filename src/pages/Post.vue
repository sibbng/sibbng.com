<template>
  <div class="text-on-primary">
    <main class="container px-3 pt-10 mx-auto overflow-hidden">
      <h1 class="text-2xl font-semibold text-on-primary-active">{{post.title}}</h1>
      <div
        class="mt-4"
      >{{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}}</div>
      <div class="mt-4">
        <img :src="post.img" alt />
      </div>
      <div class="mt-8 text-on-primary-active">{{post.content}}</div>
      <div class="flex mt-10 space-x-2 buttons">
        <button
          class="flex items-center p-1 leading-4 rounded read hover:bg-primary hover:text-on-primary-active"
          @click="$router.push('/micro-blog')"
        >
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Back
        </button>
        <button
          class="flex items-center p-1 leading-4 rounded read hover:bg-primary hover:text-on-primary-active"
          @click="remove(index); $router.push('/micro-blog')"
        >
          <svg
            class="w-4 h-4 mr-1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Delete
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, reactive, watchEffect, watch, onMounted } from "vue"
import { useRoute } from "vue-router"

export default {
  setup() {
    let route = useRoute()
    let posts = ref(localStorage.posts ? JSON.parse(localStorage.posts) : [])
    let post = posts.value.filter((post) => post.id == route.params.id)[0]

    function remove() {
      posts.value.splice(posts.value.indexOf(post), 1)
    }

    watchEffect(() => {
      localStorage.posts = JSON.stringify(posts.value)
    })

    return {
      post,
      remove,
    }
  },
}
</script>

<style scoped>
</style>