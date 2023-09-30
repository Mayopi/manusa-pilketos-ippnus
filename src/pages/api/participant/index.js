import dbConnect from "@/lib/dbConnect";
import Participant from "@/models/Participant";

export default async function handler(req, res) {
  try {
    await dbConnect();
    const data = await Participant.find();

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
