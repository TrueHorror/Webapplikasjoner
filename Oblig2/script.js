
document.getElementById("descNewTodo").addEventListener("input", charLeft);

let todoCards = [];

function overlayOn() {
    document.getElementById("overlay").style.display = "flex";
  }
  
  function overlayOff() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("titleNewTodo").value = '';
    document.getElementById("descNewTodo").value = '';
    document.getElementById("authNewTodo").value = '';
    
  }

  function createCard() {
      let description = document.getElementById("descNewTodo").value;      
      let title = document.getElementById("titleNewTodo").value;
      let author = document.getElementById("authNewTodo").value;

      todoCards.push([title, author, description]);

      updateCards(); 
    

      let newCard = document.getElementsByClassName("todoCards");

      for (i = 0; i <= todoCards.length; i++) {
          let card = todoCards[i];
          for(j = 0; j <= cards.length; j++)
          
          newCard[0].children[0].textContent = title;
          newCard[0].children[1].textContent = description;
          ;
      }
      

      
      if(todoCards.length >= 3){
        addToComplete(todoCards[0][0], todoCards[0][1], todoCards[0][2]);
        todoCards.splice(0,1);

      }  
      overlayOff();
  }

  function addToComplete(title, author, description){
      let table = document.getElementById("completedTable");
      let row = table.insertRow(1);
      row.className = "listItems";
      let titleColumn = row.insertCell(0);
      let descColumn = row.insertCell(1);
      let authorColumn = row.insertCell(2);
      let completedDate = row.insertCell(3);

      titleColumn.innerHTML = title;
      authorColumn.innerHTML = author;
      descColumn.innerHTML = description;

      let date = new Date();
      formattedDate = appendLeadingZeroes(date.getDate()) + "." + appendLeadingZeroes(date.getMonth() + 1) + "." + date.getFullYear();
      completedDate.innerHTML = formattedDate.toString();
    
      
  }

  function charLeft() {
      let inputValue = document.getElementById("descNewTodo").value.length;
      document.getElementById("charLeft").innerHTML = 125 - inputValue;

  }

  function updateCards(){
      let wrapper = document.getElementById("cardWrapper");

      //Fortsett 03.09.2020 ---- Finn ut hvordan jeg kan lage en blokk med HTML kode og fylle i variabler samt
      //Lage flere ut av dem og legge dem som multiple children av div cardWrapper
      for (let i = 0; i <= todoCards.length; i++) {
        wrapper.appendChild(article);  
        for (let j = 0; j < todoCards[i].length; j++) {
              
              
          }
          
      }
  }

  //Borrowed from https://codehandbook.org/javascript-date-format/
  function appendLeadingZeroes(n){
    if(n <= 9){
      return "0" + n;
    }
    return n
  }