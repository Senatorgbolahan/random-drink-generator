
async function fetchDrink(){

    
    try {
        
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

        if (!response.ok) {
            throw new Error('Request Failed')
        }
        const data = await response.json()
        displayDrinks(data.drinks[0]);
        /* const {idDrink,...rest} = data.drinks[0]
           console.log(idDrink, rest);*/
        
    } catch (error) {
        document.querySelector('#user').innerHTML = `<p class = "text-xl  text-center text-red-500">${error}</p>`
        // console.log(error);
    }
    
}

fetchDrink();


function displayDrinks(drink){

    let myUser = document.querySelector('#user');
    myUser.innerHTML = ` <div class="flex justify-between">
    <div class="flex">
        <img class="w-48 h-48 rounded-full mr-8" src= ${drink.strDrinkThumb} />
        <div class="space-y-3">
            <p class="text-xl">
                <span class="font-bold">Drink ID: </span> ${drink.idDrink}
            </p>
            <p class="text-xl">
                <span class="font-bold">Drink Name: </span> ${drink.strDrink}
            </p>
            <p class="text-xl">
                <span class="font-bold">Drink Category: </span> ${drink.strCategory}
            </p>
            <p class="text-xl">
                <span class="font-bold">Drink Level: </span>  ${drink.strAlcoholic}
            </p>
            <p class="text-xl">
                <span class="font-bold">Instruction: </span> ${drink.strInstructions}
            </p>
            <p class="text-xl"><span class="font-bold">Date Manufactured: </span> ${drink.dateModified}</p>
        </div>
    </div>
</div>`

    // console.log(drink);
}

let generateDrink = document.querySelector('#generate')
generateDrink.addEventListener('click', fetchDrink)
















// function fetchDrink(){

//     fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
//         .then((response) => response.json())
//         // .then((data) => console.log(data.drinks[0].dateModified))
//         .then((data) => console.log(data.drinks[0].strDrink,data.drinks[0].dateModified))
// }

// fetchDrink()