var bookmarkName = document.getElementById("bookmarkName");

var bookmarkUrl = document.getElementById("bookmarkURL");

var bookMarks_List = [];

if (localStorage.getItem("urls") != null) {
  bookMarks_List = JSON.parse(localStorage.getItem("urls"));
  display();
}

function addUrl() {
  var bookmark = {
    name: bookmarkName.value,
    url: bookmarkUrl.value,
  };
  bookMarks_List.push(bookmark);
  localStorage.setItem("urls", JSON.stringify(bookMarks_List));
  clear();
  display();
}

function clear() {
  bookmarkName.value = "";
  bookmarkUrl.value = "";
}

function display() {
  var container = "";
  for (var i = 0; i < bookMarks_List.length; i++) {
    container += `<tr>
        <td>${i + 1}</td>
        <td>${bookMarks_List[i].name}</td>
        <td><button class="btn btn-visit"><a href="${
          bookMarks_List[i].url
        }" target="_blank" class="text-decoration-none text-white"><i class="fa-solid fa-eye pe-2"></i>visit</a></button></td>
        <td><button onclick="deleteBookmark(${i})" class="btn-delete btn text-white"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
        </tr>`;
  }
  document.getElementById("tableContent").innerHTML = container;
}

function deleteBookmark(i) {
  bookMarks_List.splice(i, 1);
  localStorage.setItem("urls", JSON.stringify(bookMarks_List));
  display();
}
