const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jerinjames672:jerin@2002@cluster0.fgxxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// MongoDB Atlas connection string


// // Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://jerinjames672:jerin@2002@cluster0.fgxxg.mongodb.net/KSRTC').then(() => {
//     console.log('MongoDB connected successfully!');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB', err);
//   });

// // Define Mongoose schema for the 'live-locations' collection
// const liveLocationSchema = new mongoose.Schema({
//   message: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// // Correcting the typo here: 'modelq' to 'model'
// const LiveLocation = mongoose.model('LiveLocation', liveLocationSchema);

// module.exports = {
//   // Function to push data into the database
//   pushLatLogn: (body) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         // Create a new document with the message from the request body
//         const newLocation = new LiveLocation({
//           message: body.message,
//         });

//         // Save the document to MongoDB
//         await newLocation.save();
//         resolve({ message: 'Data stored successfully' });
//       } catch (err) {
//         // Reject the promise in case of an error
//         reject({ message: 'Error storing data', error: err });
//       }
//     });
//   },
// };
