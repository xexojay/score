// JavaScript Document
function Select(event){
	if(document.getElementById("index_input_list").style.display=="none")
	{
		document.getElementById("index_input_list").style.display="block";
		document.getElementById("index_input_arrowtop").style.display="block";
		document.getElementById("index_input_arrowbot").style.display="none";
	}
	else
	{
		document.getElementById("index_input_list").style.display="none";
		document.getElementById("index_input_arrowtop").style.display="none";
		document.getElementById("index_input_arrowbot").style.display="block";
	}
}
function Select4(event){
	document.getElementById("index_input_select").innerHTML = "CET4";
}
function Select6(event){
	document.getElementById("index_input_select").innerHTML = "CET6";
}
function clearInput(event){
	document.getElementById("score").value = "";
}
function Calculation(event){
	var value;
	value=document.getElementById("index_input_select").innerHTML;
	var sco= document.getElementById("score").value;   //获取text的值aaa
	var num=parseInt(sco, 10); //returns 10
	submit=document.getElementById("submit")
	submit.onclick=function(){ 
    var myurl="score.html"+"?"+"value="+value+"&number="+num; 
    window.location.assign(myurl);  
    } 
}
function Show(event){
//	alert("ff");
	var url=location.href;  
    var tmp1=url.split("?")[1];  
    var tmp2=tmp1.split("&")[0];  
    var tmp3=tmp2.split("=")[1];  
    var value=tmp3;  
    var tmp4=tmp1.split("&")[1];  
    var tmp5=tmp4.split("=")[1];  
    var num=tmp5;  
//alert(value+num);
	var resToefl=document.getElementById('Toefl');
	var resIelts=document.getElementById('Ielts');
	var scoToefl;	
	var scoIelts;
	if(value=='CET4')
	{
		if(num>0&&num<=302)
		{
			scoToefl='30';
			scoIelts='3';
		}
		else if(num>302&&num<=507)
		{
			scoToefl='40';
			scoIelts='4';
		}
		else if(num>507&&num<=548)
		{
			scoToefl='50';
			scoIelts='5';
		}
		else if(num>548&&num<=589)
		{
			scoToefl='60';
			scoIelts='5.5';
		}
		else if(num>589&&num<=630)
		{
			scoToefl='70';
			scoIelts='5.5';
		}
		else if(num>630&&num<=671)
		{
			scoToefl='80';
			scoIelts='6';
		}
		else if(num>671&&num<=712)
		{
			scoToefl='90';
			scoIelts='6.5';
		}
		else if(num>712&&num<=750)
		{
			scoToefl='100';
			scoIelts='7';
		}
		else
		{
			scoToefl='0';
			scoIelts='0';
		}
	}
	else if(value=='CET6')
	{
		if(num>0&&num<=220)
		{
			scoToefl='30';
			scoIelts='3';
		}
		else if(num>220&&num<=302)
		{
			scoToefl='40';
			scoIelts='4';
		}
		else if(num>302&&num<=343)
		{
			scoToefl='50';
			scoIelts='5';
		}
		else if(num>343&&num<=384)
		{
			scoToefl='60';
			scoIelts='5.5';
		}
		else if(num>384&&num<=425)
		{
			scoToefl='70';
			scoIelts='5.5';
		}
		else if(num>425&&num<=450)
		{
			scoToefl='80';
			scoIelts='6';
		}
		else if(num>450&&num<=500)
		{
			scoToefl='90';
			scoIelts='6.5';
		}
		else if(num>500&&num<=550)
		{
			scoToefl='100';
			scoIelts='7';
		}
		else if(num>550&&num<=600)
		{
			scoToefl='105';
			scoIelts='7.5';
		}
		else if(num>600&&num<=650)
		{
			scoToefl='110';
			scoIelts='8';
		}
		else if(num>650&&num<=700)
		{
			scoToefl='115';
			scoIelts='8.5';
		}
		else if(num>700&&num<=750)
		{
			scoToefl='120';
			scoIelts='9';
		}
		else
		{
			scoToefl='0';
			scoIelts='0';
		}
	}
	else
	{
			scoToefl='0';
			scoIelts='0';
	}
	resToefl.innerHTML =scoToefl;
	resIelts.innerHTML =scoIelts;
	//alert('000');
	return 0;
}
function Share(event){
//	alert("0");
	document.getElementById('result_share').style.display="block";
}
function noShare(event){
//	alert("0");
	document.getElementById('result_share').style.display="none";
}
function Test(event){
//	alert("0");
	window.location.href='index.html';
}
