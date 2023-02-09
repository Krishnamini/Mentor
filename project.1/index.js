//name
function ram(){


    
    let name1=document.getElementById("bb").value
    let name3=/^[a-zA-Z]+$/.test(name1)
    
    
    if (name1==null||name1== ""){
        document.getElementById("ac").innerHTML="please enter a name"
        
    }
    else if(!name3){
        document.getElementById("ac").innerHTML="please enter vaild name"
    }
    
    
    else{
        document.getElementById("ac").innerHTML=""
    }
    
    // pass
    let name12=document.getElementById("c1").value
    let name4=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(name12)
    
    
    if (name12==null||name12== ""){
        document.getElementById("c2").innerHTML="please enter a password"
        
    }
    else if(!name4){
        document.getElementById("c2").innerHTML="please enter vaild password"
    }
    
    
    else{
        document.getElementById("c2").innerHTML=""
    }
    
    let name13=document.getElementById("d1").value
    
    
    
    if (name13==null||name13== ""){
        document.getElementById("d2").innerHTML="please enter a  confirm password"
        
    }
    else if(name13!==name12){
        document.getElementById("d2").innerHTML="please enter  vaild a confirm password"
    }
    
    
    else{
        document.getElementById("d2").innerHTML=""
    }
    let name14=document.getElementById("e1").value
    let name5= /^[6-9]\d{9}$/.test(name14)
    
    
    if (name14==null||name14== ""){
        document.getElementById("e2").innerHTML="please enter a phone number"
        
    }
    else if(!name5){
        document.getElementById("e2").innerHTML="please enter vaild phone number"
    }
    
    
    else{
        document.getElementById("e2").innerHTML=""
    }
    let name15=document.getElementById("f1").value
    let name6= /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(name15)
    
    
    if (name15==null||name15== ""){
        document.getElementById("f2").innerHTML="please enter a date of birth"
        
    }
    else if(!name6){
        document.getElementById("f2").innerHTML="please enter vaild date of birth"
    }
    
    
    else{
        document.getElementById("f2").innerHTML=""
    }
    
    
    //select
    let select=document.getElementById("moni").value
    
    if(select ==="pleaseselect"){
        document.getElementById("sec").innerHTML="please enter select"
    
    }
    
    
    else{
        document.getElementById("sec").innerHTML=""
    }
    
    
    // gender
    let male=document.getElementById('male').checked
    let female=document.getElementById("female").checked
    let other=document.getElementById("others").checked
    
    if (male||female||other) {
        document.getElementById("sem").innerHTML=""
        
    }
    else{
        document.getElementById("sem").innerHTML="plaese select"
    }
    
    // agree
    let my = document.getElementById("check").checked
    
    if (my) {
        document.getElementById("check1").innerHTML=""
        
    }
    else{
        document.getElementById("check1").innerHTML="plase enter a agree"
    }
    
    
    }

