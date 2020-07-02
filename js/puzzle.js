var points=0;
function create_puzzle1() {
    var pdiv=[];
    var pli=[];

    var box=creates([{class:"box"}],document.body);
    var obox=document.getElementsByClassName("box")[0];
    // var box=creates([{class:"box"}],container[0]);
    for(var m=0;m<4;m++){
        creates([{element:"span"}],box[0]);
    }
    var content1=creates([{class:"content1"}],box[0]);
    var point=creates([{id:"point"}],content1[0]);
    var next=creates([{id:"next"}],content1[0]);
    var ch2=creates([{element:"h2",class:"ph2"}],content1[0]);
    var pzul=creates([{element:"ul",class:"pzul"}],content1[0]);
    for(var j=0;j<4;j++){
        creates([{element:"li",class:"pzli"}],pzul[0]);
    }
    pli=document.getElementsByClassName("pzli");
    creates([{class:"p1",optvalue:"A.鲍勃迪伦"}],pli[0]);
    creates([{class:"p1",optvalue:"B.迪克牛仔"}],pli[1]);
    creates([{class:"p1",optvalue:"C.凤凰传奇"}],pli[2]);
    creates([{class:"p1",optvalue:"D.动力火车"}],pli[3]);
    pdiv=document.getElementsByClassName("p1");
    var h2=document.getElementsByClassName("ph2")[0];
    var opoint=document.getElementById("point");
    pdiv[0].innerHTML="A.鲍勃迪伦";
    pdiv[1].innerHTML="B.迪克牛仔";
    pdiv[2].innerHTML="C.凤凰传奇";
    pdiv[3].innerHTML="D.动力火车";
    h2.innerHTML="Q1、历史上首位获得诺贝尔文学奖的音乐家的是？";
    for(var n=0;n<pdiv.length;n++){
        pdiv[n].onclick=function () {
            var answer=this.getAttribute("optvalue");
            // console.log(answer);
            if(answer=='A.鲍勃迪伦'){
               this.className+=' chose right';
               points+=20;
               console.log(points);
               opoint.innerHTML=points;
            }else{
                this.className+=' chose wrong';
                opoint.innerHTML=points;
            }
        }
    }
    var onext=document.getElementById("next");
    onext.onclick=function () {
        console.log("click!");
        startMove(obox,{opacity:0},function () {
            document.body.removeChild(obox);
            create_puzzle2();
        });


    }
}

function create_puzzle2() {
    var pdiv=[];
    var pli=[];
    var box=creates([{class:"box"}],document.body);
    // var box=creates([{class:"box"}],container[0]);
    for(var m=0;m<4;m++){
        creates([{element:"span"}],box[0]);
    }
    var content1=creates([{class:"content1"}],box[0]);
    creates([{id:"point"}],content1[0]);
    creates([{id:"next"}],content1[0]);
    creates([{element:"h2",class:"ph2"}],content1[0]);
    var pzul=creates([{element:"ul",class:"pzul"}],content1[0]);
    for(var j=0;j<4;j++){
        creates([{element:"li",class:"pzli"}],pzul[0]);
    }
    pli=document.getElementsByClassName("pzli");
    creates([{class:"p1",optvalue:"A.《田园交响曲》"}],pli[0]);
    creates([{class:"p1",optvalue:"B.《命运交响曲》"}],pli[1]);
    creates([{class:"p1",optvalue:"C.《英雄交响曲》"}],pli[2]);
    creates([{class:"p1",optvalue:"D.《前进交响曲》"}],pli[3]);
    pdiv=document.getElementsByClassName("p1");
    var h2=document.getElementsByClassName("ph2")[0];
    var opoint=document.getElementById("point");
    pdiv[0].innerHTML="A.《田园交响曲》";
    pdiv[1].innerHTML="B.《命运交响曲》";
    pdiv[2].innerHTML="C.《英雄交响曲》";
    pdiv[3].innerHTML="D.《前进交响曲》";
    h2.innerHTML="Q2、贝多芬的第五交响曲又叫什么？";
    for(var n=0;n<pdiv.length;n++){
        pdiv[n].onclick=function () {
            var answer=this.getAttribute("optvalue");
            // console.log(answer);
            if(answer=='B.《命运交响曲》'){
                this.className+=' chose right';
                points+=20;
                console.log(points);
                opoint.innerHTML=points;
            }else{
                this.className+=' chose wrong';
                opoint.innerHTML=points;
            }
        }
    }
    var obox=document.getElementsByClassName("box")[0];
    var onext=document.getElementById("next");
    onext.onclick=function () {
        console.log("click!");
        startMove(obox,{opacity:0},function () {
            document.body.removeChild(obox);
            create_puzzle3();
        });


    }
}
function create_puzzle3() {
    var pdiv=[];
    var pli=[];
    var box=creates([{class:"box"}],document.body);
    for(var m=0;m<4;m++){
        creates([{element:"span"}],box[0]);
    }
    var content1=creates([{class:"content1"}],box[0]);
    creates([{id:"point"}],content1[0]);
    creates([{id:"next"}],content1[0]);
    creates([{element:"h2",class:"ph2"}],content1[0]);
    var pzul=creates([{element:"ul",class:"pzul"}],content1[0]);
    for(var j=0;j<4;j++){
        creates([{element:"li",class:"pzli"}],pzul[0]);
    }
    pli=document.getElementsByClassName("pzli");
    creates([{class:"p1",optvalue:"A.Queen"}],pli[0]);
    creates([{class:"p1",optvalue:"B.David Bowie"}],pli[1]);
    creates([{class:"p1",optvalue:"C.Owl City"}],pli[2]);
    creates([{class:"p1",optvalue:"D.U2"}],pli[3]);
    pdiv=document.getElementsByClassName("p1");
    var h2=document.getElementsByClassName("ph2")[0];
    var opoint=document.getElementById("point");
    pdiv[0].innerHTML="A.Queen";
    pdiv[1].innerHTML="B.David Bowie";
    pdiv[2].innerHTML="C.Owl City";
    pdiv[3].innerHTML="D.U2";
    h2.innerHTML="Q3、以下乐队哪个不是欧美摇滚乐队？";
    for(var n=0;n<pdiv.length;n++){
        pdiv[n].onclick=function () {
            var answer=this.getAttribute("optvalue");
            // console.log(answer);
            if(answer=='C.Owl City'){
                this.className+=' chose right';
                points+=20;
                console.log(points);
                opoint.innerHTML=points;
            }else{
                this.className+=' chose wrong';
                opoint.innerHTML=points;
            }
        }
    }
    var obox=document.getElementsByClassName("box")[0];
    var onext=document.getElementById("next");
    onext.onclick=function () {
        console.log("click!");
        startMove(obox,{opacity:0},function () {
            document.body.removeChild(obox);
            create_puzzle4();
        });


    }
}
function create_puzzle4() {
    var pdiv=[];
    var pli=[];
    var box=creates([{class:"box"}],document.body);
    // var box=creates([{class:"box"}],container[0]);
    for(var m=0;m<4;m++){
        creates([{element:"span"}],box[0]);
    }
    var content1=creates([{class:"content1"}],box[0]);
    creates([{id:"point"}],content1[0]);
    creates([{id:"next"}],content1[0]);
    creates([{element:"h2",class:"ph2"}],content1[0]);
    var pzul=creates([{element:"ul",class:"pzul"}],content1[0]);
    for(var j=0;j<4;j++){
        creates([{element:"li",class:"pzli"}],pzul[0]);
    }
    pli=document.getElementsByClassName("pzli");
    creates([{class:"p1",optvalue:"A.崔健《解决》"}],pli[0]);
    creates([{class:"p1",optvalue:"B.伍佰《诗情摇滚》"}],pli[1]);
    creates([{class:"p1",optvalue:"C.零点乐队《爱不爱我》"}],pli[2]);
    creates([{class:"p1",optvalue:"D.郑钧《私奔》"}],pli[3]);
    pdiv=document.getElementsByClassName("p1");
    var h2=document.getElementsByClassName("ph2")[0];
    var opoint=document.getElementById("point");
    pdiv[0].innerHTML="A.崔健《解决》";
    pdiv[1].innerHTML="B.伍佰《诗情摇滚》";
    pdiv[2].innerHTML="C.零点乐队《爱不爱我》";
    pdiv[3].innerHTML="D.郑钧《私奔》";
    h2.innerHTML="Q4、下列属于中国90年代经典摇滚曲目的是？";
    for(var n=0;n<pdiv.length;n++){
        pdiv[n].onclick=function () {
            var answer=this.getAttribute("optvalue");
            // console.log(answer);
            if(answer=='A.崔健《解决》'){
                this.className+=' chose right';
                points+=20;
                console.log(points);
                opoint.innerHTML=points;
            }else{
                this.className+=' chose wrong';
                opoint.innerHTML=points;
            }
        }
    }
    var obox=document.getElementsByClassName("box")[0];
    var onext=document.getElementById("next");
    onext.onclick=function () {
        console.log("click!");
        startMove(obox,{opacity:0},function () {
            document.body.removeChild(obox);
            create_puzzle5();
        });


    }
}

function create_puzzle5() {
    var pdiv=[];
    var pli=[];
    var box=creates([{class:"box"}],document.body);
    // var box=creates([{class:"box"}],container[0]);
    for(var m=0;m<4;m++){
        creates([{element:"span"}],box[0]);
    }
    var content1=creates([{class:"content1"}],box[0]);
    creates([{id:"point"}],content1[0]);
    creates([{id:"next"}],content1[0]);
    creates([{element:"h2",class:"ph2"}],content1[0]);
    var pzul=creates([{element:"ul",class:"pzul"}],content1[0]);
    for(var j=0;j<4;j++){
        creates([{element:"li",class:"pzli"}],pzul[0]);
    }
    pli=document.getElementsByClassName("pzli");
    creates([{class:"p1",optvalue:"A.鼓点快速密集"}],pli[0]);
    creates([{class:"p1",optvalue:"B.电吉他音色失真"}],pli[1]);
    creates([{class:"p1",optvalue:"C.嗓音狂吼咆哮"}],pli[2]);
    creates([{class:"p1",optvalue:"D.贝斯高亢有力"}],pli[3]);
    pdiv=document.getElementsByClassName("p1");
    var h2=document.getElementsByClassName("ph2")[0];
    var opoint=document.getElementById("point");
    pdiv[0].innerHTML="A.鼓点快速密集";
    pdiv[1].innerHTML="B.电吉他音色失真";
    pdiv[2].innerHTML="C.嗓音狂吼咆哮";
    pdiv[3].innerHTML="D.贝斯高亢有力";
    h2.innerHTML="Q5、以下哪项不是重金属乐的特点？";
    for(var n=0;n<pdiv.length;n++){
        pdiv[n].onclick=function () {
            var answer=this.getAttribute("optvalue");
            // console.log(answer);
            if(answer=='D.贝斯高亢有力'){
                this.className+=' chose right';
                points+=20;
                console.log(points);
                opoint.innerHTML=points;
            }else{
                this.className+=' chose wrong';
                opoint.innerHTML=points;
            }
        }
    }
    var obox=document.getElementsByClassName("box")[0];
    var onext=document.getElementById("next");
    var ocontent=document.getElementsByClassName("content1")[0];
    onext.onclick=function () {
        startMove(onext,{opacity:0},function () {
           ocontent.removeChild(onext);
            create_rank();
        });


    }
}

function create_rank() {
    var rank;
    var ocontent=document.getElementsByClassName("content1")[0];
    creates([{id:"rank"}],ocontent);
    var orank=document.getElementById("rank");
    if(points==0) rank='LOSER';
    if(points==20) rank='NORMAL';
    if(points==40) rank='PRIMARY';
    if(points==60) rank='JUNIOR';
    if(points==80) rank='SENIOR';
    if(points==100) rank='ULTIMATE';
    orank.innerHTML=rank;
}
