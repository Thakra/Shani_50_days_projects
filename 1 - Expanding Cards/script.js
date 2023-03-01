/* Getting all the expandable crads in expandingCards variable */
let expandingCards = document.querySelectorAll('.expandingCards');

// console.log(`expandingCards are ` , expandingCards); // for debugging


// Looping through the expandingCards to add an click event 
for (const card of expandingCards) {

    card.addEventListener('click' , ()=> {

        if(card.className.includes('active')){
            console.log(`this element has already conatain an active classs`);
        }

        else{

            // Looping through the expandingCards to remove that element who conatain active class
            for (const card of expandingCards) {

                if(card.className.includes('active')){

                    card.classList.remove('active');
                    // console.log(`active class has been removed from` , card);  // for debugging

                }
            }


            // The below statment has card of above for-of loop 
            card.classList.add('active');
            //  console.log(`active class has been add to` , card);

        }

    })
}