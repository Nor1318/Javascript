// Write a program that prints numbers from 1 to 50. But for multiples of 3,
//  print “Fizz,” for multiples of 5, print “Buzz,” and for multiples of both 3 and 5, 
// print “FizzBuzz.”

for(i = 1; i <= 50; i++){
 
  if(i % 3 == 0 || i % 5 == 0){
        if(i % 3 == 0){
            if(i % 5 == 0){
                console.log("FizzBuzz")
            }
            else{
                console.log("Fizz")
            }
        }
        else{
            console.log("Buzz")
        }

    }
    else{
        console.log(i)
    }
            
        }
    
