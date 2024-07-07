console.log('fzzbuzz')

//numeri da 1 a 100
//per multipli di 3 stampa "Fizz"
//per i multipli di 5 stampa "Buzz"
//per i multipli di sia di 3 che di 5 stampa "FizzBuzz"




for(let i = 0; i < 100; i++){
    let num = i + 1
    //console.log(num)
    
    num = parseFloat(num)
    
    if(num % 3 == 0 && num % 5 == 1) {
        console.log('Fizz')
    } else if(num % 5 == 0 && num % 3 == 1) {
        console.log('Buzz')
    } else if(num % 5 == 0 && num % 3 == 0) {
        console.log('FizzBuzz')
    } else {
        console.log(num)
    }
}