/**Buttons**/
			$(document).ready(function(){
				$("#Vid").click(function(){
					$("#Motivation").slideToggle(500);
					});
				});
			$(document).ready(function(){
				$("#Paragraph").click(function(){
					$("#none").slideToggle(500);
					});
				});
			$(document).ready(function(){
				$("#Paragraph2").click(function(){
					$("#none2").slideToggle(500);
					});
				});
			$(document).ready(function(){
				$(".menu").click(function(){
					$(".navbar").slideToggle(500);
					});
				});
/**Tabs**/

var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="black";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0);

/**Contact Mail Form**/

//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}