<template>
  <div class="text-on-primary">
    <main class="container px-3 pt-10 mx-auto overflow-hidden">
      <div class="flex justify-between">
        <div class="mb-2 text-xs font-semibold tracking-wider uppercase">Posts</div>
        <div
          @click="modal = true"
          class="flex items-center p-1 mb-2 text-xs font-semibold leading-4 tracking-wider uppercase transition duration-100 rounded cursor-pointer bg-primary hover:text-on-primary-active"
        >
          <svg class="w-4 h-4 mb-px mr-px" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>
          Add Post
        </div>
      </div>
      <div class="flex flex-wrap -m-1 top">
        <div
          v-for="(post, index) in filteredPosts"
          :key="post.id"
          class="w-full p-1 sm:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <div
            class="flex flex-col flex-1 h-full p-3 overflow-hidden rounded-lg appearance-none bg-primary post focus:outline-none hover:bg-opacity-75 focus:bg-opacity-75"
          >
            <router-link :to="'/micro-blog/' + post.id">
              <div class="-mx-3 -mt-3 img">
                <img :src="post.img" class="object-cover w-full h-48" />
              </div>
              <div
                class="mt-3 text-xl font-semibold leading-tight text-on-primary-active"
              >{{ post.title }}</div>
            </router-link>
            <div class="mt-1 text-xs text-on-frame date">{{ new Date(post.date).toLocaleString() }}</div>
            <div
              class="flex-1 mt-2 mb-5 text-sm text-on-primary excerpt"
              style="
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
              "
            >{{ post.content }}</div>
            <div class="flex space-x-2 text-sm buttons">
              <button
                class="flex items-center p-1 leading-4 rounded hover:text-on-primary-active read hover:bg-frame"
                @click="remove(index)"
              >
                <svg
                  class="w-4 h-4"
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
              </button>
              <button
                class="flex items-center self-end p-1 leading-4 rounded hover:text-on-primary-active comment hover:bg-frame"
              >
                Comment
                <svg
                  class="w-4 h-4 ml-1"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </button>
              <router-link :to="'/micro-blog/' + post.id" custom v-slot="{ navigate, href }">
                <a
                  class="flex items-center self-end p-1 leading-4 rounded hover:text-on-primary-active read hover:bg-frame"
                  :href="href"
                  @click="navigate"
                >
                  Read More
                  <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </router-link>
            </div>
          </div>
        </div>
        <div class="p-1" v-if="!filteredPosts.length">There is no post.</div>
      </div>
    </main>
    <div
      class="fixed inset-x-0 bottom-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
      v-if="modal"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <div
        class="flex flex-col p-4 space-y-4 overflow-hidden transition-all transform bg-gray-900 rounded-lg shadow-xl sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="mt-3 mb-4 text-xl font-semibold leading-tight name">Add Post</div>
        <div>
          <div class="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">Title</div>
          <input
            v-model="post.title"
            class="w-full p-2 transition-all bg-gray-800 border-2 border-transparent rounded-md focus:outline-none hover:border-gray-700 focus:border-gray-600"
          />
        </div>
        <div>
          <div class="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">Image</div>
          <input
            v-model="post.img"
            disabled
            class="w-full p-2 transition-all bg-gray-800 border-2 border-transparent rounded-md opacity-50 focus:outline-none hover:border-gray-700 focus:border-gray-600"
          />
        </div>
        <div>
          <div class="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">Content</div>
          <textarea
            v-model="post.content"
            class="w-full p-2 transition-all bg-gray-800 border-2 border-transparent rounded-md focus:outline-none hover:border-gray-700 focus:border-gray-600"
            style="resize: none;"
            name
            id
            cols="30"
            rows="3"
          ></textarea>
        </div>
        <div>
          <div class="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">Date</div>
          <input
            v-model="post.date"
            type="date"
            class="relative w-full p-2 placeholder-gray-100 transition-all bg-gray-800 border-2 border-transparent rounded-md focus:outline-none hover:border-gray-700 focus:border-gray-600"
          />
        </div>
        <div class="flex justify-end space-x-2 buttons">
          <button
            @click="modal = false; reset()"
            type="text"
            class="p-2 bg-gray-800 rounded-lg"
          >Cancel</button>
          <button
            :disabled="!post.title || !post.content || !post.date || loading"
            :class="{
              'opacity-100 hover:text-white hover:bg-opacity-75 focus:bg-opacity-75':
                post.title && post.content && post.date && !loading,
            }"
            @click="add"
            type="text"
            class="p-2 bg-gray-800 bg-opacity-50 rounded-lg opacity-50 appearance-none focus:outline-none"
          >{{ loading ? "Loading" : "Add Post" }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watchEffect, computed, onMounted } from "vue"

export default {
  setup() {
    let post = reactive({
      title: "",
      img: "https://picsum.photos/500/350",
      content: "",
      date: new Date().toISOString().substring(0, 10),
    })
    let posts = ref(localStorage.posts ? JSON.parse(localStorage.posts) : [])
    let filteredPosts = computed(() =>
      posts.value.sort((a, b) => new Date(b.date) - new Date(a.date))
    )
    let modal = ref(false)
    let loading = ref(false)

    async function add() {
      loading.value = true
      post.img = (await fetch(post.img)).url
      posts.value.unshift({
        ...post,
        id: Date.now(),
      })
    }

    function reset() {
      post.title = ""
      post.img = "https://picsum.photos/500/350"
      post.content = ""
      post.date = new Date().toISOString().substring(0, 10)
      modal.value = false
      loading.value = false
    }

    function remove(index) {
      posts.value.splice(index, 1)
    }

    watchEffect(() => {
      reset()
      localStorage.posts = JSON.stringify(posts.value)
    })

    return {
      add,
      loading,
      reset,
      remove,
      modal,
      post,
      filteredPosts,
    }
  },
}
</script>