const changingImagesByTheme = document.getElementsByClassName("color-change-picture");

documentBackground = document.getElementById("background-gradient").classList;
backgroundClasses = Object.values(documentBackground);
let root = document.querySelector(':root');
let techDemoExpansive = Object.values(document.getElementsByClassName("tech-demo-expansive"));

function setLightTheme(){
    documentBackground.add("magenta-teal-gradient-background")
    documentBackground.remove("black-blue-gradient-background")
    
    root.style.setProperty('--text-color','black');
    root.style.setProperty('--text-shadow-color','white');
    root.style.setProperty('--card-background-color','rgba(230, 230, 230, 1)');

    techDemoExpansive.forEach(element => {
        element.style.setProperty('background-color',' rgba(255,255,255, 0.4)')
    })

    document.getElementById("background-color").style.setProperty('background-color', 'white');

    document.getElementById("theme-vehicle").style.transform = "translateX(-71.5px)";

    document.getElementById("theme-sun-icon").classList.remove('hidden')
    document.getElementById("theme-moon-icon").classList.add('hidden')
    
    Object.values(changingImagesByTheme).forEach(image => {
        if(image.id == "Ink-image"){
            image.style.setProperty("display", 'block')
        }else{
            image.style.setProperty("display", 'none')
        };
    })
}
function setDarkTheme(){
    documentBackground.add("black-blue-gradient-background")
    documentBackground.remove("magenta-teal-gradient-background")

    root.style.setProperty('--text-color', 'white');
    root.style.setProperty('--text-shadow-color', 'black');
    root.style.setProperty('--card-background-color', 'white');

    techDemoExpansive.forEach(element => {
        element.style.setProperty('background-color',' rgba(0,0,0, 0.4)')
    })

    document.getElementById("background-color").style.setProperty('background-color', 'rgba(0,0,0,1)')
   
    document.getElementById("theme-vehicle").style.removeProperty("transform")

    document.getElementById("theme-sun-icon").classList.add('hidden')
    document.getElementById("theme-moon-icon").classList.remove('hidden')

    Object.values(changingImagesByTheme).forEach(image => {
        if(image.id == "Large-image"){
            image.style.setProperty("display", 'block')
        }else{
            image.style.setProperty("display", 'none')
        };
    })

    // document.getElementById("theme-sun-icon").style.setProperty('opacity', '0');
    // document.getElementById("theme-moon-icon").style.setProperty('opacity', '1');
    
 
    
}
function getStoredTheme(){
    if(localStorage.getItem('theme') === null){
        setDarkTheme()
        localStorage.setItem('theme', "dark")
    }

    if(localStorage.getItem('theme') == 'dark') {
        setDarkTheme() 
    }else{
        setLightTheme()
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
}

document.getElementById("parallax-wrapper").addEventListener("scroll", setScrollPercent);
document.getElementById("parallax-wrapper").addEventListener("resize", setScrollPercent);

function setScrollPercent() {
    const pageElement = document.getElementById("parallax-wrapper")
    const percentageOfScreenScrolled = 1 - (pageElement.scrollTop / pageElement.clientHeight)
    document.getElementById('background-gradient').style.setProperty("--scrollPercent", Math.max(percentageOfScreenScrolled, 0))
}
function scrollWindowTo(divID){
    const target = document.getElementById(divID);
    const body = document.getElementById('parallax-wrapper')
    if(divID == 'welcome-section' ){
        body.scrollTo(0, -1000)
    } else {
        body.scrollTo(0, (target.getBoundingClientRect().y - 10))
    }
}
function expand(number){
    targets=Object.values(document.getElementsByClassName(`expansive${number}`));
    targets.forEach(target=>
        target.classList.toggle('expanded'));
    document.getElementById(`wrapper${number}`).classList.remove('wrapper-hover')
}

function changeOpacity(){
    console.log("Opacity", event.target)
    const targetSquare = event.target;
    targetSquare.remove();
    
}

class ColorSquare {
    constructor(r, g, b, name) {
      this.values = [r, g, b];
      this.name = name
    }
    getColor() {
      return this.values;
    }

    getName() {
        return this.name;
    }

    createSquare(){
        
        const target = document.getElementById("square-holder")
        let square = document.createElement("div")

        square.classList.add("colored-square");
        square.style.setProperty("background-color", `rgba(${this.getColor().toString()})`)
        square.setAttribute("onclick", "changeOpacity()");

        target.append(square);

        document.getElementById("explanation-text").innerHTML = `<em>Class: ColorSquare, Object: ${this.getName()}Square, color value: (${this.getColor()}).</em>`
    }
  }

  const redSquare = new ColorSquare(255, 0, 0, "red");
  const greenSquare = new ColorSquare(0, 255, 0, "green");
  const blueSquare = new ColorSquare(0, 0, 255, "blue");

getStoredTheme()
setScrollPercent()


