        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)) 

        $(window).scroll(function () { 
    if ($("#header").offset().top >60){
        $("#header").addClass("bg-color");
    } else{
        $("#header").removeClass("bg-color");
    }
});
