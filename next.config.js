// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_URI: "mongodb://localhost:27017/reserve",
    JWT_SECRET: "",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/diqu5cmpw/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
