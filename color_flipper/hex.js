const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    let hexcode = "#";
    for(let i=0; i<6; i++){
        let randnum = getRandomNum(hex.length);
        hexcode+=hex[randnum];
        console.log(hexcode)
    }
    document.body.style.backgroundColor = hexcode;
    color.textContent = hexcode;
    // console.log(hexcode);
})
function getRandomNum(len){
    return Math.floor(Math.random()*len);
}