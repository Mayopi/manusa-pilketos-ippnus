import { Schema, model, models } from "mongoose";

const CandidateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
    },

    bio: {
      type: String,
      required: true,
    },

    profile: {
      type: String,
      required: true,
    },

    vision: {
      type: String,
      required: true,
    },

    mission: {
      type: String,
      required: true,
    },

    class: {
      type: String,
      required: true,
    },

    position: {
      type: Number,
      required: true,
    },

    participants: [
      {
        user: {
          type: Schema.Types.ObjectId,
        },
      },
    ],
  },
  { timestamps: true }
);

let Candidate;

if (!models.candidate) {
  console.log(models);
  Candidate = model("candidate", CandidateSchema);
} else {
  Candidate = models.candidate;
}

//  Candidate = models.Candidate || model("candidate", CandidateSchema);

export default Candidate;