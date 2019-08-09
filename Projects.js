var index = [0,1,1,1,1,1,1]


function slide(n,slideName){
    var slideList = document.getElementsByClassName(slideName);
    console.log(slideList.length);
    console.log(slideName)
    for(var i = 0 ; i < slideList.length; i++ ){
        slideList[i].style.display = "none";
    }
    index[n]++;
    if(index[n] == slideList.length ){
        index[n] = 0
    }
    setTimeout(slide,2000)
}