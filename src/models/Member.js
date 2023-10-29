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
      osis: {
        type: Boolean,
        required: true,
        default: false,
      },
      ippnus: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  { timestamps: true }
);

MemberSchema.pre("save", function (next) {
  try {
    this.name = this.name.toUpperCase();
    next();
  } catch (error) {
    next(error);
  }
});

let Member;

if (!models.member) {
  Member = model("member", MemberSchema);
} else {
  Member = models.member;
}

export default Member;
