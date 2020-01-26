
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.parent').forEach((parent) => {
      parent.addEventListener('mouseenter', () => {
        parent.children[0].style.display = 'block';
      });
      parent.addEventListener('mouseleave', function () {
        function hideChildrenElement() {
          this.children[0].style.display = 'none';
        }
        hideChildrenElement.call(this);
      })
    });
  });

  //w plikach html zadań 2-9 brakowało dołączeń skryptów