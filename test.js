const {add , multi } = require ("./app")


//test 1
 if (add (2 , 3)===5){
console.log("add test pass")
} else { console.log("add test fail");
process.exti(1)
}

//test 2
 if (multi (15 , 2)===30){
console.log("Multiply t test pass")
} else { console.log("Multiply test fail");
process.exti(1)
}



