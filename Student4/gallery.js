function black(){
    document.body.style.backgroundColor="black";
}

function white(){
    document.body.style.backgroundColor="white";
}

function blue(){
    document.body.style.backgroundColor="blue";
}

function changeFontSize(size) {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
      if (size === 'small') {
        elements[i].style.fontSize = '14px';
      } else if (size === 'medium') {
        elements[i].style.fontSize = '16px';
      } else if (size === 'large') {
        elements[i].style.fontSize = '18px';
      }
    }
  }






