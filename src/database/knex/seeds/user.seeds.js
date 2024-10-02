exports.seed = async function (knex) {
  await knex("users").del()
  await knex("users").insert([
    {
      name: "Administrador",
      email: "admin@admin.com",
      password: "$2b$10$8t/KMJhQN/p5BTp/rmK9T.mlaOm94B0xMlFfbRP7i8OOZkNtYzGiS",
      role: "admin",
    },

    {
      name: "Cliente",
      email: "user@email.com",
      password: "$2b$10$4v5hjFubzyN.9NHrEL.HPeWVpJgDI3wifBo7hgtz7c9hQOBXMQSAW",
      role: "customer",
    },
  ])
}
