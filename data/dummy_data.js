export const allProducts = [
  {
    id: "p1",
    category_id: 4,
    name: "Gilas",
    item_img: require(`../assets/home/cherry.png`),
    price_per: "1 kq",
    price: "5.00",
    price_after_discount: "5.00",
    description: "Əsl kənd meyvəsin. Organik ve saf.",
    feedback: [
      {
        id: "us1",
        name: "Ahmed",
        text: "Bəyəndim",
        created_at: "2021-11-01T10:07:06.000000Z",
      },
      {
        id: "us2",
        name: "Rustam",
        text: "Gilas Gozel idi",
        created_at: "2021-11-01T10:07:06.000000Z",
      },
    ],
  },
  {
    id: "p2",
    category_id: 4,
    name: "Alma",
    item_img: require(`../assets/home/apple.png`),
    price_per: "1 kq",
    price: "4.50",
    price_after_discount: "4.50",
    description: "Əsl kənd meyvəsin. Organik ve saf.",
    feedback: [
      {
        id: "us1",
        name: "Ahmed",
        text: "Bəyəndim",
        created_at: "2021-11-01T10:07:06.000000Z",
      },
      {
        id: "us2",
        name: "Rustam",
        text: "Alma Gozel idi",
        created_at: "2021-11-01T10:07:06.000000Z",
      },
    ],
  },
  {
    id: "p3",
    category_id: 4,
    name: "Ananas",
    item_img: require(`../assets/home/pineapple.png`),
    price_per: "1 ədəd",
    price: "2.00",
    price_after_discount: "2.00",
    description: "Əsl kənd meyvəsin. Organik ve saf.",
    feedback: [
      {
        id: "us1",
        name: "Ahmed",
        text: "Bəyəndim",
        created_at: "2021-11-01T10:07:06.000000Z",
      },
      {
        id: "us2",
        name: "Rustam",
        text: "Gozel idi",
        created_at: "2021-11-01T10:07:06.000000Z",
      },
    ],
  },
  {
    id: "p4",
    category_id: 1,
    name: "Ət",
    item_img: require(`../assets/home/meat.png`),
    price_per: "1 kq",
    price: "12.00",
    price_after_discount: "12.00",
    description: "Əsl kənd meyvəsin. Organik ve saf.",
    feedback: [
      {
        id: "us1",
        name: "Ahmed",
        text: "Bəyəndim",
        created_at: "2021-11-01T10:07:06.000000Z",
      },
      {
        id: "us2",
        name: "Rustam",
        text: "Gozel idi",
        created_at: "2021-11-01T10:07:06.000000Z",
      },
    ],
  },
];

export const categoriesData = [
  {
    id: 1,
    name: "Ət",
    item_img: require(`../assets/category/meat.png`),
  },
  {
    id: 2,
    name: "Süt Məhsulları",
    item_img: require(`../assets/category/milk.png`),
  },
  {
    id: 3,
    name: "Tərəvəz Məhsulları",
    item_img: require(`../assets/category/vegetables.png`),
  },
  {
    id: 4,
    name: "Meyvə Məhsulları",
    item_img: require(`../assets/category/fruit.png`),
  },
  {
    id: 5,
    name: "Günlük Məhsulları",
    item_img: require(`../assets/category/dairyProducts.png`),
  },
  {
    id: 6,
    name: "Ət Məhsulları",
    item_img: require(`../assets/category/meatProducts.png`),
  },
];

export const best_seller_products = [
  {
    id: "p1",
    name: "Gilas",
    item_img: require(`../assets/home/cherry.png`),
    price_per: "1 kq",
    price: "5.00",
    price_after_discount: "5.00",
    description: "Əsl kənd meyvəsin. Organik ve saf.",
  },
  {
    id: "p2",
    name: "Alma",
    item_img: require(`../assets/home/apple.png`),
    price_per: "1 kq",
    price: "4.50",
    price_after_discount: "4.50",
    description: "Əsl kənd meyvəsin. Organik ve saf.",
  },
  {
    id: "p3",
    name: "Ananas",
    item_img: require(`../assets/home/pineapple.png`),
    price_per: "1 ədəd",
    price: "2.00",
    price_after_discount: "2.00",
    description: "Əsl kənd meyvəsin. Organik ve saf.",
  },
  {
    id: "p4",
    name: "Ət",
    item_img: require(`../assets/home/meat.png`),
    price_per: "1 kq",
    price: "12.00",
    price_after_discount: "12.00",
    description: "Əsl kənd meyvəsin. Organik ve saf.",
  },
];

export const homeSlider = [
  {
    item_img: require(`../assets/home/slider/first.png`),
  },
  {
    item_img: require(`../assets/home/slider/second.jpg`),
  },
  {
    item_img: require(`../assets/home/slider/third.png`),
  },
];

export const order_cards = [
  {
    id: "347939",
    date: "15/08/2022",
    count: 3,
    total: 100,
  },
  {
    id: "734912",
    date: "05/01/2021",
    count: 5,
    total: 20,
  },
  {
    id: "942865",
    date: "10/06/2020",
    count: 1,
    total: 30,
  },
];

export const user_addresses = [
  {
    id: "a1",
    country: "Azerbaijan",
    city: "Baku",
    street: "M.Asadov",
  },
  {
    id: "a2",
    country: "Turkey",
    city: "Istanbul",
    street: "C.Şengör",
  },
];
