<template>
  <div class="grid mx-auto grid-col-1 lg:grid-cols-2" style="max-width: 1920px;">
    <div
      class="relative top-0 flex flex-col justify-between p-8 mr-12 overflow-auto lg:h-screen sm:p-24 lg:sticky xl:p-32"
    >
      <div class="top">
        <Logo class="w-48 mb-4 text-on-primary-active" />
        <div class="desc text-on-primary">No-code tools to grow your business</div>
        <div class="mt-10 desc text-on-primary">Find me on:</div>
        <div class="mt-1 desc text-on-primary">
          <a
            href="https://twitter.com/sibbng"
            class="inline-block p-2 mb-8 mr-1 rounded-lg focus:shadow-outline hover:bg-active hover:text-white focus:outline-none button bg-primary text-on-primary"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22 5.796a8.192 8.192 0 01-2.357.646 4.115 4.115 0 001.805-2.27 8.197 8.197 0 01-2.606.996 4.105 4.105 0 00-7.097 2.808 4.15 4.15 0 00.105.935 11.65 11.65 0 01-8.456-4.287 4.107 4.107 0 001.27 5.478 4.084 4.084 0 01-1.86-.513v.052a4.105 4.105 0 003.292 4.023 4.082 4.082 0 01-1.081.143 4.165 4.165 0 01-.773-.072 4.108 4.108 0 003.832 2.85A8.261 8.261 0 012 18.282a11.611 11.611 0 006.29 1.844A11.594 11.594 0 0019.962 8.453q0-.267-.013-.53A8.36 8.36 0 0022 5.796z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/sibbng"
            class="inline-block p-2 mb-8 mr-1 rounded-lg focus:shadow-outline hover:bg-active hover:text-white focus:outline-none button bg-primary text-on-primary"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.083c-5.523 0-10 4.477-10 10 0 4.423 2.875 8.169 6.855 9.488.485.075.67-.216.67-.475 0-.238-.012-1.025-.012-1.863-2.513.463-3.163-.612-3.363-1.175a3.637 3.637 0 00-1.025-1.412c-.35-.188-.85-.65-.013-.663.65.07 1.223.453 1.538 1.025l.003.006a2.137 2.137 0 002.91.82c.043-.51.27-.984.637-1.338-2.225-.25-4.55-1.113-4.55-4.938a3.892 3.892 0 011.025-2.687 3.594 3.594 0 01.1-2.65s.837-.263 2.75 1.025a9.427 9.427 0 015 0c1.912-1.3 2.75-1.025 2.75-1.025.37.838.406 1.786.1 2.65a3.87 3.87 0 011.025 2.687c0 3.838-2.338 4.688-4.562 4.938.482.49.729 1.164.675 1.85 0 1.337-.013 2.412-.013 2.75a.493.493 0 00.643.476C19.124 20.253 22 16.507 22 12.083c0-5.523-4.477-10-10-10z"
              />
            </svg>
          </a>
          <a
            href="https://www.indiehackers.com/sibbng"
            class="inline-block p-2 mb-8 mr-1 rounded-lg focus:shadow-outline hover:bg-active hover:text-white focus:outline-none button bg-primary text-on-primary"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h3v12H4V6z" />
              <path d="M10 6h3v4.5h4V6h3v12h-3v-4.5h-4V18h-3V6z" />
            </svg>
          </a>
        </div>
      </div>
      <div class="mt-24 bottom">
        <button
          class="p-2 mb-8 mr-1 rounded-lg focus:shadow-outline hover:bg-active hover:text-white focus:outline-none button bg-primary text-on-primary"
          @click="setTheme('light')"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          class="p-2 mb-8 mr-1 rounded-lg focus:shadow-outline hover:bg-active hover:text-white focus:outline-none button bg-primary text-on-primary"
          @click="setTheme('dark')"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
        <button
          class="p-2 mb-8 mr-1 rounded-lg focus:shadow-outline hover:bg-active hover:text-white focus:outline-none button bg-primary text-on-primary"
          @click="setTheme('system')"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div class="mb-4 desc text-on-primary">Get notified about future updates:</div>
        <div class="relative w-full text-sm md:text-base sm:w-88 subs">
          <form
            method="post"
            action="https://emailoctopus.com/lists/c3b18c5e-d283-11ea-a3d0-06b4694bee2a/members/embedded/1.3/add"
            class="email-octopus-form"
            data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
          >
            <input
              id="field_0"
              name="field_0"
              type="email"
              class="w-full p-4 rounded-lg text-on-primary-active focus:shadow-outline input bg-primary focus:outline-none"
              placeholder="you@example.com"
              aria-label="Email address"
            />
            <div class="hidden email-octopus-form-row-hp" aria-hidden="true">
              <input
                type="text"
                name="hpc3b18c5e-d283-11ea-a3d0-06b4694bee2a"
                tabindex="-1"
                autocomplete="nope"
              />
            </div>
            <button
              type="submit"
              class="absolute top-0 right-0 px-5 py-3 m-1 rounded-lg focus:shadow-outline hover:bg-active hover:text-white focus:outline-none button bg-frame text-on-primary"
            >Subscribe</button>
          </form>

          <p class="font-semibold email-octopus-success-message text-on-primary-active"></p>
          <p class="font-semibold email-octopus-error-message text-on-primary-active"></p>
        </div>
      </div>
    </div>
    <div class="p-8 mt-0 overflow-hidden sm:px-24 sm:pb-24 lg:mt-24 xl:mt-32 lg:p-0">
      <div class>
        <h2 class="w-full mb-4 font-medium tracking-wider uppercase text-on-frame">Products</h2>
        <div class="flex flex-wrap content-start">
          <div class="text-on-primary-active">Soon...</div>
        </div>
      </div>
      <div class="mt-12">
        <h2 class="w-full mb-4 font-medium tracking-wider uppercase text-on-frame">Experiments</h2>
        <div class="flex flex-wrap content-start -mx-2">
          <router-link
            :to="route"
            class="block h-48 p-6 m-2 w-84 bg-primary"
            style="border-radius: 29px"
            v-for="({name, desc, route}) in experiments"
            :key="route"
          >
            <div class="mb-2 text-2xl font-extrabold text-on-primary-active">{{name}}</div>
            <div class="text-on-primary">{{desc}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "/~/assets/sibbng.svg?component";

export default {
  components: {
    Logo
  },
  setup() {
    return {
      experiments: [
        {
          name: "Todos",
          desc:
            "Create your todos with colorable labels, order than mark as completed!",
          route: "/todo",
        },
        { name: "Notes", desc: "A simple notes app.", route: "/notes" },
        {
          name: "Micro Blog",
          desc: "A simple blogging system.",
          route: "/micro-blog",
        },
      ],
    }
  },
}
</script>