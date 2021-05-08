// https://www.codewars.com/kata/5235c913397cbf2508000048

const Calculator = function () {
  this.evaluate = (string) => {
    // check for existances of ( )
    let closedBraceIndex = string.indexOf(")");
    // if yes recursively call the fn
    while (closedBraceIndex !== -1) {
      const openBraceIndex = string.slice(0, closedBraceIndex).lastIndexOf("(");
      string =
        string.slice(0, openBraceIndex) +
        this.evaluate(string.slice(openBraceIndex + 1, closedBraceIndex)) +
        string.slice(closedBraceIndex + 1);
      closedBraceIndex = string.indexOf(")");
    }
    console.log("13", string);
    // split the elements
    const elements = string.split(" ");
    while (elements.length > 1) {
      //  check for existance of * /
      let si = elements.findIndex((e) => e === "*" || e === "/");
      let value;
      if (si !== -1) {
        value =
          elements[si] === "*"
            ? elements[si - 1] * elements[si + 1]
            : elements[si - 1] / elements[si + 1];
      }
      // if no check for existance of + -
      else if (si === -1) {
        si = elements.findIndex((e) => e === "+" || e === "-");
        value =
          elements[si] === "+"
            ? +elements[si - 1] + Number(elements[si + 1])
            : elements[si - 1] - elements[si + 1];
      }
      elements.splice(si - 1, 3, value);
    }
    return elements[0];
  };
};
