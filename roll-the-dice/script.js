let images = ['d1.svg', 'd2.svg', 'd3.svg', 'd4.svg', 'd5.svg', 'd6.svg']
let dices = document.querySelectorAll('img')

function roll() {
  dices.forEach(function(dice){
    dice.classList.add('shake');
  })
  setTimeout(function() {
    dices.forEach(function(dice) {
      dice.classList.remove('shake');
    })
    let diceOneValue = Math.floor(Math.random() * 6)
    let diceTwoValue = Math.floor(Math.random() * 6)
    document.querySelector('#dice-1').setAttribute('src', images[diceOneValue])
    document.querySelector('#dice-2').setAttribute('src', images[diceTwoValue])
    document.querySelector('#total').innerHTML = "Your roll is " + ((diceOneValue + 1) + (diceTwoValue + 1))

  }, 1000)
}

roll()