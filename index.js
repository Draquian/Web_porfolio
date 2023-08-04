document.addEventListener("visibilitychange", function() 
{
    if (document.hidden) 
    {
      document.getElementById("estadoPagina").textContent = "Come Back pls";
    } 
    else 
    {
      document.getElementById("estadoPagina").textContent = "Portfolio Roger Salas";
    }
})

function switchTheme() {
   if (localStorage.getItem('theme') === 'dark-Theme'){
       setTheme('light-Theme');
   } else {
       setTheme('dark-Theme');
   }
}

function goUp() 
{
    window.scrollTo(top = 0, behavior = 'smooth', transition = 0.2);
}

function openGitHub() 
{
    window.open('https://github.com/Draquian', '_blank');
}

function openLinkedin() 
{
    window.open('https://www.linkedin.com/in/roger-salas-bernado-46ba74179/', '_blank');
}

function DescargarCV() 
{
    //<a href="ruta_del_archivo.pdf" download>Descargar PDF</a>
    //window.location.href = 'C:/Users/USER/Downloads/CV.pdf';
    window.open('Others/CV.pdf', '_blank')
}

function Display_List(softWareID) 
{
    var Display_Text = document.getElementById(softWareID);

    var IconName = "Icon_dipslay_" + softWareID;

    var Display_icon = document.getElementById(IconName);

    if (Display_Text.style.display === "flex") 
    {
        Display_icon.style.transition = "0.4s";
        Display_icon.style.transform = "rotate(0deg)";
        Display_Text.style.display = "none";
    } 
    else 
    {
        Display_icon.style.transition = "0.4s";
        Display_icon.style.transform = "rotate(90deg)";
        Display_Text.style.display = "flex";
    }
}

function openCITM() 
{
    window.open('https://www.citm.upc.edu/cat/', '_blank');
}

function openCTS() 
{
    window.open('https://ctsformacion.com/grau/animacio-jocs-i-entorns-interactius.html', '_blank');
}

document.getElementById("Proj3").style.backgroundImage = "url(Buttons/Proj3_Logo.png)";

function openProj3() 
{
    window.open('https://projectwastelanders.github.io/ProjectWastelanders/', '_blank');
}

function openProj2() 
{
    window.open('https://project2citm.github.io/The-Last-Purifier/', '_blank');
}

function openVR()
{
    window.open('https://github.com/Draquian/VR-Prototype', '_blank');
}

function openEngine() 
{
    window.open('https://bielrabasa.github.io/TheSeed_GameEngine/', '_blank');
}

function openSudoka() 
{
    window.open('https://github.com/bielrabasa/Sudoka', '_blank');
}

function openSpotify() 
{
    window.open('https://github.com/Draquian/Replica_Spotify', '_blank');
}

function openSwampJump() 
{
    window.open('https://github.com/kramtron/SwampJump', '_blank');
}

function openWorms() 
{
    window.open('https://github.com/kramtron/2d-Physics-Engine', '_blank');
}

function openProj1() 
{
    window.open('https://bielrabasa.github.io/KinderBoys/', '_blank');
}

function openGameJam1() 
{
    window.open('https://draquian.itch.io/not-a-lonely-travel', '_blank');
}

function openGameJam1() 
{
    window.open('https://divangus.itch.io/echoes-in-time', '_blank');
}

function openGamification() 
{
    window.open('https://www.figma.com/file/2H7PFFRRUS3hnJt2H32naV/Gamificaci%C3%B3?type=design&node-id=0%3A1&t=wT1JfM5O03too4pg-1', '_blank');
}