/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "id1",
    name: "Adidas Mens Lite Racer",
    price: 286.84,
    description:
      "Sock-like construction hugs the foot, lace closure",
    category: ["c1"],
    image: "Img/men/20.png",
    discontinued: false
  },

  {
    id: "id2",
    discontinued: false,
    name: "Casual Converse",
    price: 805.52,
    description:
      "Leather sole, lace-up closure, hook-and-loop ankle strap",
    category: ["c1"],
    image: "Img/men/22.png"
  },
  {
    discontinued: false,
    id: "id3",
    name: "New Balance 515 V3",
    price: 402.8,
    description:
      "60% Cotton, 40% Polyester, Rubber sole, Synthetic suede and mesh upper for a comfortable feel",
    category: ["c1"],
    image: "Img/men/21.png"
  },
  {
    discontinued: false,
    id: "id4",
    name: "XIDISO Casual Sports",
    price: 44.99,
    description:
      "Durable and slip resistant, supportive, sock-like fit skidproof, rubber sole, perfect fit with stylish clothes",
    category: ["c1"],
    image: "Img/men/7.png"
  },
  {
    discontinued: false,
    id: "id5",
    name: "Men's Basketball Shoes",
    price: 53.99,
    description:
      "Leather sole, a pair of comfortable sports shoes, durable and lightweight.",
    category: ["c1"],
    image: "Img/men/8.png"
  },
  {
    discontinued: false,
    id: "id6",
    name: "Fila",
    price: 161,
    description:
      "Leather, rubber sole, pulled from Fila's 1987 design archives, surable outsole and low-profile design",
    category: ["c1"],
    image: "Img/men/9.png"
  },
  {
    discontinued: false,
    id: "id7",
    name: "FZUU Men's Fashion Street Sneakers",
    price: 52.99,
    description:
      " Rubber sole, Light-Weight & Breathable,Anti-slip Rubber Sole,  Fashion and unique design",
    category: ["c1"],
    image: "Img/men/13.png"
  },
  {
    discontinued: false,
    id: "id8",
    name: "Nautica Mens Hull 3 Sneaker",
    price: 101.49,
    description:
      "Rubber sole, Ultra lightweight design,A Lightweight Sneaker.",
    category: ["c1"],
    image: "Img/men/15.png"
  },
  {
    discontinued: false,
    id: "id9",
    name: "PUMA Mens Roma Classic",
    price: 201.41,
    description: "Leather and textile, rubber sole, shaft measures approximately low-top from arch",
    category: ["c1"],
    image: "Img/men/17.png"
  },
  {
    discontinued: false,
    id: "id10",
    name: "Happyyami Unisex shoes",
    price: 65.99,
    description:
      "Leather sole, a pair of comfortable sports shoes, durable and lightweight.",
    category: ["c1"],
    image: "Img/men/18.png"
  },
  {
    discontinued: false,
    id: "id11",
    name: "Reebok Men's Rapide",
    price: 158.44,
    description:
      "Rubber sole, shaft measures approximately low-top from arch.",
    category: ["c1"],
    image: "Img/men/19.png"
  },
  {
    discontinued: false,
    id: "id12",
    name: "Steve Madden",
    price: 163.54,
    description: "100% Fabric, rubber sole with Chambray upper",
    category: ["c1"],
    image: "Img/men/5.png"
  },
  {
    discontinued: false,
    id: "id13",
    name: "Adidas Women's Kaptir",
    price: 56.65,
    description:
      "Synthetic, Rubber sole,adidas is the original sports brand, Driven by innovation and a bias to action",
    category: ["c2"],
    image: "Img/women/1.jpg"
  },
  {
    discontinued: false,
    id: "id14",
    name: "CYAPING Womens Athletic Walking Blade",
    price: 57.99,
    description:
      "Rubber sole, Breathable Mesh Upper: Lightweight support and breathable",
    category: ["c2"],
    image: "Img/women/2.jpg"
  },
  {
    discontinued: false,
    id: "id15",
    name: "FUJEAK Women Walking Shoes",
    price: 39.99,
    description:
      "Breathable fabric for a breathable,circulation system.",
    category: ["c2"],
    image: "Img/women/3.jpg"
  },
  {
    discontinued: false,
    id: "id16",
    name: "Lacoste Women's Carnaby Sneakers",
    price: 100.45,
    description:
      "Rubber sole, Classic court cupsole, Nappa leather uppers",
    category: ["c2"],
    image: "Img/women/4.jpg"
  },
  {
    discontinued: false,
    id: "id17",
    name: "Womens Frances Sneaker",
    price: 24.7,
    description:
      "100% Cotton Canvas, Rubber sole, Shaft measures approximately",
    category: ["c2"],
    image: "Img/women/5.jpg"
  },
  {
    discontinued: true,
    id: "id18",
    name: "PUMA Womens Carina Sneaker",
    price: 421.09,
    description:
      "Leather and Synthetic, Rubber sole, Shaft measures approximately low-top from arch",
    category: ["c2"],
    image: "Img/women/6.jpg"
  },
  {
    discontinued: false,
    id: "id19",
    name: "New Balance Womens FuelCore Nergize V1",
    price: 189.36,
    description:
      "100% Synthetic, Rubber sole, Shaft measures approximately low-top from arch",
    category: ["c2"],
    image: "Img/women/7.jpg"
  },
  {
    discontinued: false,
    id: "id20",
    name: "Under Armour Womens Charged Assert 9",
    price: 201.41,
    description:
      "Rubber sole, Under Armour’s mission is to make all athletes better through passion",
    category: ["c2"],
    image: "Img/women/8.jpg"
  },
  {
    discontinued: false,
    id: "id21",
    name: "Adidas Women's Grand Court Sneakers",
    price: 322.26,
    description:
      "Leather and Synthetic, Rubber sole, Shaft measures approximately low-top from arch",
    category: ["c2"],
    image: "Img/women/9.jpg"
  },
  {
    discontinued: false,
    id: "id22",
    name: "Nike Womens Court Vision Lo Womens Cw5596-100",
    price: 318.66,
    description:
      "Leather sole, Iridescent Swoosh Design, Toe Perforations on the Upper Add Breathability",
    category: ["c2"],
    image: "Img/women/10.jpg"
  },
  {
    discontinued: true,
    id: "id23",
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 2995,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER)",
    category: ["c2"],
    image: "Img/women/11.jpg"
  },
  {
    discontinued: true,
    id: "id24",
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 3999,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.",
    category: ["c2"],
    image: "Img/women/12.jpg"
  },
  {
    discontinued: false,
    id: "id25",
    name: "Geox Girls Sneaker Sneaker",
    price: 144.29,
    description:
      "37% Leather Bovine Suede-39% Leather Bovine Full Grain-13% Textile Mesh Nylon-11",
    category: ["c3"],
    image: "Img/kids/1.jpg"
  },
  {
    discontinued: false,
    id: "id26",
    name: "DREAM PAIRS Toddler/Little Kid/Big Kid",
    price: 36.99,
    description:
      "Textile, Rubber sole, Synthetic sole, Lightweight,soft and comfortable design",
    category: ["c3"],
    image: "Img/kids/2.jpg"
  },
  {
    discontinued: false,
    id: "id27",
    name: "Adidas Kid's Grand Court K Athletic Shoe",
    price: 204.69,
    description:
      "Rubber sole, Shaft measures approximately 0-6 from arch, Regular fit,Low-cut leather sneakers ",
    category: ["c3"],
    image: "Img/kids/3.jpg"
  },
  {
    discontinued: false,
    id: "id28",
    name: "New Balance Kid's Fresh Foam Arishi V1 ",
    price: 130.96,
    description:
      "Fresh Foam midsole cushioning is precision engineered to deliver an ultra-cushioned",
    category: ["c3"],
    image: "Img/kids/4.jpg"
  },
  {
    discontinued: false,
    id: "id29",
    name: "Saucony Kids Vertex A/C Running Shoe",
    price: 147.57,
    description:
      "Rubber sole, Leather and mesh upper for durability & breathability Traditional lace closure",
    category: ["c3"],
    image: "Img/kids/5.jpg"
  },
  {
    discontinued: false,
    id: "id30",
    name: "Unitysow Kids Sneakers Boys Girls",
    price: 35.99,
    description:
      "BREATHABLE:Knit mesh upper enhances the internal circulation of air in the shoes.",
    category: ["c3"],
    image: "Img/kids/6.jpg"
  },
  {
    discontinued: true,
    id: "id31",
    name: "adidas Originals Unisex-Child Superstar 360 C Sneakers",
    price: 187.99,
    description: "Rubber sole, Lace closure with removeable strap, regular fit",
    category: ["c3"],
    image: "Img/kids/7.jpg"
  },
  {
    discontinued: true,
    id: "id32",
    name: "Nike Air Max 90 LTR (ps) Little Kids",
    price: 408.63,
    description:
      "Leather sole, A Max Air unit provides the same lightweight cushioning as the original.",
    category: ["c3"],
    image: "Img/kids/8.jpg"
  },

  {
    discontinued: true,
    id: "id36",
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 1299,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: ["c3"],
    image: "Img/kids/12.jpg"
  }
];
