var foto = 1
var number = document.querySelectorAll('.content img').length + 1

setTimeout(() => {
    setInterval(() => {
        foto++
        var screen = document.querySelector(".content")
        var wid = screen.clientWidth
        screen.scrollBy(wid, 0)
        if (foto == number){
            foto = 0
            screen.scrollBy('-'+wid*number, 0)
        }
    }, 3000);
}, 1000);