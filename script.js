
  const msg = document.querySelector('.msg');
  const guess = document.querySelector('input');
  const btn = document.querySelector('.btn');
  let play = false;
  let newWords = "";
  let randWords = "";

  let sWords = [
    'BAND', 'ELEVATE', 'BAD', 'SCISSORS', 'ESCALATOR', 'MAN', 'FLOOR', 'ROG', 'LOLLIPOP', 'MASQURADE'
 ];
 const createNewWords = () =>{
  let ranNum = Math.floor( Math.random() * sWords.length);
  let newTempSwords = sWords[ranNum];
  return newTempSwords;

};
 const scrambleWords = (arr) =>{
  for (let i = arr.length-1; i>=0; i--){
    let temp = arr[i];
    //console.log(temp);//
    let j = Math.floor(Math.random()*(i+1));
  
  arr[i] = arr[j];
  arr[j] = temp;
  }
  return arr;
}

btn.addEventListener('click', function(){
  if(!play){
    play = true;
    btn.innerHTML = "PLAY";
    guess.classList.toggle('hidden');
     newWords = createNewWords();
     randWords = scrambleWords(newWords.split("")).join("");
     /*console.log(randWords.join(""));*/
     msg.innerHTML = `Guess the Word:${randWords}`; 
  }else{
    let tempWord = guess.value;
    if (tempWord.toLowerCase() === newWords.toLowerCase()) {
      play = false;
      msg.innerHTML = `Awesome its Correct. it is ${newWords}`;
      btn.innerHTML = 'Play Again';
      guess.classList.toggle('hidden');
      guess.value = "";
       }else{
       msg.innerHTML = `Sorry Chief its  Not correct. try again ${randWords}`;
      guess.classList.toggle('hidden');
    }
  }
});