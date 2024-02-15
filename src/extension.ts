// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { selectPackageCommand } from './selectPackageCommand';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const savedFolderPath = context.workspaceState.get<string>('unityDesignSystemRepoPath');

    if (!savedFolderPath) {
        // If not, ask for it
        selectUnityDesignSystemRepo().then(folderPath => {
            if (folderPath) {
                context.workspaceState.update('unityDesignSystemRepoPath', folderPath);
                vscode.window.showInformationMessage(`Folder path saved: ${folderPath}`);
            }
        });
    }

    let disposable = vscode.commands.registerCommand('add-unity-package-to-webspark-ci.askForUnityLocation', async () => {
        // Retrieve the saved folder path
        const folderPath = context.workspaceState.get<string>('unityDesignSystemRepoPath');
        if (folderPath) {
            // Proceed with your logic using the folderPath
        } else {
            vscode.window.showWarningMessage('Folder path not set. Please deactivate and activate the extension again.');
        }
    });

	context.subscriptions.push(disposable);

    let selectPackageDisposable = vscode.commands.registerCommand('add-unity-package-to-webspark-ci.selectPackage', selectPackageCommand);

    context.subscriptions.push(selectPackageDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

async function selectUnityDesignSystemRepo(): Promise<string | undefined> {
    const options: vscode.OpenDialogOptions = {
        canSelectFolders: true,
        canSelectFiles: false,
        canSelectMany: false,
        openLabel: 'Select Folder'
    };

    const folderUri = await vscode.window.showOpenDialog(options);
    return folderUri && folderUri.length > 0 ? folderUri[0].fsPath : undefined;
}
