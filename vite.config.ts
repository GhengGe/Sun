import vue from "@vitejs/plugin-vue";
import path from 'path';
// import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
    root: path.resolve(__dirname, './'), // 设置项目的根目录
	define: {
		__APP_VERSION__: JSON.stringify('v1.0.0')
	},
	// 设置为false时，关闭此项功能
	publicDir: false,
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	server: {
		host: '0.0.0.0', // 指定服务器主机名
		port: 3000, // 指定服务器端口
		open: true, // 自动在浏览器打开, 可以指定路径： '/docs/index.html'
		// strictPort: true, // 如果端口已被占用，则直接退出
		// https: false, // 是否启用 HTTPS
		cors: true, // 为开发服务器配置 CORS，默认启用并允许任何源
		proxy: { // 配置代理
		  '/api': {
			target: 'http://example.com', // 后端服务地址
			changeOrigin: true,
			rewrite: (path) => path.replace(/^\/api/, '')
		  }
		},
		hmr: { // 配置热更新
		  protocol: 'ws', // 使用的协议
		  host: 'localhost',
		  port: 3000,
		  // 其他 HMR 配置项
		},
		// 其他服务器配置项...
	},
	resolve: {
		// 文件系统路径的别名
		alias: [
			{
				find: /^@\//,
				replacement: path.resolve(__dirname, 'src') + '/'
			}
		],
		// 自动解析确定的扩展，能够使用户在引入模块时不带扩展(以下为默认省略的扩展名)
		// 注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
	},
	preview: {
		port: 7778,
	},
	css: {
		postcss: {
			// 引入插件
			plugins: [
				// eslint-disable-next-line
				// 文件插件
				// require('./plugins/css')(),
				// require('autoprefixer'),
			],
		},
		preprocessorOptions: {
			less: {
				// 这意味着在less文件中允许使用JavaScript代码，从而可以在样式表中使用JavaScript表达式和函数，增加了样式处理的灵活性和动态性
				javascriptEnabled: true,
				// 全局 Less 变量
				globalVars: {
				  mainColor: '#ff0000'
				}
			},
		},
	},
	build: {
		outDir: 'dist', // 指定输出路径
		assetsDir: 'assets', // 指定生成静态资源的存放路径
		assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码，以减少 HTTP 请求
		sourcemap: false, // 构建后是否生成 source map 文件
		rollupOptions: { // 自定义底层的 Rollup 打包配置
		 	// Rollup 配置项...
		},
		commonjsOptions: {}, // 用于配置 Vite 内部的 Rollup 插件 @rollup/plugin-commonjs 的选项
		minify: 'terser', // 设置压缩工具，'terser' 或 'esbuild'
		manifest: false, // 当设置为 true 时，Vite 会生成一个 `manifest.json` 文件，包含了没有 hash 的文件名和带 hash 的文件名的映射
		chunkSizeWarningLimit: 500, // 设置单个 chunk 的大小警告的限制（以 KB 为单位）
	}
});
