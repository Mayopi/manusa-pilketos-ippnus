import { adminSeeder } from "./seed/admin";
import { candidateSeeder } from "./seed/candidate";
import { memberSeeder } from "./seed/member";

const seeder = async () => {
  await candidateSeeder();
  await memberSeeder();
  await adminSeeder();
};

export { seeder };
