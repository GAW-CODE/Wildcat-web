/*function count_up(obj){
  document.getElementById('count1').innerHTML=obj.value.length;
  if(obj.value.length==500){
    alert("You have reached the character limit.");
  }
}

function count2_up(obj){
  document.getElementById('count2').innerHTML=obj.value.length;
  if(obj.value.length==500){
    alert("You have reached the character limit.");
  }
}
*/
function count_up(obj){
  var element=document.getElementById('count1');
  element.innerHTML= 500-obj.value.length;
  if (500 - obj.value.length==0){
                element.style.color = 'red';
                alert("You have reached the character limit.");

            } else {
                element.style.color = 'grey';
            }

        }
function count2_up(obj){
   var element=document.getElementById('count2');
   element.innerHTML= 500-obj.value.length;
    if (500 - obj.value.length==0){
                  element.style.color = 'red';
                  alert("You have reached the character limit.");

                  } else {
                  element.style.color = 'grey';
                  }

                }
