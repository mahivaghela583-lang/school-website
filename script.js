function showMessage(){
alert("Welcome to Shree Saraswati Primary School");
}
s
function showData(){

var name = document.getElementById("name").value;
var birthday = document.getElementById("birthday").value;
var className = document.getElementById("class").value;
var mobile = document.getElementById("mobile").value;

document.getElementById("result").innerHTML =
"Student Name: " + name + "<br>" +
"Birthday: " + birthday + "<br>" +
"Class: " + className + "<br>" +
"Mobile: " + mobile;

}
<script>
let form = document.getElementById("myForm");
let table = document.getElementById("dataTable");

// Load saved data
window.onload = function() {
    let data = JSON.parse(localStorage.getItem("students")) || [];

    data.forEach(function(item) {
        addRow(item.name, item.email, item.mobile);
    });
};

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;

    addRow(name, email, mobile);

    let data = JSON.parse(localStorage.getItem("students")) || [];
    data.push({name, email, mobile});

    localStorage.setItem("students", JSON.stringify(data));

    form.reset();
});

// Function to add row
function addRow(name, email, mobile) {
    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = mobile;
}
</script>
<script>
const gallery = document.getElementById("gallery");

// Load saved images
window.onload = function() {
    const saved = JSON.parse(localStorage.getItem("images")) || [];

    saved.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        gallery.appendChild(img);
    });
};

// Upload images
document.getElementById("upload").addEventListener("change", function(e) {
    const files = e.target.files;

    let saved = JSON.parse(localStorage.getItem("images")) || [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = function(event) {
                const img = document.createElement("img");
                img.src = event.target.result;

                gallery.appendChild(img);

                saved.push(event.target.result);
                localStorage.setItem("images", JSON.stringify(saved));
            };

            reader.readAsDataURL(file);
        }
    }
});
</script>