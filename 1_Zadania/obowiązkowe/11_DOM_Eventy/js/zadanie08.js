  
document.addEventListener('DOMContentLoaded', () => {
    function printSize() {
      document.getElementById('windowWidth').innerText = window.innerWidth;
      document.getElementById('windowHeight').innerText = window.innerHeight;
    }
    window.addEventListener('resize', printSize);
    // pierwsze wywolanie po zaladowaniu
    printSize();
  });