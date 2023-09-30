import { candidateSeeder } from "./seed/candidate";

const seeder = async () => {
  await candidateSeeder();
};

export { seeder };
