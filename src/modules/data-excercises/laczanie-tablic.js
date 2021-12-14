// 0. Laczanie 2 tablic uzytkownikow

const flatMap = (...args) => {
  const results = [];

  for (let i = 0; i < args.length; i++) {
    const arr = args[i];

    for (let j = 0; j < arr.length; j++) {
      results.push(arr[j]);
    }
  }

  return results;
};

// Jezeli wiecie ile jest tablic

const withConcatResults = [0, 0, 2].concat([0, 3, 3]);
const resultsArray = [...[0, 0, 2], ...[0, 3, 3]];

const flatResult = flatMap([0, 0, 2], [0, 3, 3]);
