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

// function searchForChild(arg) {
//   for (var i = 0; i < arg.length; i++) {
//     if (arg.children[i] != null) {
//       arg = arg.children[i]
//       searchForChild(arg);
//     } else {
//       return arg
//     }
//   }
// }

// function deepestChild() {
//   searchForChild(document.getElementById('grand-node'))
// }

function deepestChild() {

  var deepestChild;
  var arr = document.getElementById('grand-node')

  // for (var i = 0; i < arr.length; i++) {
  //   var currentChild = arr[i]
  //   while (currentChild.hasChildNodes) {
  //     currentChild = currentChild.firstChild
  //     deepestChild = currentChild
  //   }
  // }

  while (arr.children[0] != null) {
    arr = arr.children[0]
  }
  console.log(arr);
  return arr;

  // var arr = document.getElementsbyType('body')
  // for (var i = 0; i < arr.length; i++) {
  //   var answer = findDeepestChild(arr[i])
  // }
}
