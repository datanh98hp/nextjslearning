const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // TH dev trên server - Mỗi môi trường dev / product có biến môi trường khác nhau
    return {
      env: {
        mongodb_username: "datblog",
        mongodb_password: "LyfIy6Te1QXlQ9SQ",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog",
      },
    };
  }
  // product env
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "datblog",
      mongodb_password: "LyfIy6Te1QXlQ9SQ",
      mongodb_clustername: "cluster0",
      mongodb_database: "myFirstDatabase",
    },
    images: {
      loader: "imgix",
      path: "/images",
    },
  };
};
//mongodb+srv://datblog:LyfIy6Te1QXlQ9SQ@cluster0.dxswz.mongodb.net/blog?retryWrites=true&w=majority
