import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div
  const div = document.createElement("div");
  div.className = "list-low";
  //li
  const li = document.createElement("li");
  li.innerText = inputText;

  //buttn (完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //const compTaget = completeButton.parentNode;

    
 
  });

  //buttn (削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //delete div tag
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomp-list").removeChild(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomp-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
