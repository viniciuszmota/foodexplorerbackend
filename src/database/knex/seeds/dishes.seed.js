exports.seed = async (knex) => {
  await knex("dishes").del()
  await knex("dishes").insert([
    {
      name: "Macarons",
      description: "Farinha de amêndoas, manteiga, claras e açúcar.",
      price: 79.97,
      picture: "Mask group-6.png",
      category_id: 1,
    },
    {
      name: "Bolo de damasco",
      description: "Damascos frescos em uma massa sem glúten.",
      price: 19.97,
      picture: "Mask group-7.png",
      category_id: 1,
    },
    {
      name: "Espresso",
      description: "Café cremoso feito na temperatura e pressões perfeitas.",
      price: 15.97,
      picture: "Mask group-9.png",
      category_id: 3,
    },
    {
      name: "Spaguetti Gambe",
      description: "Massa fresca com camarões e pesto.",
      price: 79.97,
      picture: "Mask group-2.png",
      category_id: 2,
    },
    {
      name: "Salada Ravanello",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
      price: 49.97,
      picture: "Mask group.png",
      category_id: 2,
    },
    {
      name: "Torradas de Parma",
      description:
        "Presunto de parma e rúcula em um pão com fermentação natural.",
      price: 25.97,
      picture: "Mask group-1.png",
      category_id: 2,
    },
    {
      name: "Salada Molla",
      description: "Massa fresca com camarões e pesto.",
      price: 79.97,
      picture: "Mask group-3.png",
      category_id: 2,
    },
    {
      name: "Prugna Pie",
      description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
      price: 79.97,
      picture: "Mask group-4.png",
      category_id: 1,
    },
    {
      name: "Peachy pastrie",
      description: "Delicioso folheado de pêssego com folhas de hortelã.",
      price: 32.97,
      picture: "Mask group-5.png",
      category_id: 1,
    },
    {
      name: "Suco de maracujá",
      description: "Suco de maracujá gelado, cremoso, docinho.",
      price: 13.97,
      picture: "Mask group-8.png",
      category_id: 3,
    },
    {
      name: "Tè d'autunno",
      description: "Chá de anis, canela e limão. Sinta o outono italiano.",
      price: 19.97,
      picture: "Mask group-10.png",
      category_id: 3,
    },
    {
      name: "Pomo bourbon",
      description: "Maçã, whisky, canela. On the rocks.",
      price: 79.97,
      picture: "Mask group-11.png",
      category_id: 3,
    },
  ])

  await knex("dish_ingredients").del()
  await knex("dish_ingredients").insert([
    {
      dish_id: 1,
      name: "amêndoas",
    },
    {
      name: "mel",
      dish_id: 1,
    },
    {
      name: "manteiga",
      dish_id: 1,
    },
    {
      name: "damasco",
      dish_id: 2,
    },
    {
      name: "café",
      dish_id: 3,
    },
    {
      name: "massa fresca",
      dish_id: 4,
    },
    {
      name: "camarões",
      dish_id: 4,
    },
    {
      name: "pesto",
      dish_id: 4,
    },
    {
      name: "rabanetes",
      dish_id: 5,
    },
    {
      name: "gergelim",
      dish_id: 5,
    },
    {
      name: "folhas verdes",
      dish_id: 5,
    },
    {
      name: "presunto parma",
      dish_id: 6,
    },
    {
      name: "rúcula",
      dish_id: 6,
    },
    {
      name: "pão de centeio",
      dish_id: 6,
    },
    {
      name: "folhas verdes",
      dish_id: 7,
    },
    {
      name: "tomate",
      dish_id: 7,
    },
    {
      name: "pepino",
      dish_id: 7,
    },
    {
      name: "ameixas",
      dish_id: 8,
    },
    {
      name: "pêssegos",
      dish_id: 9,
    },
    {
      name: "hortelã",
      dish_id: 9,
    },
    {
      name: "maracujá",
      dish_id: 10,
    },
    {
      name: "anis estrelado",
      dish_id: 11,
    },
    {
      name: "canela",
      dish_id: 11,
    },
    {
      name: "limão",
      dish_id: 11,
    },
    {
      name: "maçã",
      dish_id: 12,
    },
    {
      name: "whisky",
      dish_id: 12,
    },
    {
      name: "canela",
      dish_id: 12,
    },
  ])
}
