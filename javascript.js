var gc = document.getElementById('gridcont');
temp = 0;





function makegrid() {
  
    if (temp < 256){
        
           subdiv = document.createElement('div');
            subdiv.setAttribute('class', 'subdiv');
            subdiv.style.cssText = 'background-color: Grey; width: 40px ; height: 40px; display: block; justify-content: center !important; margin: 0px ; padding: 0px; border: 0.1px solid darkgrey;';
            gc.appendChild(subdiv);
            temp++;
            makegrid();
    }
    else{
        return;
    }


}




