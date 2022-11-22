## 支持 React 18

Modern.js 框架和相关插件完成对 React 18 的适配。现在，只需要将项目中的 `react`、`react-dom` 两个包的版本，升级到最新的 React 18 大版本，就可以使用 React 18 的新功能。

注意，使用 `@modern-js/create` 命令默认创建的项目，安装的依赖 `react`、`react-dom` 的版本仍然为 17，如果希望使用 React 18，请手动升级这两个包的版本。

另外，SSR 流式渲染功能，目前尚在开发中，暂不支持。

## Modern.js 包版本统一

之前，组成 Modern.js 的各个包的版本号并不统一，Modern.js 自身的版本和这些包的版本缺少明确的对应关系。这不仅增加了我们的维护成本，而且给用户的使用和升级带来了很多困扰。

从 v1.15.0 版本开始，Modern.js 自身的版本号和所有组成包的版本号，进行了统一。例如，Modern.js v1.15.0，意味着所有组成包的版本号也是 v1.15.0。 每次发布新版本，Modern.js 所有包都会使用统一的版本号执行发布。 Github 上仓库的 [tag](https://github.com/modern-js-dev/modern.js/tags) 编号和 Modern.js 所有组成包的版本号是一一对应的。

hello world