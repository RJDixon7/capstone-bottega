import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Riley",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Hunter",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: "1",
      name: "Baseball Helmet",
      slug: "baseball-helmet",
      image: "/images/helmet.png",
      card: "Baseball Helmet",
      price: 20.5,
      countInStock: 100,
      description:
        "This helmet is designed to protect yourself from baseballs injuring you.",
    },
    {
      // _id: "2",
      name: "Baseball Glove",
      slug: "baseball-glove",
      image: "/images/glove.png",
      card: "Baseball Glove",
      price: 19.0,
      countInStock: 200,
      description:
        "This glove is designed to catch baseballs that are thrown or hit in you direction.",
    },
    {
      // _id: "3",
      name: "Baseball Cleats",
      slug: "baseball-cleats",
      image: "/images/cleats.png",
      card: "Baseball Cleats",
      price: 35.5,
      countInStock: 0,
      description:
        "These cleats are designed specificaly for use in the baseball field. They provide traction needed to run around the bases and in the outfield",
    },
    {
      // _id: "4",
      name: "Baseball Bag",
      slug: "baseball-bag",
      image: "/images/baseballbag.png",
      card: "Baseball Bag",
      price: 25.0,
      countInStock: 50,
      description:
        "Use this bag to store all of you baseball equipment for easy transport and access",
    },
    {
      // _id: "5",
      name: "Wooden Bat",
      slug: "wooden-bat",
      image: "/images/woodenbat.png",
      card: "Wooden Bat",
      price: 30.5,
      countInStock: 45,
      description:
        "A popular choice bat to use. These bats are created with the hardest wood and sealed to protect from all weather elements",
    },
    {
      // _id: "6",
      name: "Metal Bat",
      slug: "metal-bat",
      image: "/images/metalbat.png",
      card: "Metal Bat",
      price: 35.0,
      countInStock: 30,
      description:
        "Metal bats are designed with the best aluminum to provide the best hit possible.",
    },
  ],
};

export default data;
