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
  var arr = document.querySelectorAll('#grand-node > div')
  for (var i = 0; i < arr.length; i++) {
    var currentChild = arr[i]
    while (currentChild.querySelector(':firstChild') != null) {
      currentChild = currentChild.querySelector(':firstChild')
      deepestChild = currentChild
    }
  }
  return deepestChild;
}
