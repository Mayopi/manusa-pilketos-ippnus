import dbConnect from "@/lib/dbConnect";
import Candidate from "@/models/Candidate";

export default async function handler(req, res) {
  try {
    await dbConnect();
    let data;
    if (req.query.role) {
      data = await Candidate.find({ role: req.query.role.toUpperCase() });
    } else {
      data = await Candidate.find();
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
