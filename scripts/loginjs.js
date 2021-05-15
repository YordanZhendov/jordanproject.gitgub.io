function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myForm").focus();    
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForm").blur();    
}

function check1(){
  if(document.getElementById("ch1Info").style.display =="block"){
      document.getElementById("ch1Info").style.display="none";
  }else{
      document.getElementById("ch1Info").style.display="block";
  }
}
function check2(){
  if(document.getElementById("ch2Info").style.display =="block"){
      document.getElementById("ch2Info").style.display="none";
  }else{
      document.getElementById("ch2Info").style.display="block";
  }
}
function check3(){
  if(document.getElementById("ch3Info").style.display =="block"){
      document.getElementById("ch3Info").style.display="none";
  }else{
      document.getElementById("ch3Info").style.display="block";
  }
}
function check4(){
  if(document.getElementById("ch4Info").style.display =="block"){
      document.getElementById("ch4Info").style.display="none";
  }else{
      document.getElementById("ch4Info").style.display="block";
  }
}