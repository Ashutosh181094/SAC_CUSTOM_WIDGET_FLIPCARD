(function()  {
    
   let count=0;
   let shadowRoot;
    
    const flipcardjs = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js";
   
    
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
    
    
    console.log("Step-2");
    
  let template = document.createElement('template');
  template.innerHTML = `
  <style>
.flip-card {
  
  width: 260px;
  border-radius: 5px;
  height:400px;
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





</style>
  
  
  
  <div class="flip-card">

<div class="flip-card-inner" id="flip-card-inner">

<div class="flip-card-front">





 <div style="padding:20px 20px;text-decoration: underline green;font-size: 30px;font-weight: bold;">Profit
 </div>
 <textbox style="margin-left:20px;font-size:8px">Current Month</textbox>
  <p style="margin-top:2px;margin-left:23px">2345</p>
   <p style="margin-top:-10px;margin-left:23px;font-size:8px">Last Month</p>
    <p style="margin-top:2px;margin-left:23px">2345</p>
  
<div style="margin-top:10px;margin-left:20px;margin-bottom:40px" id="bar">

<canvas id="myChart" width="20" height="20"></canvas>

</div>

</div><!-- flip card front -->
<div class="flip-card-back">
<i class="fa fa-chevron-circle-left" onclick="returnn()" style="font-size:24px;margin-left:230px;margin-top:5px"></i>
<div style="margin-left:20px;margin-top:20px;text-decoration: underline green;font-size: 30px;font-weight: bold;">Monthly Profit
 </div>
 <div style="margin-top:-1px;margin-left:20px;font-size: 20px;font-weight: bold;">
 <p id="month">
 
 </p>
 </div>
 <div style="margin-top:-1px;margin-left:20px;font-size: 20px;font-weight: bold;">
 <p id="value">
 
 </p>
 </div>
</div><!-- flip card back -->

</div><!-- flip card inner div-->


</div><!-- Main flip card element div-->

  
  
  
  
  
  
  
  `;
  
  console.log("Step3");

    
   
  
  customElements.define('com-sap-sample-helloworld5', class HelloWorld extends HTMLElement     {
  
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
       console.log("Step-11");
        
       
 var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July","August","Sep","Oct","Nov","Dec"],
    datasets: [
        {
            label: "Sales Per Month",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 30, 81, 56, 55, 40,70,34,65,23,65],
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
        
        alert(url);
        alert(this);
       shadowRoot.getElementById("month").innerHTML=label;
       shadowRoot.getElementById("value").innerHTML=value;
       shadowRoot.getElementById("flip-card-inner").style.transform = "rotateY(180deg)"; 
       
      }
    };
        
   

        }
      returnn()
     {
     this.shadowRoot.getElementById("flip-card-inner").style.transform = "rotateY(360deg)"; 
    }

        
        
    
    
    });
    
   
})();
