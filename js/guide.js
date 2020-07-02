function create_guide() {
    var navli=[];
    var navlia=[];
    var guide=creates([{class:"guide"}],document.body);
    var logo=creates([{class:"logo"}],guide[0]);
    var logoimg=creates([{element:"img",src:"../images/logo.png"}],logo[0]);
    var cool=creates([{class:"cool"}],guide[0]);
    var nav=creates([{element:"nav",class:"cform"}],cool[0]);
    var navul=creates([{element:"ul",class:"pag"}],nav[0]);
    for(var i=0;i<5;i++){
        creates([{element:"li",class:"pag-item"}],navul[0]);
    }
    navli=document.getElementsByClassName("pag-item");
    for(var j=0;j<navli.length;j++){
        creates([{element:"a",class:"pag-link"}],navli[j]);
    }

    navlia=document.getElementsByClassName("pag-link");
    navlia[0].innerHTML='UCENTER';
    navlia[1].innerHTML='MADE';
    navlia[3].innerHTML='ELISTEN';
    navlia[4].innerHTML='BACK';
    navlia[0].href='ucenter.html';
    creates([{element:"img",src:"../images/photo2.jpg"}],navlia[2]);
}


