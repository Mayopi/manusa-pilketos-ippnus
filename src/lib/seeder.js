import { candidateSeeder } from "./seed/candidate";
import { memberSeeder } from "./seed/member";

const seeder = async () => {
  await candidateSeeder();
  await memberSeeder();
};

export { seeder };
