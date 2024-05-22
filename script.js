document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById('nav-toggle');
    const navPanel = document.querySelector('.nav-right-panel');
  
    navToggle.addEventListener('click', function () {
      navPanel.classList.toggle('active');
    });
  
    function handleResize() {
      if (window.innerWidth > 950) {
        navPanel.classList.remove('active');
      }
    }
  
    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function on initial load
  });
  