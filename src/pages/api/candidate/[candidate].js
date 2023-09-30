import dbConnect from "@/lib/dbConnect";
import Candidate from "@/models/Candidate";

export default async function handler(req, res) {
  try {
    await dbConnect();
    const data = await Candidate.findOne({ slug: req.query.candidate });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
