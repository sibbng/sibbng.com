<template>
  <div class="text-on-primary">
    <main class="container px-3 pt-10 mx-auto">
      <div class="mb-2 text-xs font-semibold tracking-wider uppercase">Add Note</div>
      <div class="flex space-x-2 top">
        <input
          v-model="input"
          @keydown.enter="add"
          placeholder="Type here..."
          type="text"
          class="flex-1 p-3 rounded-lg appearance-none bg-primary focus:outline-none hover:text-on-primary-active"
        />
        <button
          :disabled="!input"
          @click="add"
          :class="{'opacity-100 hover:text-on-primary-active': input}"
          type="text"
          class="p-3 rounded-lg opacity-50 appearance-none bg-primary focus:outline-none"
        >Add Note</button>
      </div>

      <div class="mt-8 mb-2 text-xs font-semibold tracking-wider uppercase">Notes</div>
      <div class="relative grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <transition-group
          @before-leave="beforeLeave($event); isLeaving = true"
          @after-leave="isLeaving = false"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          leave-active-class="absolute transition-all duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          enter-active-class="transition-all duration-300 origin-top-left"
          move-class="transition-all duration-300"
          appear-active-class="duration-300"
          appear
        >
          <figure
            v-for="(note, index) in notes"
            :key="note.id"
            class="flex flex-col justify-between h-40 p-3 transition-all duration-300 rounded-lg bg-primary group"
          >
            <div class="pr-3 overflow-auto content text-on-primary-active">{{note.note}}</div>
            <div class="top-0 right-0 flex justify-end w-full mt-3 space-x-2 head">
              <button
                @click="move(index,-1)"
                :disabled="index === 0"
                :class="{'group-hover:opacity-100': index > 0}"
                class="flex items-center w-8 h-8 px-2 text-sm duration-300 rounded-full opacity-50 focus:outline-none"
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
                :disabled="index === notes.length - 1"
                :class="{'group-hover:opacity-100': index < notes.length - 1}"
                class="flex items-center w-8 h-8 px-2 text-sm duration-300 rounded-full opacity-50 focus:outline-none"
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
                @click="remove(index)"
                class="flex items-center w-8 h-8 px-2 text-sm duration-300 rounded-full opacity-50 focus:outline-none group-hover:opacity-100"
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
          </figure>
          <div v-if="!notes.length">There is no note.</div>
        </transition-group>
      </div>
      <div class="flex flex-wrap space-x-2 text-gray-400 top">
        <div class="w-1/3"></div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue"

export default {
  setup() {
    let input = ref("")
    let notes = ref(localStorage.notes ? JSON.parse(localStorage.notes) : [])

    function add() {
      notes.value.unshift({
        note: input.value,
        id: Date.now(),
      })
      input.value = ""
    }

    function remove(index) {
      notes.value.splice(index, 1)
    }

    function move(fromIndex, toIndex) {
      notes.value.splice(
        fromIndex + toIndex,
        0,
        notes.value.splice(fromIndex, 1)[0]
      )
    }

    watchEffect(() => {
      localStorage.notes = JSON.stringify(notes.value)
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
      beforeLeave,
      add,
      move,
      remove,
      input,
      notes,
    }
  },
}
</script>

<style scoped>
</style>