//<!-- Required Output = [2,3,5,6,8,'Jack','Queen','King']
//Q: Sort the array as per the rules of card game using //a generic method.

cards = ["Jack", 8, 2, 6, "King", 5, 3, "Queen", "Jack"];

function sortCards(card) {
  const numbers = [];
  const Jacks = [];
  const Queens = [];
  const Kings = [];

  for (let i = 1; i < card.length; i++) {
    if (typeof card[i] === "number") {
      numbers.push(card[i]);
      numbers.sort(); // O(n)
    } else if (card[i] === "Jack") {
      Jacks.push(card[i]);
    } else if (card[i] === "Queen") {
      Queens.push(card[i]);
    } else if (card[i] === "King") {
      Kings.push(card[i]);
    }
  }

  console.log([...numbers, ...Jacks, ...Queens, ...Kings]);
}

sortCards(cards);
// O(a + b)
