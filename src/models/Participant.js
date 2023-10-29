import { Schema, model, models } from "mongoose";

const ParticipantSchema = new Schema(
  {
    nis: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    choice: {
      type: Number,
      required: true,
    },

    voteRole: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

ParticipantSchema.pre("save", function (next) {
  try {
    this.name = this.name.toUpperCase();
    next();
  } catch (error) {
    next(error);
  }
});

let Participant;

if (!models.participant) {
  Participant = model("participant", ParticipantSchema);
} else {
  Participant = models.participant;
}

// const Participant = models.Participant || model("participant", ParticipantSchema);

export default Participant;
