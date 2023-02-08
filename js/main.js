var gallery = Array.from(document.querySelectorAll(".row img"));
var colseBtn = document.querySelector(".btn-close");
var prev = document.querySelector(".fa-circle-arrow-left");
var next = document.querySelector(".fa-circle-arrow-right");
var modal = document.querySelector(".modal");
var modalImg = document.querySelector(".modal img");
var index;


colseBtn.addEventListener('click',function(e){
    modal.classList.replace("d-block","d-none");
});

prev.addEventListener('click',function(){
    index--;
    if(index < 0){
        index = gallery.length -1;
    }
    modalImg.setAttribute('src',`${gallery[index].getAttribute("src")}`);
});

next.addEventListener('click',function(){
    index++;
    if(index > gallery.length -1){
        index =0;
    }
    modalImg.setAttribute('src',`${gallery[index].getAttribute("src")}`);
});

for(i=0 ; i < gallery.length; i++){
    gallery[i].addEventListener('click',function(e){
        modal.classList.replace("d-none","d-block");
        modalImg.setAttribute('src',`${e.target.getAttribute("src")}`);
        index = gallery.indexOf(e.target);
    });
};

modal.addEventListener('click',function(e){
    if(e.target.classList.contains("modal")){
        modal.classList.replace("d-block","d-none");
    }
});

