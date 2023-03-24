import { ConfigEnv, UserConfigExport } from 'vite'
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
      css: `
        .loading-text {
          display: none;
        }
        .loading {
          font-family:arial;
          font-size:7px;
          animation:blink .9s ease-in-out infinite;
        }
        .spa-loading-svg {
          stroke-dasharray:17;
          animation:dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
        }
        @keyframes dash {
          to{
            stroke-dashoffset:136;
          }
        }
        @keyframes blink {
          50%{
            opacity:0;
          }
        }
      `,
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
  ],
})
