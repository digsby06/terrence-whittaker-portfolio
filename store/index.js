const Prismic = require('prismic-javascript')
const PrismicDOM = require('prismic-dom')
const apiEndpoint = 'https://terrencewhittaker.prismic.io/api/v2'

export const state = () => ({
  blogs: [],
  projects: [],
  currentPost: {},
  currentProject: {}
})

export const mutations = {
  // Blog mutations

  LOAD_BLOGS: function (state, blogs) {
    state.blogs = blogs
  },
  CURRENT_POST: function (state, blog) {
    const headline = PrismicDOM.RichText.asText(blog.headline)
    const subTitle = PrismicDOM.RichText.asText(blog.sub_title)
    const body = PrismicDOM.RichText.asHtml(blog.body)
    const date = blog.date

    const formattedBlog = {
      headline,
      subTitle,
      body,
      date
    }

    state.currentPost = formattedBlog
  },

  // Project mutations

  LOAD_PROJECTS: function (state, projects) {
    state.projects = projects
  },
  CURRENT_PROJECT: function (state, project) {
    const projectName = PrismicDOM.RichText.asText(project.project_name)
    const arr = project.body

    // Slices
    const text = arr.find(slice => slice.slice_type === 'text')
    const imgCap = arr.find(slice => slice.slice_type === 'image_with_caption')

    // Text fields
    const projectText = PrismicDOM.RichText.asHtml(text.primary.text)

    // Image with caption fields
    const featuredMedia = imgCap.primary.image.url
    const caption = PrismicDOM.RichText.asText(imgCap.primary.caption)

    const formattedProject = {
      projectName,
      projectText,
      featuredMedia,
      caption
    }

    state.currentProject = formattedProject
  }
}

export const actions = {
  getBlogs ({commit}) {
    let req = ''

    return Promise.all([
      Prismic.getApi(apiEndpoint, { req: req })
        .then(api => api.query(
          Prismic.Predicates.at('document.type', 'blog_posts')
        ))
        .then(response => {
          commit('LOAD_BLOGS', response.results)
        })
    ])
  },
  getBlog ({commit}, uid) {
    let req = ''

    return Promise.all([
      Prismic.getApi(apiEndpoint, { req: req })
        .then(api => api.getByUID('blog_posts', uid))
        .then(response => {
          commit('CURRENT_POST', response.data)
        })
    ])
  },
  getProjects ({commit}) {
    let req = ''

    return Promise.all([
      Prismic.getApi(apiEndpoint, { req: req })
        .then(api => api.query(
          Prismic.Predicates.at('document.type', 'project')
        ))
        .then(response => {
          commit('LOAD_PROJECTS', response.results)
        })
    ])
  },
  getProject ({commit}, uid) {
    let req = ''

    return Promise.all([
      Prismic.getApi(apiEndpoint, { req: req })
        .then(api => api.getByUID('project', uid))
        .then(response => {
          commit('CURRENT_PROJECT', response.data)
        })
    ])
  }
}

// export const actions = {
//   nuxtServerInit ({ commit }, { req }) {
//     if (req.session && req.session.authUser) {
//       commit('SET_USER', req.session.authUser)
//     }
//   },
//   login ({ commit }, { username, password }) {
//     return axios.post('/api/login', {
//       username,
//       password
//     })
//     .then((res) => {
//       commit('SET_USER', res.data)
//     })
//     .catch((error) => {
//       if (error.response.status === 401) {
//         throw new Error('Bad credentials')
//       }
//     })
//   },
//   logout ({ commit }) {
//     return axios.post('/api/logout')
//     .then(() => {
//       commit('SET_USER', null)
//     })
//   }
// }
