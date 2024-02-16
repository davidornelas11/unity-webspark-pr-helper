# Unity Design System PR Review Helper for WebSpark-CI

This VS Code extension streamlines the process of reviewing PRs (Pull Requests) for the Unity Design System by facilitating the immediate testing of changes within the WebSpark-CI DDEV/Lando environment. It automates the task of copying the correct Webpack build files to the appropriate modules folder in WebSpark-CI, ensuring that reviewers can easily test the latest changes without manual file handling. This extension is specifically designed to be run within the WebSpark-CI workspace.

## Features

- **Automatic File Management**: Automatically copies the Webpack build files generated from the Unity Design System repository to the corresponding modules folder in the WebSpark-CI environment.
- **Seamless PR Review Process**: Enhances the efficiency of the PR review process by ensuring that the latest changes can be tested directly within the WebSpark-CI DDEV/Lando environment.

## Prerequisites

Before using this extension, ensure you have the following setup:

- A local instance of the WebSpark-CI environment configured with DDEV or Lando.
- The Unity Design System repository cloned and accessible on your machine.
- Node.js and Yarn installed to run build processes.

## Getting Started

### Installation

1. Open Visual Studio Code while you're in the webspark-ci repo.**note: you must have webspark-ci folder as your first workspace in vscode**
2. Navigate to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
3. Search for "add-unity-package-to-webspark-ci" and click Install.

### Configuration

Upon first activation, the extension will prompt you to select the local directory of your Unity Design System repository. This path is stored and used for accessing the Webpack build files.

1. Activate the extension by opening the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and typing "Add Unity Location".
2. When prompted, navigate to and select the directory where your Unity Design System repository is located.

### Usage

To use the extension for PR review:

1. Ensure you are in the WebSpark-CI workspace within VS Code.
2. Navigate to the Unity Design System repository and run `yarn build` to create the most updated build files.
3. Open the Command Palette back in webspark-ci and execute the command "Select Unity Package to add.

The extension will automatically copy the necessary build files to the WebSpark-CI environment, allowing you to test the changes immediately.

## Support

For support, questions, or contributions, please open an issue on the GitHub repository page for this extension.

## Contributing

Contributions to the Unity Design System PR Review Helper are welcome! Please read our contributing guidelines for more information on how to propose bug fixes, improvements, or new features.