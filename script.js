let but=document.querySelector("#btn");
but.addEventListener('click',(evebt)=>{
    event.preventDefault();
    let inp=document.querySelector("#message");
    if(inp.value==""){
        alert("Message Cannot be Empty!")
    }
    else{
        setTimeout(()=>alert("Message Sent! Thank you"),1000);
    }
})