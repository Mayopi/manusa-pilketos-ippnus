import Candidate from "@/models/Candidate";
import stringToSlug from "../stringToSlug";
const candidatesData = [
  {
    name: "Adnan Dhukha A.",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, perferendis?",
    profile:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore officia aperiam neque in dolores eaque? Totam ab nemo veniam fugiat minus, explicabo quae vel excepturi tempora sint distinctio neque odit. Corrupti consequuntur reiciendis laboriosam eum temporibus, delectus quia nulla facilis sed corporis obcaecati iure neque architecto impedit dicta labore nemo ab hic, est, modi fugit cum vitae.",
    slug: stringToSlug("Adnan Dhuka A."),
    vision: "Menjadikan Organisasi Intra Sekolah SMK Ma'arif NU 1 Ajibarang sebagai wadah Siswa - Siswi untuk meningkatkan kualitas diri serta mengedepankan 4K (Kekeluargaan, Kedisiplinan, Kreativitas, dan Kualitas)",
    mission: `1. Meningkatkan Keimanan dan ketakwaan terhadap Tuhan YME.
      2. Mengoptimalkan fungsi osis sebagai penyelenggara atau pendukung kegiatan
      di sekolah, serta mengadakan kegiatan yang melibatkan seluruh komponen di
      lingkungan sekolah.
      3. Menjalin komunikasi yang baik antar pihak internal maupun external dan
      mengedepankan sopan santun
      4. Menjalankan dan memodifikasi program kerja terdahulu dengan inovasi
      sesuai dengan globalisasi serta mengevaluasi setiap kegiatan dan
      permasalahan`,
    class: "Kelas A",
    position: 1,
    participants: [],
  },
  {
    name: "Fajar Ardiansyah",
    class: "Kelas XI RPL",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, perferendis?",
    profile:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore officia aperiam neque in dolores eaque? Totam ab nemo veniam fugiat minus, explicabo quae vel excepturi tempora sint distinctio neque odit. Corrupti consequuntur reiciendis laboriosam eum temporibus, delectus quia nulla facilis sed corporis obcaecati iure neque architecto impedit dicta labore nemo ab hic, est, modi fugit cum vitae.",
    slug: stringToSlug("Fajar Ardiansyah"),
    vision: `1. Menjadikan organisasi osis sebagai tempat aspirasi serta menjadi inspirasi bagi siswa siswi Smk Ma'arif NU 1 Ajibarang
      2. Menjadikan siswa-siswi Smk Ma'arif NU 1 Ajibarang menjadi pelajar yang produktif dengan mengutamakan ketuhanan Yang Maha Esa.
      `,
    mission: `1. Meneruskan dan mengembangkan program kerja Osis, baik yang sudah terlaksana maupun yang belum terlaksana.
      2. Menyusun program kerja dengan komunikasi yang aktif dan baik antar siswa-siswi Smk Ma'arif NU 1 Ajibarang
      3. Menumbuhkan sikap yang saling menghormati dan menghargai sesama warga sekolah.`,
    position: 2,
    participants: [],
  },
  {
    name: "Rohmatin Lutfiana",
    class: "Kelas XI TKJ F",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, perferendis?",
    profile:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore officia aperiam neque in dolores eaque? Totam ab nemo veniam fugiat minus, explicabo quae vel excepturi tempora sint distinctio neque odit. Corrupti consequuntur reiciendis laboriosam eum temporibus, delectus quia nulla facilis sed corporis obcaecati iure neque architecto impedit dicta labore nemo ab hic, est, modi fugit cum vitae.",
    slug: stringToSlug("Rohmatin Lutfiana"),
    vision: `1. Menjadikan organisasi osis sebagai tempat aspirasi serta menjadi inspirasi bagi siswa siswi SMK Ma'arif NU 1 Ajibarang.
      2. Menjadikan siswa siswi SMK Ma'arif NU 1 Ajibarang menjadi pelajar yang produktif dengan mengutamakan Ketuhanan Yang Maha Esa.`,
    mission: `1. Meneruskan dan mengembangkan program kerja Osis, baik yang sudah terlaksana maupun yang belum terlaksana.
      2. Menyusun program kerja dengan komunikasi yang aktif dan baik antar siswa siswi SMK Ma'arif NU 1 Ajibarang.
      3. Menumbuhkan sikap yang saling menghormati dan menghargai sesama warga sekolah.`,
    position: 3,
    participants: [],
  },
];

const candidateSeeder = async () => {
  try {
    await Candidate.deleteMany({});
    await Candidate.insertMany(candidatesData);

    console.log("Successfully seeding candidates");
  } catch (error) {
    console.log("Failed seeding candidates", error);
  }
};

export { candidateSeeder };
