<template>
  <div class="text-on-primary">
    <main class="container px-3 pt-10 mx-auto">
      <div class="flex flex-wrap items-center justify-center">
        <input
          :style="'border-color:' + color"
          v-model="input"
          @keydown.enter="input && !preventSpread && add()"
          placeholder="Type here..."
          type="text"
          class="w-full py-3 mx-5 text-center transition-all duration-500 ease-in-out bg-transparent border-b appearance-none focus:text-on-primary-active md:mx-20 focus:mx-0 focus:outline-none focus:border-gray-300"
          :class="[light`placeholder-black focus:placeholder-opacity-25 `, dark`placeholder-white focus:placeholder-opacity-25`]"
        />
        <label :style="'background-color:' + color" class="mt-8 mr-5 transition-all duration-100">
          <input v-model="color" type="color" class="opacity-0" />
        </label>
        <button
          :disabled="!input || preventSpread"
          @click="!preventSpread && add()"
          :class="{'opacity-100': input && !preventSpread}"
          class="p-3 mt-8 transition-all duration-100 rounded opacity-50 bg-primary"
        >add todo</button>
      </div>
      <div class="px-3 mt-10 todos md:px-8">
        <div class="relative flex flex-wrap wrap">
          <transition-group
            @before-enter="preventSpread = true"
            @after-enter="preventSpread = false"
            @before-leave="beforeLeave($event); isLeaving = true"
            @after-leave="isLeaving = false"
            leave-from-class="scale-y-100 opacity-100"
            leave-to-class="scale-y-0 opacity-0"
            leave-active-class="absolute transition-all duration-300 transform"
            enter-from-class="scale-y-0 opacity-0"
            enter-to-class="scale-y-100 opacity-100"
            enter-active-class="transition-all duration-300 origin-top transform"
            move-class="transition-all duration-300"
          >
            <div
              v-for="(todo, index) in todos"
              :style="'background-color:'+ todo.color"
              :key="todo.id"
              :class="[todo.dark ? 'text-gray-200': 'text-black', todo.done ? 'opacity-50 hover:opacity-75 line-through': '']"
              class="flex flex-wrap items-center justify-between w-full px-5 py-3 mb-5 font-medium rounded-full hover:bg-gray-800"
            >
              <div class="flex flex-row items-center justify-start w-full space-x-3 md:w-auto">
                <button
                  @click="done(index)"
                  :class="{'hover:bg-white': todo.dark, 'hover:bg-gray-700': !todo.dark, 'bg-white': todo.done && todo.dark, 'bg-gray-700': todo.done && !todo.dark}"
                  class="flex items-center w-8 h-8 px-2 text-sm bg-opacity-25 rounded-full focus:outline-none hover:bg-opacity-25"
                >
                  <svg class="w-full" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div class="break-all">{{todo.todo}}</div>
              </div>
              <div class="flex flex-row items-center justify-end w-full space-x-1 md:w-auto">
                <label
                  :class="{'hover:bg-white': todo.dark, 'hover:bg-gray-700': !todo.dark}"
                  class="flex items-center w-8 h-8 px-2 duration-100 rounded-full cursor-pointer hover:bg-opacity-25"
                >
                  <div>
                    <input
                      @input="updateColor($event.target.value, index)"
                      type="color"
                      :class="{'opacity-100': index > 0, 'hover:bg-white': todo.dark, 'hover:bg-gray-700': !todo.dark}"
                      class="w-full opacity-0 appearance-none sr-only"
                    />
                    <svg
                      class="w-full"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                </label>
                <button
                  @click="move(index,-1)"
                  :disabled="index === 0"
                  :class="{'opacity-100': index > 0, 'hover:bg-white': todo.dark, 'hover:bg-gray-700': !todo.dark}"
                  class="flex items-center w-8 h-8 px-2 text-sm duration-300 rounded-full opacity-50 focus:outline-none hover:bg-opacity-25"
                >
                  <svg class="w-full" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  @click="move(index,1)"
                  :disabled="index === todos.length - 1"
                  :class="{'opacity-100': index < todos.length - 1, 'hover:bg-white': todo.dark, 'hover:bg-gray-700': !todo.dark}"
                  class="flex items-center w-8 h-8 px-2 text-sm duration-300 rounded-full opacity-50 focus:outline-none hover:bg-opacity-25"
                >
                  <svg class="w-full" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  @click="!isLeaving && remove(index, $event)"
                  :class="{'hover:bg-white': todo.dark, 'hover:bg-gray-700': !todo.dark}"
                  class="flex items-center w-8 h-8 px-2 text-sm duration-300 rounded-full focus:outline-none hover:bg-opacity-25"
                >
                  <svg
                    class="w-full"
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
              </div>
            </div>
            <div v-if="!todos.length">There is no todo.</div>
          </transition-group>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue"
import tinycolor2 from "tinycolor2"

export default {
  setup() {
    let input = ref("")
    let color = ref("#ffabf5")
    let todos = ref(localStorage.todos ? JSON.parse(localStorage.todos) : [])

    function add() {
      todos.value.unshift({
        todo: input.value,
        done: false,
        color: color.value,
        dark: tinycolor2(color.value).isDark(),
        id: Date.now(),
      })
      input.value = ""
    }

    function remove(index, e) {
      console.log(e)
      todos.value.splice(index, 1)
    }

    function done(index) {
      todos.value[index].done = !todos.value[index].done
    }

    function updateColor(selectedColor, index) {
      todos.value[index].color = selectedColor
      todos.value[index].dark = tinycolor2(selectedColor).isDark()
    }

    function move(fromIndex, toIndex) {
      todos.value.splice(
        fromIndex + toIndex,
        0,
        todos.value.splice(fromIndex, 1)[0]
      )
    }

    watchEffect(() => {
      localStorage.todos = JSON.stringify(todos.value)
    })

    function beforeLeave(el) {
      const { marginLeft, marginTop, width, height } = window.getComputedStyle(
        el
      )
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`
      el.style.width = width
      el.style.height = height
    }
    
    return {
      isLeaving: ref(false),
      preventSpread: ref(false),
      beforeLeave,
      done,
      updateColor,
      color,
      add,
      move,
      remove,
      input,
      todos,
    }
  },
}
</script>