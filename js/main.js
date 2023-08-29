const loadData = async (isShowMore) => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");

  const data = await res.json();

  const tools = data.data.tools;

  console.log(tools);

  showData(tools, isShowMore);
};

loadData();

const showData = (tools, isShowMore) => {
  const cardContainer = document.getElementById("card-container");

  cardContainer.innerHTML = ``;

  if (!isShowMore) {
    tools = tools.slice(0, 6);
    handleShowMore();
  }

  const list = document.getElementById("item-list");
  tools.forEach((tool) => {
    console.log(tool.name);

    const ul = document.createElement("ul");
    ul.classList.add("list-decimal");

    const features = tool.features;

    features.forEach((feature) => {
      const li = document.createElement("li");
      li.innerText = feature;
      ul.appendChild(li);
    });

    const div = document.createElement("div");

    div.classList =
      "card max-w-[30rem] max-h-[30rem] bg-base-100  p-4 border-2";

    div.innerHTML = `
        <figure><img class="rounded-xl" src="${
          tool.image ? tool.image : demoPic
        }" alt="Tools" /></figure>
        <div class="card-body">
          <div >
          <p class="text-xl font-bold">Features</p>
          ${ul.outerHTML}
          </div>

          <hr>

          <h2 class="card-title">
          ${tool.name}
        </h2>

            <div class="flex items-center gap-2">
                <ion-icon name="calendar-outline"></ion-icon>
                <p> ${tool.published_in}</p>
            </div>
        </div>
        
        `;

    cardContainer.appendChild(div);
  });
};

const handleShowMore = (isTrue) => {
  const showMoreButton = document.getElementById("show-more-btn");

  if (!isTrue) {
    showMoreButton.classList.remove("hidden");
  } else {
    showMoreButton.classList.add("hidden");
  }
};

const showMore = () => {
  loadData(true);
  handleShowMore(true);
};
