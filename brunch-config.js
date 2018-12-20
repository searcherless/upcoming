module.exports = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  server: {
    port: 4000
  },

  optimize: true,
  paths: {
    public: 'dist'
  },

  plugins: {
    cleancss: {
      keepSpecialComments: 0,
      removeEmpty: true
    }
  }
};
