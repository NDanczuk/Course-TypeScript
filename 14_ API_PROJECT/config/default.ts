const dbUser =  process.env.DB_USER
const dbPass =  process.env.DB_PASS

export default {
  port: 3000,
  dbUri:`mongodb+srv://${dbUser}:${dbPass}@cluster0.7d6urp8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  // dbUri: 'mongo',
  env: "development",
};
