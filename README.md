
PC端外卖点餐平台系统，react + springboot小项目

## backend 后端项目
技术架构：springboot spring mybatis mybatis-plus maven lombok log4j2 mysql swagger \
启动方式：backend/src/main/java/com/delivery/Application 运行main函数

-------------

## frontend 前端项目
node 版本要求 v12.13.1 +
技术架构：react react-router react-hooks redux  \
样式组件库：antd
打包构建工具：webpack
启动方式：进入前端根目录 执行npm start 或者 frontend/package.json 点击start \
访问http://localhost:3000

-------------

## jar包启动方式：
打开IDEA Terminal \
进入项目根目录 执行命令 mvn install \
java -jar backend/target/delivery-platform-1.0.RELEASE.jar \
访问 http://localhost:7000即可

-------------

后端接口文档： http://localhost:7000/doc.html \
建表sql：backend/src/main/resources/table.sql \
默认管理员账号：admin 123456
