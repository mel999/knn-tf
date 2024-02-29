require("@tensorflow/tfjs-node");
const tf = require("@tensorflow/tfjs");
const loadCSV = require("./load-csv");
const { shuffle } = require("lodash");
function knn(features, labels, predictionPoint, k) {
  const { mean, variance } = tf.moments(features, 0);
  const scaledPrediction = predictionPoint.sub(mean).div(variance.pow(0.5));

  return (
    features
      .sub(mean)
      .div(variance.pow(0.5))
      .sub(scaledPrediction)
      .pow(2)
      .sum(1)
      .pow(0.5)
      .expandDims(1)
      .concat(labels, 1)
      .unstack()
      .sort((a, b) => (a.get(0) > b.get(0) ? 1 : -1))
      .slice(0, k)
      .reduce((acc, pair) => acc + pair.get(1), 0) / k
  );
}

let { features, labels, testFeatures, testLabels } = loadCSV("Untitled7.csv", {
  shuffle: true, //
  splitTest: 10, //testFeatures, testLabels earnings for the 10
  dataColumns: ["PAT Cr 09", "PAT Cr 10", "MCAP 10", "Revenue Cr 10"], //features
  labelColumns: ["PAT Cr 11"], //labels,earnings of 2016
});

features = tf.tensor(features);
labels = tf.tensor(labels);
features.print();

testFeatures.forEach((testPoint, i) => {
  const result = knn(features, labels, tf.tensor(testPoint), 10);
  const err = (testLabels[i][0] - result) / testLabels[i][0];
  console.log("Error", err * 100);
  console.log("guess", result, testLabels[i][0]);
});

//console.log("Guess", result, testLabels[0][0]); //[row][dollar value]

//console.log(tf.tensor(testFeatures[0]).print()); //predictionPoint

//matching recent in anual earnings to historical earning sequance neigbouras.
//predictiong for 2017
//so 2015-2016 earnings to 2014-2015 earnings of neigbours
