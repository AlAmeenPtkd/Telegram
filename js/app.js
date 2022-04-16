function darkMode(){
    var bt = document.getElementById("dark-btn");
    if(bt.value=="dark"){
    document.body.style.backgroundColor = "#121212";
    bt.value = "light";
    }else if(bt.value="light"){
        document.body.style.backgroundColor = "white"
        bt.value = "dark"
    }
}