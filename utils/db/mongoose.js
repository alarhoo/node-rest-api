const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}`;

const client = new MongoClient(uri, {
  // @ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const getMongooseConnection = () => {
  return new Promise(async (resolve, reject) => {
    await client.connect((err) => {
      const collection = client.db('test').collection('devices');
      // perform actions on the collection object
      client.close();
    });
  });
};

client.connect((err) => {
  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  client.close();
});
