function count_up(obj){
  document.getElementById('count1').innerHTML=obj.value.length;
  if(obj.value.length==500){
    alert("You have reached the character limit.");
  }
}
