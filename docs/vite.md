### vite resolve 配置
配置 resolve 的作用主要包括：

- **简化模块导入**：通过别名，你可以避免使用复杂的相对路径，使得模块导入更加清晰和简洁。
- **提高开发效率**：自动解析扩展名可以让你在导入模块时不必每次都写文件扩展名，减少了重复工作。
- **兼容性和灵活性**：有时候你可能需要对特定的第三方库进行特殊处理，比如指定库的版本或者指向一个特定的文件，这时候可以通过 alias 来实现。
- **优化构建**：合理的 resolve 配置可以减少构建工具在模块解析过程中的查找工作量，从而可能提高构建性能。

#### alias
alias：用于定义模块路径的别名，这样你就可以使用简短的路径名来代替长路径名。例如，使用 '@/components/MyComponent.vue' 来代替 './src/components/MyComponent.vue'。

#### extensions
extensions：用于指定在导入语句中省略扩展名时，Vite 尝试按顺序解析的文件扩展名列表。例如，如果你设置了 extensions 为 ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']，那么当你尝试导入一个文件但没有指定扩展名时，Vite 会尝试查找列出的扩展名，看是否有匹配的文件存在。

```ts
// vite.config.js 或 vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      // 你可以添加更多别名...
    },
    // 自动解析确定的扩展，能够使用户在引入模块时不带扩展
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    // 配置其他解析相关选项...
  },
  // 其他 Vite 配置...
});
```

#### dedupe:
用于指定应该被视为单例的依赖项。如果你在项目中有多个地方引入了同一个依赖，但你希望在打包时只包含一份代码，可以使用这个选项。

```javascript
resolve: {
    dedupe: ['react']
}
```

#### modules:
用于指定 Vite 查找模块的目录。默认情况下，Vite 会按照 Node.js 的解析算法来查找 node_modules，但你可以通过这个选项来添加额外的路径。

```javascript
resolve: {
    modules: ['src', 'node_modules'] // 这将使 Vite 在 src 目录中也查找模块
}
```

#### mainFields:
用于指定在解析模块的 package.json 文件中，哪些字段将被用于定位模块的入口文件。这对于库作者来说尤其重要，因为他们可能需要指定不同的入口文件给不同的构建环境。

```javascript
resolve: {
    mainFields: ['module', 'jsnext:main', 'jsnext']
}
```
#### conditions:
用于指定在解析 package.json 的 exports 字段时，应该使用哪些条件。这是 Node.js 和新的打包工具支持的一个特性，允许库作者为不同的使用场景提供不同的入口。

```javascript
resolve: {
    conditions: ['development', 'browser']
}
```

#### preserveSymlinks:
一个布尔值，用于指定是否保留模块解析中的符号链接。在某些情况下，比如使用 npm link 或 yarn link 开发本地依赖时，可能需要设置这个选项。

```javascript
resolve: {
    preserveSymlinks: false
}
```


### vite css 配置
自定义 CSS 相关的处理。这包括配置预处理器、CSS 模块、PostCSS 插件等



### vite build 配置配置项的作用说明：
```js
    build: {
		outDir: 'dist', // 指定输出路径
		assetsDir: 'assets', // 指定生成静态资源的存放路径
		assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码，以减少 HTTP 请求
		cssCodeSplit: true, // 启用/禁用 CSS 代码拆分
		sourcemap: false, // 构建后是否生成 source map 文件
		rollupOptions: { // 自定义底层的 Rollup 打包配置
		 	// Rollup 配置项...
		},
		commonjsOptions: {}, // 用于配置 Vite 内部的 Rollup 插件 @rollup/plugin-commonjs 的选项
		terserOptions: { // 用于配置压缩器 Terser 的选项
			compress: {
				drop_console: true, // 移除 console
				drop_debugger: true // 移除 debugger
			}
		},
		minify: 'terser', // 设置压缩工具，'terser' 或 'esbuild'
		manifest: false, // 当设置为 true 时，Vite 会生成一个 `manifest.json` 文件，包含了没有 hash 的文件名和带 hash 的文件名的映射
		chunkSizeWarningLimit: 500, // 设置单个 chunk 的大小警告的限制（以 KB 为单位）
		// 其他构建配置项...
	}
```

- outDir: 指定构建输出的目录，默认为 dist。
- assetsDir: 指定输出的静态资源子目录，默认为 assets。
- assetsInlineLimit: 设置资源大小的阈值，小于此阈值的资源会被内联为 base64 编码，以减少请求次数。
- cssCodeSplit: 控制是否对 CSS 进行代码拆分。默认为 true，每个异步加载的 JavaScript 文件都会有一个对应的 CSS 文件。
- sourcemap: 是否生成构建后的 source map 文件，有助于调试压缩后的代码。
- rollupOptions: 允许你直接指定 Rollup 的配置选项，可以用来自定义构建的细节。
- commonjsOptions: 配置内部 Rollup 插件的选项，用于转换 CommonJS 模块。
- terserOptions: 自定义 Terser 压缩器的选项，例如移除 console 和 debugger。
- minify: 选择 JavaScript 代码的压缩工具，可以是 'terser'（默认）或 'esbuild'。
- manifest: 生成资源清单，有助于服务器端渲染或集成到其他构建工具中。
- chunkSizeWarningLimit: 设置单个 chunk 文件大小的警告阈值，超过这个大小会在构建时发出警告。