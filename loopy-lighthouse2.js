function loopyLighthouse(range , multiples, words) {
  for (let i = range[0] ; i <= range[1] ; i++) {
    let result = ""
    switch (true) {
      case (i % multiples[0] === 0 && i % multiples[1] === 0) :
        result = words[0] + words[1];
        break;
      case (i % multiples[0] === 0) :
        result = words[0];
        break;
      case (i % multiples[1] === 0) :
        result = words[1];
        break;
      default :
        result = i;
        break;     
    } console.log(result)
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);