import markdownIt from 'markdown-it'

const options = {
  html: true,
  breaks: true,
  linkify: true,
}

const md = markdownIt(options)

export default {
  beforeMount(el, binding) {
    el.innerHTML = md.render(binding.value || '')
  },
}
