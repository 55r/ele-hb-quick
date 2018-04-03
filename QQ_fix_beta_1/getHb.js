
/**
*author：张琪灵
*date:2018.1.12
*/
//get cookie 获取四个cookie的名字
  var a=new Array();
  a[0] = document.cookie.split(";")[0].split("=")[0];
  a[1] = document.cookie.split(";")[1].split("=")[0];
  a[2] = document.cookie.split(";")[2].split("=")[0];
  a[3] = document.cookie.split(";")[3].split("=")[0];
  //alert(a);
  //index the info
  for(var j = 0;j<=3;j++)
  {
   if(a[j].indexOf("snsInfo")!=-1){
     var cookie = j;
   }
  }
/*
    var cookie=prompt("输入snsInfo位置0,1,2,3","0");
  	if (cookie!=null && cookie!=""){
        cookie = cookie;
*/
  	    var   lucky_number = prompt("which key 0-11");
        if (cookie!=null && cookie!=""){
          //get cookie name
          var cookie_name=document.cookie.split(";")[cookie].split("=")[0]; // alert(cookie_name);
          //cookie array
            var key=new Array();
		//这里的key自行获取.
           	 key[0] = '';
	   	 key[1] = '';
	   	 key[2] = '';
		 key[3] = '';
		 key[4] = '';

            document.cookie = cookie_name+"="+key[lucky_number]+"; domain= .h5.ele.me; path=/";
            location.reload();
        }
