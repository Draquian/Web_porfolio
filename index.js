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

function showCode() 
{
    var Display_Text = document.getElementById("codeLengague");

    var Display_icon = document.getElementById("Icon_diplay_code");

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

function showSoftware(idName) 
{
    var Display_Text = document.getElementById("softWare");

    var Display_icon = document.getElementById("Icon_diplay_software");

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