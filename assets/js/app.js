var addButton = document.querySelector("#addButton");
var newItemInput = document.querySelector("#new");
var itemList = document.querySelector("#list");

var newItem;
var thingsToDo = [];

addButton.addEventListener("click", () => {
  newItem = newItemInput.value;
  if (notEmptyStr(newItem)) {
    console.log(newItem);
    thingsToDo.push(newItem);
    console.log(thingsToDo.length);
    addToDo(thingsToDo.length - 1);
  }
});

function notEmptyStr(str) {
  if (str.trim().length > 0) {
    // console.log("has something");
    return true;
  } else {
    return false;
  }
}

function addToDo(here) {
  console.log(here);
  var newLi = document.createElement("li");

  var item = createItem();
  newLi.appendChild(item);

  var action = createActions();
  newLi.appendChild(action);

  itemList.appendChild(newLi);

  function createItem() {
    var newItem = document.createElement("div");
    newItem.className = "item";
    var newToDo = document.createTextNode(thingsToDo[here]);
    newItem.appendChild(newToDo);
    return newItem;
  }

  function createActions() {
    var newAction = document.createElement("div");
    newAction.className = "actions";

    var editSpan = createSpan("edit");
    var completeSpan = createSpan("complete");
    var removeSpan = createSpan("remove");

    newAction.appendChild(editSpan);
    newAction.appendChild(completeSpan);
    newAction.appendChild(removeSpan);

    return newAction;
  }

  function createSpan(what) {
    var newSpan = document.createElement("span");
    newSpan.classList.add(what, "icon");
    newSpan.title = what;

    var newIcon = document.createElement("i");
    switch (what) {
      case "edit":
        newIcon.classList.add("fas", "fa-cogs");
        break;
      case "complete":
        newIcon.classList.add("fas", "fa-check");
        break;
      case "remove":
        newIcon.classList.add("fas", "fa-trash-alt");
        break;

      default:
        console.log("nothing created");
        break;
    }

    newSpan.appendChild(newIcon);

    return newSpan;
  }
}
