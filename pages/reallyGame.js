// const yellow = 1
// const red = 2
// const green = 3
// const blue = 4
// const pink = 5
// const purple = 6

let colors = ['yellow', 'red', 'green', 'blue', 'pink', 'purple']

let choose = [];//we put inside the colors that tha computer choosed
for (let c = 0; c < 4; c++)
{
  let numOfColor = Math.floor(Math.random() * 6);
  while (choose.includes(colors[numOfColor])) {// we will check the System results.
    numOfColor = Math.floor(Math.random() * 6);
  }
  choose[c] = colors[numOfColor];// we will enter the number to the array

}

console.log(choose);

let exactMatches = 0;
let unexactMatches = 0;
let arr = new Array(4)

//we check if the indexes & the colors are equal that is to say:
//  how many white circles the player save



let count = 0
document.querySelectorAll(".colors").forEach(c =>
  c.addEventListener("change", _ => {

      console.log(event.target.value)
      console.log(event.target)
      let i = +event.target.dataset.index
      if (arr.includes(event.target.value)) {
        for (let i = 1; i < c.options.length; i++) {
          if (c.options[i].selected) {
            c.options[i].selected = false
          }
        }
        c.options[0].selected = true

        event.target.value = 'empty';

      }

      else {
        event.target.style.backgroundColor = event.target.value
        if (arr[i] == undefined) {
          count++
        }
        arr[i] = event.target.value
      }
      console.log(arr)
      if (count == 4) {
        document.querySelector('#continue').classList.add('show')
      }
    }))

exactMatches = 0
unexactMatches = 0
function check() {
  let r = document.createElement('div')
  r.style.display = 'flex'
  r.setAttribute('class', 'row1')
  for (let i = 0; i < 4; i++) {
    const currentColor = arr[i]//inside currentColor this is the  color
    if (currentColor == choose[i]) { exactMatches++ }// exectly color & index
    else if (choose.includes(arr[i])) { unexactMatches++; }// color match
    let c = document.createElement('div')
    c.classList.add('ball')
    c.classList.add(arr[i])
    r.appendChild(c)
    // we check how many colors the player discovered.
    // we put the results in the counter.
    //score.setAttribute('class', 'exactMatches')
  }
  let score = document.createElement('div')
  for (let ball = 0; ball < exactMatches; ball++) {
    let s = document.createElement('div')
    s.setAttribute('class', 'white')
    s.classList.add('smallball')
    score.appendChild(s)
  }
  for (let ball2 = 0; ball2 < unexactMatches; ball2++) {
    let w = document.createElement('div')

    //w.setAttribute('class', 'unexactMatches')
    w.setAttribute('class', 'red')
    w.classList.add('smallball')
    score.appendChild(w)
  }

  r.appendChild(score)
  document.querySelector('#results').appendChild(r)

  



  document.querySelector('#continue').classList.remove('show')
if(exactMatches == 4){
  document.querySelector('#modal').classList.add('show')
}
  exactMatches = 0
  unexactMatches = 0
  count = 0
  arr = new Array(4)

  document.querySelectorAll('.colors').forEach(s => {
    s.setAttribute('value', 'empty')
    s.style.backgroundColor = "transparent"
    for (let i = 1; i < s.options.length; i++) {
      if (s.options[i].selected) {
        s.options[i].selected = false
        break;
      }
    }
    s.options[0].selected = true
  })

}


function closeModal(){
  window.location.href='game.html'
  document.querySelector('#modal').classList.remove('show')
}