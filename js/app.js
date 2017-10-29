function modifyOffset() {
    var slide_value = document.getElementById('slide_value');
    var img_one = document.getElementById('white_block_img_one');
    var img_two = document.getElementById('white_block_img_two');
    var img_three = document.getElementById('white_block_img_three');

    var img_one_active = document.getElementById('img_one_active');
    var img_two_active = document.getElementById('img_two_active');
    var img_three_active = document.getElementById('img_three_active');


    var el, newPoint, newPlace, offset, siblings, k;
    width    = this.offsetWidth;
    newPoint = (this.value - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"));
    offset   = -1;
    if (newPoint < 0) { newPlace = 0;  }
    else if (newPoint > 1) { newPlace = width; }
    else { newPlace = width * newPoint + offset; offset -= newPoint;}
    siblings = this.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
        sibling = siblings[i];
        if (sibling.id == this.id) { k = true; }
        if ((k == true) && (sibling.nodeName == "OUTPUT")) {
            outputTag = sibling;
        }
    }
    outputTag.style.left       = newPlace -50 + "px";
    outputTag.style.marginLeft = offset + "%";
    slide_value.innerHTML       ="$" + this.value 
///////////////////////////change_img///////////////////

    if(this.value > 2 ){
            img_one.src = 'img/one_active.png'
            img_one_active.style.color = '#829654'
    }else if(this.value < 17){
            img_one.src = 'img/one_noactive.png'
            img_one_active.style.color = 'black'
    }
    if(this.value > 20){
            img_two.src = 'img/two_active.png'
            img_two_active.style.color = '#829654'
    }else if(this.value < 30) {
            img_two.src = 'img/two_noactive.png'
            img_two_active.style.color = 'black'
    }
    if(this.value > 31 ){
            img_three.src = 'img/three_active.png'
            img_three_active.style.color = '#829654'
    }else if(this.value < 50){
            img_three.src = 'img/three_noactive.png'
            img_three_active.style.color = 'black'
    }

   

}

function modifyInputs() {
    
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].getAttribute("type") == "range") {
            inputs[i].onchange = modifyOffset;

            if ("fireEvent" in inputs[i]) {
                inputs[i].fireEvent("onchange");
            } else {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                inputs[i].dispatchEvent(evt);
            }
        }
    }
}

modifyInputs();