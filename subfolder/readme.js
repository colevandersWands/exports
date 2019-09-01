const valueSwaps = {
  title: { h: 2, value: "Variable Swaps" },
  about: "You'll be given a bunch of variables with the wrong value assigned and a temporary variable you can use for storing values.  Your task is to get the right values into each variable in as few steps as possible by shuffling them around.",
  linksList: {
    name: "helpful links",
    links: {
      "mixi": "https://www.badgerbadgerbadger.com",
      "moxi": "https://www.badgerbadgerbadger.com"
    },
  },
  recurse: [
    {
      title: { h: 3, value: "double swap" },
      studyButtons: ["pytut", "parsonizer"],
      liveStudy: exercise1,
    },
    {
      title: { h: 3, value: "tripple swap" },
      studyButtons: ["pytut", "parsonizer"],
      liveStudy: exercise2,
    },
    {
      title: { h: 3, value: "mixi swap" },
      studyButtons: ["pytut", "parsonizer"],
      liveStudy: exercise3,
    },
  ]
}


function exercise1() {
  let a = "b", b = "a";
  let _ = ' ';

  // can be done in 3 lines



  console.assert(a === "a", "a is not 'a'");
  console.assert(b === "b", "b is not 'b'");
}

function exercise2() {
  let a = "b", b = "a";
  let _ = ' ';

  // can be done in 3 lines



  console.assert(a === "a", "a is not 'a'");
  console.assert(b === "b", "b is not 'b'");
}

function exercise3() {
  let a = "b", b = "a";
  let _ = ' ';

  // can be done in 3 lines



  console.assert(a === "a", "a is not 'a'");
  console.assert(b === "b", "b is not 'b'");
}

window.onload = function () {
  try {
    document.body.appendChild(liveStudy(valueSwaps));
  } catch (err) {
    console.error(err);

    console.assert = function assertWapper(assertion) {
      if (!assertion) {
        Array.prototype.shift.call(arguments);
        console.error(...arguments);
      }
    }

    function liveStudyFallback(obj) {
      if (!(obj instanceof Object)) return null;

      for (let key in obj) {
        if (key === "liveStudy") {
          if (obj[key] instanceof Function) {
            try {
              obj[key]()
            } catch (err) {
              console.error(err);
            }
          } else if (obj[key] instanceof Array) {
            try {
              obj[key].forEach(step => step());
            } catch (err) {
              console.error(err);
            }
          }
        }
        else if (key === "nested") {
          obj[key].forEach(item => liveStudyFallback(item))
        }
      }
    }
    liveStudyFallback(valueSwaps);
  }
}
