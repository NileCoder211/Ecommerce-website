let MenuItems=document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function togglemenu(){
    if(MenuItems.style.maxHeight === "0px"){
        MenuItems.style.maxHeight = "200px";
    }else{
        MenuItems.style.maxHeight = "0px";
    }
}