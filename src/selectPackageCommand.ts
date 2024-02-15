import * as vscode from 'vscode';

export async function selectPackageCommand() {
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

    if (selectedPackage) {
        vscode.window.showInformationMessage(`Selected package: ${selectedPackage}`);
        // Log out or use the selected package as needed
        console.log(`Selected package: ${selectedPackage}`);
    } else {
        vscode.window.showWarningMessage('No package selected.');
    }
}