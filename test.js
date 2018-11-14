<script> 
<!--CODE FAIT PAR PYROFLO HTTP://WWW.ABCPYRO.FR.ST-->
// temps qui s'écoule après que la page soit chargée noté x
// temps qui s'écoule après que la fenêtre se soit ouverte après x secondes noté y
 var txt;
 function open_window
{
  alert(Voulez-vous voir le site ?)
}
if (Confirm)
  

 var window_handle;  // variable globale du script, à ne surtout pas modifier !!!
 function open_window() // on défini la fonction qui va ouvrir la fenêtre
 {
window_handle = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // ici c'est l'URL complète de la page à ouvrir attention de ne pas supprimer les guillemets
 } // on ferme la fonction open_window()
 
 function close_window() // on défini la fonction qui va fermer la fenêtre qu'on a ouvert précédemment
 {
 window_handle.close(); // on ferme la page comme window.close() à part que dans notre cas, on fermer une variable donc window_nomdelavariable.close()
 } // on ferme la fonction close_window()

</script>

<script>

window.setInterval("open_window();", 10000, "JavaScript"); // 10000 est le temps x en MILISECONDE
window.setInterval(" window_handle.close();", 20000, "JavaScript"); // 20000 est le temps y EN MILISECONDE

</script>
