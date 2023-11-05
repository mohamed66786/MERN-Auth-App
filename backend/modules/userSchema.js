import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;

const user = new User({
  name: "Mohamed",
  email: "Mohamewwd@gmail.com",
  password: "1824",
});
const findeUser = async function () {
  const { name, email, password } = user;
  const isFound = await User.findOne({ email });
  if (isFound) {
    console.log("user already exists");
    process.exit(1);
  } else {
    user
      .save()
      .then((user) => console.log(user))
      .catch((err) => console.error(err.message));
  }
};
findeUser();
