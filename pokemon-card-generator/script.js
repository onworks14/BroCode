const typeColor={bug:"#26de81",dragon:"#ffeaa7",electric:"#fed330",fairy:"#FF0069",fighting:"#30336b",fire:"#f0932b",flying:"#81ecec",grass:"#00b894",ground:"#EFB549",ghost:"#a55eea",ice:"#74b9ff",normal:"#95afc0",poison:"#6c5ce7",psychic:"#a29bfe",rock:"#2d3436",water:"#0190FF"},url=" https://pokeapi.co/api/v2/pokemon/",card=document.getElementById("card"),btn=document.getElementById("btn");let getPokeData=()=>{let e=Math.floor(150*Math.random())+1,t=" https://pokeapi.co/api/v2/pokemon/"+e;fetch(t).then(e=>e.json()).then(e=>{generateCard(e)})},generateCard=e=>{let t=e.stats[0].base_stat,a=e.sprites.other.dream_world.front_default,s=e.name[0].toUpperCase()+e.name.slice(1),r=e.stats[1].base_stat,p=e.stats[2].base_stat,n=e.stats[5].base_stat,d=typeColor[e.types[0].type.name];card.innerHTML=`
      <p class="hp">
        <span>HP</span>
          ${t}
      </p>
      <img src=${a} />
      <h2 class="poke-name">${s}</h2>
      <div class="types">

      </div>
      <div class="stats">
        <div>
          <h3>${r}</h3>
          <p>Attack</p>
        </div>
        <div>
          <h3>${p}</h3>
          <p>Defense</p>
        </div>
        <div>
          <h3>${n}</h3>
          <p>Speed</p>
        </div>
      </div>
`,appendTypes(e.types),styleCard(d)},appendTypes=e=>{e.forEach(e=>{let t=document.createElement("SPAN");t.textContent=e.type.name,document.querySelector(".types").appendChild(t)})},styleCard=e=>{card.style.background=`radial-gradient(circle at 50% 0%, ${e} 36%, #ffffff 36%)`,card.querySelectorAll(".types span").forEach(t=>{t.style.backgroundColor=e})};btn.addEventListener("click",getPokeData),window.addEventListener("load",getPokeData);