module.exports = {
  baseUrl: process.env.BASE_URL,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/base.scss";`
      }
    }
  }
};
