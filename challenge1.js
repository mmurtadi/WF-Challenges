// challenge1.js
// Moe Murtadi
// Feb 27, 2019


//disable button original action
var oldlink = document.querySelector("a.wf-login-link"); 
oldlink.setAttribute("ui-sref", "");
oldlink.setAttribute("href", " ");
oldlink.setAttribute("onclick", "Popup();");


function Popup() {
    //Main container 
    var Containerdiv = document.createElement("div");
    var nestedDiv = document.createElement("div");
    Containerdiv.setAttribute('class', 'wf-modal-container');
    Containerdiv.setAttribute('id', 'widerfunnelModal');
    document.body.appendChild(Containerdiv);

    //nested content(ie: main text)
    var nestedDiv = document.createElement('div');
    nestedDiv.innerHTML = 'Challenge 1: Popup Modal';
    nestedDiv.setAttribute('class', 'wf-modal-inner-step-one');
    nestedDiv.setAttribute('id', 'nestedDiv');
    document.getElementById('widerfunnelModal').appendChild(nestedDiv);

    //logo in modal
    // var nestedLogo =  document.createElement("img");
    // nestedLogo.setAttribute('src', 'https://pbs.twimg.com/profile_images/1158749853372936193/98lQXwYf_400x400.jpg');
    // nestedLogo.setAttribute('id', 'WFLogo');
    // nestedLogo.setAttribute('style', 'height: auto;width: 30px;left: -35px;position: relative;top: -24px;');
    // document.getElementById('nestedDiv').appendChild(nestedLogo);

    //Close button
    var closebtn =  document.createElement('span');
    closebtn.setAttribute('class', 'close');
    closebtn.innerHTML = '&times;';
    closebtn.setAttribute('style', 'position: relative;left: -50px;font-size: 45px;');
    closebtn.setAttribute('onclick', 'this.parentNode.parentNode.removeChild(this.parentNode); return false;');
    document.getElementById('widerfunnelModal').appendChild(closebtn);
    Containerdiv.showModal();
  }    
    

