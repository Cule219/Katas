// https://www.codewars.com/kata/597eeb0136f4ae84f9000001
const allNo = (all) => {
  const nos = [];
  for (let i = 0; i < all[0].length / 3; i++) {
    nos.push(
      all[0].slice(i * 3, i * 3 + 3) +
        all[1].slice(i * 3, i * 3 + 3) +
        all[2].slice(i * 3, i * 3 + 3)
    );
  }
  return nos;
};

function parseBankAccount(bankAccount) {
  const all = allNo([
    ` _     _  _     _  _  _  _  _ `,
    `| |  | _| _||_||_ |_   ||_||_|`,
    `|_|  ||_  _|  | _||_|  ||_| _|`,
  ]);

  return +allNo(bankAccount.split("\n"))
    .map((n) => all.indexOf(n))
    .join("");
}
