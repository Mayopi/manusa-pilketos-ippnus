import Candidate from "@/models/Candidate";
import dbConnect from "@/lib/dbConnect";
import Participant from "@/models/Participant";
import validateVotes from "@/lib/validateVotes";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    try {
      const candidate = await Candidate.findOne({ slug: req.body.candidate });
      await validateVotes(req.body, candidate);

      if (!candidate) {
        return res.status(404).json({ error: "Kandidat tidak ditemukan" });
      }

      // Membuat peserta baru
      const newParticipant = await Participant.create({
        ...req.body,
        name: req.body.name.toUpperCase(),
        choice: candidate.position,
        voteRole: candidate.role,
      });

      // Menambahkan referensi peserta ke kandidat
      candidate.participants.push(newParticipant._id);
      await candidate.save();

      res.status(200).json(newParticipant);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Metode HTTP tidak diizinkan" });
  }
}
