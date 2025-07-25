import { rspack } from '@rspack/core';
import { ReactRefreshRspackPlugin } from '@rspack/plugin-react-refresh';
import { withZephyr } from 'zephyr-webpack-plugin';
// import { defineConfig } from '@rspack/cli';
import * as path from 'path';

const isDev = process.env.NODE_ENV === 'development';

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['last 2 versions', '> 0.2%', 'not dead', 'Firefox ESR'];

export default withZephyr()({
  entry: {
    main: './src/main.tsx',
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx', '.json'],
    // @ts-expect-error non-blocking error
    tsConfig: path.resolve(__dirname, './tsconfig.json'),
  },
  devServer: {
    port: 8181,
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, 'src')],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.css$/,
        use: ['postcss-loader'],
        type: 'css',
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },
  // @ts-expect-error Below are non-blocking error and we are working on improving them
  plugins: [
    new rspack.container.ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        dashboard: 'dashboard@http://localhost:8282/remoteEntry.js',
        about: 'about@http://localhost:8383/remoteEntry.js',
      },
      exposes: {
        './QueryClient': './src/lib/query-client',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^19.1.0' },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '^19.1.0',
        },
        'react-router-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '^7.7.0',
        },
        'tanstack/react-query': {
          singleton: true,
          eager: true,
          requiredVersion: '^5.83.0',
        },
      },
    }),
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    isDev ? new ReactRefreshRspackPlugin() : null,
  ].filter(Boolean),
  optimization: {
    minimizer: [
      // @ts-expect-error non-blocking error
      new rspack.SwcJsMinimizerRspackPlugin(),
      // @ts-expect-error non-blocking error
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
  experiments: {
    css: true,
  },
});
