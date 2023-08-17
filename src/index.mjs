import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompList(inputText);
};

//未完了のクラスから削除する関数
const deleteFromIncomp = (target) => {
  document.getElementById("incomp-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompList = (text) => {
  //div
  const div = document.createElement("div");
  div.className = "list-low";
  //li
  const li = document.createElement("li");
  li.innerText = text;

  //buttn (完了)-------------
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncomp(completeButton.parentNode);

    //完了リストに追加する処理
    const addTarget = completeButton.parentNode;
    // TODO内容テキスト取得
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    //button （戻す） 生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("comp-list").removeChild(deleteTarget);
      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("comp-list").appendChild(addTarget);
  });

  //buttn (削除)----------------
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncomp(deleteButton.parentNode);
  });

  //div child
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完成リストに処理を追加
  document.getElementById("incomp-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
