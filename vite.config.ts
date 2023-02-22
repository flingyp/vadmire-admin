import { ConfigEnv, defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe as ViteMockServe } from 'vite-plugin-mock'

export default ({ command }: ConfigEnv): UserConfigExport => ({
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
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  // Plugins config
  plugins: [
    vue(),
    // Mock Api
    ViteMockServe({
      mockPath: 'mock',
      localEnabled: command === 'serve',
      prodEnabled: command !== 'serve',
      watchFiles: true,
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

  ],
})