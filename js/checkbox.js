// not exactly vanilla as there is one lodash function
var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
console.log(allCheckboxes);
var allProducts = Array.from(document.querySelectorAll('.products'));
console.log("this is the array", allProducts);
var checked = {};

//getChecked() is used to check whether a user has checked a checkbox or
//radio button by using the element ID
//proof
getChecked('categories');
getChecked('tags');
getChecked('availability');

//El array no se usa en absoluto pero da acceso al uso del prototipo foreach
// y call es un prototipo que llama a otras funciones
Array.prototype.forEach.call(allCheckboxes, function (el) {
  console.log("this is a proof", el);
  el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allProducts.map(function (el) {
    var categories = checked.categories.length ? _.intersection(Array.from(el.classList), checked.categories).length : true;
    var tags = checked.tags.length ? _.intersection(Array.from(el.classList), checked.tags).length : true;
    var availability = checked.availability.length ? _.intersection(Array.from(el.classList), checked.availability).length : true;
    if (categories && tags && availability) {
      el
      el.style.display = 'flex';
    } else {
      el.style.display = 'none';
    }
  });
}
