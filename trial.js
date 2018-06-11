var len = 10;
var a = document.getElementsByClassName("list-group");

function onLoad(x){
if(x.matches){
    var s = document.getElementsByTagName("p");

for(var i = 0; i < s.length; i++)
{
    var toBeTrimmed = s[i].innerHTML;
    var shortString = toBeTrimmed.length > len ? toBeTrimmed.substr(0, len)+ "..." : toBeTrimmed;
    
    s[i].innerHTML="";
    s[i].innerHTML+=shortString;
}
}

else{  
    
 }

}


var x = window.matchMedia("(max-width: 500px)")
onLoad(x);
x.addListener(onLoad);