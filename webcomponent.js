(function()  {
    
   let count=0;
   var flipCounter=0;
   let shadowRoot;
    
    const flipcardjs = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js";
    //const cssScript="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    
    console.log("1-Step");
    
    //This function is used to load the library
    
    function loadScript(src)
    {
    
    console.log("Step-9");
    
	  return new Promise(function(resolve, reject) 
    {
		let script = document.createElement('script');
		script.src = src;

		script.onload = () => {console.log("Load: " + src); resolve(script);}
		script.onerror = () => reject(new Error(`Script load error for ${src}`));

		document.head.appendChild(script)
	  });
	}
  function loadCssScript(href)
  {
  console.log("Step-9");
    
	  return new Promise(function(resolve, reject) 
    {
    let stylesheet = document.createElement('link')
    stylesheet.setAttribute('rel', 'stylesheet')
    stylesheet.setAttribute('href', href)
    //documentHead().appendChild(stylesheet)

		stylesheet.onload = () => {console.log("Load: " + stylesheet); resolve(stylesheet);}
		stylesheet.onerror = () => reject(new Error(`Script load error for ${href}`));

		document.head.appendChild(stylesheet)
	  });
  }
    
    
    console.log("Step-2");
    
  let template = document.createElement('template');
  template.innerHTML = `
  <style>
.flip-card {
  
  width: 320px;
  border-radius: 5px;
  height:480px;
  background-color: transparent;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}


.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  
  color: black;
}

.flip-card-back {
  background-color: white;
  color: black;
  transform: rotateY(180deg);
}
.flip-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 2px 16px;
}


a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}

a:hover {
  background-color: #ddd;
  color: black;
}

.previous {
  background-color: #f1f1f1;
  color: black;
}

.next {
  background-color: #4CAF50;
  color: white;
}

.rounda {
  border-radius: 50%;
}






.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:#000000;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #000000;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(40px);
  -ms-transform: translateX(38px);
  transform: translateX(38px);
}

/*------ ADDED CSS ---------*/
.on
{
  display: none;
}

.on, .off
{
  color: white;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  font-size: 10px;
  font-family: Verdana, sans-serif;
}

input:checked+ .slider .on
{display: block;}

input:checked + .slider .off
{display: none;}

/*--------- END --------*/

/* Rounded sliders */






</style>
  
 
  <div class="flip-card">


  
<div class="flip-card-inner" id="flip-card-inner">


 
<div class="flip-card-front">



<label class="switch" style="margin-top:110px;float:right;margin-right:10px"><input type="checkbox" id="togBtn"><div class="slider round"><!--ADDED HTML --><span class="on">abs</span><span class="off">%</span><!--END--></div></label>



 <div style="padding:20px 20px;text-decoration: underline green;font-size: 30px;font-weight: bold;">Profit
 
 </div>
  <textbox id="comparisonvalue" style="float:right;margin-right:-35px;margin-top:18px;step=".01"></textbox>
 <textbox style="margin-left:20px;font-size:8px">Current Month</textbox>
  <p style="margin-top:2px;margin-left:23px">632500</p>
 
   
   <p style="margin-top:-10px;margin-left:23px;font-size:8px">Last Month</p>
    <p style="margin-top:2px;margin-left:23px">639600</p>
  
<div style="margin-top:10px;margin-left:20px;margin-bottom:40px" id="bar">

<canvas id="myChart" width="20" height="20"></canvas>

</div>

</div><!-- flip card front -->
<div class="flip-card-back">

<a class="previous rounda" id="previous" style="float:right;margin-top:20px;margin-right:10px">&#8249;</a>
<div style="margin-left:20px;margin-top:20px;text-decoration: underline green;font-size: 30px;font-weight: bold;">Monthly Profit
 </div>
 
 <div style="margin-left:20px;font-size: 10px;font-weight: bold;margin-top:20px">
 <textbox style="font-size:8px;">Current Month</textbox></br>
 <textbox id="month" style="font-size:20px;margin-top:10px">
 </textbox>
 </div>
 <div style="margin-left:20px;font-size: 10px;font-weight: bold;margin-top:10px">
 <textbox>Profit
 </textbox>
 <textbox id="value">
 </textbox>
 
 </div>
 
 <canvas id="myChartBack" width="20" height="20" margin-top:"40px"></canvas>
</div><!-- flip card back -->

</div><!-- flip card inner div-->


</div><!-- Main flip card element div-->

  
  
  
  
  
  
  
  `;
  
  console.log("Step3");

    
   
  
  customElements.define('com-sap-sample-helloworld9', class HelloWorld extends HTMLElement     {
  
   constructor() {
			super(); 
      
      console.log("step-4");
		   shadowRoot = this.attachShadow({mode: "open"});
		   shadowRoot.appendChild(template.content.cloneNode(true));
       this._firstConnection = false;
           
           
        

      this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
            });
		
    
    }

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
        
        console.log("Step-5");
        this._firstConnection = true;
        
        async function LoadLibs(callme) {
        console.log("Step - 7");
        
					try
          {
						console.log("Step-8");
						await loadScript(flipcardjs);		
           // await loadCssScript(cssScript);
						
            
					} 
          catch (e) 
          {
						alert(e);
					} 
          finally 
          {
          console.log("Step-10");
          console.log(" execute kyun nahi ho raha");
          callme.redraw();
					}
				}
        
        console.log("Step-6");
        LoadLibs(this);
        
        let togBtn=this.shadowRoot.getElementById('togBtn');
        var percentage=((632500-639600)/639600)*100;
         shadowRoot.getElementById("comparisonvalue").innerHTML =percentage.toFixed(2);
         var absolute=(632500-639600);
         if(absolute<0)
        {
        shadowRoot.getElementById("comparisonvalue").style.color="red";
         }
       else
       {
       shadowRoot.getElementById("comparisonvalue").style.color="green";
       }
      }
        
       
       
       


         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {
    
    

		}
    
    

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
            this.redraw();
            }
            
            
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        
        }
        */
         

         get chartType() {
            return this.chartTypeValue;
        }

        set chartType(value) {
            this.chartTypeValue = value;
        }
        
     
        


      redraw()
        {
        
        
        let myChart=this.shadowRoot.getElementById('myChart');
	 myChart.innerHTML=""
       console.log("Step-11");
        
       
 var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
    datasets: [
        {
            label: "Profit Per Month",
            backgroundColor: "rgba(137, 196, 244, 1)",
            borderColor: "rgba(44, 130, 201, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data:  [200000, 80000, 453455, 125430,204000 , 240000, 360012,639600,632500,720021,50000,400000],
            
        }
    ]
};
var option = {
animation: {
				duration:5000
},
 scales:
        {
            yAxes: [{
                gridLines : {
                    drawOnChartArea: false
                }
            }],
            xAxes: [{
                gridLines : {
                    drawOnChartArea: false
                }
            }],
        }

};


var myBarChart = Chart.Bar(myChart,{
	data:data,
  options:option
});

myChart.onclick = function(evt) {
      var activePoints = myBarChart.getElementsAtEvent(evt);
      
      if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];

        var label = chartData.labels[idx];
        var value = chartData.datasets[0].data[idx];

        var url = "http://example.com/?label=" + label + "&value=" + value;
        
        //alert(url);
        
       shadowRoot.getElementById("month").innerHTML=label;
       shadowRoot.getElementById("value").innerHTML=value;
       shadowRoot.getElementById("flip-card-inner").style.transform = "rotateY(180deg)"; 
       
      }
    };
        
        
     var  previousButton=this.shadowRoot.getElementById('previous');
     previousButton.onclick = function(evt) {
     shadowRoot.getElementById("flip-card-inner").style.transform ="rotateY(360deg)"; 
     
     }
        
   let myChartBack=this.shadowRoot.getElementById('myChartBack');
   var data2 = {
    labels: ["2020", "2019", "2018", "2017", "2016", "2015", "2014","2013","2012","2011"],
    datasets: [
        {
            label: "Profit Month for last 10 years",
            backgroundColor: "rgba(137, 196, 244, 1)",
            borderColor: "rgba(44, 130, 201, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(137, 196, 244, 1)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [200000, 80000, 453455, 125430,204000 , 240000, 360012,639600,632500,720021],
        }
    ]
};
var option2 = {
animation: {
				duration:5000
},
 scales:
        {
            yAxes: [{
                gridLines : {
                    drawOnChartArea: false
                }
            }],
            xAxes: [{
                gridLines : {
                    drawOnChartArea: false
                }
            }],
        }

};


var myBarChart2 = Chart.Bar(myChartBack,{
	data:data2,
  options:option2
});

let togBtn=this.shadowRoot.getElementById('togBtn');
togBtn.onclick = function(evt) {
if(flipCounter==1)
{
flipCounter=0;
var absolute=(632500-639600);
var percentage=((632500-639600)/639600)*100;
shadowRoot.getElementById("comparisonvalue").innerHTML =percentage.toFixed(2);
if(absolute<0)
{
shadowRoot.getElementById("comparisonvalue").style.color="red";
}
else
{
shadowRoot.getElementById("comparisonvalue").style.color="green";
}
     
}
else
if(flipCounter==0)
{
flipCounter=1;
var absolute=(632500-639600);
shadowRoot.getElementById("comparisonvalue").innerHTML =absolute;
if(absolute<0)
{
shadowRoot.getElementById("comparisonvalue").style.color="red";
}
else
{
shadowRoot.getElementById("comparisonvalue").style.color="green";
}
}

}
}
});
})();

