<!DOCTYPE html>
<html>
    <!------------------ AMAL AND FARAH -------------------------> 
    <head>
        <meta charset="utf-8">
        <title>Control Panel</title>
        <link rel="stylesheet" href="StyleSheet.css">
        <script src="Script.js"></script>

    </head>
    <body>
                <aside>
                    <table id="Table">
            <tr>
                <td>Dirction</td>
                <td>Length</td>
            </tr> 
        </table>
        </aside>
    
    
        <form>
            <fieldset>
                <legend align="center"> Control Panel </legend>

                <br><br> 
                    <select id="Select">
                        <option>Left</option>
                        <option>Right</option>
                        <option>Forward</option>
                        <option>Backwards</option>
                    </select>

                <input required type="number" id="pointer" >
                    <br>
                    <br>    
                    <br>
                <input value="save" type="submit" onClick="func1(); return false;"/>
                
                <input value="delete" type="submit" onClick="func2(); return false;"/>
                
                <input type="reset">

            </fieldset>
        </form>
    
        <canvas id="Canvas" width="1000" height="1000" > </canvas>


    </body>
    
    
</html>
        