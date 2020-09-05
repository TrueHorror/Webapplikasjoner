window.onload = buildPage;
let testListener;
let resetListener;

let deletedListElements = [];
function buildPage(){
    //Some variables for different tags/elements
    let mainTag = document.createElement("main");
    let pTag = document.createElement("P");
    let textNode = document.createTextNode("Jeg trener på JavaScript")
    let bodyTag = document.body;
    let selectBox = document.createElement("select");
    selectBox.id = "coolSelectBox"
    let testButton = document.createElement("button");
    let resetButton = document.createElement("button");
    let selectAndButtonsWrapper = document.createElement("div");

    //Giving the paragraph a class and adding text
    giveClassName(pTag, "trainingParagraph");
    pTag.appendChild(textNode);

    //Adding p tag to main tag
    mainTag.appendChild(pTag);

    //Adding main tag to html
    bodyTag.appendChild(mainTag);

    //Populate selectBox with options from object/array and adding to main and center to page
    let selectOptions = [{id:1 , data:"First option"}, {id:2 , data:"Second option"}, {id:3 , data:"Third option"}];
    selectAndButtonsWrapper.appendChild(selectBox);
    selectOptions.forEach(option => {
        let optionTag = document.createElement("option");
        optionTag.value = option.id;
        optionTag.innerHTML = option.data;
        selectBox.appendChild(optionTag);
    });

    selectBox.style.maxWidth = "500px";
    selectAndButtonsWrapper.style.margin = "auto 50%";
    selectAndButtonsWrapper.style.position = "relative";
    testButton.style.display = "inline-block";
    resetButton.style.display = "inline-block";


    //Add two buttons after select tag
    let testBtnText = document.createTextNode("Test");
    let resetBtnText = document.createTextNode("Reset");

    testButton.appendChild(testBtnText);
    resetButton.appendChild(resetBtnText);

    testButton.id = "testBtn";
    resetButton.id = "resetBtn";
    
    selectAndButtonsWrapper.appendChild(testButton);
    selectAndButtonsWrapper.appendChild(resetButton);

    

    mainTag.appendChild(selectAndButtonsWrapper);

    

    //Ul with list items created
    let ulTag = document.createElement("ul");
    ulTag.id = "ultag"
    document.getElementsByTagName("main")[0].appendChild(ulTag);
    createList();

    testListener = document.getElementById("testBtn").addEventListener("click", printSelectOption);
    resetListener = document.getElementById("resetBtn").addEventListener("click", createList);

}

function deleteListElement(event){
    console.log(event.target);
    event.target.parentNode.remove()

}

function giveClassName(tag, classString){
    tag.classname = classString;
}

function createList(){
    let tag = document.getElementById("ultag");    
    tag.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        let listElement = document.createElement("li");
        listElement.id = i;
        let listButton = document.createElement("button");
        listButton.innerHTML = "Delete"
        listButton.id = "button"+i;
        listButton.addEventListener("click", deleteListElement);
        listElement.appendChild(listButton);
        tag.appendChild(listElement);
    }
    
    
}

function printSelectOption(){
    let select = document.getElementById("coolSelectBox");
    let optionText = select.options[select.selectedIndex].text;
    let reversedOptionText = reverseString(optionText);
    let optionTextNode = document.createTextNode("*"+reversedOptionText);
    let createdParagraph = document.createElement("p");
    createdParagraph.appendChild(optionTextNode);
    document.getElementsByTagName("main")[0].appendChild(createdParagraph); 
}

function reset(){

}

function reverseString(str){

    let splittedString = str.split("");
    console.log(splittedString)
    let reversedArray = splittedString.reverse();
    reversedArray = reversedArray.join("");
    
    splittedReversedArray = reversedArray.split(" ");
    console.log(splittedReversedArray)
    let finishedString = [];
    for (let i = 0; i < splittedReversedArray.length; i++) {
            let string = splittedReversedArray[i];
            string = string.substring(1);
            finishedString.push(string + " ");
        }
        console.log(finishedString)

    let joinedArray = finishedString.join("");   
    console.log(joinedArray); 

    return joinedArray;
}


