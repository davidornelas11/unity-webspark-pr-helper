import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import type { config } from '../types/types';

const packageBuildFileConfig: { [key: string]: string } = {
    "app-degree-pages": "dist/degreePages.umd.js",
    "app-webdir-ui": "dist/webdirUi.umd.js",
    "components-core": "dist/libCore.umd.js",
    "component-carousel": "dist/asuCarousel.umd.js",
    "component-events": "dist/asuEvents.umd.js",
    "component-news": "dist/asuNews.umd.js",
};

const websparkUnitypackageConfig: { [key: string]: string } = {
    "app-degree-pages": "web/modules/webspark/asu_degree_rfi/node_modules/@asu/app-degree-pages/dist/degreePages.umd.js",
    "app-webdir-ui": "web/modules/webspark/webspark_webdir/node_modules/@asu/app-webdir-ui/dist/webdirUI.umd.js",
    "components-core": "web/modules/webspark/asu_react_core/node_modules/@asu/components-core/dist/libCore.umd.js",
    "component-carousel": "web/modules/webspark/asu_react_core/node_modules/@asu/component-carousel/dist/asuCarousel.umd.js",
    "component-events": "web/modules/webspark/asu_events/node_modules/@asu/component-events/dist/asuEvents.umd.js",
    "component-news": "web/modules/webspark/asu_news/node_modules/@asu/component-news/dist/asuNews.umd.js",
};

function copyFiles(config: config) {

        fs.copyFile(config.sourceDir, config.targetDir, (err) => {
            if (err) {
                vscode.window.showErrorMessage(`Error copying file: ${err}`);
            }
});
};

export { copyFiles, packageBuildFileConfig, websparkUnitypackageConfig};