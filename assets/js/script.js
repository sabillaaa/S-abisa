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


// Signup
// var daftar = document.getElementById('btndaftar')
var nama = document.getElementById('nama')
var password = document.getElementById('passwd')
var repassword = document.getElementById('repass')

function daftar() {
    // this.addEventListener('click', function () {
    if (password.value != repassword.value) {
        this.alert('Password harus sama')
    } else {
        this.alert('Selamat ' + nama.value + ' berhasil mendaftar.')
        // this.alert('Selamat ' + nama.value +' berhasil mendaftar.')
    }
    // })
}


// Login
var pass = document.getElementById('pass')
var email = document.getElementById('email')

function login() {
    // button.addEventListener('click', function () {
    if (email.value != '' && pass.value != '') {
        redirect = setTimeout(function () {
            window.location = "Menu_utama.html";
        }, 100);
        alert('Selamat berhasil Login.')
        redirect;
    } else {
        this.alert('data diisi dulu!')
    }
    // })
}


// --- JQUERY ------

$(function () {
    $('#keluar').click(function () {
        redirectku = setTimeout(function () {
            window.location = "Menu_utama.html";
        }, 200);;
        alert('Berhasil Keluar, Anda akan dialihkan ke halaman awal')
        redirectku
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


//menu_instruktur

$('.point1').click();
$('.point2').hide();
$('.point3').hide();

$('.click-keberhasilan1').on("click", function () {
    $('.point1').show();
    $('.point2').hide();
    $('.point3').hide();
    $(".click-keberhasilan1").addClass("keberhasilan");
    $(".click-keberhasilan1").addClass("color");
    $(".click-keberhasilan3").removeClass("keberhasilan");
    $(".click-keberhasilan3").removeClass("color");
    $(".click-keberhasilan2").removeClass("keberhasilan");
    $(".click-keberhasilan2").removeClass("color");
})
$('.click-keberhasilan2').on("click", function () {
    $('.point1').hide();
    $('.point2').show();
    $('.point3').hide();
    $(".click-keberhasilan1").removeClass("keberhasilan");
    $(".click-keberhasilan1").removeClass("color");
    $(".click-keberhasilan3").removeClass("keberhasilan");
    $(".click-keberhasilan3").removeClass("color");
    $(".click-keberhasilan2").addClass("keberhasilan");
    $(".click-keberhasilan2").addClass("color");
})
$('.click-keberhasilan3').on("click", function () {
    $('.point1').hide();
    $('.point2').hide();
    $('.point3').show();
    $(".click-keberhasilan1").removeClass("keberhasilan");
    $(".click-keberhasilan1").removeClass("color");
    $(".click-keberhasilan2").removeClass("keberhasilan");
    $(".click-keberhasilan2").removeClass("color");
    $(".click-keberhasilan3").addClass("keberhasilan");
    $(".click-keberhasilan3").addClass("color");
})

// parallax

// $(window).scroll(function(){

//     var wScroll = $(this).scrollTop();
//     // if (wScroll > $('.kursus-menu').offset().top -250 ){
//     //     $('.kursus-menu .img-menu').addClass('muncul')
//     // }
// })


//Api index

var app = new Vue({
    el: '#app',
    data: {
        lokasi: ""
    },

    created() {
        if (navigator.geolocation) {
            var vm = this
            var pos = navigator.geolocation.getCurrentPosition(function (position) {
                axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyAC20nn30_wjSVrrajvwtyQOi0m7Oognuo')
                    .then(function (response) {
                        // handle success
                        vm.lokasi = response.data['results'][response.data['results'].length - 1]['address_components'][0].long_name
                    })
                // vm.lokasi =  position.coords.latitude
                // vm.lng =  position.coords.longitude
            })


        }

    },

    // mounted() {
    //   if(navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition( function  (position) {
    //     var vm = this
    //     axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&key=AIzaSyAC20nn30_wjSVrrajvwtyQOi0m7Oognuo')
    //       .then(function (response) {
    //         // handle success
    //         // console.log(response.data['results'][8]['address_components'][0].short_name);

    //         vm.lokasi = response.data['results'][8]['address_components'][0].short_name
    //       })

    //     // this.pos = {
    //     //   lat: position.coords.latitude,
    //     //   lng: position.coords.longitude
    //     // }
    //   })
    //   }

    // }
})