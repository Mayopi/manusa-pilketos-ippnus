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

    class: {
      type: String,
      required: true,
    },

    reason: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let Participant;

if (!models.participant) {
  console.log(models);
  Participant = model("participant", ParticipantSchema);
} else {
  Participant = models.participant;
}

// const Participant = models.Participant || model("participant", ParticipantSchema);

export default Participant;
