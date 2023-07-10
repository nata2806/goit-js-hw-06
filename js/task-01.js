const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesEl.length);
categoriesEl.forEach(outputCategoriesData);
function outputCategoriesData(elem) {
  console.log("Category: ", elem.firstElementChild.textContent);
  console.log("Elements: ", elem.lastElementChild.children.length);
}
