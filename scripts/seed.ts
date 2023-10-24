const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Accounting" },
        { name: "Cardio" },
        { name: "Cross training" },
        { name: "Fitness" },
        { name: "HIIT musculaire" },
        { name: "Musculation" },
        { name: "Métabolique" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();