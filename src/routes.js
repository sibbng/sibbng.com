import Home from './pages/Home.vue'
import Test from './pages/Test.vue'
import Todo from './pages/Todo.vue'
import Notes from './pages/Notes.vue'
import MicroBlog from './pages/MicroBlog.vue'
import Post from './pages/Post.vue'
import NotFound from './pages/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'sibbng' } },
  { path: '/todo', component: Todo, meta: { title: 'Todo' } },
  { path: '/test', component: Test, meta: { title: 'test' } },
  { path: '/notes', component: Notes, meta: { title: 'Notes' } },
  { path: '/micro-blog', component: MicroBlog, meta: { title: 'Micro Blog' } },
  { path: '/micro-blog/:id', component: Post, meta: { title: 'Micro Blog' } },
  { path: '/:path(.*)', component: NotFound },
]
