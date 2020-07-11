/* AMAL AND FARAH */
         function func1(){   
                    if(document.getElementById("pointer").value==""){
                        alert("enter lenght");
                    }else{
                    if (localStorage.clickcount) {
                        localStorage.clickcount = Number(localStorage.clickcount) + 1;
                    } else {

                      localStorage.clickcount = 1;
                        var line={x:100,
                                  y:100};
                        localStorage.setItem("line", JSON.stringify(line));
                    }

                 ///////////////////////////
                var canvas = document.getElementById("Canvas");
                if (canvas.getContext) 
                {
                 var ctx = canvas.getContext('2d');
                    ctx.beginPath();
                    ctx.lineWidth = "3";
                    ctx.strokeStyle = "black";
                    ctx.moveTo(JSON.parse(localStorage.getItem("line")).x, JSON.parse(localStorage.getItem("line")).y);
                    var n1,n2;
                    if(document.getElementById("Select").value=="Left"){
                        n1= (JSON.parse(localStorage.getItem("line")).x) - (document.getElementById("pointer").value);
                        n2= JSON.parse(localStorage.getItem("line")).y;
                    }
                    if(document.getElementById("Select").value=="Right"){
                        n1= Number(JSON.parse(localStorage.getItem("line")).x) + Number(document.getElementById("pointer").value);
                        n2= JSON.parse(localStorage.getItem("line")).y;    
                    }
                    if(document.getElementById("Select").value=="Forward"){
                        n1= JSON.parse(localStorage.getItem("line")).x ;
                        n2= (JSON.parse(localStorage.getItem("line")).y) - (document.getElementById("pointer").value);
                    }
                    if(document.getElementById("Select").value=="Backwards"){
                        n1= JSON.parse(localStorage.getItem("line")).x ;
                        n2= Number(JSON.parse(localStorage.getItem("line")).y) + Number(document.getElementById("pointer").value);
                    }
                    var line={x:n1,
                              y:n2,}
                    localStorage.setItem("line", JSON.stringify(line));
                    ctx.lineTo(n1, n2);
                    ctx.stroke();    
                      var table = document.getElementById("Table");
                  var row = table.insertRow(Number(localStorage.clickcount));
                  var cell0 = row.insertCell(0);
                  var cell1 = row.insertCell(1);
                  cell0.innerHTML = document.getElementById("Select").value;
                  cell1.innerHTML = document.getElementById("pointer").value;
                }}} // end method



                function func2(){ 
                    localStorage.clear();
                    location.reload();
                }


