
const readmoreBtn = document.querySelectorAll(".Read-more-btn");
const text = document.querySelectorAll(".About");
const moretext = document.querySelectorAll(".moretext")

readmoreBtn.forEach(function(readmoreBtn, i){
    readmoreBtn.addEventListener("click", () => {
        moretext[i].innerHTML = `<p>A good reading habit requires more reading
        from magazines and a variety of fiction
        and non-fiction books.
        Reading leads to improvement of oneself.
        It is impossible to express the pleasure of
        reading in words.</p>` 
})
})