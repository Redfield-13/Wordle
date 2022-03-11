const fs = require('fs')
const ps  = require('prompt-sync')


const prompt = ps()

targeted_words = []
fs.readFile('words_alpha.txt', (err, data) => {
    word = data.toString();
    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');
    words = []
    for (var i = 0;i<arr.length;i++){
      if(arr[i].length == 5){
        words.push(arr[i])
      }
    }
    let action = ''
    while (action !=='s') {
      console.log('for seraching press "S" , for including a letter press "I", for excluding a letter press"E"')
      action = prompt()

      switch (action){
        case 'i':
          console.log('include.....')
          let letter = prompt()
          let pos = prompt('does it have a position? y/n ')
          if (pos  == 'y'){
            poss = prompt()
            let newwords = words.filter((word)=> (word.includes(letter)))
            words = newwords
             newwords = words.filter((word)=> (word[poss-1] == letter))
             // words.filter((word)=> console.log(poss))
             words = newwords


          }
          else{
            let pos02 = prompt('does it have a wrong position? y/n ')
            if(pos02 == 'y'){
              poss02 = prompt()
              let newwords = words.filter((word)=> (word.includes(letter)))
              words = newwords
              newwords = words.filter((word)=> !(word[poss02-1] == letter))
              words = newwords
            }
            else{
              let newwords = words.filter((word)=> (word.includes(letter)))
              words = newwords
            }

          }


          console.log(words)

          break;
        case 'e':
          console.log('excluding.......')
          let letter02 = prompt()
          let newwords02 = words.filter((word)=> !(word.includes(letter02)))
          words = newwords02
          console.log(newwords02)
          break;
        case 's':
          console.log('search')
          console.log(words)
      }
    }

})
