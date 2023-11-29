
/*applying onscroll effect to the leaf for rotating it */

window.onscroll=function(){
  var theta=document.documentElement.scrollTop/50% Math.PI;
  document.getElementById('image-responsive').style.transform='rotate('+theta+'rad)';

}