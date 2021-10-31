const menu = document.querySelectorAll(".nav_link")
let actual_page = "#home"
let actual_link ="#Move_Green"
for(const link of menu){
    link.addEventListener("click", function(e){
        //output
        document.querySelector(actual_page).style.animation = "output_page 0.5s ease forwards 0s"
        document.querySelector(actual_link).style.color = "white"
        //input
        document.querySelector("#"+ e.target.id).style.animation = "input_page 0.5s ease forwards 0s"
        document.querySelector("#"+ e.target.id).style.color = "red"
        actual_page = "#"+ e.target.id;
    })

}

