function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var arr = document.getElementsByClassName('.ranked-list')
  for (var i = 0; i < arr.length; i++) {
    arr[i].innerHTML = parseInt(arr[i].innerHTML) + 1
  }
}
