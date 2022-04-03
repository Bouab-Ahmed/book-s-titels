// remove book
var lst = document.querySelectorAll("#ul-list li .delete");
lst.forEach(e => {
    e.addEventListener("click", l => {
        const li = l.target.parentElement;
        li.parentNode.removeChild(li);
    });
});

// clear the list
var clr = document.querySelector(".book-list .clear button");
const ul = document.querySelector(".book-list #ul-list");
const p = document.querySelector(".no-book");
const li = document.querySelector(".book-list #ul-list li");
clr.addEventListener("click", e => {
    const btn = e.target.parentElement;
    // btn.parentNode.removeChild(ul);
    // ul.remove();
    ul.innerHTML = "";
    p.style.cssText = `position :relative;
    -webkit-user-select: none;`;
    p.innerHTML = "<p>there is no book to read</p>";
});

//add book
const addForm = document.forms["add"];
const add = addForm.querySelector("span");
add.addEventListener("click", e => {
    e.preventDefault();
    const val = addForm.querySelector("input[type='text']").value;
    const ula = document.querySelector("#ul-list");
    const li = document.createElement("li");
    const bookName = document.createElement("h2");
    bookName.className = "book-titel";
    const deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.className = "name";
    link.textContent = val;
    bookName.appendChild(link);
    console.log(bookName);
    deleteBtn.textContent = "delete";
    if (val != "" || val != " ") {
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        ula.appendChild(li);
        p.style.cssText = `display:none;`;
    } else {
        console.log("can't add empty name");
    }
});

// search for a book
var input = document.querySelector("#search-bar #myInput");
input.addEventListener("keyup", () => {
    var filter = input.value.toUpperCase();
    var lis = document.querySelectorAll(".book-list #ul-list li");
    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].getElementsByClassName("name")[0].innerHTML;
        if (name.toUpperCase().indexOf(filter) != -1) {
            lis[i].style.display = "list-item";
            lis[i].style.cssText = `display:flex;
      justify-content: space-between;`;
        } else {
            lis[i].style.display = "none";
        }
    }
});
// tabbed content
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");
tabs.addEventListener("click", e => {
    if (e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(panel => {
            if (panel == targetPanel) {
                panel.classList.add("active");
            } else {
                panel.classList.remove("active");
            }
        });
    }
});