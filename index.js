function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const arr = document.getElementsByClassName('.ranked-list')
  for (var i = 0; i < arr.length; i++) {
    arr[i].innerHTML = parseInt(arr[i].innerHTML) + 1
  }
  return document.getElementsByClassName('.ranked-list' )
}
