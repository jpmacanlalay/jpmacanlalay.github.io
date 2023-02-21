//home to move up when get click
const moveUp = document.querySelector(".home");

//ABOUT MODAL
const modalAboutBtn = document.querySelector(".about-btn");
const modalAbout = document.querySelector(".about");

modalAboutBtn.addEventListener("click", function(){
    modalAbout.classList.remove("close");
    modalAbout.classList.add("open");
    moveUp.classList.add("move-up");
})

// SKILL MODAL
const modalSkillBtn = document.querySelector(".skills-btn");
const modalSkill = document.querySelector(".skills");

modalSkillBtn.addEventListener("click", function(){
    modalSkill.classList.remove("close");
    modalSkill.classList.add("open");
    moveUp.classList.add("move-up");
})

// PROJECT MODAL
const modalProject = document.querySelector(".project");
const modalProjectBtn = document.querySelectorAll(".project-btn");

for(let i = 0; i < modalProjectBtn.length; i++){
    modalProjectBtn[i].addEventListener("click", function(){
        modalProject.classList.remove("close");
        modalProject.classList.add("open");
        moveUp.classList.add("move-up");
})
}

// EXIT MODAL 
const exitBtn = document.querySelectorAll(".exit");
for(let i = 0; i < exitBtn.length; i++){
    exitBtn[i].addEventListener("click", function(){
        if(modalSkill.classList.contains("open")){
            modalSkill.classList.remove("open");
            moveUp.classList.remove("move-up");
            modalSkill.classList.add("close");
        }
    
        if(modalAbout.classList.contains("open")){
            modalAbout.classList.remove("open");
            moveUp.classList.remove("move-up");
            modalAbout.classList.add("close");
        }

        if(modalProject.classList.contains("open")){
            modalProject.classList.remove("open");
            moveUp.classList.remove("move-up");
            modalProject.classList.add("close");
        }
    })
    
}

