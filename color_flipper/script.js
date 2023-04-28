const colors = ["red","green","rgba(238, 0, 255, 0.45)","#f15025"]
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    // generate a random number range between 0-arr.lenght()
    let rand = Math.floor( Math.random()*(colors.length));
    document.body.style.backgroundColor = colors[rand];
    color.textContent = colors[rand];
});
