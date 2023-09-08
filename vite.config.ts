import { resolve } from 'path'
import { ConfigEnv, UserConfigExport } from 'vite'
import { serverOptions, generatePlugins } from './build'

const currentTimestamp = new Date().getTime()
const nodeModulesFileName = `vendor_${currentTimestamp}`

export default ({ mode, command }: ConfigEnv): UserConfigExport => ({
  base: './',
  // Development server config
  server: serverOptions,
  resolve: {
    // Alias config
    alias: {
      '~': resolve(__dirname, 'src/'),
    },
  },
  // Plugins config
  plugins: generatePlugins(command, mode),
  // Build config
  build: {
    rollupOptions: {
      // Vite < 2.9.0 does not automatically split vendor chunks when using the build command.
      // Reference: https://cn.vitejs.dev/guide/build.html#chunking-strategy
      output: {
        // https://www.rollupjs.com/guide/big-list-of-options#outputmanualchunks
        // 将 node_modules 中的模块打包到自定义 vendor chunk 中，利用浏览器缓存机制，加快页面加载速度
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return nodeModulesFileName
          }
        },
      },
    },
  },
})
