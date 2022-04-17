function counter(){
    let $content = document.getElementById("letter").value
    $content.replace(" ","")
    console.log($content)
    document.querySelector(".body").dataset.length = `현재 글자 수: ${$content.length}`
}