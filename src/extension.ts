import * as vscode from 'vscode';
import { selectPackageCommand } from './selectPackageCommand';

export function activate(context: vscode.ExtensionContext) {

	const savedFolderPath = context.workspaceState.get<string>('unityDesignSystemRepoPath');
    const path1 = vscode.workspace.getConfiguration().get('unityDesignSystemRepoPath');

    if (!savedFolderPath) {
        selectUnityDesignSystemRepo().then(folderPath => {
            if (folderPath) {
                context.workspaceState.update('unityDesignSystemRepoPath', folderPath);
                vscode.window.showInformationMessage(`Folder path saved: ${folderPath}`);
            }
        });
    }

    let disposable = vscode.commands.registerCommand('add-unity-package-to-webspark-ci.askForUnityLocation', async () => {

        const folderPath = context.workspaceState.get<string>('unityDesignSystemRepoPath');
        if (folderPath) {
            vscode.window.showInformationMessage(`Folder path saved: ${folderPath}`);
        } else {
            vscode.window.showWarningMessage('Folder path not set. Please deactivate and activate the extension again.');
        }
    });

	context.subscriptions.push(disposable);

    let selectPackageDisposable = vscode.commands.registerCommand('add-unity-package-to-webspark-ci.selectPackage', () => {
        selectPackageCommand(context);
    });

    context.subscriptions.push(selectPackageDisposable);
}

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
