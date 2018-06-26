function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const arr = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < arr.length; i++) {
    arr[i].innerHTML = parseInt(arr[i].innerHTML) + n
  }
  return document.getElementsByClassName('.ranked-list')
}

function deepestChild() {
  var deepestChild;
  var arr = document.getElementById('grand-node')
  console.log(arr.children)
  for (var i = 0; i < arr.length; i++) {
    var currentChild = arr[i]
    while (currentChild.hasChildNodes) {
      currentChild = currentChild.firstChild
      deepestChild = currentChild
    }
  }
  return deepestChild;

  // var arr = document.getElementsbyType('body')
  // for (var i = 0; i < arr.length; i++) {
  //   var answer = findDeepestChild(arr[i])
  // }
}

// function findDeepestChild(arg) {
//   var arr = document.querySelector(arg)
//   for (var i = 0; i < arr.length; i++) {
//     var currentChild = arr[i]
//     while (currentChild.hasChildNodles) {
//       currentChild
//     }
//   }
// }
