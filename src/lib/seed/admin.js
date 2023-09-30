import Admin from "@/models/Admin";

const adminSeeder = async () => {
  try {
    await Admin.deleteMany({});
    await Admin.create([
      {
        username: "superadmin",
        password: "root",
      },
    ]);

    console.log("Successfully seeding admins");
  } catch (error) {
    console.log("Failed seeding admins", error);
  }
};

export { adminSeeder };
