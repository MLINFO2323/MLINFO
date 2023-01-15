
import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import { setUncaughtExceptionCaptureCallback } from 'process';
import Editor from '@monaco-editor/react';

class TensorflowEditor extends React.Component {
  render(){
    return <Editor height="90vh" defaultLanguage="typescript" defaultValue="//type here"></Editor>
  }
}
export default TensorflowEditor
// import React, { useEffect } from 'react';

// export default function TensorFlowEditor(props) {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const tf = require('@tensorflow/tfjs');
//       // Use TensorFlow.js here
//       // Define a model for linear regression.
//       const model = tf.sequential();
//       model.add(tf.layers.dense({units: 1, inputShape: [1]}));

//       model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

//       // Generate some synthetic data for training.
//       const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
//       const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

//       // Train the model using the data.
//       model.fit(xs, ys, {epochs: 10}).then(() => {
//         // Use the model to do inference on a data point the model hasn't seen before:
//         model.predict(tf.tensor2d([5], [1, 1])).print();
//         // Open the browser devtools to see the output
//       });
  
//       console.log("HELLOW BABY TF")
//     }
//   }, []);
//   // Render your component
//   return <></>
// }