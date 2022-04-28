//lotto 번호 생성
const lotto = [];
for(let i =0; i<6; i++){
    const num = parseInt(Math.random()*45+1);

    //중복 번호 제거
    if(lotto.indexOf(num) == -1){
        lotto.push(num);
    }
    else{
        i -=1;
    }
}

//lever 내리기
const $lever = document.getElementById('circle')

$lever.addEventListener('click', function(e){
    e.preventDefault;

    $lever.style.top = "200px"
    document.querySelector(".bar").style.transform = "rotateX(180deg)"
    document.querySelector(".bar").style.top = "130px"
    for(let i =0; i<6; i++){
        document.querySelector(".lotto").childNodes[i*2+1].classList.remove("bounce");
        document.querySelector(".lotto").childNodes[i*2+1].classList.add("bounce");
        document.querySelector(".lotto").childNodes[i*2+1].style.transform = "translateY(250px)"    
        document.querySelector(".lotto").childNodes[i*2+1].style.backgroundColor = `rgb(${255-lotto[i]}, ${255-lotto[i]*3}, ${lotto[i]*4})`
    }
    for(let i =0; i<6; i++){
        document.querySelector(".lotto").childNodes[i*2+1].textContent = lotto[i]
    }
}, false)
