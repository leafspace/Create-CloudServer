# Create-CloudServer

本库来源于知乎上的这个回答： https://www.zhihu.com/question/40854395/answer/369610486
用于帮助您搭建自己的云服务器

* Cloud-Disk        ：云盘
* Cloud-Git         ：GIT
* Cloud-Helper      ：网页导航
* Cloud-Helper-VP   ：内网导航升级版（还未具体修改）
* Cloud-Jenkins     ：集成工具
* Cloud-Zentao      ：禅道项目管理工具，有需要的自行移步到[禅道]（https://www.zentao.net/）

**部署环境：**<br/>
Cloud-Helper只是静态网页，所以随便使用任意web服务器即可。<br/>
Cloud-Git与Cloud-Jenkins只需要在云主机中安装apache-tomcat服务器，然后将里面的war文件直接放到web目录下即可。<br/>
Cloud-Disk是PHP网站，需要使用类似wampserver的PHP服务器来搭建，搭建完成后直接将Cloud-Disk中的内容放到web目录下。（注：云盘固定管理员账号为-admin 密码为-password）<br/> 

**上述环境除了禅道项目管理系统，其他都不需要安装数据库

