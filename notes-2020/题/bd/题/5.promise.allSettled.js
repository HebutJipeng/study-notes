const assert = require("assert");
function allSettled(promises) {
  return new Promise((resolve, reject) => {
    let res = [];
    let count = 0;
    function countElm(idx, value) {
      res[idx] = value;
      count++;
      if (count === promises.length) {
        resolve(res);
      }
    }
    promises.forEach((promise, index) => {
      promise.then(
        (value) =>
          countElm(index, {
            status: "fulfilled",
            value: value,
          }),
        (err) =>
          countElm(index, {
            status: "rejected",
            value: err,
          })
      );
    });

    if (!promises.length) {
      resolve([]);
    }
  });
}

const urls = [
  "http://example.com/exists.txt",
  "http://example.com/missing.txt",
];

function downloadText(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(url);
    }, 500);
  });
}

const result = allSettled(urls.map((u) => downloadText(u)));
result.then((arr) =>
  assert.deepEqual(arr, [
    {
      status: "fulfilled",
      value: "http://example.com/exists.txt",
    },
    {
      status: "fulfilled",
      value: "http://example.com/missing.txt",
    },
  ])
);
