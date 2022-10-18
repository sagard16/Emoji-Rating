const star = document.querySelectorAll(".fa-star");
const emoji =document.querySelectorAll(".fa-regular")
const colore = ["red","orange","lightblue","lightgreen","green"]


star.forEach((star , index)=>{
    star.addEventListener('click', ()=>{
        updatStar(index);
    })
})

function updatStar(index){
    star.forEach((star, idx)=>{
        if(idx < index + 1){
            star.classList.add('active')
        }
        else{
            star.classList.remove('active')
        }
    })
    emoji.forEach((emojiEl)=>{
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colore[index];
    })
}