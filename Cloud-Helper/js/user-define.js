var isAdd = false;

var fixList = [
		{websiteName:'<b>Zentao 开源版项目管理系统</b>', websiteStr:"<b>http://139.224.238.252/zentaopmsopn/www/index.php</b>", websiteLink:"<b><a href='http://139.224.238.252/zentaopmsopn/www/index.php' target='_blank' class='view-link'>Let's go</a></b>"},
		{websiteName:'云动幻世云主机 Wamp 服务器根目录', websiteStr:"http://139.224.238.252/", websiteLink:"<a href='http://139.224.238.252/' target='_blank' class='view-link'>Let's go</a>"},
	    {websiteName:'云动幻世云主机 Apache 服务器根目录', websiteStr:"http://139.224.238.252:8090/", websiteLink:"<a href='http://139.224.238.252:8090/' target='_blank' class='view-link'>Let's go</a>"},
	    {websiteName:'云动幻世云主机 FTP 服务器根目录', websiteStr:"ftp://139.224.238.252/", websiteLink:"<a href='ftp://139.224.238.252/' target='_blank' class='view-link'>Let's go</a>"},
	    {websiteName:'云动幻世云主机 极简云盘', websiteStr:"http://139.224.238.252/VFM2/", websiteLink:"<a href='http://139.224.238.252/VFM2/' target='_blank' class='view-link'>Let's go</a>"},
		{websiteName:'云动幻世云主机 SVN 地址', websiteStr:"https://139.224.238.252/!/#", websiteLink:"<a href='https://139.224.238.252/!/#' target='_blank' class='view-link'>Let's go</a>"},
		{websiteName:'云动幻世云主机 GIT 地址', websiteStr:"http://139.224.238.252:8090/gitblit", websiteLink:"<a href='http://139.224.238.252:8090/gitblit' target='_blank' class='view-link'>Let's go</a>"},
		{websiteName:'云动幻世云主机 Jenkins 地址', websiteStr:"http://139.224.238.252:8090/jenkins", websiteLink:"<a href='http://139.224.238.252:8090/jenkins' target='_blank' class='view-link'>Let's go</a>"}];
var tableBody = document.getElementById('table-body');
for(var i = 0; i < fixList.length; i++) {
	var tableRow = getDataRow(fixList[i]);
	tableBody.appendChild(tableRow);
}

function getWebsite() {
    var website = document.getElementById("website").value;

    var dataList = [
        {websiteName:'User Wamp 根目录', websiteStr:"http://" + website + "/", websiteLink:"<a href='http://" + website + "' target='_blank' class='view-link'>Let's go</a>"},
        {websiteName:'User Apache 根目录', websiteStr:"http://" + website + ":8090", websiteLink:"<a href='http://" + website + ":8090' target='_blank' class='view-link'>Let's go</a>"}];
    if (isAdd == true) {
        return;
    }
    var tableBody = document.getElementById('table-body');
    for(var i = 0; i < dataList.length; i++) {
        var tableRow = getDataRow(dataList[i]);
        tableBody.appendChild(tableRow);
    }
    isAdd = true;
}


function getDataRow(r_data) {
    var row = document.createElement('tr');
    var websiteName = document.createElement('td');
    websiteName.innerHTML = r_data.websiteName;
    row.appendChild(websiteName);

    var websiteStr = document.createElement('td');
    websiteStr.innerHTML = r_data.websiteStr;
    row.appendChild(websiteStr);

    var websiteLink = document.createElement('td');
    websiteLink.innerHTML = r_data.websiteLink;
    row.appendChild(websiteLink);
    return row;
}