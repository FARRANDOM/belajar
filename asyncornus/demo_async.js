//controller
// function input () {
//     const data = new Object();
//     data.nama = document.getElementById("nama").value;
//     data.kelas = document.getElementById("kelas").value;
//     data.alamat = document.getElementById("alamat").value;
//     data.nohp = document.getElementById("nohp").value;
//     data.email = document.getElementById("email").value;
    
//     console.log(data);
//      showInput(data);
// }


// Controller untuk menampung velue yang ada didalam field
function register() {
    const data = new Object();
    data.email = document.getElementById("email").value;
    data.nama = document.getElementById("nama").value;
    data.kelas = document.getElementById("kelas").value;
    data.umur = document.getElementById("umur").value;
    data.nilai = document.getElementById("nilai").value;
// simpan(data)
    // console.log(data)
}

function login() {
    const data = new Object();
    data.email = document.getElementById("nama")
    data.nama = document.getElementById("email")
}

// Service untuk mengolah data ke dalam database
// function simpan(data) {
// console.log(data)
// }


