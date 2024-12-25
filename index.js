let guestList = ["Alvin Jay", "Jhunrick", "Royd"]

$(".enter-guestname-btn").on("click", function(){
    let userInput = document.querySelector(".guest-name").value;
    console.log(userInput);
    console.log(guestList.includes(userInput));
    if (guestList.includes(userInput) == true){
        $(".guest-pop-up, .cover").addClass("hide-popup")
    }else{
        alert("I'm sorry but the name you've entered is not in the guest list. Please check the spelling of the name")
    }
    
});