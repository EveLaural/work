//1.获得obj的name的元素属性
function getStyle(obj,name)
{
    if(obj.currentStyle)return obj.currentStyle[name];
    else return getComputedStyle(obj,false)[name];
}
//2.根据class获取元素
function getByClass(oParent,sClass)
{
    var aEle=oParent.getElementsByTagName('*');
    var aResult=[];
    for(var i=0;i<aEle.lenght;i++)
    {
        if(aEle[i].className==sClass)
        {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}
//4.完美运动框架：传入json,属性同时变化
function startMove(obj,json,fnEnd)//对象，属性，目标值,链式函数
{
    clearInterval(obj.timer);//自定义的timer属性
    obj.timer=setInterval(function(){
        var bStop=true;//假设所有的值都已经到了
        for(var attr in json)
        {
            var cur=0;
            if(attr=='opacity')
            {
                cur=Math.round(parseFloat(getStyle(obj,attr))*100);

            }//返回的是0-1透明度,round()四舍五入
            else
            {
                cur=parseInt(getStyle(obj,attr));
            }//当前属性值
            var speed=(json[attr]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(cur!=json[attr])bStop=false;
            if(attr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }
			else if(attr=='zIndex'){
                obj.style[attr]=cur+speed;
            }
            else
            {
                obj.style[attr]=cur+speed+'px';
                // console.log(cur+speed);
            }
        }
        if(bStop)
        {
            clearInterval(obj.timer);
            if(fnEnd)fnEnd();//运动结束，开始下一个链式运动

        }
    },30);
}
function startMove2(obj,json,tip,fnEnd)//对象，属性，目标值,链式函数
{
    tip = tip||6;//越小越快
    clearInterval(obj.timer);//自定义的timer属性
    obj.timer=setInterval(function(){
        var bStop=true;//假设所有的值都已经到了
        for(var attr in json)
        {
            var cur=0;
            if(attr=='opacity')
            {
                cur=Math.round(parseFloat(getStyle(obj,attr))*100);

            }//返回的是0-1透明度,round()四舍五入
            else
            {
                cur=parseInt(getStyle(obj,attr));
            }//当前属性值
            var speed=(json[attr]-cur)/tip;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(cur!=json[attr])bStop=false;
            if(attr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }
            else if(attr=='zIndex'){
                obj.style[attr]=cur+speed;
            }
            else
            {
                obj.style[attr]=cur+speed+'px';
                // console.log(cur+speed);
            }
        }
        if(bStop)
        {
            clearInterval(obj.timer);
            if(fnEnd)fnEnd();//运动结束，开始下一个链式运动

        }
    },30);
}
//获得鼠标位置
function getPos(ev){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
    return {x:ev.clientX+scrollLeft,y:ev.clientY+scrollTop};
}
//取消事件冒泡
function stopBubble(e) {
    // 如果提供了事件对象，则这是一个非IE浏览器
    if ( e && e.stopPropagation ) {
        // 因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    } else {
        // 否则，我们需要使用IE的方式来取消事件冒泡
        window.event.cancelBubble = true;
    }
}
function creates(array , obj) {
    var arryobject = [];
    for(var i=0;i<array.length;i++ )
    {
        var json = array[i];
        var object = document.createElement(json["element"]||"div");
        delete json["element"];
        if(json["innerHTML"]){
            object.innerText = json["innerHTML"];
            delete json["innerHTML"];
        }
        for(var attr in json){

                if(json[attr]==="class")object.setAttribute("className",json[attr]);
                object.setAttribute(attr,json[attr]);
        }
        obj = obj||document.body;
        obj.appendChild(object);
        arryobject.push(object);
    }
    return arryobject;
}
function showFloat(str) {
    var afloat = creates([{element:"div",id:"showFloat",innerHTML:str}]);
    startMove2(afloat[0],{opacity:100},15,function () {
        startMove2(afloat[0],{opacity:0},5,function () {
            document.body.removeChild(afloat[0]);
        });
    });
}