let a,b,c;

document.getElementById("submitButton").onclick = function(){
    a=document.getElementById("aInput").value;
    a=Number(a);

    b=document.getElementById("bInput").value;
    b=Number(b);

    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}