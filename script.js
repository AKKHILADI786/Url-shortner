let output=document.getElementById('link')
let inpbtn=document.getElementById('inpbtn')
inpbtn.onchange=function(){
    let str=inpbtn.value;
    console.log(str)
    console.log(str.length)
    let a=0;
    let start=Date.now();
    for(let i=0;i<str.length;i++)
    {
        a+=str.charCodeAt(i);
    }
    console.log(Date.now()-start)
    console.log(a)
    function ab(){
        output.innerText='ak.sh/'+ a+'/'
    }
    inpbtn.onkeypress=function(e){
        if(e.keyCode==13){
            setTimeout(ab,200)
        }
    }
    setTimeout(ab,200)
}


