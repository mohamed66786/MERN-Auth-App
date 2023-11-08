import User from "./userModule.js";

const findeUser = async function (inputName,inputEmail,inputPassword) {
  const user = new User({
    name:inputName,
    email: inputEmail,
    password: inputPassword
  });
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
export default findeUser;
