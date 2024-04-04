function myFunction() {
    alert("Вкусного просмотра!");
  }

  function changeSizeText(textElement){
    textElement.style.fontSize = "20px";
    textElement.style.color = "red";
  }

  function restoreSizeText(textElement) {
    textElement.style.fontSize = "16px";
    textElement.style.color = "#5F100E";
  }



  function changeOver(list){
    list.style.fontSize = "35px";
  }

  function changeOut(list){
    list.style.fontSize = "32px";
  }


  function changeSize(button) {
    button.style.transform = "scale(1.1)";
  }
  
  function restoreSize(button) {
    button.style.transform = "scale(1)";
  }

  

  function initMap() {
    var myLatLng = {lat: 42.83484000329113, lng: 74.57129888722483}; 

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Бишкек'
    });
  }

  

