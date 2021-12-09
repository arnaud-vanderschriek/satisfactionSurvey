const mongoose = require("mongoose");
const URI = process.env.MONGODB_URL;

mongoose
  .connect(URI, {
    // useNewParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB " + err));
