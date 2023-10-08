import Member from "@/models/Member";

const memberData = [
  {
    name: "Eri Danianto",
    class: "XII RPL",
    nis: "2113330",
  },

  {
    name: "Sela Agus Lestari",
    class: "XII RPL",
    nis: "2113331",
  },

  {
    name: "Ari Bagus Septianto",
    class: "XII RPL",
    nis: "2113332",
  },
];

const memberSeeder = async () => {
  try {
    await Member.deleteMany({});
    await Member.insertMany(memberData.map((member) => ({ ...member, name: member.name.toUpperCase() })));
    console.log("Successfully seeding members");
  } catch (error) {
    console.log("Failed seeding members", error);
  }
};

export { memberSeeder };
