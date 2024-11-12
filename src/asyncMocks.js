const products = [
  {
    id: 1,
    title: "Almohadon",
    price: 80000,
    category: "Decoracion",
    description:
      "Almohadón de 50x50 cm con funda de lino lavable y relleno de fibra de alta densidad. Disponible en colores neutros.",
    image: "/images/cojines4.jpg",
  },
  {
    id: 2,
    title: "Manta",
    price: 120000,
    category: "Decoracion",
    description:
      "Manta de 150x200 cm en mezcla de lana y acrílico. Suave, resistente y lavable a máquina.",
    image: "/images/mantas1.jpg",
  },
  {
    id: 3,
    title: "Canasta",
    price: 28000,
    category: "Decoracion",
    description:
      "Manta de 150x200 cm en mezcla de lana y acrílico. Suave, resistente y lavable a máquina.",
    image: "/images/canasta2.jpg",
  },
  {
    id: 4,
    title: "Dispenser",
    price: 23000,
    category: "Uso diario",
    description:
      "Dispenser de vidrio de 500 ml con bomba anticorrosiva, ideal para jabones o aceites. Fácil de rellenar.",
    image: "/images/dspenser2.jpg",
  },
  {
    id: 5,
    title: "Individual",
    price: 15000,
    category: "Uso diario",
    description:
      "Individual de 45x30 cm, resistente al calor y antideslizante. Fácil de limpiar y proteger superficies.",
    image: "/images/individuales.jpg",
  },
  {
    id: 6,
    title: "Botellon",
    price: 30000,
    category: "Uso diario",
    description:
      "Botellón de vidrio de 1L con tapa de corcho hermética. Ideal para agua o jugos; diseño decorativo y duradero.",
    image: "/images/botellones.jpg",
  },
  {
    id: 7,
    title: "Puff",
    price: 100000,
    category: "Decoracion",
    description:
      "Puff de 40 cm de diámetro, relleno de espuma. Funda de algodón lavable y resistente al uso diario.",
    image: "/images/ideas4.jpg",
  },
];

// Cambié la promesa por una función asincrónica
export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products); // Devuelve los productos después de 2 segundos
    }, 2000);
  });
};

export const getProduct = (id) => {
  return products.find((prod) => prod.id === id); // Buscar un producto por id
};

export const getCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      resolve(filteredProducts); // Filtra productos por categoría
    }, 1000); // Simula retraso
  });
};

export const getItemById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((prod) => prod.id === parseInt(id, 10));
      resolve(product);
    }, 1000); // Simula un retraso de 1 segundo
  });
};
