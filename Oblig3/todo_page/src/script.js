
document.getElementById("descNewTodo").addEventListener("input", charLeft);


let todoCards = [];
let completedTodos = [];

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

       

      console.log("i got here");

      

      
      if(todoCards.length > 3){
        addToComplete(todoCards[0][0], todoCards[0][1], todoCards[0][2]);
        todoCards.splice(0,1);
        

      }  
      overlayOff();
      updateCards();
  }

  function addToComplete(title, author, description){
      let date = new Date();
      let formattedDate = appendLeadingZeroes(date.getDate()) + "." + appendLeadingZeroes(date.getMonth() + 1) + "." + date.getFullYear();
    
      completedTodos.push([title, author, description, formattedDate.toString()])

      let table = document.getElementById("completedTable");
      let row = table.insertRow(1);
      row.className = "listItems";
      let titleColumn = row.insertCell(0);
      let descColumn = row.insertCell(1);
      let authorColumn = row.insertCell(2);
      let completedDate = row.insertCell(3);
      
      
      completedTodos.forEach(function(todo) {
        console.log(todo);
        titleColumn.innerHTML = todo[0];
        authorColumn.innerHTML = todo[1];
        descColumn.innerHTML = todo[2];
        completedDate.innerHTML = todo[3];
      });

      

      
      
  }

  function completeFirstTodoCard(){
    
    addToComplete(todoCards[2][0], todoCards[2][1], todoCards[2][2]);
    todoCards.splice(2, 1);
    updateCards();

  }

  function deleteFirstTodoCard(){
    todoCards.splice(2, 1);
    updateCards();
  }

  function completeSecondTodoCard(){
    
    addToComplete(todoCards[1][0], todoCards[1][1], todoCards[1][2]);
    todoCards.splice(1, 1);
    updateCards();

  }

  function deleteSecondTodoCard(){
    todoCards.splice(1, 1);
    updateCards();
  }

  function completeThirdTodoCard(){
    
    addToComplete(todoCards[0][0], todoCards[0][1], todoCards[0][2]);
    todoCards.splice(0, 1);
    updateCards();

  }

  function deleteThirdTodoCard(){
    todoCards.splice(0, 1);
    updateCards();
  }



  function charLeft() {
      let inputValue = document.getElementById("descNewTodo").value.length;
      document.getElementById("charLeft").innerHTML = 125 - inputValue;

  }

  function updateCards(){
    document.getElementById("firstCard").style.display = "none";
    document.getElementById("secondCard").style.display = "none";
    document.getElementById("thirdCard").style.display = "none";

    if (todoCards.length >= 3) {
      document.getElementById("firstTitle").innerHTML = todoCards[2][0];
      document.getElementById("firstParagraph").innerHTML = todoCards[2][2];

      document.getElementById("firstCard").style.display = "block";
      
    }

    if (todoCards.length >= 2) {
      document.getElementById("secondTitle").innerHTML = todoCards[1][0];
      document.getElementById("secondParagraph").innerHTML = todoCards[1][2];

      document.getElementById("secondCard").style.display = "block";
      
    }


    document.getElementById("thirdTitle").innerHTML = todoCards[0][0];
    document.getElementById("thirdParagraph").innerHTML = todoCards[0][2];

    document.getElementById("thirdCard").style.display = "block";
    

    


      
  }


  //Borrowed from https://codehandbook.org/javascript-date-format/
  function appendLeadingZeroes(n){
    if(n <= 9){
      return "0" + n;
    }
    return n
  }