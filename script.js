$(document).ready(function(){

    // $('body').click(function() {
    //     window.print();
    //   });

    window.addEventListener('keydown', function(e) {
        if(e.keyCode == 32 && e.target == document.body) {
          e.preventDefault();
        }
      });

        let typedLetters = [];

        const keyEmojiPairs = [
            [65, '🥑'], 
            [66, '🧋'], 
            [67, '🍭'],
            [68, '🥟'],
            [69, '👀'],
            [70, '🐸'],
            [71, '🧤'],
            [72, '🫀'],
            [73, '🧊'],
            [74, '🐆'],
            [75, '🥝'],
            [76, '🦁'],
            [77, '🐁'],
            [78, '🪡'],
            [79, '🍊'],
            [80, '🥧'],
            [81, '🤫'],
            [82, '🌈'],
            [83, '🦑'],
            [84, '🚕'],
            [85, '🦄'],
            [86, '🦺'],
            [87, '🪱'],
            [88, '🎄'],
            [89, '🥱'],
            [90, '🦓'],
          ];

        
        // make a map with that array
        const keyEmojiMap = new Map(keyEmojiPairs);

        //Declare number shift amount
        var shiftAmount = -1;
        var finalNumber;
        var selectionNumber = -1;

        window.addEventListener("keydown", function (event) {
            //Fade out intro text
            


            // create a varial for the key
            var keyPress;
            // assigns key number to keyPress
            if (typeof event !== "undefined") {
              keyPress = event.keyCode;
            } else if (e) {
              keyPress = e.which;
            }

            // backspace function
            if ((keyPress == 8)) {
                typedLetters.pop();
                if (shiftAmount != -1) {
                    shiftAmount = shiftAmount - 1
                    
                };
                if (selectionNumber != -1){
                    selectionNumber = selectionNumber - 1;
                }
                
                
                $('.content').children().last().remove();

                if(typedLetters.length === 0){
                    $('.introduction').css('opacity', '1')
                }
              }

            //space
            if (keyPress == 32) {
                
                
                if (typedLetters.length < 23) {
                    $('.content').append("<emoji>&nbsp</emoji>");
                    typedLetters.push("break");
                    selectionNumber = selectionNumber + 1;
                }
                
            }
          

            // limit length of array
            if (typedLetters.length < 23) {

                // if the key pressed is not backspace
                if ((keyPress >= 65 && keyPress <= 90)) {
                    $('.introduction').css('opacity', '0')



                    //Adding shift amount
                    shiftAmount = shiftAmount + 1;

                    //Key pressed + shift going over 90
                    if(keyPress + shiftAmount <= 90) {
                        finalNumber = keyPress + shiftAmount
                    } else {
                        finalNumber = keyPress + shiftAmount - 26;
                    }
                    

                    // typedLetters.push(keyPress);
                    typedLetters.push(keyEmojiMap.get(finalNumber));

                    selectionNumber = selectionNumber + 1;

                    $('.content').append("<emoji>" + typedLetters[selectionNumber] + "</emoji>");
                }
              

            }
            
            // log the array each time a key is pressed
            console.log(typedLetters);
            // console.log(shiftAmount);
            console.log(typedLetters.length);
            console.log("this is selection number" + selectionNumber)

            
          
            return false;
          });
        

    

});