const cardArray=[
    {
        name:'luffy', img:'images/luffy.png'
    },
    {
        name:'zoro', img:'images/zoro.png'
    },
    {
        name:'sanji', img:'images/sanji.png'
    },
    {
        name:'nami', img:'images/nami.png'
    },
    {
        name:'chopper', img:'images/chopper.jpg'
    },
    {
        name:'usopp', img:'images/usopp.jpg'
    },
    {
        name:'robin', img:'images/robin.png'
    },
    {
        name:'brook', img:'images/brook.png'
    },
    {
        name:'franky', img:'images/franky.png'
    },
    {
        name:'luffy', img:'images/luffy.png'
    },
    {
        name:'zoro', img:'images/zoro.png'
    },
    {
        name:'sanji', img:'images/sanji.png'
    },
    {
        name:'nami', img:'images/nami.png'
    },
    {
        name:'chopper', img:'images/chopper.jpg'
    },
    {
        name:'usopp', img:'images/usopp.jpg'
    },
    {
        name:'robin', img:'images/robin.png'
    },
    {
        name:'brook', img:'images/brook.png'
    },
    {
        name:'franky', img:'images/franky.png'
    },
    {
        name:'jinbe', img:'images/jinbe.png'
    },
    {
        name:'jinbe', img:'images/jinbe.png'
    },
]

cardArray.sort(()=> 0.5-Math.random())



const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardsChosen=[]
let cardsChosenID=[]
const cardsWon=[]

function createBoard(){
  for(let i=0;i<cardArray.length;i++){
      const card=document.createElement('img')
      card.setAttribute('src','images/one piece.png')
      card.setAttribute('data-id',i)
      card.addEventListener("click",flipCard)
      gridDisplay.appendChild(card)
      console.log(cardArray)
  }
}
createBoard()

function checkMatch()
{
  const option_1=cardsChosenID[0]
  const option_2=cardsChosenID[1]
  const cards=document.querySelectorAll('img')
  
  if(option_1==option_2){
      cards[option_1].setAttribute('src','images/one piece.png')
      cards[option_2].setAttribute('src','images/one piece.png')
  }

 else if(cardsChosen[0]==cardsChosen[1]){
      //alert("found a match")
      cards[option_1].setAttribute('src','images/blank.png')
      cards[option_2].setAttribute('src','images/blank.png')
      cards[option_1].removeEventListener('click',flipCard)
      cards[option_2].removeEventListener('click',flipCard)
      cardsWon.push(cardsChosen)
  }

  else{
      cards[option_1].setAttribute('src','images/one piece.png')
      cards[option_2].setAttribute('src','images/one piece.png')
    //  alert("try again!")
  }

  cardsChosen=[]
  cardsChosenID=[]

  resultDisplay.innerHTML=cardsWon.length


  if(cardsWon.length==cardArray.length/2){
      resultDisplay.innerHTML='Congratulation'
  }
}

function flipCard(){
  let cardId=this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenID.push(cardId)
  this.setAttribute('src',cardArray[cardId].img)
  if(cardsChosen.length==2){
      setTimeout(checkMatch,500)
  }
  
}