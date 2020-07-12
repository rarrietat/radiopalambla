/* Efecto scroll header */
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

/* Reproductor de música */
jQuery(function () {
    jQuery("#lbg_audio9_html5_radio_zuper_1").audio9_html5({
        radio_stream: "http://82.145.41.107:33002/;stream;",//http://freeuk19.listen2myradio.com:33002/;  //http://82.145.41.107:33002/;
        radio_name: "RADIO PALAMBLA",
        playerWidth: 355,
        imageHeight: 355,
        skin: "blackControllers",
        responsive: true,
        grabLastFmPhoto: true,
        autoPlay: true,
        songTitleColor: "#ffffff",
        authorTitleColor: "#ffffff",
        lineSeparatorColor: "#ffffff",
        radioStationColor: "#ffffff",
        frameBehindTextColor: "#000000",
        buttonsOffState: "#ffffff",
        buttonsOnState: "#00AFEF",
        sticky: false,
        startMinified: false,
        centerPlayer: false,
        playerBorderSize: 0,
        playerBorderColor: "#000000",
        showFacebookBut: false,
        facebookAppID: "",
        facebookShareTitle: "HTML5 Radio Player With History - Shoutcast and Icecast",
        facebookShareDescription: "A top-notch responsive HTML5 Radio Player compatible with all major browsers and mobile devices.",
        facebookShareImage: "",
        showTwitterBut: false,
        showVolume: true,
        showBio: true,
        translateBio: "Bio",
        bioAndLyricsColor: "#000000",
        showRadioStation: true,
        showTitle: true,
        showHistoryBut: true,
        translateReadingData: "cargando datos...",
        historyTranslate: "Historial - canciones reproducidas",
        historyTitleColor: "#008aa4",
        historyBgColor: "#FFFFFF",
        historyBgColorAlpha: 0.9,
        historyRecordBgColor: "transparent",
        historyRecordBottomBorderColor: "transparent",
        historyRecordSongColor: "#000000",
        historyRecordSongBottomBorderColor: "#008aa4",
        historyRecordAuthorColor: "#6d6d6d",
        historyRecordThumbBorderColor: "#000000",
        numberOfThumbsPerScreen: 3,
        historyPadding: 16,
        historyRecordTitleLimit: 25,
        historyRecordAuthorLimit: 36,
        pathToAjaxFiles: "lbg-audio9_html5_radio_zuper/audio9_html5_radio_zuper/",
        nowPlayingInterval: 40,
        noImageAvailable: "lbg-audio9_html5_radio_zuper/audio9_html5_radio_zuper/noimageavailable.jpg",
        textureOverImage: "lbg-audio9_html5_radio_zuper/audio9_html5_radio_zuper/controllers/texture4x4_1.png"
    });
});

/* Carousel de auspiciadores */
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3 //aqui va 3
            },
            1000: {
                items: 3 //aqui va 5
            }
        }
    })
});


/* Smooth Scroll */
let buttons = document.querySelectorAll('a[href^="#"]');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.currentTarget.getAttribute('href');

        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/* Toggle Menu */
const toggleCollapse = document.querySelector('.icon');
const nav = document.querySelector('nav');
let links = document.querySelectorAll('.menu a');

toggleCollapse.onclick = (e) =>{
    e.target.classList.toggle('active');
    nav.classList.toggle('active');
    links.forEach((link) => {
        link.onclick = () => {
            nav.classList.remove('active');
            e.target.classList.remove('active');
            console.log(nav.classList);
        };
    });
}