import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
    plugins: [pluginReact(), pluginSvgr()],
    html: {
        template: './public/index.html',
    },
    source: {
        entry: {
            index: './src/index.jsx',
        },
        define: {
            'process.env.PUBLIC_URL': JSON.stringify('/HRnet/'),
        },
    },
    output: {
        assetPrefix: '/HRnet/',
        distPath: {
            root: 'build',
        },
    },
});
