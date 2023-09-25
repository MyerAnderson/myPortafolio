
//type script del slide

const typed = new Typed(".typed",{
    strings:[
        "DESARROLLADOR WEB",
        "DISEÑADOR",
        "FREELANCER"
    ],
    typeSpeed : 75,
    backSpeed : 75,
    loop:true,
})

//cabecera y nav bar responsive

window.addEventListener("scroll",()=>{
    let header = document.querySelector(".cabecera");
    //var listNav = document.querySelector(".selected")
    header.classList.toggle("cabecera_scroll", window.scrollY>1);
    //listNav.classList.toggle("selected2",window.scrollY>1);
});

const secciones = document.querySelectorAll(".view");
const ham = document.querySelector(".barr");
const nav = document.querySelector(".cabecera .barra_navegacion");
const found = document.querySelector(".found");

console.log();

const observar = new IntersectionObserver(entradas=>{
    entradas.forEach(entrada => {
        const id = entrada.target.getAttribute("id")
        const link = document.querySelector(`.barra_navegacion li a[href="#${id}"]`)
        if(entrada.isIntersecting){
            link.setAttribute("id","selected2");
            if(window.innerWidth < 860){
                nav.style.opacity = "0%";
                nav.style.visibility = "hidden";
                ham.classList.remove("fa-arrow-left")
                ham.classList.add("fa-bars")
                found.style.opacity = "0%";
                found.style.visibility = "hidden";
                document.body.style.overflowY = "auto"
            }
        }else{
            link.removeAttribute("id");
            //link.classList.remove("selected2");
        }
    });
},{rootMargin: "-50%"});


for (let i=0; secciones.length>i ; i++){
    observar.observe(secciones[i]);
}


ham.addEventListener("click",()=>{
    let elementStyle = window.getComputedStyle(nav);
    let elementop = elementStyle.getPropertyValue('opacity');

    
    if (elementop == 0 ){
        nav.style.opacity = "100%";
        nav.style.visibility = "visible";
        ham.classList.remove("fa-bars")
        ham.classList.add("fa-arrow-left")
        found.style.opacity = "45%";
        found.style.visibility = "visible";
        document.body.style.overflowY = "hidden"
    }else{
        nav.style.opacity = "0%";
        nav.style.visibility = "hidden";
        ham.classList.remove("fa-arrow-left")
        ham.classList.add("fa-bars")
        found.style.opacity = "0%";
        found.style.visibility = "hidden";
        document.body.style.overflowY = "auto"
    }
    found.addEventListener("click",()=>{
        nav.style.opacity = "0%";
        ham.classList.remove("fa-arrow-left")
        ham.classList.add("fa-bars")
        found.style.opacity = "0%";
        found.style.visibility = "hidden";
        document.body.style.overflowY = "auto"
    })
})
