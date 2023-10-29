import Candidate from "@/models/Candidate";
import stringToSlug from "../stringToSlug";
const candidatesData = [
  {
    name: "Adnan Dhukha A.",
    bio: "Ayo pilih nomor 1, satu visi satu aksi nomor satu pilihan kami",
    profile:
      "<p>Saya Adnan Dhukha Alfianto, seorang pemuda yang sedang berusaha mencari jati diri dan mengembangkan ilmunya untuk menjadikan pribadi yang disiplin dan tanggung jawab, lahir di Banyumas 16 tahun yang lalu, sekarang memiliki kesibukan belajar dan berorganisasi di sekolah, dengan tujuan mengembangkan diri agar lebih baik dan terbentuk sebuah karakter yang memang dibutuhkan nantinya di kehidupan yang sebenarnya.</p><p>Tantangan bagi saya adalah sebuah langkah untuk terus berkembang menjadi lebih baik, maka dari ituu saya mengambil tantangan bagi diri saya untuk mencalonkan diri saya sebagai Calon Ketua OSIS SMK Ma'arif NU 1 Ajibarang, dengan ituu di dukung juga dengan beberapa kemampuan yang saya miliki, seperti jiwa kepemimpinan yang baik, tanggung jawab, dan menyampaikan informasi kepada orang lain atau lebih tepatnya berkomunikasi.</p><p>Jika nantinya saya terpilih menjadi ketua OSIS, maka dari diri saya akan merasa senang karena saya telah mendapatkan wadah untuk mengembangkan diri saya satu tingkat lebih maju dari sebelumnya. Masalah-masalah yang datang, resiko yang ada, kebahagiaan yang menyelimuti akan saya nikmati semua rasa itu, karena tentunya mengambil sebuah keputusan memiliki resiko (apapun itu), jadi saya siap dengan apapun yang terjadi kedepannya karena saya tidak sendirian di sini saya memilki team yang hebat yang nantinya dapat berkembang, dapat belajar bersama sama, karena dalam sebuah organisasi mengedepankan yang namanya kebersamaan.</p>",
    slug: stringToSlug("Adnan Dhuka A."),
    vision: ["Menjadikan Organisasi Intra Sekolah SMK Ma'arif NU 1 Ajibarang sebagai wadah Siswa - Siswi untuk meningkatkan kualitas diri serta mengedepankan 4K (Kekeluargaan, Kedisiplinan, Kreativitas, dan Kualitas)"],
    mission: [
      "Meningkatkan Keimanan dan ketakwaan terhadap Tuhan YME.",
      "Mengoptimalkan fungsi osis sebagai penyelenggara atau pendukung kegiatan di sekolah, serta mengadakan kegiatan yang melibatkan seluruh komponen di lingkungan sekolah.",
      "Menjalin komunikasi yang baik antar pihak internal maupun external dan mengedepankan sopan santun",
      "Menjalankan dan memodifikasi program kerja terdahulu dengan inovasi sesuai dengan globalisasi serta mengevaluasi setiap kegiatan dan permasalahan",
    ],
    class: "XI TAV",
    position: 1,
    participants: [],
    role: "OSIS",
  },
  {
    name: "Fajar Ardiansyah",
    class: "XI RPL",
    bio: "Berjaya, bergelora bersama nomor 2 !",
    profile:
      "<p>Perkenalkan nama saya Fajar Ardiansyah, saya lahir dijakarta, 21 April 2007.Saya adalah seorang siswa SMK Ma'arif NU 1 Ajibarang dari kelas XI RPL yang berkeinginan untuk berdedikasi tinggi terhadap sekolah,seluruh jajaran sekolah dan warga sekolah. Saya aktif dalam berbagai kegiatan ekstrakurikuler dan juga organisasi, seperti menjadi anggota ekstrakurikuler english club, panitia event sekolah, dan berperan dalam berbagai proyek sosial di lingkungan sekolah. Saya juga aktif dalam organisasi eksternal dan mengikuti kepanitiaan event eksternal, dieksternal saya bergabung dalam organisasi Forum Osis Banyumas menjabat sebagai Biro Kepemudaan, serta aktif seperti mengikuti kepanitiaan main event forum osis banyumas serta menjadi volunteer forum anak banyumas, serta masih banyak lagi. Semua pengalaman ini telah membentuk saya menjadi sosok yang berkomitmen untuk memberikan suara dan wadah bagi suara seluruh siswa di sekolah ini.</p><p>Selain Kegiatan diluar kelas dan sekolah, saya dikenal sebagai siswa yang aktif dalam berorganisasi, saya memiliki rekam jejak pengalaman berorganisasi yang cukup baik, setiap program kerja/event kepanitiaan yang saya ikuti, saya selalu berusaha semaksimal mungkin untuk berkontribusi yang terbaik dalam mensukseskan kegiatan tersebut, Keunggulan bersama dalam kemampuan berkomunikasi, selalu siap mendengarkan masukan dari teman-teman,bekerjasama, dan dalam hal memimpin. Serta, seseorang yang peduli terhadap perubahan positif di sekolah. Saya ingin mengajukan berbagai ide dan inisiatif yang inovatif untuk meningkatkan kualitas pendidikan dan kehidupan siswa di sekolah. Saya menginginkan Perubahan yang nantinya berdampak positif terhadap sekolah dan warga sekolah, dalam hal Prestasi akademik maupun non-akademik,dll. Sebuah perubahan yang sebelumnya belum pernah ada disekolah ini.Selama ini, Saya telah aktif dalam berbagai kegiatan sosial dan pengabdian masyarakat di sekolah. Saya percaya bahwa kekuatan komunitas sekolah terletak pada kerja sama dan kepedulian terhadap sesama.</p><p>Maka dari itu, Saya membulatkan tekad saya untuk mencalonkan diri sebagai calon kandidat ketua osis.Jika nantinya saya terpilih Sebagai calon ketua OSIS, Saya berkomitmen untuk bekerja keras, bersama-sama dengan seluruh anggota OSIS, untuk menjadikan sekolah ini tempat yang lebih baik bagi semua siswa,berkomitmen untuk mewujudkan perubahan positif dalam sekolah dan membawa aspirasi seluruh siswa ke tingkat yang lebih tinggi. Dengan pengalaman dan semangatnya, Saya siap untuk memimpin OSIS dan menjadi suara para siswa.</p>",
    slug: stringToSlug("Fajar Ardiansyah"),
    vision: [
      "Menjadikan OSIS SMK Ma'arif NU 1 Ajibarang sebagai wadah dalam menampung aspirasi dan kreativitas Siswa/i. Untuk meningkatkan Etos Kerja, Berkolaboratif, serta mempunyai tujuan bersama. Dengan semangat untuk mewujudkan Siswa/i SMK Ma'arif NU 1 Ajibarang yang Bertaqwa, Berprestasi, Berakhlak Mulia, Inovatif, dan Berprofil Pancasila",
    ],
    mission: [
      "Meningkatkan Keimanan serta Ketaqwaan terhadap Tuhan yang Maha Esa",
      "Mengoptimalkan Kegiatan Ekstrakurikuler akademik maupun non-akademik yang ada di SMK Ma'arif NU 1 Ajibarang demi menjadikan Siswa/I yang berprestasi",
      "Menjalin kerjasama/hubungan baik dengan Warga Sekolah, Organisasi internal maupun eksternal",
      "Memaksimalkan peran serta fungsi OSIS melalui program kerja",
      "Menciptakan Lingkungan anti diskriminasi dan Membiasakan budaya 5S",
      "Mengadakan Kegiatan Sosial seperti Kegiatan Peduli Lingkungan, Menggalang Dana, dan Bakti Sosial, bertujuan agar Siswa/I SMK Ma'arif NU 1 Ajibarang tau betapa pentingnya Social Awareness",
      "Membuat suatu Event/Kegiatan yang nantinya menjadi Event Tahunan",
    ],
    position: 2,
    participants: [],
    role: "OSIS",
  },
  {
    name: "Rohmatin Lutfiana",
    class: "XI TKJ F",
    bio: "Satu hati, satu suara, pilih nomor tiga",
    profile:
      "<p>Nama saya Rohmatin Lutfiana. Saya bertempat tinggal di Desa Pancasan RT 08 RW 04 Kecamatan Ajibarang. Saya merupakan seorang siswi di sekolah SMK Ma'arif NU 1 Ajibarang, dan saya telah belajar di sini selama 1 tahun lebih  dengan mengambil jurusan Teknik Komputer Jaringan dan saya berasal dari kelas XI TKJ F.</p><p>Selama masa sekolah, saya telah terlibat dalam beberapa kegiatan di sekolah, seperti mengikuti kegiatan ekstrakurikuler English Club dan bergabung menjadi pengurus OSIS . Di organisasi OSIS jabatan saya yaitu sebagai anggota di Seksi Bidang 2 yaitu Kehidupan berbangsa dan bernegara. Selama menjadi pengurus OSIS saya mendapatkan berbagai pengalaman dan pemahaman. Seperti pengalaman menjadi Panitia Event dan melaksanakan proker yang terjun langsung ke masyarakat. Maka dari itu, saya yakin untuk mencalonkan diri saya sebagai calon ketua osis karena pengalaman ini telah membentuk dan memperkaya pemahaman saya tentang kebutuhan dan potensi sekolah.</p><p>Saya percaya bahwa kepemimpinan bukanlah tentang berkuasa, tetapi tentang kekeluargaannya, bagaimana kita bersama saat senang dan sedih. Selain itu, saya adalah orang yang terbuka terhadap saran dan kritik. Saya percaya bahwa dengan mendengarkan pendapat semua pandangan, dapat menciptakan perubahan yang lebih baik.</p>",
    slug: stringToSlug("Rohmatin Lutfiana"),
    vision: [
      "Menjadikan organisasi osis sebagai tempat aspirasi serta menjadi inspirasi bagi siswa siswi SMK Ma'arif NU 1 Ajibarang.",
      "Menjadikan siswa siswi SMK Ma'arif NU 1 Ajibarang menjadi pelajar yang produktif dengan mengutamakan Ketuhanan Yang Maha Esa.",
    ],
    mission: [
      "Meneruskan dan mengembangkan program kerja Osis, baik yang sudah terlaksana maupun yang belum terlaksana.",
      "Menyusun program kerja dengan komunikasi yang aktif dan baik antar siswa siswi SMK Ma'arif NU 1 Ajibarang.",
      "Menumbuhkan sikap yang saling menghormati dan menghargai sesama warga sekolah.",
    ],
    position: 3,
    participants: [],
    role: "OSIS",
  },

  {
    name: "Anggit Setiadi",
    class: "XI TKJ B",
    bio: "jangan lupa pilih nomer satu, karna satu untuk semua",
    profile: "",
    slug: stringToSlug("Anggit Setiadi"),
    vision: ["Terwujudnya Generasi IPNU Yang Cerdas, Unggul, Kreatif, dan Mandiri serta bertanggungjawab"],
    mission: [
      "Mengembangkan karakter siwa dalam berprilaku disiplin, relegius, keja keras, tangguh, gotong royong dan bertanggungjawab dalam bertindak",
      "Mewujudkan organisasi yang bersinergi dalam menunjang optimalisasi pelaksanaan program kerja organisasi",
      "Mewujudkan kader yang berkarakter dan berkomitmen terhadap organisasi",
      "mewujudkan organisasi yang bersifat kekeluargaan",
    ],
    position: 1,
    participants: [],
    role: "IPNU",
  },
  {
    name: "Iqmal Maulana",
    class: "XI TKR D",
    bio: "Ayo jangan lupa pilih nomor 2,sukses,berjaya dan bahagia",
    profile: "",
    slug: stringToSlug("Iqmal Maulana"),
    vision: ["Mewujudkan ipnu ippnu yang profesional dan bisa mengoptimalkan fungsi dari organisasi"],
    mission: [
      "Meningkatkan kedisiplinan dan potensi IPNU IPPNU Manusa dalam berorganisasi",
      "Mewujudkan organisasi yang bersinergi dalam menunjang optimalisasi pelaksanaan program kerja organisasi",
      "Menciptakan sebuah rasa kekeluargaan untuk membangun kerjasama dalam berorganisasi",
    ],
    position: 2,
    participants: [],
    role: "IPNU",
  },
  {
    name: "Berliana Zahra Pramudhita",
    class: "XI RPL",
    bio: "Pilih nomer 1 Disiplin dalam waktu Ikhlas dalam membantu",
    profile: "",
    slug: stringToSlug("Berliana Zahra Pramudhita"),
    vision: ["Terbentuknya kesempurnaan kader IPNU IPPNU Komisariat SMK Ma'arif NU 1 Ajibarang yang bertaqwa,berilmu serta mempunyai pemikiran yang kreatif dan inovatif."],
    mission: [
      "Bertaqwa kepada Tuhan Yang Maha Esa",
      "Menumbuhkan rasa sopan santun kepada semua orang",
      "Menjadikan kader IPNU IPPNU Komisariat SMK Ma'arif NU 1 Ajibarang yang jujur,disiplin serta bertanggung jawab",
      "Menjalankan tugas IPNU IPPNU yang sebelumnya belum terlaksana",
    ],
    position: 1,
    participants: [],
    role: "IPPNU",
  },
  {
    name: "Shofia Qutrotunnada",
    class: "XI TKJ H",
    bio: "Daripada Mendua mending pilih Nomer 2",
    profile: "",
    slug: stringToSlug("Shofia Qutrotunnada"),
    vision: ["Membantu IPNU IPPNU Komisariat Manusa memiliki jiwa persahabatan dan kekeluargaan antar anggotanya, serta berusaha menerapkan nilai dan norma-norma keislaman atau nilai Aswaja dan juga nilai Pancasila"],
    mission: [
      "Bertaqwa kepada Tuhan Yang Maha Esa",
      "Menumbuhkan rasa sopan santun kepada semua orang",
      "Menjadikan kader IPNU IPPNU Komisariat SMK Ma'arif NU 1 Ajibarang yang jujur,disiplin serta bertanggung jawab",
      "Menjalankan tugas IPNU IPPNU yang sebelumnya belum terlaksana",
    ],
    position: 2,
    participants: [],
    role: "IPPNU",
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
