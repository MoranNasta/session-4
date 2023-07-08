fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(countries =>
        { countries.forEach(elmt => {
           // console.log(elmt)
            if(elmt.currencies!=null){
                curr=elmt.name.common
            var option = document.createElement("option");
            option.value = curr;
            option.text = curr;
            document.getElementById('slct1').appendChild(option);

            }
        });})
fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(countries =>
        { console.log(countries)
            countries.forEach(elmt => {
           
            if(elmt.currencies!=null){
            curr=elmt.name.common
            var option = document.createElement("option");
            option.value = curr;
            option.text = curr;
            document.getElementById('slct2').appendChild(option);

            }
        }) })
function EXCH(){
                fetch('https://restcountries.com/v3.1/all')
                  .then(response => response.json())
                  .then(countries =>
                                    {var from,to
                                     countries.forEach(elmt =>
                                                            {if(document.getElementById('slct1').value==elmt.name.common)
                                                           {var from1=Object.keys(elmt.currencies)[0]
                                                        from=from1}})
                                     countries.forEach(elmt =>
                                                        {if(document.getElementById('slct2').value==elmt.name.common)
                                                            {var to1=Object.keys(elmt.currencies)[0]
                                                            to=to1}})
                                                          
                                                            {
                                                               
                                                             fetch('https://api.fastforex.io/fetch-multi?from='+ from+'&to='+ to+'&api_key=64dacb8e52-0b1659b0d3-rx2nrc')
                                                                   .then(response => response.json())
                                                                   .then(rate =>{console.log(rate)
                                                                                 document.getElementById('parag').innerHTML='1'+ from+' is equal to '+Object.values(rate.results)+ to+''
                                                                                }
                                                                        )
                                                            } 
                                                            
                                                        
                                    }
                            )

//curr=Object.keys(elmt.currencies)[0]
      //https://api.fastforex.io/fetch-multi?from=USD&to=EUR,GBP,CHF,LBP&api_key=64dacb8e52-0b1659b0d3-rx2nrc
        }