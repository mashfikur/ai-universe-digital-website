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

}
