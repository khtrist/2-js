
var times = new Date();
    var hours = times.getHours();
   if (6 <= hours && hours < 16) {
    document.body.style.backgroundColor = 'yellow'
      //alert ("Sabahin xeyr")
    }
    else (17 <= hours && hours < 23) ;{
        document.body.style.backgroundColor = 'red'
        //alert ("Axshamin xeyr")
    }
   
    document.getElementById("time").innerHTML = document.body ='ones';
    
    function Show(){
      
      let value = document.getElementById('input').value;
      const str = value
      
      if(str.slice(0, 2) === 'P1'){
        document.body.style.backgroundColor = 'yellow'
        alert ("PROGRAMLASDIRMA SEHER QRUPU")
        }
      if(str.slice(0, 2) === 'P2'){
        document.body.style.backgroundColor = 'green'
        alert ("PROGRAMLASDIRMA GUNORTA QRUPU")
        }
      else if(str.slice(0, 2) === 'P3'){
        document.body.style.backgroundColor = 'blue'
        alert ("PROGRAMLASDIRMA AXSAM QRUPU")
        }

       else if(str.slice(0, 2) === 'M1'){
      document.body.style.backgroundColor = 'Orange'
      alert ("MARKETING SEHER QRUPU")
       }
     else if(str.slice(0, 2) === 'M2'){
      document.body.style.backgroundColor = 'salmon'
      alert ("MARKETING GUNORTA QRUPU")
      }
      else if(str.slice(0, 2) === 'M3'){
        document.body.style.backgroundColor = 'peru'
        alert ("MARKETING AXSAM QRUPU")
        }


        else if(str.slice(0, 2) === 'D1'){
          document.body.style.backgroundColor = 'pink'
          alert ("DIZAYN SEHER QRUPU")
           }
         else if(str.slice(0, 2) === 'D2'){
          document.body.style.backgroundColor = 'olive'
          alert ("DIZAYN GUNORTA QRUPU")
          }
          else if(str.slice(0, 2) === 'D3'){
            document.body.style.backgroundColor = 'hotpink'
            alert ("DIZAYN AXSAM QRUPU")
            }

           
  }