
fetch("Data.json")
    .then(response => response.json())
    .then(data => {
        const Cars = data.cars;
        StartGame(Cars);
    });


function StartGame(Data) {

    function GetRandomCar() {
        let Random = Math.floor(Math.random() * Data.length);
        let Car = Data[Random];
        
        return Car;
    }

    let isPlaying = true;
    let Score = 0;

    let car1 = GetRandomCar();
    let car2 = GetRandomCar();

    while (isPlaying) { 

        while (car1 == car2) {
            car2 = GetRandomCar();
        }
        
        let Answer = window.prompt(`Which Car Is More Expensive ${car1.year} ${car1.brand} ${car1.model} ${car1[`car body`]} or ${car2.year} ${car2.brand} ${car2.model} ${car2[`car body`]}?; Type (Exit) To Exit`);

        if (Answer == 1 && car1.price > car2.price) {
            alert("Correct!");
            Score ++;
            car1 = car1;
            car2 = GetRandomCar();
        }
        else if (Answer == 2 && car2.price > car1.price) {
            car1 = car2;
            car2 = GetRandomCar();
        }
        else if (Answer == "Exit" || Answer == null || Answer == 3) {
            alert(`You'r Score is: ${Score}`);
            isPlaying = false;
        } else {
            alert("Incorrect Answer!"); 
            Score = 0; 
            let car1 = GetRandomCar();
            let car2 = GetRandomCar();
        }
    }
}


