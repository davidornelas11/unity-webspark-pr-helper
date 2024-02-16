import * as vscode from 'vscode';
import { copyFiles, websparkUnitypackageConfig, packageBuildFileConfig } from './utils/copyFiles';
import path from 'path';

export async function selectPackageCommand(context: vscode.ExtensionContext) {
    const packageOptions = [
        'app-degree-pages',
        'app-webdir-ui',
        'components-core',
        'component-carousel',
        'component-events'
    ];

    const selectedPackage = await vscode.window.showQuickPick(packageOptions, {
        placeHolder: 'Select a package'
    });

    let unityDesignSystemRepoPath: string = context.workspaceState.get<string>('unityDesignSystemRepoPath') || '';
    let websparkPath: string = vscode.workspace.workspaceFolders?.[0].uri.fsPath || '';

    if (selectedPackage) {
        copyFiles({
            packageName: selectedPackage,
            sourceDir:path.join(unityDesignSystemRepoPath, 'packages', selectedPackage, packageBuildFileConfig[selectedPackage]),
            targetDir: path.join(websparkPath, websparkUnitypackageConfig[selectedPackage])
        });
    } else {
        vscode.window.showWarningMessage('No package selected.');
    }
}