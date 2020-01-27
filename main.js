var paragraph ={
    content: "In response to 'My website is a shifting house next to a river of knowledge. What could yours be?' by Laurel Schwulst <br><br> What is website? How do we as artists"

}

function responsepage(){
    var container = document.querySelector(".container");
    var para = document.querySelector("#text");
    console.log("yes");
    // var para = document.createElement("p");
    // para.className = "para";
    // para.innerHTML = paragraph.content;
    // container.appendChild(para);
    

    if (para.style.display == "none") {
        para.style.display = "block";
      } else {
        para.style.display = "none";
      }
}



// function mailto(){
    
// }