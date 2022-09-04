



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


    
        const d = new Date();
        let time = d.getTime();
        
        
        title=document.getElementById("title-text")
        title.innerHTML=time
        
        
        
        
        
        var trace1 
        var data;
        
        var layout = {
          xaxis: {title: '$x^2$'}
        };
        
        // console.log(trace1)
        var config = {responsive: true}
        
        
        
        
        let myForm = document.getElementById('my-form')
        let fForm = document.getElementById('frequency-form')
        // console.log(fForm)
        const frequencyInput = document.getElementById('frequency');
        const amplitudeInput = document.getElementById('amplitude');
        // console.log(frequencyInput.value)
        fForm.addEventListener('submit', calculateAndPlot);
        
        function calculateAndPlot(e){
            console.log(frequencyInput.value,amplitudeInput.value);
            e.preventDefault();

            
            // dp=dp.subtract(0.0)
            omega=parseFloat(frequencyInput.value);
            amplitude=parseFloat(amplitudeInput.value);
            pts=omega*amplitude;
            dx=0.01*10/pts;
            let dp=nj.arange(0,10,dx);
            xdata=[];
            ydata=[];
            for(i=0;i<dp.size;i++){
                var xi=dp.get(i);
                var yi=amplitude*hk_sin(omega*xi);
                
                xdata=xdata.concat([xi]);
                ydata=ydata.concat([yi]);
            }
            trace1= {
                x: xdata,
                y: ydata,
                mode: 'lines+markers',   
                marker: {
                    color: 'rgb(128, 0, 128)',
                    size: 1
                },
                line: {
                    width: 1,
                    dash: 'dash'
                }
            };
            data= [ trace1 ];
            Plotly.newPlot('myDiv', data, layout,config);
        }
        
        
        
        
        
        
    
    


