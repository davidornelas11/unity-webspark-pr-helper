import * as fs from 'fs';
import * as path from 'path';
import type { config } from '../types/types';

const packageBuildFileConfig: { [key: string]: string } = {
    "app-degree-pages": "dist/degreePages.umd.js",
    "app-webdir-ui": "dist/webdirUi.umd.js",
    "components-core": "dist/libCore.umd.js",
    "component-carousel": "dist/asuCarousel.umd.js",
    "component-events": "dist/asuEvents.umd.js",
    "component-news": "dist/asuNews.umd.js",
};


function copyFiles(config: config) {
    const packageToCopy: string = config?.packageName;

    const sourcePath = path.join(config?.sourceDir, "packages", packageToCopy, packageBuildFileConfig[packageToCopy]);
    const targetPath = path.join(config.targetDir, );

    fs.copyFileSync(sourcePath, targetPath);
}

export { copyFiles };