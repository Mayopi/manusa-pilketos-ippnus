import dbConnect from "@/lib/dbConnect";
import { seeder } from "@/lib/seeder";

export default async function handler(req, res) {
  try {
    await dbConnect();

    const { token } = req.query;

    if (!token) res.status(401).json({ error: "Unauthorized!. Token is Required, terminating seeders" });

    const validation = token === process.env.SEEDER_TOKEN;
    if (!validation) res.status(401).json({ error: "Unauthorized!. Token is Invalid, terminating seeders" });

    await seeder();

    res.status(200).json({ message: "Successfully running all seeders" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
