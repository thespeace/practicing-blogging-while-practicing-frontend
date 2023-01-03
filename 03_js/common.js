const kkkk = document.querySelector("#kkkk");
const zzzz = () =>{
    alert(window.location.pathname.split('/')[2]);
}
kkkk.addEventListener("click", zzzz);

const pathNameArr = window.location.pathname.split('/');
alert(pathNameArr[1]);


/*
function copy(){
    var text = document.querySelector("#copyHere");
    text.select();
    document.execCommand('copy');
    if(document.seletion){
        document.selection.empty();
    }else if(window.getSelection){
        window.getSelection().removeAllRanges();
    }
}*/
