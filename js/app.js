var laRoulotte = function() {
/*  document.addEventListener('DOMComponentsLoaded', function(){
    console.log('o/');
    var _ = document.webL10n.get;
  });
*/
  
  
  
  /*
  * Based on MDN exmaple of Window.onscroll: https://developer.mozilla.org/en-US/docs/Web/API/Window.onscroll#Example_3.3A_Showing_a_link_to_the_top_of_the_page_after_a_scroll
  */
  var appended = false, 
      bookmark = document.createElement("div");
  bookmark.id = "top";
  // bookmark.innerHTML = "<a href=\"#\" title=\"Top of the page.\">&uarr;<\/a>";
  // bookmark.innerHTML = "<span class=\"titre\">La Roulotte </span><a class=\"tel\" href=\"tel:+33659566238\">+33 6 59 56 62 38</a>";
  var img = document.createElement("img");
  img.src = "img/logo_48.png/";
  bookmark.appendChild(img);

  var span = document.createElement("span");
  span.className = "titre";
  span.textContent = "La Roulotte";
  bookmark.appendChild(span);

  var a = document.createElement("a");
  a.className = "tel";
  a.href = "tel:+33659566238";
  a.textContent = "+33 6 59 56 62 38";
  bookmark.appendChild(a);

  var flags = document.createElement("span");
  var a = document.createElement("a");
  a.className = "flag";
  a.id = "localizeFR";
  var img = document.createElement("img");
  img.src = "img/fr.png";
  a.appendChild(img);
  bookmark.appendChild(a);

  var a = document.createElement("a");
  a.className = "flag";
  a.id = "localizeEN";
  var img = document.createElement("img");
  img.src = "img/eng.png";
  a.appendChild(img);
  bookmark.appendChild(a);
 


  onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log("scroll event detected! " + window.pageXOffset + " " + window.pageYOffset);
    if (scrollTop > 203) {
      if (!appended) {
        // document.body.appendChild(bookmark);
        document.body.insertBefore(bookmark, document.getElementById("header"));
        appended = true;
      }
    } else {
      if (appended) {
        document.body.removeChild(bookmark);
        appended = false;
      }
    }
  };

  document.getElementById("localizeFR").addEventListener("click", function() {
    console.log("localizing to FR");
    document.webL10n.setLanguage("fr");
  });
  
  document.getElementById("localizeEN").addEventListener("click", function() {
    console.log("localizing to EN");
    document.webL10n.setLanguage("en");
  });







}();


