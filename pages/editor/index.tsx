import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Editor from "@monaco-editor/react";
import * as me from "monaco-editor"


function TensorFlowEditor() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2016,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.CommonJS,
      noEmit: true,
      typeRoots: ["node_modules/@types","@tensorflow"]
    });
    // todo make autocomple for tf.

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false
    })

  }
  
  function runCode() {
    const tf = require('@tensorflow/tfjs');
    editorRef.current.updateOptions({fontFamily: 'consolas'});
    console.log(eval(editorRef.current.getValue()))
    
  }
  let defaultCode = `
  
// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model using the data.
model.fit(xs, ys, {epochs: 10}).then(() => {
  // Use the model to do inference on a data point the model hasn't seen before:
  model.predict(tf.tensor2d([5], [1, 1])).print();
  // Open the browser devtools to see the output
});

  `
  return (
   <>
     <button onClick={runCode}>Run Code</button>
     <Editor
       height="90vh"
       defaultLanguage="javascript"
       defaultValue={defaultCode}
       theme="vs-dark"
       onMount={handleEditorDidMount}
     />
   </>
  );
}
export default TensorFlowEditor

