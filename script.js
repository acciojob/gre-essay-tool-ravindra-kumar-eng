//your code here
var type=document.getElementById("evaluatedText");
type.addEventListener('input',function updateWordCount(){
    var text=type.value;
    var Count=text.trim()? text.trim().split(" ").length:0;
    document.getElementById("wordCount").innerHTML=Count;
})
