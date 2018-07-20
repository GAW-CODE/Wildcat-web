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

};

//map
let map = L.map('map', {
    maxZoom: 3,
    crs: L.CRS.Simple
});
let bounds = [[0, 0], [700, 850]];
let image = L.imageOverlay('sharedAssets/School Map 2.png', bounds).addTo(map);

map.fitBounds(bounds);

//map active
let btnlocation = document.getElementById('location');
btnlocation.addEventListener('click', function () {
    mapModal.style.visibility = 'visible';
})