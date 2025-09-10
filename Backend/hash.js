import bcrypt from "bcryptjs";

const newPassword = "Pr@vi123"; // <-- change this to the new password you want

bcrypt.hash(newPassword, 10).then((hash) => {
  console.log("Your new hashed password is:\n", hash);
});
