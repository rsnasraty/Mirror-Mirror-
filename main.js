document.querySelector("#message").addEventListener("keyup", (event) => {
console.log(event)
let boxes = document.querySelectorAll(".article-box")
console.log(boxes)
for ( let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = event.target.value
}
})