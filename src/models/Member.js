import { Schema, model, models } from "mongoose";

const MemberSchema = new Schema(
  {
    nis: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    class: {
      type: String,
      required: true,
    },

    voted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

let Member;

if (!models.member) {
  Member = model("member", MemberSchema);
} else {
  Member = models.member;
}

export default Member;
