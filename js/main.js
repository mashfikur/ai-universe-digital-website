const loadData = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");

  const data = await res.json();

  const tools = data.data.tools;

  console.log(tools);

  showData(tools);
};

loadData();


const showData= (tools)=>{

    const cardContainer=document.getElementById('card-container')

    tools.forEach((tool)=>{
        console.log(tool.name)

        const div = document.createElement('div')

        div.classList="card w-96 bg-gray-100 shadow-xl"

        div.innerHTML=`
        <figure><img src="${tool.image}" alt="Tools" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            ${tool.name}
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
          </div>
        </div>
        
        `;

        cardContainer.appendChild(div)
    })

}
