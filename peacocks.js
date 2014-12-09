        var i=1
        var pic = "peacock.jpg";
        
        function changePic() {
            
            if (pic == "peacock.jpg") {
                document.getElementById("picture").src =
                "peacock2.jpg";
                pic = "peacock2.jpg"
            }
            else {
                document.getElementById("picture").src =
                "peacock.jpg";
                pic = "peacock.jpg"
            }
        }
        
        
        
        function clearReasons() {
            divOutput = document.getElementById("divOutput");
            divOutput.innerHTML = ""
            i=1;
        }
        
        function addReasons() {
            reason = document.getElementById("reason");
            divOutput = document.getElementById("divOutput");
            msg = reason.value;
            divOutput.innerHTML += i + ". " + msg + "</br>";
            i++
            
            if (i>6) {
            divOutput = document.getElementById("divOutput");
            divOutput.innerHTML = "I can fly!";
            }}
