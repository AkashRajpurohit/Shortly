module.exports = {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/shortly',
  },
};