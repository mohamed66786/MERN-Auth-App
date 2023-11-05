import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mohamed:mohamed010011%23@cluster0.maiv9qs.mongodb.net/mernAuth?retryWrites=true&w=majority"
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
      // }
    );
  } catch (err) {
    console.log(err.message);
    process.exit()
  }
};

// connect without async function 

// const connect = mongoose
//   .connect(
//     "mongodb+srv://mohamed:mohamed010011%23@cluster0.maiv9qs.mongodb.net/mernAuth?retryWrites=true&w=majority"
//   )
//   .then(() => console.log("Database connection Successfully "))
//   .catch((err) => {
//     console.log(err.message);
//   });

export default connectDB;
