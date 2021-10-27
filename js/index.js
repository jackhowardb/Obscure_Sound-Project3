document.querySelectorAll('.wrapper > img')
    .forEach((item, index, it) => {
      let delay = ~~(Math.random() * 10 - 5)
      console.log(delay);
      item.style.left = 150 * (index - 3) + 'px'
      item.style.animationDelay = `${delay}s`
    })

    