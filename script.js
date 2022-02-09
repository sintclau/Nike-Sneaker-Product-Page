document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('custom-bg-nav').classList.add('custom-bg-nav');
        // add padding top to show content behind navbar

      } else {
        document.getElementById('custom-bg-nav').classList.remove('custom-bg-nav');
         // remove padding top from body

      }
  });
});
