
const pathNameArr = window.location.pathname.split('/');
const header = document.querySelector("#header");

document.addEventListener('DOMContentLoaded', () => {
    header.innerHTML = `<div>
                            <span id="logo"></span>
                            <span id="headerDep1">Musign Dev3 Menual</span>
                            <span>></span>
                            <span id="header_dep2">${pathNameArr[2] === "front" ? "front-end": pathNameArr[2] === "back" ? "back-end" : "null"}</span>
                            <span>></span>
                            <span id="header_dep3">${pathNameArr[3] === "vanillaJs.html" ? "vanilla Js" : "null"}</span>
                        </div>
                        <div id="header_right">
                            <span>서울</span>
                            <span>🌞<span style="filter: grayscale(100%); width: 5px; height: 5px;">🔍</span></span>
                        </div>`;
})



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
