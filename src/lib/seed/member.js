import Member from "@/models/Member";
// import { memberData } from "@/data/xii";

const memberData = [
  {
    field4: "Alifah Nur Istianah",
    field3: "XII TKJ B",
    field5: "2113399",
  },
  {
    field4: "Indri Melinda Putri",
    field3: "XII TKJ E",
    field5: "2113527",
  },
  {
    field4: "Sela Agus Lestari",
    field3: "XII RPL",
    field5: "2113352",
  },
  {
    field4: "Diah Puspita Ningrum",
    field3: "XII TKJ B",
    field5: "2113418",
  },
  {
    field4: "Fri Zahra Hana Anindya",
    field3: "XII TKJ B",
    field5: "2113429",
  },
  {
    field4: "Diaz Setya Maheswari",
    field3: "XII TKJ B",
    field5: "2113419",
  },
  {
    field4: "Adelia Anis Istinganah",
    field3: "XII RPL",
    field5: "2113319",
  },
  {
    field4: "Mukti Ayu Tri Rezeki",
    field3: "XII TAV",
    field5: "2112892",
  },
  {
    field4: "Salman Alfarizy",
    field3: "XII TAV",
    field5: "2112898",
  },
  {
    field4: "Dewi Anggraeni",
    field3: "XII TKJ D",
    field5: "2113476",
  },
  {
    field4: "Tatia Adelia",
    field3: "XII TKJ D",
    field5: "2113501",
  },
  {
    field4: "Citra Karisma Nur Intani",
    field3: "XII TKJ A",
    field5: "2113379",
  },
  {
    field4: "Rathanah Intan Yuli Andita",
    field3: "XII TKJ D",
    field5: "2113488",
  },
  {
    field4: "AGHIS NAILA RAHMA",
    field3: "XII TKJ C",
    field5: "2113433",
  },
  {
    field4: "NOIZIEATUN AZZAHRA",
    field3: "XI TKJ G",
    field5: "2214538",
  },
  {
    field4: "NIFHATUL AFIFAH",
    field3: "XI TKJ H",
    field5: "2214578",
  },
  {
    field4: "Nurul Ashreen Jazlina",
    field3: "XI RPL",
    field5: "2214249",
  },
  {
    field4: "Indah Saputri",
    field3: "XI TAV",
    field5: "2213722",
  },
  {
    field4: "Destri Pratiwi",
    field3: "XI TKJ G",
    field5: "2214516",
  },
  {
    field4: "Ririt Rengganis",
    field3: "XI TKJ E",
    field5: "2214461",
  },
  {
    field4: "Dennis Novtareza",
    field3: "XI TKJ C",
    field5: "2214349",
  },
  {
    field4: "Itah Zaenatu Sobiroh",
    field3: "XI RPL",
    field5: "2214234",
  },
  {
    field4: "Ulil Faidah",
    field3: "XI RPL",
    field5: "2214256",
  },
  {
    field4: "Aulia Mardiyanti",
    field3: "XI TKJ J",
    field5: "2214649",
  },
  {
    field4: "Millati Isnatul Husna",
    field3: "XI TKJ G",
    field5: "2214534",
  },
  {
    field4: "Rohmatin Lutfiana",
    field3: "XI TKJ F",
    field5: "2214498",
  },
  {
    field4: "Rifki Muhamad Arif",
    field3: "XI TEI",
    field5: "2213780",
  },
  {
    field4: "Intan Isniana Tri Hapsari",
    field3: "XI TKJ I",
    field5: "2214617",
  },
  {
    field4: "Virda Salbiyah",
    field3: "XI RPL",
    field5: "2214257",
  },
  {
    field4: "Adnan Dhukha Alfianto",
    field3: "XI TAV",
    field5: "2213703",
  },
  {
    field4: "Yusuf",
    field3: "Xl TBSM C",
    field5: "2214214",
  },
  {
    field4: "Fadillah Senja Pratama",
    field3: "XII RPL",
    field5: "2113331",
  },
  {
    field4: "Galih Pamungkas",
    field3: "XI TKR A",
    field5: "2213807",
  },
  {
    field4: "Bangkit Wisnu Aji",
    field3: "XI TKR A",
    field5: "2213794",
  },
  {
    field4: "Fajar Ardiansyah",
    field3: "XI RPL",
    field5: "2214230",
  },
];

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
