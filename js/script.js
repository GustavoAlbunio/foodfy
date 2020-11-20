const modal = document.querySelector(".modal");
const cards = document.querySelector(".cards");

const cardsList = [
  {
    image: {
      src: "/assets/burger.png",
      alt: "Receita de triplo bacon burger",
    },
    title: "Triplo bacon burger",
    author: "Jorge Relato",
  },
  {
    image: {
      src: "/assets/pizza.png",
      alt: "Receita de pizza 4 estações",
    },
    title: "Pizza 4 estações",
    author: "Jorge Relato",
  },
  {
    image: {
      src: "/assets/espaguete.png",
      alt: "Receita de espaguete ao alho",
    },
    title: "Espaguete ao alho",
    author: "Júlia Kinoto",
  },
  {
    image: {
      src: "/assets/lasanha.png",
      alt: `Receita de lasanha mac n' cheese`,
    },
    title: `Lasanha mac n' cheese`,
    author: "Juliano Vieira",
  },
  {
    image: {
      src: "/assets/doce.png",
      alt: "Receita de docinho pão-do-céu",
    },
    title: "Docinhos pão-do-céu",
    author: "Ricardo Golvea",
  },
  {
    image: {
      src: "/assets/asinhas.png",
      alt: "Receite de asinhas de frango ao barbecue",
    },
    title: "Asinhas de frango ao barbecue",
    author: "Vania Steroski",
  },
];

document.querySelector(".button-close").addEventListener("click", () => {
  modal.classList.remove("active");
});

const hadleModal = (prescription) => {
  const {
    image: { src, alt },
    title,
    author,
  } = prescription;

  modal.classList.add("active");

  const imgEl = document.querySelector("#modal-img");
  const titleEl = document.querySelector("#modal-title");
  const authorEl = document.querySelector("#modal-author");

  imgEl.src = src;
  imgEl.atl = alt;
  titleEl.innerHTML = title;
  authorEl.innerHTML = `por ${author}`;
};

const createCards = (cards, container) => {
  cards.forEach((card) => {
    const {
      image: { src, alt },
      title,
      author,
    } = card;

    const div = document.createElement("div");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    div.classList.add("card");

    img.src = src;
    img.alt = alt;
    h2.innerHTML = title;
    p.innerHTML = `por ${author}`;

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);

    div.addEventListener("click", () => {
      hadleModal(card);
    });

    container.appendChild(div);
  });
};
