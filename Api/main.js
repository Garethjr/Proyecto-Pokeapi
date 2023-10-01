async function paginacion (inicio,limite){
    const cardsContainer = document.querySelector('#cards-container')
    cardsContainer.innerHTML=""
    for (let i  = inicio; i  <= limite; i++ ){
      const url= `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch (url) 
     const data = await res.json();
     cardsContainer.innerHTML+=`
     <div class="myCard">
     <div class="innerCard">
         <div class="frontSide">
             <img src="${data.sprites.front_default} " alt="" class="foto">
             
             <div class="info">
                <p class="title">${data.name}</p>
                <p class="tipo">${data.types.map(type => type.type.name).join(', ')}</p>
                <p>ID: ${data.id}</p>
            </div>
         </div>
         <div class="backSide">
        
             
             
             <ul>
                 ${data.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
             </ul>
             <p>Habilidades:</p>
             <ul>
                 ${data.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
             </ul>
             
         </div>
     </div>
 </div>
`;
}
}

document.querySelector('#page').addEventListener('change',(e)=>{
    console.log(e.target.value)
    if(e.target.value==1)paginacion(1,20)
    if(e.target.value==2)paginacion(21,40)
    if(e.target.value==3)paginacion(41,60)
    if(e.target.value==4)paginacion(61,80)
    if(e.target.value==5)paginacion(81,100)
    if(e.target.value==6)paginacion(101,120)
    if(e.target.value==7)paginacion(121,140)
    if(e.target.value==8)paginacion(141,160)
    if(e.target.value==9)paginacion(161,180)
    if(e.target.value==10)paginacion(181,200)
    if(e.target.value==11)paginacion(201,220)
    if(e.target.value==12)paginacion(221,240)
    if(e.target.value==13)paginacion(241,260)
    if(e.target.value==14)paginacion(261,280)
    if(e.target.value==15)paginacion(281,300)
    if(e.target.value==16)paginacion(301,320)
    if(e.target.value==17)paginacion(321,340)
    if(e.target.value==18)paginacion(341,360)
    if(e.target.value==19)paginacion(361,380)
    if(e.target.value==20)paginacion(381,400)
}) 
async function buscarPokemon() {
    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
    const pokemonInfo = document.getElementById("pokemon-info");

    
    if (!isNaN(searchInput)) {
        
        const pokemonId = parseInt(searchInput);
        await mostrarPokemon(pokemonId, pokemonInfo);
    } else {
        
        await buscarPokemonPorNombre(searchInput, pokemonInfo);
    }
}

async function mostrarPokemon(pokemonIdOrName, container) {
    try {
        
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        
        container.innerHTML = `
            <div class="myCard">
                <div class="innerCard">
                    <div class="frontSide">
                        <img src="${data.sprites.front_default}" alt="${data.name}" class="foto">
                        <div class="info">
                            <p class="title">${data.name}</p>
                            <p class="tipo">${data.types.map(type => type.type.name).join(', ')}</p>
                            <p>ID: ${data.id}</p>
                        </div>
                    </div>
                    <div class="backSide">
                       
                        <p>Estadísticas:</p>
                        <ul>
                            ${data.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
                        </ul>
                        <p>Habilidades:</p>
                        <ul>
                            ${data.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
                        </ul>
                        
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        container.innerHTML = '<p class="not-found">Pokémon no encontrado.</p>';
        console.error("Error al buscar el Pokémon:", error);
    }
}

async function buscarPokemonPorNombre(nombre, container) {
    try {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        container.innerHTML = `
            <div class="myCard">
                <div class="innerCard">
                    <div class="frontSide">
                        <img src="${data.sprites.front_default}" alt="${data.name}" class="foto">
                        <div class="info">
        <p class="title">${data.name}</p>
       <p class="tipo">${data.types.map(type => type.type.name).join(', ')}</p>
       <p>ID: ${data.id}</p>
        </div>
       </div>
       <div class="backSide">
                       
      <p>Estadísticas:</p>
          <ul>
         ${data.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
          </ul>
             <p>Habilidades:</p>
          <ul>
          ${data.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
      </ul>
                        
                    </div>
                </div>
            </div>
        `;
    }
     catch (error) {
        container.innerHTML = '<p class="not-found">Pokémon no encontrado.</p>';
        console.error("Error al buscar el Pokémon:", error);
    }
    

}
