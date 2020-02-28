// Widerfunnel challenge 2
// Moe Murtadi
// Feb 27, 2019


var plansSection = document.getElementById("plans-section");
var topOfPage = document.getElementById("intro-section");
// store in cache for remembering perm close of message
localStorage['NeverShowSticky'] = 'false'; 
var myVar = localStorage['NeverShowSticky'] || 'false';
var ShowFooter = false;


// Creating footer with copy and close button
var footerBanner = document.createElement("div");
footerBanner.setAttribute('class', 'footer hide');
footerBanner.setAttribute('id', 'footerBanner');
footerBanner.setAttribute('style', 'padding: 40px;position: fixed;bottom: 0;width: 100%;color: #000;text-align: center;z-index: 9999;background: white;');
var footerBannerText = document.createElement("p");
footerBannerText.innerHTML = 'Get $10 credit towards your plan and try HP Insant Ink for Free today. No Commitments or fees - change or cancel your plan anytime';
document.getElementById('landing-page').appendChild(footerBanner);

// close button in footer
var closebtn =  document.createElement('span');
closebtn.setAttribute('class', 'close');
closebtn.setAttribute('id', 'closeButton');
closebtn.innerHTML = '&times;';
closebtn.setAttribute('style', 'position: relative;left: 25px;top: -40px;font-size: 45px;');
closebtn.setAttribute('onclick', 'this.parentNode.parentNode.removeChild(this.parentNode); return false;resetToggle();');
document.getElementById('footerBanner').appendChild(closebtn); 
document.getElementById('footerBanner').appendChild(footerBannerText); 


// Determine if an element is in the visible viewport, found a clean solution on github for snagging viewport
// credit to: https://gist.github.com/jjmu15
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

// this function uses show and hide class names to toggle the sticky footer
function toggleBanner(){
    if (ShowFooter == false){
        var element = document.getElementById("footerBanner");
        element.classList.add("show");
        element.classList.remove("hide");
        ShowFooter = true;
    }
    else {
        var element = document.getElementById("footerBanner");
        element.classList.add("hide");
        element.classList.remove("show");
        ShowFooter = false;
    }
}
// Listener used to detect when user is at the target div vs top of page and triggers
window.addEventListener('scroll', function() {
    if (isInViewport(plansSection) && !ShowFooter && localStorage['NeverShowSticky'] != "true"){
        toggleBanner();
    }
    if (isInViewport(topOfPage) && ShowFooter == true){
        toggleBanner();
    }

});