const bnt1 = document.querySelector("#qst1");
const bnt2 = document.querySelector("#qst2");
const bnt3 = document.querySelector("#qst3");
const bnt4 = document.querySelector("#qst4");
const bnt5 = document.querySelector("#qst5");
const bnt6 = document.querySelector("#qst6");
let list = document.querySelectorAll(".question")

bnt1.addEventListener("click", destroy);
bnt2.addEventListener("click", destroy);
bnt3.addEventListener("click", destroy);
bnt4.addEventListener("click", destroy);
bnt5.addEventListener("click", destroy);
bnt6.addEventListener("click", destroy);

function destroy(){
    list.forEach(answer => {
        if(answer.lastElementChild.style.display == "block" && answer.firstElementChild != this){
            answer.firstElementChild.lastElementChild.style.transform = "translate(-50%) rotate(-45deg)";
            answer.lastElementChild.style.display = "none";
        }
        let element = this.nextElementSiblings;
        if(element.style.display == "none"){
            this.lastElementChild.style.transform = "rotate(45deg)";
            element.style.display = "block";
        }else{
            this.lastElementChild.style.transform = "rotate(0deg)";
            element.style.display = "none";
        }
    })

}