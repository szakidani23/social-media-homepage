var settingsmenu = document.querySelector(".settings-menu"); //Dropdown//
var darkBtn = document.getElementById("dark-btn");   //Dropdown Dark mode button//

function settingsMenuToggle(){ //Dropdown//
    settingsmenu.classList.toggle("settings-menu-height"); 
}

darkBtn.onclick = function(){   //DarkMode//
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark");
  }

  else{
    localStorage.setItem("theme", "light");
  }


}

if(localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
}

else if (localStorage.getItem("theme") == "dark"){
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
}

else{
    localStorage.setItem("theme", "light");
}
