// localStorage.clear();

const changingImagesByTheme = document.getElementsByClassName("color-change-picture");

console.log(Object.values(changingImagesByTheme))
const notWelcomeText = document.querySelectorAll(":not([id^='welcome-screen-resize'])");
const welcomeText = document.getElementById('welcome-screen-resize');

// console.log(Object.values(notWelcomeText))
// notWelcomeText.foreach(element => {
//     console.log(element)
//     // element.style.setProperty('display', 'none')
// })

documentBackground = document.getElementById("background-gradient").classList
backgroundClasses = Object.values(documentBackground);

function setLightTheme(){
    documentBackground.add("magenta-teal-gradient-background")
    documentBackground.remove("black-blue-gradient-background")
    document.querySelector(':root').style.setProperty('--text-color','black');
    document.querySelector(':root').style.setProperty('--text-shadow-color','white');
    document.querySelector(':root').style.setProperty('--card-background-color','rgba(230, 230, 230, 1)');
    document.getElementById("background-color").style.setProperty('background-color', 'white');

    document.getElementById("theme-vehicle").style.transform = "translateX(-71.5px)";

    document.getElementById("theme-sun-icon").classList.remove('hidden')
    document.getElementById("theme-moon-icon").classList.add('hidden')
    
    Object.values(changingImagesByTheme).forEach(image => {
        image.src = "Images/Ink.png";

        // ENABLE FOR NETLIFY HOSTING:
        // image.currentSrc = document.getElementById('image-source-anchor-netlify-Ink').currentSrc;
    })
    
   

    // document.getElementById("theme-sun-icon").style.setProperty('opacity', '1');
    // document.getElementById("theme-moon-icon").style.setProperty('opacity', '0');
    // document.querySelector(':root').style.setProperty('--text-color', rgba(36, 36, 36, 1));
    // document.getElementById("background-color").style.setProperty('background-color',  'white')
    
    // document.getElementById("background-color").style.setProperty('background-color', ' rgba(27,200,240,1)')
    // document.querySelector(':root').style.setProperty('--background-gradient', 'linear-gradient(135deg, rgba(243,0,255,1) 0%, rgba(0,255,248,1) 100%)');

    // console.log(document.querySelector(':root').style)
}
function setDarkTheme(){
    documentBackground.add("black-blue-gradient-background")
    documentBackground.remove("magenta-teal-gradient-background")

    document.querySelector(':root').style.setProperty('--text-color', 'white');
    document.querySelector(':root').style.setProperty('--text-shadow-color', 'black');
    document.querySelector(':root').style.setProperty('--card-background-color', 'white');
    document.getElementById("background-color").style.setProperty('background-color', 'rgba(0,0,0,1)')
    // document.querySelector(':root').style.setProperty('--background-gradient', 'linear-gradient(135deg, rgba(22,0,148,1) 0%, rgba(0,0,0,1) 100%)');

    // console.log(document.querySelector(':root').style)

    document.getElementById("theme-vehicle").style.removeProperty("transform")

    document.getElementById("theme-sun-icon").classList.add('hidden')
    document.getElementById("theme-moon-icon").classList.remove('hidden')


    Object.values(changingImagesByTheme).forEach(image => {
        image.src = "Images/Large.png"

        // ENABLE FOR NETLIFY HOSTING:
        // image.currentSrc = document.getElementById('image-source-anchor-netlify-large').currentSrc;
    })
  

    // document.getElementById("theme-sun-icon").style.setProperty('opacity', '0');
    // document.getElementById("theme-moon-icon").style.setProperty('opacity', '1');
    
 
    
}

function getStoredTheme(){
    if(localStorage.getItem('theme')){
        if(localStorage.getItem('theme') == 'dark') {
            setDarkTheme() 
        }else{
            setLightTheme()
        }
    }
}
function changeTheme(){
    // console.log("THEME", localStorage.getItem('theme'))
    if(localStorage.getItem('theme') == "light"){
        setDarkTheme()
        localStorage.setItem('theme', "dark")
    } else {
        setLightTheme()
        localStorage.setItem('theme', "light")
    }

    // if(localStorage.getItem('theme') !== "light" || localStorage.getItem('theme') !== "dark"){
    //     if(backgroundClasses.includes("black-blue-gradient-background")){
    //         setLightTheme()
    //         localStorage.setItem('theme', "light")
    //     }else{
    //         setDarkTheme()
    //         localStorage.setItem('theme', "dark")
    //     }
    // }
    // else{
    //     if(theme == "light"){
    //         setDarkTheme()
    //         localStorage.setItem('theme', "dark")
    //     }
    //     else {
    //         setLightTheme()
    //         localStorage.setItem('theme', "light")
    //     }
    // }
    console.log("THEME 2", localStorage.getItem('theme'))
    // console.log(Object.values(documentBackground), typeof(documentBackground))
}

document.getElementById("parallax-wrapper").addEventListener("scroll", setScrollPercent);
document.getElementById("parallax-wrapper").addEventListener("resize", setScrollPercent);

function setScrollPercent() {
    const pageElement = document.getElementById("parallax-wrapper")
    console.log("SCRLTOP", pageElement.scrollTop, "CHEIT", pageElement.clientHeight)
    const percentageOfScreenScrolled = 1 - (pageElement.scrollTop / pageElement.clientHeight)
    document.getElementById('background-gradient').style.setProperty("--scrollPercent", Math.max(percentageOfScreenScrolled, 0))
    console.log("OPACITY", Math.max(percentageOfScreenScrolled, 0))
}

function moveTo(target){

}

function scrollWindowTo(divID){
    const target = document.getElementById(divID);
    const body = document.getElementById('parallax-wrapper')
    if(divID == 'welcome-section' ){
        console.log("yes_Maam")
        body.scrollTo(0, -1000)
    } else {
        body.scrollTo(0, (target.getBoundingClientRect().y - 50))

    }
}


getStoredTheme()
setScrollPercent()