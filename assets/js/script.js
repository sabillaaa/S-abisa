var depan = document.getElementById('depan')
var belakang = document.getElementById('belakang')
var biografi = document.getElementById('biografi')
var situs = document.getElementById('situs')
var twitter = document.getElementById('twitter')
var facebook = document.getElementById('facebook')
var linkedin = document.getElementById('linkedin')
var keluar = document.getElementById('keluar')

var btnSubmit = addEventListener('submit', function () {
    var valdepan = depan.value
    var valbelakang = belakang.value

    this.alert('Berhasil Disimpan, nama: ' + valdepan + ' ' + valbelakang)
})


// --- JQUERY ------

$(function () {
    $('#keluar').click(function () {
        alert('Berhasil Keluar, Anda akan dialihkan ke halaman awal')
        window.location.href = "index.html";
    })
})

$(document).ready(function () {

    $("#hilang").click(function () {
        $("#pembahasan, #subt").slideUp("slow");
    })

    $("#muncul").click(function () {
        $("#pembahasan, #subt").slideDown("fast");
    })

});

