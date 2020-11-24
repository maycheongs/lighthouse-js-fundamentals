for (let i=100 ; i<=200 ; i++) {
 let x = i%3 === 0 ? (i%4 === 0 ? "LoopyLighthouse" : "Loopy") : (i%4 === 0 ? "Lighthouse" : i);
  console.log(x);
}