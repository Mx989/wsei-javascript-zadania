document.addEventListener('DOMContentLoaded', () => {

    const localX = document.getElementById('localX');
    const localY = document.getElementById('localY');
    const globalX = document.getElementById('globalX');
    const globalY = document.getElementById('globalY');
    document.getElementById('box').addEventListener('mousemove', (ev) => {
  
      localX.innerText = ev.offsetX;
      globalX.innerText = ev.pageX;
      localY.innerText = ev.offsetY;
      globalY.innerText = ev.pageY;
    });
  });