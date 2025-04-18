function validarDadosLogin(){
    event.preventDefault();
    

    const name = document.getElementById('name').value.trim();

    const email = document.getElementById('email').value.trim();

    const tel = document.getElementById('tel').value.trim();

    const password = document.getElementById('password').value.trim();

    const confirmpass = document.getElementById('confirmpass').value.trim();

    const date = document.getElementById('date').value.trim();

    const country = document.getElementById('country').value.trim();

    const state = document.getElementById('state').value.trim();
    
    const city = document.getElementById('city').value.trim();

    const street = document.getElementById('street').value.trim();

    const Hnumber = document.getElementById('Hnumber').value.trim();

    const cep = document.getElementById('cep').value.trim();

    const Himage = document.getElementById("Himage");

    const HColor = document.getElementById('HColor').value.trim();

    const rbrYes = document.querySelector('input[name="resp"]:checked');

    const likeH = document.getElementById('likeH');

    const scuderia = document.getElementById('scuderia');

    const Pilotos = document.getElementById('Pilotos');

    const animal = document.getElementById('animal');

    const hobbie = document.getElementById('hobbie');

    const carmodel = document.getElementById('carmodel');

    const carcolor = document.getElementById('carcolor');

    const color = document.getElementById('color');

    const HairColor = document.getElementById('HairColor');

    const EyeColor = document.getElementById('EyeColor');

    const likeRBR = document.getElementById('likeRBR');

    const genderSelected = document.querySelector('input[name="gender-c"]:checked');



    
    console.log(name, email, tel, password, confirmpass, date, country, state, city, street, Hnumber, cep, Himage, HColor, rbrYes, likeH, 
    scuderia, Pilotos, animal, hobbie, carmodel, carcolor, color, HairColor, EyeColor, likeRBR);
    

    //NAME
    const nomeValido = /^[A-Za-zÀ-ÿ\s]+$/;
    
    if (!name) {
        alert('Please enter your name');
        return false;
    }
    
    if (!nomeValido.test(name)) {
        alert('The name must contain only letters and spaces');
        return false;
    }
    
    
    //email
    if(!email){
        alert('Please enter your email');
        return false;
    }
    
    
    //phone
    const validtel = /^\d{10,15}$/;
    
    if (!tel) {
        alert("Please enter your phone number");
        return false;
    }
    if (!validtel.test(tel)) {
        alert("Phone must contain only numbers (10 to 15 digits)");
        return false;
    }
    
    
    //password
    if(!password || password.length < 8){
        alert("Please enter a password that is at least 8 digits long.");
        return false;
    }
    
    if(!confirmpass || confirmpass !== password){
        alert('Please enter the same password in confirmation');
        return false;
    }
    
    
    // DATE OF BIRTH
    if (!date) {
        alert("Please enter your date of birth");
        return false;
    }
    
    
    //Country
    const CountryVal = /^[A-Za-zÀ-ÿ\s]+$/;
    
    if (!country) {
        alert('Please enter your Country');
        return false;
    }
    
    if (!CountryVal.test(country)) {
        alert('The Country must contain only letters and spaces');
        return false;
    }


    //State
    const StateVal = /^[A-Za-zÀ-ÿ\s]+$/;
    
    if (!state) {
        alert('Please enter your State');
        return false;
    }
    
    if (!StateVal.test(state)) {
        alert('The State must contain only letters and spaces');
        return false;
    }


    //City
    const CityVal = /^[A-Za-zÀ-ÿ\s]+$/;
    
    if (!city) {
        alert('Please enter your City');
        return false;
    }
    
    if (!CityVal.test(city)) {
        alert('The City must contain only letters and spaces');
        return false;
    }



    //Street
    if (!street) {
        alert('Please enter your Street');
        return false;
    }


    //House_Number
    if (!Hnumber) {
        alert('Please enter your House Number');
        return false;
    }


    //Zip Code/CEP
    const validcep = /^\d{8,9}$/;
    
    if (!cep) {
        alert("Please enter your Zip Code/CEP");
        return false;
    }
    if (!validcep.test(cep)) {
        alert("Zip Code/CEP must contain only numbers (8 (cep) to 9 (Zip Code) digits)");
        return false;
    }

    //House_Photo
    if (!Himage || !Himage.files || Himage.files.length === 0) {
        alert('Please upload a House Photo');
        return false;
    }


    //House_Color
    if (!HColor) {
        alert('Please enter your House Color');
        return false;
    }


    //LIKE RBR
    if (!rbrYes || rbrYes.value !== "yes") {
        alert("You must answer 'yes' to 'Do you like RBR'");
        return false;
    }


    //House_Like
    if (!likeH) {
        alert('Please enter your House score');
        return false;
    }


    //Scuderia
    if (scuderia.value !== "Red_Bull_Racing") {
        alert("You must select Red Bull Racing as the best scuderia.");
        return false;
    }


    //Pilotos
    if (Pilotos.value !== "Red_Bull_Racing1") {
        alert("You must select the option with Max Verstappen as the best pilot.");
        return false;
    }


    //Animal
    if (animal.value !== "a1") {
        alert("You must select the bull as your favorite animal.");
        return false;
    }


    //Hobbie
    if (!hobbie) {
        alert("Please enter your Hobbies.");
        return false;
    }



    //Car_Model
    if (!carmodel) {
        alert("Please select a Car Model.");
        return false;
    }



    //Car_Color
    if (!carcolor) {
        alert("Please select a car Color.");
        return false;
    }



    //Color
    if (!color) {
        alert("Please select a Favorite Color.");
        return false;
    }



    //Hair_Color
    if (!HairColor) {
        alert("Please select a Hair Color.");
        return false;
    }



    //Eye_Color
    if (!EyeColor) {
        alert("Please select an Eye Color.");
        return false;
    }


    //RBRlike
    if (likeRBR.value != 10) {
        alert("Please select a score of 10 for how much you like RBR.");
        return false;
    }


    //Gender
    if (!genderSelected) {
        alert("Please select your gender.");
        return false;
    }

    
    window.location.href = "index.html";
    return false;
}