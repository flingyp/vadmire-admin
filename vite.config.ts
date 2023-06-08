import { ConfigEnv, UserConfigExport, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe as ViteMockServe } from 'vite-plugin-mock'
import { spaLoading } from 'vite-plugin-spa-loading'
import clearConsole from 'vite-plugin-clear-console'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import viteCDNPlugin from 'vite-plugin-cdn-import'

import { name, version } from './package.json'

export default ({ mode, command }: ConfigEnv): UserConfigExport => ({
  base: './',
  // Development server config
  server: {
    host: true,
    port: 8080,
    https: false,
    open: false,
    cors: true,
  },
  resolve: {
    // Alias config
    alias: {
      '~': resolve(__dirname, 'src/'),
    },
  },
  // Plugins config
  plugins: [
    vue(),
    // Mock Api
    ViteMockServe({
      mockPath: 'mock',
      localEnabled: command === 'serve',
      prodEnabled: command !== 'serve' && mode === 'development',
      watchFiles: command === 'serve',
      logger: true,
      injectCode: `
          import { setupProdMockServer } from './mock-prod-server';
          setupProdMockServer();
        `,
    }),
    // Auto import api
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'pinia',
        '@vueuse/core',
      ],
      dts: 'auto-imports.d.ts',
      dirs: [
        'src/utils/**',
        'src/store/**',
        'src/composables/**',
      ],
      vueTemplate: true,
    }),
    // Auto import component
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
      dts: 'components.d.ts',
      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView'],
      }],
      resolvers: [
        IconsResolver({
          prefix: 'icon',
        }),
        NaiveUiResolver(),
      ],
    }),
    // Auto use Iconify icon
    Icons({
      autoInstall: true,
      compiler: 'vue3',
      scale: 1.2,
      defaultStyle: '',
      defaultClass: 'unplugin-icon',
      jsx: 'react',
    }),
    spaLoading('svg', {
      path: './public/spa-loading.svg',
      cssPath: './public/spa-loading.css',
    }),
    clearConsole({
      inject: {
        path: './src/main.ts',
        template: [
          ` console.log('%c${name}%cV${version}',
            'padding: 2px 5px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
            'padding: 2px 5px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;')
          `,
          'console.log(\'%cGithub repository: https://github.com/flingyp/vadmire-admin\', \'color: #1c6ce3;\')',
        ],
      },
    }),
    viteCDNPlugin({
      modules: [
        {
          name: 'xlsx',
          var: 'XLSX',
          path: 'https://cdn.sheetjs.com/xlsx-0.19.3/package/dist/xlsx.full.min.js',
        },
        {
          name: 'vditor',
          var: 'Vditor',
          path: 'https://cdn.jsdelivr.net/npm/vditor/dist/index.min.js',
        },
        {
          name: '@wangeditor/editor',
          var: 'wangEditor',
          path: 'https://cdn.jsdelivr.net/npm/@wangeditor/editor@5.1.23/dist/index.min.js',
        },
      ],
    }),
    // 将 node_modules 中的模块打包到自定义 vendor chunk 中，利用浏览器缓存机制，加快页面加载速度
    // Vite >= 2.9.0+ automatically splits vendor chunks when using the build command.
    // Reference: https://cn.vitejs.dev/guide/build.html#chunking-strategy
    splitVendorChunkPlugin(),
  ],
  // Build config
  build: {
    rollupOptions: {
      // Vite < 2.9.0 does not automatically split vendor chunks when using the build command.
      // Reference: https://cn.vitejs.dev/guide/build.html#chunking-strategy
      // output: {
      //   // https://www.rollupjs.com/guide/big-list-of-options#outputmanualchunks
      //   // 将 node_modules 中的模块打包到自定义 vendor chunk 中，利用浏览器缓存机制，加快页面加载速度
      //   manualChunks: (id) => {
      //     if (id.includes('node_modules')) {
      //       return 'vendor'
      //     }
      //   },
      // },
    },
  },
})
