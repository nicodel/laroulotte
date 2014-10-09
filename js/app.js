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
  var div = document.createElement("div");
  div.className = "sub-header";
  var img = document.createElement("img");
  // img.src = "img/logo_48.png";
  img.src = "img/logo_210.png";
  img.alt = "Logo La Roulotte";
  img.className = "logo-top";
  div.appendChild(img);
  bookmark.appendChild(div);

  var div = document.createElement("div");
  div.className = "text-header";

  var span = document.createElement("span");
  span.className = "titre";
  span.textContent = "La Roulotte";
  div.appendChild(span);

  var a = document.createElement("a");
  a.className = "tel";
  a.href = "tel:+33659566238";
  a.textContent = "+33 6 59 56 62 38";
  div.appendChild(a);

  bookmark.appendChild(div);

  var langues = document.createElement("div");
  langues.className = "langues";
  var a = document.createElement("a");
  a.href = "#";
  a.id = "localizeFRT";
  var img = document.createElement("img");
  img.src = "img/fr.png";
  img.className = "flag";
  img.alt= "fr-FR";
  a.appendChild(img);
  langues.appendChild(a);

  var a = document.createElement("a");
  a.href = "#";
  a.id = "localizeENT";
  var img = document.createElement("img");
  img.className = "flag";
  img.src = "img/eng.png";
  img.alt = "en-EN";
  a.appendChild(img);
  langues.appendChild(a);
  bookmark.appendChild(langues);
 


  onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log("scroll event detected! " + window.pageXOffset + " " + window.pageYOffset);
    if (scrollTop > 144) {
      if (!appended) {
        // document.body.appendChild(bookmark);
        document.body.insertBefore(bookmark, document.getElementById("header"));
        appended = true;
  document.getElementById("localizeFRT").addEventListener("click", function() {
    console.log("localizing to FR");
    document.webL10n.setLanguage("fr");
  });
  
  document.getElementById("localizeENT").addEventListener("click", function() {
    console.log("localizing to EN");
    document.webL10n.setLanguage("en");
  });
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


