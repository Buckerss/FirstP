let addAddItem;
// let orderedList;
// let listOfLists = [];

function getHTMLElements() {
    addItemButton = document.querySelector(".submitButton");

    addItemButton.addEventListener('click', addItemFromUserInput);

    // addclearButton = document.querySelector("#clearbtn");
    // addclearButton.addEventListener('click', clearItems);

    // orderedList = document.querySelector(".category");

    ProduceList = document.querySelector("#ProduceList");
    ProteinList = document.querySelector("#ProteinList");
    FrozenList = document.querySelector("#FrozenList");
    DrinkList = document.querySelector("#DrinkList")
    GrainList = document.querySelector("#GrainList");
    SnacksList = document.querySelector("#SnacksList");
    MiscList = document.querySelector("#MiscList");

    // listOfLists = [ProduceList, ProteinList, FrozenList, DrinkList, GrainList, SnacksList, MiscList];
}

function addItemFromUserInput() {
    
    const inputBoxes = document.querySelectorAll(".inputBar");
    console.log(inputBoxes);

    let finalstring = "";
    
    for (i = 0; i < inputBoxes.length; i++){
        console.log(finalstring);
        let inputBox = inputBoxes[i];
        let v = inputBox.value;
        console.log(`adding ${v} to finalstring`);
        finalstring = finalstring + " " + v;
        console.log(finalstring);
        inputBox.value = "";
        
    }

    const inputCategory = document.querySelector(".CategoryBar");
    
    let c = inputCategory.value;
    // console.log(`adding item to ${c}`);
    inputCategory.value = "";
    makeAnItem(finalstring, c);
    
}


function makeAnItem(itemText, category) {
    const newLi = document.createElement("li");
    newLi.textContent = itemText;

    const checkBox = document.createElement("input");
    checkBox.setAttribute('type', "checkbox");

    checkBox.addEventListener('change', onCheckBoxChange.bind(null, newLi, checkBox));
    // if(itemComplete === "done") {
    //     newLi.classList.add("cross-out");
    //     checkBox.checked = true;
    // }

    newLi.appendChild(checkBox);

    //choose which list to append to
    AssignCategory(category, newLi);
}

function onCheckBoxChange(parentLi, checkBox) {
    console.log("checkbox clicked");
    // checkBox.addEventListener('click');
    console.log(parentLi);
    console.log(checkBox);

    if(checkBox.checked) {
        console.log("if i have a reference to the checkbox, I can know if it's checked or not");
        parentLi.classList.add("cross-out");
    }
    else{
        parentLi.classList.remove("cross-out");
    }
}

function AssignCategory (c, newLi){

    if (c === "Produce"){
        console.log("adding item to Produce");
        ProduceList.appendChild(newLi);
    }
    
    if (c === "Protein"){
        console.log("adding item to Protein");
        ProteinList.appendChild(newLi);
    }
    
    if (c === "Drinks"){
        console.log("adding item to Drinks");
        DrinkList.appendChild(newLi);
    }
    
    if (c === "Frozen Foods"){
        console.log("adding item to Frozen");
        FrozenList.appendChild(newLi);
    }
    
    if (c === "Grain"){
        console.log("adding item to Grain");
        GrainList.appendChild(newLi);
    }
    
    if (c === "Snacks"){
        console.log("adding item to Snacks");
        SnacksList.appendChild(newLi);
    }

    if (c === "Miscellaneous"){
        console.log("adding item to Miscellaneous");
        MiscList.appendChild(newLi);
    }
    
    
}

// function clearItems() {

//     //define and maybe call? 
//     //for each list in listoflists
    
//         //let currList = listOflists[i];

//     //While loop
//     while(ProduceList.lastChild !== null && ProduceList.lastChild.tagName !== "H4" ){
//         console.log(ProduceList.lastChild.tagName);
//         console.log(ProduceList.lastChild.tagName !== "H4")
//         ProduceList.removeChild(ProduceList.lastChild);
//     }

// }


function runProgram() {
    console.log("Program is running");
    getHTMLElements();

}


document.addEventListener('DOMContentLoaded', runProgram);
