import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const AdminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

let Admin;

if (!models.admin) {
  Admin = model("admin", AdminSchema);
} else {
  Admin = models.admin;
}

export default Admin;
