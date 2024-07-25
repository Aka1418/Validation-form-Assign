
function submitForm(event){
    event.preventDefault();

    var Name = document.getElementById("name").value,
    email = document.getElementById("email").value,
    age = document.getElementById("age").value,
    dob = document.getElementById("dob").value,
    pass = document.getElementById("pass").value,
    passconfirm = document.getElementById("passconfirm").value;

    var data = [
        {
            name: Name,
            email: email,
            age: age,
            dob: dob,
            pass: pass,
            passconfirm: passconfirm
        }
    ]
    
    var sendingData = JSON.stringify(data);
    localStorage.setItem("userData", sendingData);
    window.location.href = "./Dashboard/Index.html";
}

    document.getElementById("form").addEventListener("submit", submitForm);

    function printData(){
        var data = JSON.parse(localStorage.getItem("userData"));

        var Name = document.getElementById("name");

        for (let index = 0; index < data.length; index++){
            Name.innerHTML = data[index].name;
        }
    };