function judgeVegetable(vegetables, metric) {
  let sortedVeggies = vegetables.sort(function(a,b) {
    return a[metric] - b[metric]
  })
  return sortedVeggies.pop().submitter
}

//test

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))