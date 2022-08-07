document.getElementById("b1").addEventListener("click",function()
{
    document.getElementById("q1").style.display="none";
    document.getElementById("secret").style.display="block";
    document.getElementById("secret").innerText="Congratulations you are a Gryffindor";

});
document.getElementById("b2").addEventListener("click",function()
{
    document.getElementById("q1").style.display="none";
    document.getElementById("q2").style.display="display";
    document.getElementById("q2").style.display="block";
   
});
document.getElementById("b3").addEventListener("click",function()
{
document.getElementById("q2").style.display="none";  
document.getElementById("secret").style.display="block";
document.getElementById("secret").innerText=" Congratulations you are a Slytherin";
});

document.getElementById("b4").addEventListener("click",function()
{
    document.getElementById("q2").style.display="none";
    document.getElementById("q3").style.display="display";
    document.getElementById("q3").style.display="block";
   
});
document.getElementById("b5").addEventListener("click",function()
{
    document.getElementById("q3").style.display="none";  
    document.getElementById("secret").style.display="block";
    document.getElementById("secret").innerText=" Congratulations you are a Ravenclaw";
   
});

document.getElementById("b6").addEventListener("click",function()
{
    document.getElementById("q3").style.display="none";  
    document.getElementById("secret").style.display="block";
    document.getElementById("secret").innerText=" Congratulations you are a Hufflepuff";
   
});

document.getElementById("no").addEventListener("click",function()
{
    document.getElementById("banner").style.display="none";   
});

document.getElementById("yes").addEventListener("click",function()
{
    document.getElementById("h3banner").innerText=" First Lesson - Don't admit that";
    document.getElementById("q4").innerText=" But you did! So as a reward, your third year will now feature 30% extra dementor!";
    document.getElementById("yes").style.display="none";
    document.getElementById("no").innerText=" Yay!", 
    document.getElementById("no").style.alignItems="center";
   
});
function validate(){
    let t=0;
  var x=document.getElementById("n").value;
    if(x ==''){   
   document.getElementById("l").innerHTML = "please enter your name<br>";  
    t=1;
   event.preventDefault();
  document.getElementById("n").style.border = "2px solid red";    
 }
  var y=document.getElementById("e");
     if(y.value==''){
    y.style.border = "2px solid red"; 
   document.getElementById("l").innerHTML += "please enter your email<br>";  
    t=1;
       event.preventDefault();     
  }
  var s=document.getElementById("stand");
  var c=document.getElementById("chosen");
 if(s.checked==false && c.checked==false){
 document.getElementById("l").innerHTML += "please choose your package<br>";  
    t=1;
   event.preventDefault();
   s.style.border = "2px solid red";
    c.style.border = "2px solid red";
 }

  let sc=document.getElementById("scare");
    if(sc.value == ''){
     document.getElementById("l").innerHTML += "please enter scare value<br>";  
    t=1;  
       event.preventDefault();
     sc.style.border = "2px solid red"; 
   }
   else if(sc.value<1 || sc.value>10){
         sc.style.border = "2px solid red";  
     document.getElementById("l").innerHTML += "please enter between 1 - 10<br>";  
    t=1;
      event.preventDefault();
    }
  let a=document.getElementById("q");
   if(a.value==''){
        a.style.border = "2px solid red";    
       document.getElementById("l").innerHTML += "please enter your query<br>";  
    t=1;
     event.preventDefault();
    }
    
   if(t=='1'){
   var m=document.getElementById("op");
     m.style.display= 'block'
   }
}
   function myfunc(){
   var x= document.getElementById("op");
   x.style.display='none'
  document.getElementById("l").innerHTML = '';
   let r=document.getElementsByClassName("ch");
    var i;
 for (i = 0; i < r.length; i++) {
   r[i].style.border = "1px solid black";
 }
    
}
