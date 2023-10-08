import Member from "@/models/Member";
import fs from "fs";

const rawData = "./public/data/xii.json";
const memberData = JSON.parse(fs.readFileSync(rawData, { encoding: "utf-8" }));

const memberSeeder = async () => {
  try {
    await Member.deleteMany({});

    const filteredMemberData = memberData.filter((member) => {
      // Periksa apakah field 3, 4, dan 5 bukan empty string
      return member.field3 !== "" && member.field4 !== "" && member.field5 !== "";
    });

    const mappedMembers = filteredMemberData.map((member) => ({
      class: member.field3,
      name: member.field4.toUpperCase(),
      nis: member.field5,
    }));

    await Member.insertMany(mappedMembers);

    console.log("Successfully seeding members");
  } catch (error) {
    console.log("Failed seeding members", error);
  }
};

export { memberSeeder };
