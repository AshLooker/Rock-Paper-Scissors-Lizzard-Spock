const modal_overlay = document.querySelector("#modal_overlay")

document.querySelector("#rules-btn").addEventListener("click", () =>{
    modal_overlay.style.display = "block";
})


document.querySelector("#close-modal-btn").addEventListener("click", () =>{
    modal_overlay.style.display = "none";
})