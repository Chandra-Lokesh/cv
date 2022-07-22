const sectiontag=document.querySelectorAll("section");
// const anchortag=document.querySelectorAll(".side-container ul div li a");
// const hrtag=document.querySelectorAll(".side-container ul div li hr");
const anchortag=document.querySelectorAll(".nav-container div div a");
const hrtag=document.querySelectorAll(".nav-container div div hr");
window.addEventListener("scroll",()=>{
    var cur="";
    sectiontag.forEach(section=>{
        const sectionTop=section.offsetTop;
        var scrollValue=scrollY;
        if(scrollValue>=sectionTop-1){
            cur=section.getAttribute("id");
        }
    });
    anchortag.forEach(anchor=>{
        anchor.classList.remove("active-a");
        if(anchor.classList.contains(cur)){
            anchor.classList.add("active-a");
        }
    });
    hrtag.forEach(hr=>{
        hr.classList.remove("active-hr");
        if(hr.classList.contains(cur)){
            hr.classList.add("active-hr");
        }
    });
});