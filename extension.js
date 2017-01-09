// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "linearize" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  var disposable = vscode.commands.registerCommand('gokhankuyucak.Linearize', linearize)
  // The code you place here will be executed every time your command is executed



  context.subscriptions.push(disposable);
}

function linearize() {
  const active = vscode.window.activeTextEditor;
  let range = active.document.validateRange(new vscode.Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE));
  var currText="";
  for (var i=0;i<active.document.lineCount;i++)
  {
    currText+=  active.document.lineAt(i).text.trim();
  }
  var text = currText.replace(/(\r\n|\n|\r)/gm, "").trim();
  active.edit(editor => editor.replace(range, text));
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;