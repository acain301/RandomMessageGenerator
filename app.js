const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('What type of diet do you adhere to?', name => {
    if (name === "Vegetarian" || name === "Carnivore" || name === "Pescitarian") {
        //let something = name
        readline.close();
    } else {
        console.log(`Please enter Vegetarian, Carnivore or Pescitarian`)
        readline.question('What tpe of diet do you adhere to?')
    }
    
  });

  test