# ToDo
A ToDo app


## Intruction
一个用React搭建的显示ToDo列表的Web App
 * 采用Node包
 * 使用webpack打包
 * 具体的代码部分使用ES6语法 

## 项目源起
 * React太火了，经过浏览官网文件，还有自己学着去理解，发现react把前端开发整成了后端开发的模式。这一点很有意思，颠覆了原本MVC的单调分离模式，使得Web的开发更加组件化，虽然是重新把老祖宗辛辛苦苦探索出来的MVC分离思想给颠覆了，把HTML/CSS/JS重新杂糅在一起，但是是以组件的形式搭建项目，再重构和移植方面，应该是会有得天独厚的优势
 * 既然要了解React，当然要自己动手实践一个项目才能有更深的理解，ToDo列表可谓是前端开发上手作品必选
 * 搭建项目的过程中，对于React的量大特点印象很深
 	* 1.声明式：在我看来就是关于虚拟DOM思想，太了不起了，虚拟DOM可以实现动态修改和渲染界面，免去了以前刷新页面数据必须刷新整个页面的烦恼，也免去了动态更改数据的时候必须自定义插入的地方，和文章结构息息相关，但是React可以自己比较两颗虚拟DOM数的差异，把差异应用到真正的DOM树上，应用了“不可变性”原则
 	* 2.组件化：组件化就更加厉害了，相当于自己搭建可重用的模板，自己组装，自由更改，虽然是复杂的页面，也能拆解成简单的组件，每个组件拥有各自的状态，可以通过props和state来定义各自组件的属性和状态，运用了“状态机”的原理，更好的修改和传递数据。

## 项目搭建和运行
 * 环境
 	* OS: Ubuntu14.04
 	* nodejs: v8.3.0
 	* npm: v5.3.0
 * 搭建环境：
 	* 可以参考[我的博客](http://blog.csdn.net/rical730/article/details/77206601)配置nodejs最新版
 * 下载和配置程序
 	* 初始化项目
	```
	git clone https://github.com/rical730/ToDo.git
	cd ToDo/todos/
	tree #查看项目结构
	npm install
	```	
 * 运行
 	* 运行`webpack-dev-server`启动webpack服务器，使用浏览器打开 http://127.0.0.1:8080 或者 localhost:8080 就能看见
 	支持热编译。


## 依赖包
项目git下来之后就已经安装好了，无需再安装，只是备注一下使用过的包
 * 安装生产发布环境依赖包:webpack 和 bable的编译工具包 和 Lodash函数库（可以使用ES6的一些新特性）
	```
	npm install -g webpack webpack-dev-server
	npm install --save react react-dom lodash
	```
 * 安装开发环境中使用的打包编译的loader包
	```
	npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react react-hot-loader style-loader css-loader webpack webpack-dev-server
	```


## Problem
 * 有一些webpack.config.js里面的参数已经更新了，会报错，根据错误提示修改就行
 * import的时候需要用绝对路径，用相对路径会提示找不到导入路径

## To be continue
 * 保存到本地
 * 还需增加用户管理功能

## V1.0版本图

 ![](https://github.com/rical730/ToDo/blob/master/todos/view1.0.png)

## 参考资料
[人世间](http://www.jianshu.com/p/715913d3fabc)