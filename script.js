// setInterval(() => {
//     Array.from(document.getElementsByClassName("td")).forEach((items) => {
//         items.style.borderColor = getRandomColor();
//         ele.innerHTML.style.borderColor = getRandomColor();
//     });
// },300)

setInterval(() => {
    document.getElementsByClassName("cells")[0].style.borderColor = getRandomColor();
    // document.getElementsByTagName("h1")[0].style.color = getRandomColor();
    },300);

document.getElementById("play").addEventListener("click", function(event){
    document.getElementById("play").style.visibility = "hidden";

    let val = 3;
    let div = document.getElementsByClassName("count2")[0];
    let div2 = document.getElementsByClassName("count")[0];
    div.classList.remove("hide");
    div2.classList.remove("hide");
    document.getElementsByTagName("main")[0].setAttribute("style","background-color:rgba(0,0,0,0.6)");
    div.innerHTML = val;
    
    var time = setInterval(() => {
        if(val==0){
            document.getElementsByTagName("main")[0].removeAttribute("style");
            div.innerHTML = '';
            div.classList.add("hide");
            div2.classList.add("hide");
            clearInterval(time);
            return;
        }
        val--;
        div.innerHTML = val;
        
        },800);

    setTimeout(() => {
        const set = new Set();
        for(let i=0; set.size<25; i++){
            let randno=Math.floor(Math.random()*25)+1;
            set.add(randno);
        }
        let td = document.getElementsByTagName("td");
        let k=0;

        for(let ele of set){
            td[k].innerHTML = ele;
            k+=1;
        }
    
        let sec=16;
        let ele = document.getElementById("seconds");
        ele.innerHTML = sec;
        var timer = setInterval(() => {
            sec--;
            if(sec==0) ele.innerHTML = '00';
            else ele.innerHTML = sec;

            if(sec==0){
                clearInterval(timer);
                alert("Time Out!");
                return;
            }
            
        }, 1000);
    }, 3200);

    setTimeout(() => {
        document.getElementById("play").style.visibility = "visible";
    }, 19200);
})


// lightning

function getRandomColor(){
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}