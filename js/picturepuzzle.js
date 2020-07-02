    var pics=[];
    var nowfame;
    var musicainname=['鲍勃迪伦','埃米纳姆','泰勒斯威夫特','崔健','QUEEN','cardiB','庾澄庆','邓紫棋','布鲁诺马尔兹'];
    function init_pic() {
        nowfame=Math.floor(Math.random()*9+1);
        // console.log(nowfame);
        pics=document.getElementsByClassName("drag");
        // console.log(pics.length);
        pics[0].src="../images/celebrity"+nowfame+"/celebrity"+nowfame+"_02.png";
        pics[1].src="../images/celebrity"+nowfame+"/celebrity"+nowfame+"_05.png";
        pics[2].src="../images/celebrity"+nowfame+"/celebrity"+nowfame+"_09.png";
        pics[3].src="../images/celebrity"+nowfame+"/celebrity"+nowfame+"_01.png";
        pics[4].src="../images/celebrity"+nowfame+"/celebrity"+nowfame+"_06.png";
        pics[5].src="../images/celebrity"+nowfame+"/celebrity"+nowfame+"_03.png";
        pics[6].src="../images/celebrity"+nowfame+"/celebrity"+nowfame+"_08.png";
        pics[7].src="../images/celebrity"+nowfame+"/celebrity"+nowfame+"_04.png";
        pics[8].src="../images/celebrity"+nowfame+"/celebrity"+nowfame+"_07.png";

    }
    var start_index;
    var end_index;
    function dragStart(event) {
        // console.log("dragStart: " + event.target.id);
        start_index = event.target.id;
    }
    function dragEnd(event) {
        event.preventDefault();
    }
    function dropOver(event) {
        event.preventDefault();
    }
    function drop(event) {
        event.preventDefault();
        // console.log("drop: "+event.target.id);
        end_index = event.target.id;
        exchange(start_index, end_index, "src");
        check();
    }
    // 交换id1和id2两个元素的attri属性值
    function exchange(id1, id2, attri){
        ele1 = document.getElementById(id1);
        ele2 = document.getElementById(id2);
        var tmp_attri = ele1.getAttribute(attri);
        ele1.setAttribute(attri, ele2.getAttribute(attri));
        ele2.setAttribute(attri, tmp_attri);
    }
    function check(){
        var img_list = document.getElementsByTagName("img");
        var img_src,dot_index,img_index;
        for(var i=0; i<9; i++){
            img_src = img_list[i].getAttribute("src");
            dot_index = img_src.lastIndexOf(".");
            img_index = Number(img_src.slice(dot_index - 2, dot_index));
            if (img_index != i+1) return false;
        }
        var success = document.getElementById("success");
        success.style.display = "block";
    }

    function ifAnswerRight() {
        var answer=document.getElementsByClassName('input')[0].value;
        // console.log(answer);

        if(answer!=''){

            if(answer==musicainname[nowfame-1]) return 'right';
            else return 'wrong';

        }else{
            return "useless";
        }
    }



