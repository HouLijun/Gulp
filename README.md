gulp构建专题页面说明

1. 全局安装 gulp：
$ cnpm install --global gulp

2. 作为项目的开发依赖（devDependencies）安装：
$ npm install --save-dev gulp

3. 安装gulp插件gulp-file-include（模板复用功能）
$ npm install gulp-file-include 

4. 新建专题文件夹
zt
 ├─build  	//打包区
 │  ├─common
 │  └─page
 │
 └─dev   	//开发代码区
     ├─common
	 │   ├─html		//公用html用于include
	 │   ├─css
	 │   ├─js
	 │   ├─plugins
	 │   └─images
     └─page

5. 在专题的html页面内引用公用文件[例如：meat、头部、底部、右侧悬浮等]
引用meta: @@include('../../common/html/meta.html')
引用右侧客服：@@include('../../common/html/contact.html')
引用底部：@@include('../../common/html/footer.html')

6. 只需切图中间页面部分

7. 使用cmd工具执行构建生成dist文件
$ gulp

8. 给开发的文件夹位置
位置：zt-gulp -> dist -> page -> 对应的文件夹

9. 单个专题打包
$ npm install minimist --save-dev

运行`gulp single --paths 2018/2018-05-17-宣传册设计`

10. common打包
`gulp common`