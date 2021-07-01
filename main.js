const themetoggleexample = document.getElementById("toggle-btn");
themediv = document.getElementById("themebuttondiv");
const themetogglestore = localStorage.getItem("themetoggleexample");

if (themetogglestore) {
  themediv.classList.remove("init");
}

themetoggleexample.onclick = () => {
  if (themediv.classList.contains("init")) {
    themediv.classList.remove("init");
    localStorage.setItem("themetoggleexample", "theme-dark");
  } else {
    themediv.classList.add("init");
    localStorage.removeItem("themetoggleexample");
  }
};

var dt = new Date();
document.getElementById("time").innerHTML = dt.toLocaleTimeString();