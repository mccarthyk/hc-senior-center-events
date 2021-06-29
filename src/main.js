import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import 'bootstrap/dist/js/bootstrap.bundle'
import 'iframe-resizer/js/iframeResizer.contentWindow'
import markdown from './lib/markdown'

createApp(App).use(router).directive('markdown', markdown).mount('#app')
