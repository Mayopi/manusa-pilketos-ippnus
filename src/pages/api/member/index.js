import Member from "@/models/Member";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  try {
    await dbConnect();
    const { voted, unvoted } = req.query;

    let data;

    if (voted) {
      data = await Member.find({ voted: true });
    } else if (unvoted) {
      data = await Member.find({ voted: false });
    } else {
      data = await Member.find();
    }

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
