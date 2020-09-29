



function CreateTemplate()
{
	window.location="formBuilder-master/demo/index.html";
	
}

function RightPhraseAdd()
{
	var phr=document.getElementById("RightSideText").value;
	window.location.href = "RightPhraseAdd.php?phrase=" + phr;
}
function GetRightData()
{
	var phr="<?php include('ReadRightData.php'); echo $data;?>";
alert(phr);
	}

var editdivpos;
function change(ev)
{

editdivpos=document.elementFromPoint(ev.clientX,ev.clientY);
/*var children = document.getElementById("mydiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(pos == children[i]) {
            document.getElementById("mydiv").insertBefore(textNode, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("mydiv").appendChild(textNode);
    }*/
}

function DataCopy()
{
var imp=document.getElementById("impressiondiv").innerHTML;
var rep=document.getElementById("reportdiv").innerHTML;
document.getElementById("reportdiv").innerHTML=rep+"<br><br><center><strong>Impression</strong></center><br></br>"+imp;

var i,j;

var copyDiv = document.getElementById('reportdiv');
  //copyDiv.focus();
  
  var another=document.getElementById('impressiondiv');
document.getElementById("reportdiv").focus();  
  document.execCommand('SelectAll');
  document.execCommand("Copy", false, null);
  document.getElementById("reportdiv").innerHTML="";
  document.getElementById("impressiondiv").innerHTML="";
  document.getElementById("reportdiv").innerHTML=rep;
  document.getElementById("impressiondiv").innerHTML=imp;
  document.getElementById("impressiondiv").style.borderStyle="solid";
document.getElementById("reportdiv").style.borderStyle="solid";

 
}



function displayBlock(div)
{
document.getElementById(div).style="height ease-in-out 1200ms;-o-transition: height ease-in-out 1200ms;-moz-transition: height ease-in-out 1200ms;-webkit-transition: height ease-in-out 1200ms;";
}
function ChangeFractFalseDis()
{
document.getElementById("txtFxMeas").disabled=false;
}
function ChangeFractTrueDis()
{
document.getElementById("txtFxMeas").disabled=true;
}
function ChangeState()
{
document.getElementById("rbHematomaLatRight").disabled=true;
document.getElementById("rbHematomaLatLeft").disabled=true;
}
function ChangeTrueState()
{
document.getElementById("rbHematomaLatRight").disabled=false;
document.getElementById("rbHematomaLatLeft").disabled=false;
}

function my_fun()
{
var val=localStorage.getItem("data");
div2=document.getElementById("reportdiv");
div2.innerHTML=val;
}

function resetRightFilter()
{

var i;
var val=document.getElementById("myRightInput").value;
for(i=0;i<val.length;i++)
{
$('#myRightInput').val( $("#myRightInput").val().slice(0,-1) );
RightfilterFunction();
document.getElementById("RightFilterButton").click();
}
}


 function hematomaOnClick() {
        var mm=".";
        var mm_init=""; 
        mm1=document.getElementById("txtHematomaMeas").value;
        if (mm1.match(/\S/))
            { 
                mm="";
                mm=mm.concat("measuring ", mm1, " mm in maximum thickness.");
            }
        var dural;
            if(document.getElementById("rbEpidural").checked==true)
                {
                    dural="an epidural ";
                }
            if(document.getElementById("rbSubdural").checked==true)
                {
                dural="a subdural ";
                }
        
        var lat;
            if((document.getElementById("rbHematomaLatRight").checked)==true)
            {
            lat="at the right";
            }
            if((document.getElementById("rbHematomaLatLeft").checked)==true)
            {
            lat="at the left";
            }

        var loc;
            if((document.getElementById("rbHematomaLatTemp").checked)==true)
                {
                    loc = "temporal convexity";
                }
            if((document.getElementById("rbHematomaLatOcc").checked)==true)
                {
                    loc="occipital convexity";
                }
            if((document.getElementById("rbHematomaLatPost").checked)==true)
                {
                    loc="posterior fossa";
                }
            if((document.getElementById("rbHematomaLatPari").checked)==true)
                {
                    loc="parietal convexity";
                }
            if((document.getElementById("rbHematomaLatFront").checked)==true)
                {
                    loc="frontal convexity";
                }
            if((document.getElementById("rbHematomaLatFlax").checked)==true)
                {
                    loc="along the falx";
                    lat="";
					
                }
        var message=" ";
		
	 message=message+"There is "+dural+" hematoma "+lat+" "+loc+" "+mm+" ";
        var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }
		
		

           
    }
	function allowDropimp(ev)
	{
	 ev.preventDefault();
	}
function allowDrop(ev) {
   
   ev.preventDefault();
}

function showMeasure()
{
var chkYes = document.getElementById("txtFxMeas");
        var dvPassport = document.getElementById("mymeasureFract");
		dvPassport.style.visibility="visible";

}
function hideMeasure()
{
var chkYes = document.getElementById("txtFxMeas");
        var dvPassport = document.getElementById("mymeasureFract");
		dvPassport.style.visibility="hidden";
	var dvbut=document.getElementById("btFxGen");
	dvbut.style.visibility="visible";
		
}
function addHemorrhage()
	{
	var loc;
	if(document.getElementById("HemorrhageLeft").checked==true)
	{
	loc="left frontal sulci";
	}
	if(document.getElementById("HemorrhageRight").checked==true)
	{
	loc="right";
	}var lat;
	if(document.getElementById("HemorrhageFront").checked==true)
	{
	lat="frontal sulci";
	}
	if(document.getElementById("HemorrhagePari").checked==true)
	{
	lat="parietal sulci";
	}
	if(document.getElementById("HemorrhageTemp").checked==true)
	{
	lat="temporal sulci";
	}
	if(document.getElementById("HemorrhageOcci").checked==true)
	{
	lat="occipital sulci";
	}
	if(document.getElementById("HemorrhageSylv").checked==true)
	{
	lat="Sylvian fissure";
	}
	if(document.getElementById("HemorrhageBasal").checked==true)
	{
	lat="basal cistern";
	}
	if(document.getElementById("HemorrhageInter").checked==true)
	{
	lat="interhemispheric fissure";
	}
	var status="0";
	var message="";
	if(document.getElementById("pHemorrhageLobBrain").checked==true)
	{
	loc="";
	status="1";
	message="There is subarachnoid hemorrhage in the "+loc+"."; 
	}if(status!="1"){
	var message="There is subarachnoid hemorrhage in the "+loc+" "+lat+" .";}
	var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }	
	}
	function addIntHematoma()
	{
	var loc,lat;
	if(document.getElementById("intHematomaLocRightLat").checked==true)
	{
	lat="right";
	}
	if(document.getElementById("intHematomaLocLeftLat").checked==true)
	{
	lat="left ";
	}
	if(document.getElementById("intHematomaLocFrontLoc").checked==true)
	{
	loc="frontal lobe";
	}
	if(document.getElementById("intHematomaLocTempLoc").checked==true)
	{
	loc="temporal lobe";
	}
	if(document.getElementById("intHematomaLocPariLoc").checked==true)
	{
	loc="parietal lobe";
	}
	if(document.getElementById("intHematomaLocOccLoc").checked==true)
	{
	loc="occipital lobe";
	}
	var x,y;
	x=document.getElementById("inthx").value;
	y=document.getElementById("inthy").value;
	var message="There is a "+x+" * "+y+" cm intraparenchymal hematoma in the "+lat+loc+" .";
	var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }	
	}	
	function addLacunar()
	{
	var loc;
	if(document.getElementById("LacLocLeft").checked==true)
	{
	loc="left";
	}
	if(document.getElementById("LacLocRight").checked==true)
	{
	loc="right";
	}
	if(document.getElementById("LacLocBilat").checked==true)
	{
	loc="bilateral";
	}
	var lat;
if(document.getElementById("basalold").checked==true)
	{
	lat="basal ganglia";
	}

	if(document.getElementById("basalperi").checked==true)
	{
	lat="periventricular corona radiata";
	}
	if(document.getElementById("basaltha").checked==true)
	{
	lat="thalamus";
	}
	if(document.getElementById("basalthal").checked==true)
	{
	lat="thalami";
	}
	if(document.getElementById("basalpons").checked==true)
	{
	lat="pons";
	}
	if(document.getElementById("basalcent").checked==true)
	{
	lat="centrum semiovale";
	}
	if(document.getElementById("basalcorp").checked==true)
	{
	lat="corpus callosum";
	}
	if(document.getElementById("basalmid").checked==true)
	{
	lat="middle cerebellar peduncles";
	}
	if(document.getElementById("basalcere").checked==true)
	{
	lat="cerebellum";
	}
	if(document.getElementById("basalint").checked==true)
	{
	lat="internal capsule";
	}
	var message;
	message="old lacunar infarcts are noted in the "+loc+" "+lat+".";
	var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }
	}
	function addLacunars()
	{
	var loc;
	loc=document.getElementById("LacLocs").value;
	var message;
	message="Old lacunar infarcts are noted in the "+loc+".";
	var txt=document.createElement("span");
        txt.textContent = message;
			document.getElementById("reportdiv").appendChild(txt);
		var text=document.createElement("br");
			document.getElementById("reportdiv").appendChild(text);
	}
	function ChangeBrainStormFalseState()
	{
	document.getElementById("pHemorrhageLeft").disabled=false;
	document.getElementById("pHemorrhageRight").disabled=false;
	}
	function ChangeBrainStormTrueState()
	{
	document.getElementById("pHemorrhageLeft").disabled=true;
	document.getElementById("pHemorrhageRight").disabled=true;
	}
	
	function addpHemorrhage()
	{
	var lat;
	if(document.getElementById("pHemorrhageLeft").checked==true)
	{
	lat="left";
	}
	if(document.getElementById("pHemorrhageRight").checked==true)
	{
	lat="right";
	}
	
	var loc;
	if(document.getElementById("pHemorrhageLobFront").checked==true)
	{
	loc="frontal lobe";
	}
	if(document.getElementById("pHemorrhageLobPari").checked==true)
	{
	loc="parietal lobe";
	}
	if(document.getElementById("pHemorrhageLobTemp").checked==true)
	{
	loc="temporal lobe";
	}
	if(document.getElementById("pHemorrhageLobOcci").checked==true)
	{
	loc="occipital lobe";
	}
	if(document.getElementById("pHemorrhageLobCere").checked==true)
	{
	loc="cerebellum";
	}
	if(document.getElementById("pHemorrhageLobBrain").checked==true)
	{
	loc="brain stem";
	lat="";
	
	}
	var mx,my;
	mx=document.getElementById("pHemorrhageX").value;
	my=document.getElementById("pHemorrhageY").value;
	var message="There is parenchymal hemorrhage in the "+lat+" "+loc+" measuring "+mx+" x "+my+" cm in size.";
	var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }
	}
	function addLac()
	{
			var range;
			if(document.getElementById("ScalfLow").checked==true)
			{
			range="low";
			}
			if(document.getElementById("ScalfHigh").checked==true)
			{
			range="high";
			}
			if(document.getElementById("ScalfMod").checked==true)
			{
			range="moderate";
			}
			var type;
			if(document.getElementById("Hema").checked==true)
			{
			type=" scalp hematoma";
			}
			if(document.getElementById("Lacc").checked==true)
			{
			type=" laceration";
			}
			var loc,lat;
			if(document.getElementById("LacRight").checked==true)
			{
			lat="right ";
			}
			if(document.getElementById("LacLeft").checked==true)
			{
			lat="left ";
			}
			if(document.getElementById("LacPari").checked==true)
			{
			loc="parietal region";
			}
			if(document.getElementById("LacTemp").checked==true)
			{
			loc="temporal region";
			}
			if(document.getElementById("LacFront").checked==true)
			{
			loc="frontal region";
			}
			if(document.getElementById("LacOcci").checked==true)
			{
			loc="occipital region";
			}
			var message;
			message="There is a "+range+type+" in the "+lat+loc+" .";
			var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }
			
	}
function addBrainHemorrhage()
	{
	var x,y;
	x=document.getElementById("bHemorrhageX").value;
	y=document.getElementById("bHemorrhageY").value;
	var message="";
	message="There is parenchymal hemorrhage in brainstem measuring "+x+" * "+y+" cm in size.";
	var txt=document.createElement("span");
        txt.textContent = message;
			document.getElementById("reportdiv").appendChild(txt);
		var text=document.createElement("br");
			document.getElementById("reportdiv").appendChild(text);	
	}
	function addEff()
	{
	var lat,loc;
	if(document.getElementById("EffLeft").checked==true)
	{
	lat="left ";
	}
	if(document.getElementById("EffRight").checked==true)
	{
	lat="right ";
	}
	if(document.getElementById("EffIps").checked==true)
	{
	loc="ipsilateral";
	}
	if(document.getElementById("EffLat").checked==true)
	{
	loc="Lateral";
	}
	if(document.getElementById("EffThirdVent").checked==true)
	{
	loc="third ventricle";
	}
	if(document.getElementById("EffFourthVent").checked==true)
	{
	loc="fourth ventricle";
	}
	if(document.getElementById("EffCer").checked==true)
	{
	loc="cerebral";
	}
	var message="There is effacement of "+lat+loc+" sulci.";
	var txt=document.createElement("span");
        txt.textContent = message;
			document.getElementById("reportdiv").appendChild(txt);
		var text=document.createElement("br");
			document.getElementById("reportdiv").appendChild(text);	
	var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }
	
	}
	
	function addMidLine()
	{
	var to;
	to=document.getElementById("mshift").value;
	var loc="";
	if(document.getElementById("midShiftLocRight").checked==true)
	{
	loc="right";
	}
	if(document.getElementById("midShiftLocLeft").checked==true)
	{
	loc="left";
	}
	var message="There is "+to+" midline shift to the "+loc+".";
	var txt=document.createElement("span");
        txt.textContent = message;
			document.getElementById("reportdiv").appendChild(txt);
		var text=document.createElement("br");
			document.getElementById("reportdiv").appendChild(text);	
	}
	
	function addHypoDensity()
	{
	var loc,lat;
	if(document.getElementById("HypoLocRight").checked==true)
	{
	lat="right ";
	}
	if(document.getElementById("HypoLocLeft").checked==true)
	{
	lat="left ";
	}
	if(document.getElementById("HypoLocFront").checked==true)
	{
	loc="frontal lobe";
	}
	if(document.getElementById("HypoLocTemp").checked==true)
	{
	loc="temporal lobe";
	}
	if(document.getElementById("HypoLocPari").checked==true)
	{
	loc="parietal lobe";
	}
	if(document.getElementById("HypoLocOcci").checked==true)
	{
	loc="occipital lobe";
	}
	var message="There is a wedge shaped hypodensity in the "+lat+loc+".";
	var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }	
	}
	function addCarni()
	{
	var lat,loc;
	if(document.getElementById("CraRight").checked==true)
	{
	lat="right ";
	}
	if(document.getElementById("CraLeft").checked==true)
	{
	lat="left ";
	}
	if(document.getElementById("CraPari").checked==true)
	{
	loc="parietal";
	}
	if(document.getElementById("CraOcci").checked==true)
	{
	loc="occipital";
	}
	if(document.getElementById("CraTemp").checked==true)
	{
	loc="temporal";
	}
	if(document.getElementById("CraFront").checked==true)
	{
	loc="frontotemporal";
	}
	
	if(document.getElementById("CraTemprital").checked==true)
	{
	loc="temporoparietal";
	}
	var message="There is "+lat+loc+" craniotomy.";
	var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }
	
	
	}
	function addIntHematoma()
	{
	var lat,loc;
	if(document.getElementById("intHematomaLocRightLat").checked==true)
	{
	lat="right ";
	}
	if(document.getElementById("intHematomaLocLeftLat").checked==true)
	{
	lat="left ";
	}
	
	if(document.getElementById("intHematomaLocFrontLoc").checked==true)
	{
	loc="frontal lobe";
	}
	if(document.getElementById("intHematomaLocTempLoc").checked==true)
	{
	loc="temporal lobe";
	}
	if(document.getElementById("intHematomaLocPariLoc").checked==true)
	{
	loc="parietal lobe";
	}
	if(document.getElementById("intHematomaLocOccLoc").checked==true)
	{
	loc="occipital lobe";
	}
	var x,y;
	x=document.getElementById("inthx").value;
	y=document.getElementById("inthy").value;
	var message="There is a "+x+" * "+y+" cm intraparenchymal hematoma in the "+lat+loc+" .";
var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }	
	}	
	
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.textContent);
}

function drop(ev) {
   ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    var textNode = document.createElement("span");
    textNode.textContent = data;
    // document.getElementById("reportdiv").appendChild(textNode);
    var elementMouseIsOver = document.elementFromPoint(ev.clientX, ev.clientY);
    var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(elementMouseIsOver == children[i]) {
            document.getElementById("reportdiv").insertBefore(textNode, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(textNode);
    }
}
    
	
function dragimp(ev) {
    ev.dataTransfer.setData("text", ev.target.textContent);
}	
function dropimp(ev) {
   ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    var textNode = document.createElement("span");
    textNode.textContent = data;
    // document.getElementById("reportdiv").appendChild(textNode);
    var elementMouseIsOver = document.elementFromPoint(ev.clientX, ev.clientY);
    var children = document.getElementById("impressiondiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(elementMouseIsOver == children[i]) {
            document.getElementById("impressiondiv").insertBefore(textNode, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("impressiondiv").appendChild(textNode);
    }
}	
    

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myRightFunction()
{
 document.getElementById("myRightDropdown").classList.toggle("show");
}

function filterFunction(cat) {
    var input, filter, ul, li, a, i;
	var ele=document.createElement("input");
ele.setAttribute("type","text");
ele.setAttribute("value",cat);
    input = ele;
    
    filter = input.value.toUpperCase();
    div = document.getElementById("accordion");
    a = div.getElementsByTagName("sr");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
	document.getElementById("FilterButton").click();
}

function FilterRightData(cat) {
    var input, filter, ul, li, a, i;
	
var ele=document.createElement("input");
ele.setAttribute("type","text");
ele.setAttribute("value",cat);
    input = ele;
    filter = input.value.toUpperCase();
    div = document.getElementById("list");
    a = div.getElementsByTagName("li");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
		
		
    }
	
	document.getElementById("RightFilterButton").click();

	}
	
	
	
	function ResetFilterRightData(cat) {
    var input, filter, ul, li, a, i;
	
var ele=document.createElement("input");
ele.setAttribute("type","text");
ele.setAttribute("value",cat);
    input = ele;
    filter = input.value.toUpperCase();
    div = document.getElementById("list");
    a = div.getElementsByTagName("li");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
		
		
    }
	
	//document.getElementById("RightFilterButton").click();

	}

	function onfracture()
	{
	
	var status="0";
	var displaced;
	if(document.getElementById("rbFxNDis").checked==true)
	{
	displaced="non displaced";
	}
	if(document.getElementById("rbFxDis").checked==true)
	{
	displaced="displaced";
	status="1";
	}
	var loc;
	if(document.getElementById("rbFxLocBase").checked==true)
	{
	loc="skull base";
	}
	if(document.getElementById("rbFxLocFronCal").checked==true)
	{
	loc="frontal calvarium";
	}
	if(document.getElementById("rbFxLocParCal").checked==true)
	{
	loc="parietal calvarium";
	}
	if(document.getElementById("rbFxLocTemCal").checked==true)
	{
	loc="temporal calvarium";
	}
	if(document.getElementById("rbFxLocOccCal").checked==true)
	{
	loc="occipital calvarium";
	}
var message;	
	if(status=="0")
{
message="There is a  " + displaced +" fracture of the "+ loc +".";  
}	
else{
var measure=document.getElementById("txtFxMeas").value;
	message="There is a  " + displaced +" fracture of the "+ loc +". The degree of displacement is "+measure+".\n";
	}
	var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }
	
	
}
	
	
	
	function addDepFract()
	{
	var dep;
	if(document.getElementById("depressedFract").checked==true)
	{
	dep="depressed";
	}
	if(document.getElementById("NondepressedFract").checked==true)
	{
	dep="non depressed";
	}
	var loc;
	if(document.getElementById("fractLeftDepress").checked==true)
	{
	loc="left";
	}
	if(document.getElementById("fractRightDepress").checked==true)
	{
	loc="right";
	}
		var ext=document.getElementById("DepressedFractExtension").value;
		var message="There is a "+dep+" fracture of the "+loc+" skull base with extension to "+ext+" .";
	var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }	
		

}
	
	
	function addMthick()
	{
	var opt;
	if(document.getElementById("musThick").checked==true)
	{
	opt="muscular thickening";
	}
	if(document.getElementById("airLevel").checked==true)
	{
	opt="an air fluid level";
	}
	var loc,lat;
	if(document.getElementById("musThickRight").checked==true)
	{
	lat="right ";
	}
	if(document.getElementById("musThickLeft").checked==true)
	{
	lat="left ";
	}
	if(document.getElementById("musThickMax").checked==true)
	{
	loc="maxillary";
	}
	
	if(document.getElementById("musThickFrontal").checked==true)
	{
	loc="frontal";
	}
	if(document.getElementById("musThicksph").checked==true)
	{
	loc="sphenoid sinus";
	}
	
	if(document.getElementById("musThickEth").checked==true)
	{
	loc="ethmoid";
	}
	
	var message="There is "+opt+" in the "+lat+loc+".";
	var txt=document.createElement("span");
        txt.textContent = message;

            
            
		
		var children = document.getElementById("reportdiv").childNodes;
    var found = false;
    for(var i = 0; i < children.length; i++) {
        if(editdivpos == children[i]) {
            document.getElementById("reportdiv").insertBefore(txt, children[i]);
            found = true;
            break;
        }
    }
    if(!found) {    // If there are no nodes in reportdiv already
        document.getElementById("reportdiv").appendChild(txt);
    }
	
	}
	function resetLeftFilter(cat)
	{
	
	var input, filter, ul, li, a, i;
	var ele=document.createElement("input");
ele.setAttribute("type","text");
ele.setAttribute("value",cat);
    input = ele;
    
    filter = input.value.toUpperCase();
    div = document.getElementById("accordion");
    a = div.getElementsByTagName("sr");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
	//document.getElementById("FilterButton").click();
	
	}
	
	
	// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("RightPhraseAddButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

	
	
	