var number;
	window.addEventListener('wheel',function(event){
		if(number!=null && event.deltaY < 0){
			clearInterval(number);
		}
	});	

function func(){
	var m=this.href.lastIndexOf('#');
	var elem=document.getElementById(this.href.slice(m+1));
    yf=elem.getBoundingClientRect().top;
    console.log(yf);
var yi=0;
number=setInterval(function(){
	if(yi>yf){
		clearInterval(number);
	}
	yi=yi+10;
	window.scrollTo(0,yi);
},100);
event.preventDefault();	
}
a=document.getElementsByTagName('a');
for(var i=0;i<a.length;i++){
a[i].addEventListener('click',func);	
}
