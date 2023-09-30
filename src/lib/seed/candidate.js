import Candidate from "@/models/Candidate";
import stringToSlug from "../stringToSlug";
const candidatesData = [
  {
    name: "Sopo Jarwo",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, perferendis?",
    profile:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore officia aperiam neque in dolores eaque? Totam ab nemo veniam fugiat minus, explicabo quae vel excepturi tempora sint distinctio neque odit. Corrupti consequuntur reiciendis laboriosam eum temporibus, delectus quia nulla facilis sed corporis obcaecati iure neque architecto impedit dicta labore nemo ab hic, est, modi fugit cum vitae. Iusto sint voluptas officia iure molestiae! Dicta animi, quibusdam repellat illum iure fuga perferendis facilis veniam natus veritatis laudantium fugit molestiae facere explicabo tempore aperiam dolor voluptatem cupiditate est similique omnis culpa cumque. Ducimus hic culpa laborum nam aspernatur quae deleniti quo. Libero!",
    slug: stringToSlug("Sopo Jarwo"),
    vision:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ex. Possimus earum adipisci, odio cumque totam voluptatem. Numquam possimus aspernatur accusantium et eveniet, dolor debitis quis, rerum, asperiores eligendi optio. Dignissimos sed culpa, at rerum necessitatibus amet, provident aperiam incidunt esse cum obcaecati excepturi voluptatibus, enim laudantium voluptatem minus ea!",
    mission:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum, saepe deleniti temporibus esse iusto aperiam adipisci alias dolorem deserunt quaerat consequuntur voluptatum, repellat mollitia dignissimos dolor earum vel est laudantium! Quis, sequi. Non ea sit modi voluptatibus eius illum minima dolor, rem maxime. Assumenda nisi hic, libero, quibusdam totam numquam nostrum reprehenderit atque blanditiis est ipsum veniam error consectetur porro necessitatibus quas aliquam possimus maiores exercitationem molestias ad eligendi mollitia. Esse quaerat ratione aspernatur id culpa explicabo voluptates maiores?",
    class: "Kelas A",
    position: 1,
    participants: [],
  },
  {
    name: "Adit Denis",
    class: "Kelas B",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, perferendis?",
    profile:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore officia aperiam neque in dolores eaque? Totam ab nemo veniam fugiat minus, explicabo quae vel excepturi tempora sint distinctio neque odit. Corrupti consequuntur reiciendis laboriosam eum temporibus, delectus quia nulla facilis sed corporis obcaecati iure neque architecto impedit dicta labore nemo ab hic, est, modi fugit cum vitae. Iusto sint voluptas officia iure molestiae! Dicta animi, quibusdam repellat illum iure fuga perferendis facilis veniam natus veritatis laudantium fugit molestiae facere explicabo tempore aperiam dolor voluptatem cupiditate est similique omnis culpa cumque. Ducimus hic culpa laborum nam aspernatur quae deleniti quo. Libero!",
    slug: stringToSlug("Adit Denis"),
    vision:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ex. Possimus earum adipisci, odio cumque totam voluptatem. Numquam possimus aspernatur accusantium et eveniet, dolor debitis quis, rerum, asperiores eligendi optio. Dignissimos sed culpa, at rerum necessitatibus amet, provident aperiam incidunt esse cum obcaecati excepturi voluptatibus, enim laudantium voluptatem minus ea!",
    mission:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum, saepe deleniti temporibus esse iusto aperiam adipisci alias dolorem deserunt quaerat consequuntur voluptatum, repellat mollitia dignissimos dolor earum vel est laudantium! Quis, sequi. Non ea sit modi voluptatibus eius illum minima dolor, rem maxime. Assumenda nisi hic, libero, quibusdam totam numquam nostrum reprehenderit atque blanditiis est ipsum veniam error consectetur porro necessitatibus quas aliquam possimus maiores exercitationem molestias ad eligendi mollitia. Esse quaerat ratione aspernatur id culpa explicabo voluptates maiores?",
    position: 2,
    participants: [],
  },
  {
    name: "Ultraman GG",
    class: "Kelas C",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, perferendis?",
    profile:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore officia aperiam neque in dolores eaque? Totam ab nemo veniam fugiat minus, explicabo quae vel excepturi tempora sint distinctio neque odit. Corrupti consequuntur reiciendis laboriosam eum temporibus, delectus quia nulla facilis sed corporis obcaecati iure neque architecto impedit dicta labore nemo ab hic, est, modi fugit cum vitae. Iusto sint voluptas officia iure molestiae! Dicta animi, quibusdam repellat illum iure fuga perferendis facilis veniam natus veritatis laudantium fugit molestiae facere explicabo tempore aperiam dolor voluptatem cupiditate est similique omnis culpa cumque. Ducimus hic culpa laborum nam aspernatur quae deleniti quo. Libero!",
    slug: stringToSlug("Ultraman GG"),
    vision:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ex. Possimus earum adipisci, odio cumque totam voluptatem. Numquam possimus aspernatur accusantium et eveniet, dolor debitis quis, rerum, asperiores eligendi optio. Dignissimos sed culpa, at rerum necessitatibus amet, provident aperiam incidunt esse cum obcaecati excepturi voluptatibus, enim laudantium voluptatem minus ea!",
    mission:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum, saepe deleniti temporibus esse iusto aperiam adipisci alias dolorem deserunt quaerat consequuntur voluptatum, repellat mollitia dignissimos dolor earum vel est laudantium! Quis, sequi. Non ea sit modi voluptatibus eius illum minima dolor, rem maxime. Assumenda nisi hic, libero, quibusdam totam numquam nostrum reprehenderit atque blanditiis est ipsum veniam error consectetur porro necessitatibus quas aliquam possimus maiores exercitationem molestias ad eligendi mollitia. Esse quaerat ratione aspernatur id culpa explicabo voluptates maiores?",
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
