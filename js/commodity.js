window.onload=function () {
    var item=document.getElementsByClassName("item");
    var btn=document.getElementsByClassName("btn2");
    var index=0;
    var goindex=function () {
        if(index<3){
            index++;
        }
        else{
            index=0;
        }
        noindex();
    }
    var noindex=function(){
        gbindex();
        item[index].className="item action";
        btn[index].className="btn2 active";
    }
    var gbindex=function(){
        for(var i=0;i<item.length;i++){
            item[i].className="item";
            btn[i].className="btn2";
        }
    }
    setInterval(goindex,2000);
}