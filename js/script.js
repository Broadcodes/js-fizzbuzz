// Recupero il div dal DOM che conterrà tutti i quadratini
const contenitorGrid = document.getElementById("grid");

// Ciclo per visualizzare i 100 numeri
for(let i = 1; i <= 100; i++){
    // Creazione dell'elemento del DOM
    const element = document.createElement("div");

    // Condizione per determinare se un numero è divisibile per 3, 5 o entrambi
    if((i % 3) === 0 && (i % 5) === 0){
        element.append(`FizzBuzz`);
        element.style.backgroundColor = "#f0466f";
        element.style.display = "flex";
        element.style.justifyContent = "center";
        element.style.alignItems = "center";
        element.style.fontWeight = "bold";
    } else if((i % 3) === 0){
        element.append(`Fizz`);
        element.style.backgroundColor = "#0cd6a1";
        element.style.display = "flex";
        element.style.justifyContent = "center";
        element.style.alignItems = "center";
        element.style.fontWeight = "bold";
    } else if((i % 5) === 0){
        element.append(`Buzz`);
        element.style.backgroundColor = "#ffd166";
        element.style.display = "flex";
        element.style.justifyContent = "center";
        element.style.alignItems = "center";
        element.style.fontWeight = "bold";
    } else {
        element.append(`${i}`);
        element.style.backgroundColor = "#1389b2";
        element.style.display = "flex";
        element.style.justifyContent = "center";
        element.style.alignItems = "center";
        element.style.fontWeight = "bold";
    }

    contenitorGrid.append(element);
}