let code = "";

require.config({
  paths: {
    vs: "https://unpkg.com/monaco-editor@0.12.0/min/vs",
  },
});

window.MonacoEnvironment = { getWorkerUrl: () => proxy };

let proxy = URL.createObjectURL(
  new Blob(
    [
      `
self.MonacoEnvironment = {
  baseUrl: 'https://unpkg.com/monaco-editor@0.12.0/min/'
};
importScripts('https://unpkg.com/monaco-editor@0.12.0/min/vs/base/worker/workerMain.js');
`,
    ],
    { type: "text/javascript" }
  )
);

const codeArea = (malumot) => {
  //console.log(malumot);
  require(["vs/editor/editor.main"], function () {
    let editor = monaco.editor.create(document.getElementById("code-area"), {
      value: [`function ${malumot.fun_name} {}`].join("\n"),
      language: "javascript",
      theme: "vs-dark",
    });

    editor.onDidChangeModelContent(() => {
      // console.log(editor.getValue());
      code = editor.getValue();
    });
  });
};
