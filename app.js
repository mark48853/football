for (var i = 0; i < 7; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    
    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    sendData(buttonInnerHTML);
      }
    
    );
    }
    
    
    function buttonAnimation(currentKey){
    
      var activeButton = document.querySelector("." + currentKey);
    
      activeButton.classList.add("pressed");
    
      setTimeout(function(){
        activeButton.classList.remove("pressed");
      },1);
    }

    function sendData(key){
        var ip = document.getElementById("ip").value;
        console.log(ip)
        var xhr = new XMLHttpRequest();
        xhr.open("POST", ip, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
        value: key
    }));
    }