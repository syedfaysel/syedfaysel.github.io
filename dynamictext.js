
    const texts = [
        "Hello I am",
        "Syed Faysel Ahammad Rajo.",
        "A junior", "Web developer.",
        "Studying at BracU", "Website under construction","Life under construction"
    ];
    let count = 0;
    let index = 0;
    currentText = "";
    let letter = "";

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector(".typing").textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }
        setTimeout(type, 150);
        // setInterval(type, 1000)
    })();

//   function func() {
//     console.log("Ran");
//   }
//   setInterval(func, 1000); //Runs the "func" function every second