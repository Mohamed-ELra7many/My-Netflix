{     //settings slider imgs
    const Arrows = document.querySelectorAll(".Arrow")

    const MovieLists = document.querySelectorAll(".movie-list")

    Arrows.forEach((item, index) => {
        let ItemNum = MovieLists[index].querySelectorAll("img").length;   //to get number allElements in array
        let Count = 0;
        item.addEventListener("click", () => {
            const clicks = Math.floor(window.innerWidth / 270)
            Count++
            if (ItemNum - (4 + Count) + (4 - clicks) >= 0) {
                MovieLists[index].style.transform = `translateX(${MovieLists[index].computedStyleMap().get("transform")[0].x.value - 300}px)`  //to get transform
            } else {
                MovieLists[index].style.transform = "translateX(0)"
                Count = 0
            }
        })
    })
}



{      // add and remove Dark-mode

    let ToggleBall = document.querySelector(".toogle-ball")

    let ItemesToggle = document.querySelectorAll("nav,.nav-container,.toogle,.toogle-ball,.Sidebar,.side-icon,.container,.movie-title")

    ToggleBall.addEventListener("click", () => {
        ItemesToggle.forEach(item => {
            item.classList.toggle("active")
        })
    })
}