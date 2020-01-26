document.addEventListener('DOMContentLoaded', () => {
    function on() {
      const li = this.querySelectorAll('li');
      li.forEach(el => el.style.backgroundColor = '#0f0');
      li[0].style.backgroundColor = '#f00';
      li[li.length - 1].style.backgroundColor = '#00f';
    }
    function off() {
      this.querySelectorAll('li')
        .forEach(el => el.style.backgroundColor = "")
    }
    document.querySelectorAll('.listContainer')
      .forEach(el => {
        el.addEventListener('mouseenter', on);
        el.addEventListener('mouseleave', off)
      })
  });