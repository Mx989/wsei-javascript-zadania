document.addEventListener('DOMContentLoaded', () => {
    function toggle() {
      if (this.nextElementSibling !== undefined
        && this.nextElementSibling !== null) {
        const block = this.nextElementSibling;
        block.style.display = block.style.display == 'block' ? 'none' : 'block';
      }
    }
    document.querySelectorAll('.button')
      .forEach(el => el.addEventListener('click', toggle))
  });