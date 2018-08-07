//character count
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
let bounds = [[0, 0], [700,850]];
let image = L.imageOverlay('sharedAssets/School Map 2.png', bounds).addTo(map);

map.fitBounds(bounds);

//map active
let btnlocation = document.getElementById('location');
btnlocation.addEventListener('click', function () {
    mapModal.style.visibility = 'visible';
});

let blockA = document.getElementById('blockA');
let blockB = document.getElementById('blockB');
let blockC= document.getElementById('blockC');
let blockD = document.getElementById('blockD');
let blockE = document.getElementById('blockE');
let blockF = document.getElementById('blockF');
let blockG = document.getElementById('blockG');
let other = document.getElementById('other');

let a1A = document.getElementById("A1A");
let a1B = document.getElementById("A1B");
let a2 = document.getElementById("A2");
let a3 = document.getElementById("A3");
let a3B = document.getElementById("A3B");
let a4 = document.getElementById("A4");

let b2 = document.getElementById("B2");
let b3 = document.getElementById("B3");
let b4 = document.getElementById("B4");
let b5 = document.getElementById("B5");
let b6A = document.getElementById("B6A");
let b6B = document.getElementById("B6B");
let b7 = document.getElementById("B7");
let b8 = document.getElementById("B8");
let b9 = document.getElementById("B9");
let b10 = document.getElementById("B10");
let b11 = document.getElementById("B11");
let b12 = document.getElementById("B12");
let b18 = document.getElementById("B18");
let b20 = document.getElementById("B20");
let b22 = document.getElementById("B22");
let b23 = document.getElementById("B23");
let b26 = document.getElementById("B26");
let b27 = document.getElementById("B27");

let C1 = document.getElementById("C1");
let C2 = document.getElementById("C2");
let C3 = document.getElementById("C3");
let C4 = document.getElementById("C4");
let C5 = document.getElementById("C5");
let C6A = document.getElementById("C6A");
let C6B = document.getElementById("C6B");
let C7 = document.getElementById("C7");
let C8 = document.getElementById("C8");
let C9 = document.getElementById("C9");
let C10A = document.getElementById("C10A");
let C10B = document.getElementById("C10B");
let C11 = document.getElementById("C11");
let C12 = document.getElementById("C12");

let d1 = document.getElementById("D1");
let d2 = document.getElementById("D2");
let d3 = document.getElementById("D3");
let d4 = document.getElementById("D4");
let d5 = document.getElementById("D5");
let d6 = document.getElementById("D6");
let d7 = document.getElementById("D7");
let d8 = document.getElementById("D8");
let d9 = document.getElementById("D9");
let d10 = document.getElementById("D10");
let d11 = document.getElementById("D11");
let d12 = document.getElementById("D12");
let d13 = document.getElementById("D13");
let d14 = document.getElementById("D14");
let d15 = document.getElementById("D15");
let d16 = document.getElementById("D16");
let d17 = document.getElementById("D17");
let d18 = document.getElementById("D18");
let d19 = document.getElementById("D19");
let d20 = document.getElementById("D20");

let e1 = document.getElementById("E1");
let e3 = document.getElementById("E3");

let f1 = document.getElementById("F1");
let f2 = document.getElementById("F2");

let g1 = document.getElementById("G1");
let g2 = document.getElementById("G2");
let g3 = document.getElementById("G3");
let g4 = document.getElementById("G4");
let g5 = document.getElementById("G5");
let g6 = document.getElementById("G6");
let g7 = document.getElementById("G7");
let g8 = document.getElementById("G8");
let g9 = document.getElementById("G9");
let g10 = document.getElementById("G10");
let g11 = document.getElementById("G11");
let g12 = document.getElementById("G12");

let theatre = document.getElementById("otherTheatre");
let blackTop = document.getElementById("otherBlacktop");
let gym = document.getElementById("otherGym");
let mediaCenter = document.getElementById("otherMC");
let bookRoom = document.getElementById("otherBook");

var count = 1;

blockA.addEventListener('click', function () {
    count += 1;
    if (count % 2 == 0) {
        a1A.className = 'subblock';
        a1B.className = 'subblock';
        a2.className = 'subblock';
        a3.className = 'subblock';
        a3B.className = 'subblock';
        a4.className = 'subblock';
        b2.className = 'off';
        b3.className = 'off';
        b4.className = 'off';
        b5.className = 'off';
        b6A.className = 'off';
        b6B.className = 'off';
        b7.className = 'off';
        b8.className = 'off';
        b9.className = 'off';
        b10.className = 'off';
        b11.className = 'off';
        b12.className = 'off';
        b18.className = 'off';
        b20.className = 'off';
        b22.className = 'off';
        b23.className = 'off';
        b26.className = 'off';
        b27.className = 'off';

        C1.className = 'off';
        C2.className = 'off';
        C3.className = 'off';
        C4.className = 'off';
        C5.className = 'off';
        C6A.className = 'off';
        C6B.className = 'off';
        C7.className = 'off';
        C8.className = 'off';
        C9.className = 'off';
        C10A.className = 'off';
        C10B.className = 'off';
        C11.className = 'off';
        C12.className = 'off';

        d1.className = 'off';
        d2.className = 'off';
        d3.className = 'off';
        d4.className = 'off';
        d5.className = 'off';
        d6.className = 'off';
        d7.className = 'off';
        d8.className = 'off';
        d9.className = 'off';
        d10.className = 'off';
        d11.className = 'off';
        d12.className = 'off';
        d13.className = 'off';
        d14.className = 'off';
        d15.className = 'off';
        d16.className = 'off';
        d17.className = 'off';
        d18.className = 'off';
        d19.className = 'off';
        d20.className = 'off';

        e1.className = 'off';
        e3.className = 'off';

        f1.className = 'off';
        f2.className = 'off';

        g1.className = 'off';
        g2.className = 'off';
        g3.className = 'off';
        g4.className = 'off';
        g5.className = 'off';
        g6.className = 'off';
        g7.className = 'off';
        g8.className = 'off';
        g9.className = 'off';
        g10.className = 'off';
        g11.className = 'off';
        g12.className = 'off';

        theatre.className = 'off';
        blackTop.className = 'off';
        gym.className = 'off';
        mediaCenter.className = 'off';
        bookRoom.className = 'off';
    } else {
        a1A.className = 'off';
        a1B.className = 'off';
        a2.className = 'off';
        a3.className = 'off';
        a3B.className = 'off';
        a4.className = 'off';
    }
});

blockB.addEventListener('click', function () {
    count += 1;
    if (count % 2 == 0) {
        b2.className = 'subblock';
        b3.className = 'subblock';
        b4.className = 'subblock';
        b5.className = 'subblock';
        b6A.className = 'subblock';
        b6B.className = 'subblock';
        b7.className = 'subblock';
        b8.className = 'subblock';
        b9.className = 'subblock';
        b10.className = 'subblock';
        b11.className = 'subblock';
        b12.className = 'subblock';
        b18.className = 'subblock';
        b20.className = 'subblock';
        b22.className = 'subblock';
        b23.className = 'subblock';
        b26.className = 'subblock';
        b27.className = 'subblock';

        a1A.className = 'off';
        a1B.className = 'off';
        a2.className = 'off';
        a3.className = 'off';
        a3B.className = 'off';
        a4.className = 'off';
        C1.className = 'off';
        C2.className = 'off';
        C3.className = 'off';
        C4.className = 'off';
        C5.className = 'off';
        C6A.className = 'off';
        C6B.className = 'off';
        C7.className = 'off';
        C8.className = 'off';
        C9.className = 'off';
        C10A.className = 'off';
        C10B.className = 'off';
        C11.className = 'off';
        C12.className = 'off';

        d1.className = 'off';
        d2.className = 'off';
        d3.className = 'off';
        d4.className = 'off';
        d5.className = 'off';
        d6.className = 'off';
        d7.className = 'off';
        d8.className = 'off';
        d9.className = 'off';
        d10.className = 'off';
        d11.className = 'off';
        d12.className = 'off';
        d13.className = 'off';
        d14.className = 'off';
        d15.className = 'off';
        d16.className = 'off';
        d17.className = 'off';
        d18.className = 'off';
        d19.className = 'off';
        d20.className = 'off';

        e1.className = 'off';
        e3.className = 'off';

        f1.className = 'off';
        f2.className = 'off';

        g1.className = 'off';
        g2.className = 'off';
        g3.className = 'off';
        g4.className = 'off';
        g5.className = 'off';
        g6.className = 'off';
        g7.className = 'off';
        g8.className = 'off';
        g9.className = 'off';
        g10.className = 'off';
        g11.className = 'off';
        g12.className = 'off';

        theatre.className = 'off';
        blackTop.className = 'off';
        gym.className = 'off';
        mediaCenter.className = 'off';
        bookRoom.className = 'off';
    } else {
        b2.className = 'off';
        b3.className = 'off';
        b4.className = 'off';
        b5.className = 'off';
        b6A.className = 'off';
        b6B.className = 'off';
        b7.className = 'off';
        b8.className = 'off';
        b9.className = 'off';
        b10.className = 'off';
        b11.className = 'off';
        b12.className = 'off';
        b18.className = 'off';
        b20.className = 'off';
        b22.className = 'off';
        b23.className = 'off';
        b26.className = 'off';
        b27.className = 'off';
    }
});

blockC.addEventListener('click', function () {
    count += 1;
    if (count % 2 == 0) {
        C1.className = 'subblock';
        C2.className = 'subblock';
        C3.className = 'subblock';
        C4.className = 'subblock';
        C5.className = 'subblock';
        C6A.className = 'subblock';
        C6B.className = 'subblock';
        C7.className = 'subblock';
        C8.className = 'subblock';
        C9.className = 'subblock';
        C10A.className = 'subblock';
        C10B.className = 'subblock';
        C11.className = 'subblock';
        C12.className = 'subblock';
        a1A.className = 'off';
        a1B.className = 'off';
        a2.className = 'off';
        a3.className = 'off';
        a3B.className = 'off';
        a4.className = 'off';

        b2.className = 'off';
        b3.className = 'off';
        b4.className = 'off';
        b5.className = 'off';
        b6A.className = 'off';
        b6B.className = 'off';
        b7.className = 'off';
        b8.className = 'off';
        b9.className = 'off';
        b10.className = 'off';
        b11.className = 'off';
        b12.className = 'off';
        b18.className = 'off';
        b20.className = 'off';
        b22.className = 'off';
        b23.className = 'off';
        b26.className = 'off';
        b27.className = 'off';
        d1.className = 'off';
        d2.className = 'off';
        d3.className = 'off';
        d4.className = 'off';
        d5.className = 'off';
        d6.className = 'off';
        d7.className = 'off';
        d8.className = 'off';
        d9.className = 'off';
        d10.className = 'off';
        d11.className = 'off';
        d12.className = 'off';
        d13.className = 'off';
        d14.className = 'off';
        d15.className = 'off';
        d16.className = 'off';
        d17.className = 'off';
        d18.className = 'off';
        d19.className = 'off';
        d20.className = 'off';

        e1.className = 'off';
        e3.className = 'off';

        f1.className = 'off';
        f2.className = 'off';

        g1.className = 'off';
        g2.className = 'off';
        g3.className = 'off';
        g4.className = 'off';
        g5.className = 'off';
        g6.className = 'off';
        g7.className = 'off';
        g8.className = 'off';
        g9.className = 'off';
        g10.className = 'off';
        g11.className = 'off';
        g12.className = 'off';

        theatre.className = 'off';
        blackTop.className = 'off';
        gym.className = 'off';
        mediaCenter.className = 'off';
        bookRoom.className = 'off';
    } else {
        C1.className = 'off';
        C2.className = 'off';
        C3.className = 'off';
        C4.className = 'off';
        C5.className = 'off';
        C6A.className = 'off';
        C6B.className = 'off';
        C7.className = 'off';
        C8.className = 'off';
        C9.className = 'off';
        C10A.className = 'off';
        C10B.className = 'off';
        C11.className = 'off';
        C12.className = 'off';
    }
});

blockD.addEventListener('click', function () {
    count += 1;
    if (count % 2 == 0) {
        d1.className = 'subblock';
        d2.className = 'subblock';
        d3.className = 'subblock';
        d4.className = 'subblock';
        d5.className = 'subblock';
        d6.className = 'subblock';
        d7.className = 'subblock';
        d8.className = 'subblock';
        d9.className = 'subblock';
        d10.className = 'subblock';
        d11.className = 'subblock';
        d12.className = 'subblock';
        d13.className = 'subblock';
        d14.className = 'subblock';
        d15.className = 'subblock';
        d16.className = 'subblock';
        d17.className = 'subblock';
        d18.className = 'subblock';
        d19.className = 'subblock';
        d20.className = 'subblock';
        a1A.className = 'off';
        a1B.className = 'off';
        a2.className = 'off';
        a3.className = 'off';
        a3B.className = 'off';
        a4.className = 'off';

        b2.className = 'off';
        b3.className = 'off';
        b4.className = 'off';
        b5.className = 'off';
        b6A.className = 'off';
        b6B.className = 'off';
        b7.className = 'off';
        b8.className = 'off';
        b9.className = 'off';
        b10.className = 'off';
        b11.className = 'off';
        b12.className = 'off';
        b18.className = 'off';
        b20.className = 'off';
        b22.className = 'off';
        b23.className = 'off';
        b26.className = 'off';
        b27.className = 'off';

        C1.className = 'off';
        C2.className = 'off';
        C3.className = 'off';
        C4.className = 'off';
        C5.className = 'off';
        C6A.className = 'off';
        C6B.className = 'off';
        C7.className = 'off';
        C8.className = 'off';
        C9.className = 'off';
        C10A.className = 'off';
        C10B.className = 'off';
        C11.className = 'off';
        C12.className = 'off';
        e1.className = 'off';
        e3.className = 'off';

        f1.className = 'off';
        f2.className = 'off';

        g1.className = 'off';
        g2.className = 'off';
        g3.className = 'off';
        g4.className = 'off';
        g5.className = 'off';
        g6.className = 'off';
        g7.className = 'off';
        g8.className = 'off';
        g9.className = 'off';
        g10.className = 'off';
        g11.className = 'off';
        g12.className = 'off';

        theatre.className = 'off';
        blackTop.className = 'off';
        gym.className = 'off';
        mediaCenter.className = 'off';
        bookRoom.className = 'off';
    } else {
        d1.className = 'off';
        d2.className = 'off';
        d3.className = 'off';
        d4.className = 'off';
        d5.className = 'off';
        d6.className = 'off';
        d7.className = 'off';
        d8.className = 'off';
        d9.className = 'off';
        d10.className = 'off';
        d11.className = 'off';
        d12.className = 'off';
        d13.className = 'off';
        d14.className = 'off';
        d15.className = 'off';
        d16.className = 'off';
        d17.className = 'off';
        d18.className = 'off';
        d19.className = 'off';
        d20.className = 'off';
    }
});
blockE.addEventListener('click', function () {
    count += 1;
    if (count % 2 == 0) {
        e1.className = 'subblock';
        e3.className = 'subblock';
        a1A.className = 'off';
        a1B.className = 'off';
        a2.className = 'off';
        a3.className = 'off';
        a3B.className = 'off';
        a4.className = 'off';

        b2.className = 'off';
        b3.className = 'off';
        b4.className = 'off';
        b5.className = 'off';
        b6A.className = 'off';
        b6B.className = 'off';
        b7.className = 'off';
        b8.className = 'off';
        b9.className = 'off';
        b10.className = 'off';
        b11.className = 'off';
        b12.className = 'off';
        b18.className = 'off';
        b20.className = 'off';
        b22.className = 'off';
        b23.className = 'off';
        b26.className = 'off';
        b27.className = 'off';

        C1.className = 'off';
        C2.className = 'off';
        C3.className = 'off';
        C4.className = 'off';
        C5.className = 'off';
        C6A.className = 'off';
        C6B.className = 'off';
        C7.className = 'off';
        C8.className = 'off';
        C9.className = 'off';
        C10A.className = 'off';
        C10B.className = 'off';
        C11.className = 'off';
        C12.className = 'off';

        d1.className = 'off';
        d2.className = 'off';
        d3.className = 'off';
        d4.className = 'off';
        d5.className = 'off';
        d6.className = 'off';
        d7.className = 'off';
        d8.className = 'off';
        d9.className = 'off';
        d10.className = 'off';
        d11.className = 'off';
        d12.className = 'off';
        d13.className = 'off';
        d14.className = 'off';
        d15.className = 'off';
        d16.className = 'off';
        d17.className = 'off';
        d18.className = 'off';
        d19.className = 'off';
        d20.className = 'off';
        f1.className = 'off';
        f2.className = 'off';

        g1.className = 'off';
        g2.className = 'off';
        g3.className = 'off';
        g4.className = 'off';
        g5.className = 'off';
        g6.className = 'off';
        g7.className = 'off';
        g8.className = 'off';
        g9.className = 'off';
        g10.className = 'off';
        g11.className = 'off';
        g12.className = 'off';

        theatre.className = 'off';
        blackTop.className = 'off';
        gym.className = 'off';
        mediaCenter.className = 'off';
        bookRoom.className = 'off';
    } else {
        e1.className = 'off';
        e3.className = 'off';
    }
});
blockF.addEventListener('click', function () {
    count += 1;
    if (count % 2 == 0) {
        f1.className = 'subblock';
        f2.className = 'subblock';
        a1A.className = 'off';
        a1B.className = 'off';
        a2.className = 'off';
        a3.className = 'off';
        a3B.className = 'off';
        a4.className = 'off';

        b2.className = 'off';
        b3.className = 'off';
        b4.className = 'off';
        b5.className = 'off';
        b6A.className = 'off';
        b6B.className = 'off';
        b7.className = 'off';
        b8.className = 'off';
        b9.className = 'off';
        b10.className = 'off';
        b11.className = 'off';
        b12.className = 'off';
        b18.className = 'off';
        b20.className = 'off';
        b22.className = 'off';
        b23.className = 'off';
        b26.className = 'off';
        b27.className = 'off';

        C1.className = 'off';
        C2.className = 'off';
        C3.className = 'off';
        C4.className = 'off';
        C5.className = 'off';
        C6A.className = 'off';
        C6B.className = 'off';
        C7.className = 'off';
        C8.className = 'off';
        C9.className = 'off';
        C10A.className = 'off';
        C10B.className = 'off';
        C11.className = 'off';
        C12.className = 'off';

        d1.className = 'off';
        d2.className = 'off';
        d3.className = 'off';
        d4.className = 'off';
        d5.className = 'off';
        d6.className = 'off';
        d7.className = 'off';
        d8.className = 'off';
        d9.className = 'off';
        d10.className = 'off';
        d11.className = 'off';
        d12.className = 'off';
        d13.className = 'off';
        d14.className = 'off';
        d15.className = 'off';
        d16.className = 'off';
        d17.className = 'off';
        d18.className = 'off';
        d19.className = 'off';
        d20.className = 'off';

        e1.className = 'off';
        e3.className = 'off';
        g1.className = 'off';
        g2.className = 'off';
        g3.className = 'off';
        g4.className = 'off';
        g5.className = 'off';
        g6.className = 'off';
        g7.className = 'off';
        g8.className = 'off';
        g9.className = 'off';
        g10.className = 'off';
        g11.className = 'off';
        g12.className = 'off';

        theatre.className = 'off';
        blackTop.className = 'off';
        gym.className = 'off';
        mediaCenter.className = 'off';
        bookRoom.className = 'off';
    } else {
        f1.className = 'off';
        f2.className = 'off';
    }
});
blockG.addEventListener('click', function () {
    count += 1;
    if (count % 2 == 0) {
        g1.className = 'subblock';
        g2.className = 'subblock';
        g3.className = 'subblock';
        g4.className = 'subblock';
        g5.className = 'subblock';
        g6.className = 'subblock';
        g7.className = 'subblock';
        g8.className = 'subblock';
        g9.className = 'subblock';
        g10.className = 'subblock';
        g11.className = 'subblock';
        g12.className = 'subblock';
        a1A.className = 'off';
        a1B.className = 'off';
        a2.className = 'off';
        a3.className = 'off';
        a3B.className = 'off';
        a4.className = 'off';

        b2.className = 'off';
        b3.className = 'off';
        b4.className = 'off';
        b5.className = 'off';
        b6A.className = 'off';
        b6B.className = 'off';
        b7.className = 'off';
        b8.className = 'off';
        b9.className = 'off';
        b10.className = 'off';
        b11.className = 'off';
        b12.className = 'off';
        b18.className = 'off';
        b20.className = 'off';
        b22.className = 'off';
        b23.className = 'off';
        b26.className = 'off';
        b27.className = 'off';

        C1.className = 'off';
        C2.className = 'off';
        C3.className = 'off';
        C4.className = 'off';
        C5.className = 'off';
        C6A.className = 'off';
        C6B.className = 'off';
        C7.className = 'off';
        C8.className = 'off';
        C9.className = 'off';
        C10A.className = 'off';
        C10B.className = 'off';
        C11.className = 'off';
        C12.className = 'off';

        d1.className = 'off';
        d2.className = 'off';
        d3.className = 'off';
        d4.className = 'off';
        d5.className = 'off';
        d6.className = 'off';
        d7.className = 'off';
        d8.className = 'off';
        d9.className = 'off';
        d10.className = 'off';
        d11.className = 'off';
        d12.className = 'off';
        d13.className = 'off';
        d14.className = 'off';
        d15.className = 'off';
        d16.className = 'off';
        d17.className = 'off';
        d18.className = 'off';
        d19.className = 'off';
        d20.className = 'off';

        e1.className = 'off';
        e3.className = 'off';

        f1.className = 'off';
        f2.className = 'off';
        theatre.className = 'off';
        blackTop.className = 'off';
        gym.className = 'off';
        mediaCenter.className = 'off';
        bookRoom.className = 'off';
    } else {
        g1.className = 'off';
        g2.className = 'off';
        g3.className = 'off';
        g4.className = 'off';
        g5.className = 'off';
        g6.className = 'off';
        g7.className = 'off';
        g8.className = 'off';
        g9.className = 'off';
        g10.className = 'off';
        g11.className = 'off';
        g12.className = 'off';
    }
});
other.addEventListener('click', function () {
    count += 1;
    if (count % 2 == 0) {
        theatre.className = 'subblock';
        blackTop.className = 'subblock';
        gym.className = 'subblock';
        mediaCenter.className = 'subblock';
        bookRoom.className = 'subblock';
        a1A.className = 'off';
        a1B.className = 'off';
        a2.className = 'off';
        a3.className = 'off';
        a3B.className = 'off';
        a4.className = 'off';

        b2.className = 'off';
        b3.className = 'off';
        b4.className = 'off';
        b5.className = 'off';
        b6A.className = 'off';
        b6B.className = 'off';
        b7.className = 'off';
        b8.className = 'off';
        b9.className = 'off';
        b10.className = 'off';
        b11.className = 'off';
        b12.className = 'off';
        b18.className = 'off';
        b20.className = 'off';
        b22.className = 'off';
        b23.className = 'off';
        b26.className = 'off';
        b27.className = 'off';

        C1.className = 'off';
        C2.className = 'off';
        C3.className = 'off';
        C4.className = 'off';
        C5.className = 'off';
        C6A.className = 'off';
        C6B.className = 'off';
        C7.className = 'off';
        C8.className = 'off';
        C9.className = 'off';
        C10A.className = 'off';
        C10B.className = 'off';
        C11.className = 'off';
        C12.className = 'off';

        d1.className = 'off';
        d2.className = 'off';
        d3.className = 'off';
        d4.className = 'off';
        d5.className = 'off';
        d6.className = 'off';
        d7.className = 'off';
        d8.className = 'off';
        d9.className = 'off';
        d10.className = 'off';
        d11.className = 'off';
        d12.className = 'off';
        d13.className = 'off';
        d14.className = 'off';
        d15.className = 'off';
        d16.className = 'off';
        d17.className = 'off';
        d18.className = 'off';
        d19.className = 'off';
        d20.className = 'off';

        e1.className = 'off';
        e3.className = 'off';

        f1.className = 'off';
        f2.className = 'off';

        g1.className = 'off';
        g2.className = 'off';
        g3.className = 'off';
        g4.className = 'off';
        g5.className = 'off';
        g6.className = 'off';
        g7.className = 'off';
        g8.className = 'off';
        g9.className = 'off';
        g10.className = 'off';
        g11.className = 'off';
        g12.className = 'off';
    } else {
        theatre.className = 'off';
        blackTop.className = 'off';
        gym.className = 'off';
        mediaCenter.className = 'off';
        bookRoom.className = 'off';
    }
});
//orginal
var x = 20;
var y = 40;
//1a
var sol = L.latLng([y, x]);
L.marker(sol).addTo(map);

var marker;
var loca = [];

a1A.addEventListener('click', function () {
    addMarker(612, 445);
    loca.push("a1A");

});
a1B.addEventListener('click', function () {
    addMarker(635, 445);
    loca.push("a1B");

});
a2.addEventListener('click', function () {
    addMarker(620, 475);
    loca.push("a2");

});
a3.addEventListener('click', function () {
    addMarker(612, 513);
    loca.push("a3");

});
a3B.addEventListener('click', function () {

    addMarker(635, 513);
    loca.push("a3B");
});
a4.addEventListener('click', function () {

    addMarker(620, 540);
    loca.push("a4");
});
b2.addEventListener('click', function () {

    addMarker(580, 245);
    loca.push("b2");
});
b3.addEventListener('click', function () {

    addMarker(560, 245);
    loca.push("b3");
});
b4.addEventListener('click', function () {

    addMarker(539, 245);
    loca.push("b4");
});
b5.addEventListener('click', function () {

    addMarker(518, 245);
    loca.push("b5");
});
b6A.addEventListener('click', function () {

    addMarker(478, 245);
    loca.push("b6A");
});
b6B.addEventListener('click', function () {

    addMarker(498, 245);
    loca.push("b6B");
});
b7.addEventListener('click', function () {

    addMarker(488, 265);
    loca.push("b7");
});
b8.addEventListener('click', function () {
    let marker = L.latLng([485, 265]);
    addMarker(518, 265);
    loca.push("b8");
});
b9.addEventListener('click', function () {

    addMarker(539, 265);
    loca.push("b9");
});
b10.addEventListener('click', function () {

    addMarker(560, 265);
    loca.push("b10");
});
b11.addEventListener('click', function () {

    addMarker(580, 265);
    loca.push("b11");
});
b12.addEventListener('click', function () {

    addMarker(495, 338);
    loca.push("b12");
});
b18.addEventListener('click', function () {

    addMarker(570, 365);
    loca.push("b18");
});
b20.addEventListener('click', function () {

    addMarker(525, 365);
    loca.push("b20");
});
b22.addEventListener('click', function () {

    addMarker(480, 365);
    loca.push("b22");
});
b23.addEventListener('click', function () {

    addMarker(480, 385);
    loca.push("b23");
});
b26.addEventListener('click', function () {

    addMarker(525, 385);
    loca.push("b26");
});
b27.addEventListener('click', function () {

    addMarker(570, 385);
    loca.push("b27");
});

C1.addEventListener('click', function () {

    addMarker(558, 460);
    loca.push("C1");
});
C2.addEventListener('click', function () {

    addMarker(530, 460);
    loca.push("C2");
});
C3.addEventListener('click', function () {

    addMarker(505, 450);
    loca.push("C3");
});
C4.addEventListener('click', function () {

    addMarker(505, 471);
    loca.push("C4");
});
C5.addEventListener('click', function () {

    addMarker(480, 498);
    loca.push("C5");
});
C6A.addEventListener('click', function () {

    addMarker(470, 454);
    loca.push("C6A");
});
C6B.addEventListener('click', function () {

    addMarker(462, 476);
    loca.push("C6B");
});
C7.addEventListener('click', function () {

    addMarker(462, 498);
    loca.push("C7");
});
C8.addEventListener('click', function () {

    addMarker(462, 520);
    loca.push("C8");
});
C9.addEventListener('click', function () {

    addMarker(480, 520);
    loca.push("C9");
});
C10A.addEventListener('click', function () {

    addMarker(560, 498);
    loca.push("C10A");
});
C10B.addEventListener('click', function () {

    addMarker(540, 498);
    loca.push("C10B");
});
C11.addEventListener('click', function () {

    addMarker(550, 523);
    loca.push("C11");
});
C12.addEventListener('click', function () {

    addMarker(550, 546);
    loca.push("C12");
});


d1.addEventListener('click', function () {

    addMarker(444, 265);
    loca.push("d1");
});
d2.addEventListener('click', function () {

    addMarker(424, 265);
    loca.push("d2");
});
d3.addEventListener('click', function () {

    addMarker(403, 265);
    loca.push("d3");
});
d4.addEventListener('click', function () {

    addMarker(382, 265);
    loca.push("d4");
});
d5.addEventListener('click', function () {

    addMarker(382, 285);
    loca.push("d5");
});
d6.addEventListener('click', function () {

    addMarker(403, 285);
    loca.push("d6");
});
d7.addEventListener('click', function () {

    addMarker(424, 285);
    loca.push("d7");
});
d8.addEventListener('click', function () {

    addMarker(444, 285);
    loca.push("d8");
});
d9.addEventListener('click', function () {

    addMarker(392, 305);
    loca.push("d9");
});
d10.addEventListener('click', function () {

    addMarker(374, 305);
    loca.push("d10");
});
d11.addEventListener('click', function () {

    addMarker(374, 324);
    loca.push("d11");
});
d12.addEventListener('click', function () {

    addMarker(392, 324);
    loca.push("d12");
});
d13.addEventListener('click', function () {

    addMarker(444, 344);
    loca.push("d13");
});
d14.addEventListener('click', function () {

    addMarker(423, 344);
    loca.push("d14");
});
d15.addEventListener('click', function () {

    addMarker(402, 344);
    loca.push("d15");
});
d16.addEventListener('click', function () {

    addMarker(381, 344);
    loca.push("d16");
});
d17.addEventListener('click', function () {

    addMarker(381, 364);
    loca.push("d17");
});
d18.addEventListener('click', function () {

    addMarker(402, 364);
    loca.push("d18");
});
d19.addEventListener('click', function () {

    addMarker(423, 364);
    loca.push("d19");
});
d20.addEventListener('click', function () {

    addMarker(444, 364);
    loca.push("d20");
});


e1.addEventListener('click', function () {

    addMarker(411, 453);
    loca.push("e1");
});
e3.addEventListener('click', function () {

    addMarker(372, 453);
    loca.push("e3");
});


f1.addEventListener('click', function () {

    addMarker(403, 540);
    loca.push("f1");
});
f2.addEventListener('click', function () {

    addMarker(373, 540);
    loca.push("f2");
});


g1.addEventListener('click', function () {

    addMarker(351, 305);
    loca.push("g1");
});
g2.addEventListener('click', function () {

    addMarker(331, 305);
    loca.push("g2");
});
g3.addEventListener('click', function () {

    addMarker(331, 324);
    loca.push("g3");
});
g4.addEventListener('click', function () {

    addMarker(351, 324);
    loca.push("g4");
});
g5.addEventListener('click', function () {

    addMarker(346, 346);
    loca.push("g5");
});
g6.addEventListener('click', function () {

    addMarker(326, 346);
    loca.push("g6");
});
g7.addEventListener('click', function () {

    addMarker(305, 346);
    loca.push("g7");
});
g8.addEventListener('click', function () {

    addMarker(285, 346);
    loca.push("g8");
});
g9.addEventListener('click', function () {

    addMarker(285, 366);
    loca.push("g9");
});
g10.addEventListener('click', function () {

    addMarker(305, 366);
    loca.push("g10");
});
g11.addEventListener('click', function () {

    addMarker(326, 366);
    loca.push("g11");
});
g12.addEventListener('click', function () {

    addMarker(346, 366);
    loca.push("g12");
});

theatre.addEventListener('click', function () {

    addMarker(391, 464);
    loca.push("theatre");
});
blackTop.addEventListener('click', function () {

    addMarker(371, 685);
    loca.push("blackTop");
});
gym.addEventListener('click', function () {

    addMarker(200, 634);
    loca.push("gym");
});
mediaCenter.addEventListener('click', function () {

    addMarker(485, 300);
    loca.push("mediaCenter");
});
bookRoom.addEventListener('click', function () {

    addMarker(475, 335);
    loca.push("bookRoom");
});


function addMarker(x, y) {
    marker = L.latLng([x, y]);
    L.marker(marker).addTo(map);
}

//marker aren't able to remove at the current
let close = document.getElementById('close');
close.addEventListener('click', function () {
    mapModal.style.visibility = 'hidden';
        loca = [];
});

let msub = document.getElementById('msub');

msub.addEventListener('click', function () {
    mapModal.style.visibility = 'hidden';
})
