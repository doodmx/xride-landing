
const swup = new Swup()



$(document).on('click',function(){ 
    $('.navbar .collapse').collapse('hide');})


// document.getElementById("btn_info_aereo").onclick()

async function showFormAereo(){
    let whiteSection = document.getElementById('section_white_transporte');
    document.getElementById('btn_solicitar_aereo').classList.remove('hidden');
    document.getElementById('btn_info_aereo').classList.add('hidden');
    if (whiteSection.classList.contains('hidden')){
        whiteSection.classList.remove('hidden');
        setTimeout(function(){
            whiteSection.classList.remove('visuallyhidden');
        }, 20);
    }
    
    document.getElementById('section_white_transporte').classList.remove('hidden');
    document.getElementById('descriptionTransporte').classList.add('float-up');
    $('.overlay').addClass('active');
    $('.btn_mostrar').removeClass('hidden');
}

async function hideFormAereo(){
    let whiteSection = document.getElementById('section_white_transporte');
    document.getElementById('btn_solicitar_aereo').classList.add('hidden');
    document.getElementById('btn_info_aereo').classList.remove('hidden');
    whiteSection.classList.add('visuallyhidden');
    whiteSection.addEventListener('transitionend',function(e){
        whiteSection.classList.add('hidden');
    },{
        capture: false,
        once: true,
        passive: false
    });

    document.getElementById('descriptionTransporte').classList.remove('float-up');
    document.getElementById('descriptionTransporte').classList.add('float-down');
    $('.overlay').removeClass('active');
    $('.btn_mostrar').addClass('hidden');
}


async function toggleModelsCatalogue(){
    let colTransporteLista = document.getElementById('col_transporte_lista');
    let btnMostrarCatalogo = document.getElementById('btn_mostrar_catalogo');
    // colTransporteLista.classList.toggle('hidden');

    if (colTransporteLista.classList.contains('hidden')){
        colTransporteLista.classList.remove('hidden');
        setTimeout(function(){
            colTransporteLista.classList.remove('visuallyhidden');
            
        }, 10);
        
    }else{
        colTransporteLista.classList.add('visuallyhidden');
        colTransporteLista.addEventListener('transitionend',function(e){
            colTransporteLista.classList.add('hidden');
            
        },{
            capture: false,
            once: true,
            passive: false
        });
    }

    if (btnMostrarCatalogo.innerHTML=='Mostrar catálogo'){
        btnMostrarCatalogo.innerHTML='Ocultar catálogo';
    }else{
        btnMostrarCatalogo.innerHTML='Mostrar catálogo';
    }


}

const colTransporteForm = document.getElementById('col_transporte_form');
const colTransporteLista = document.getElementById('col_transporte_lista');
const overlay = document.getElementById('overlay');


colTransporteForm.addEventListener('click', function handleOutsideClick() {
    if ($(window).width() <= 768) {
        let colTransporteLista = document.getElementById('col_transporte_lista');
        let btnMostrarCatalogo = document.getElementById('btn_mostrar_catalogo');
        if (!colTransporteLista.classList.contains('hidden')){
            toggleModelsCatalogue();
            btnMostrarCatalogo.innerHTML='Mostrar catálogo';
            console.log('Models toggled on mobile')
        }
        
    }
});

overlay.addEventListener('click', function handleOutsideClick() {
    if ($(window).width() <= 992) {
        let colTransporteLista = document.getElementById('col_transporte_lista');
        let btnMostrarCatalogo = document.getElementById('btn_mostrar_catalogo');
        if (!colTransporteLista.classList.contains('hidden')){
            toggleModelsCatalogue();
            btnMostrarCatalogo.innerHTML='Mostrar catálogo';
            console.log('Models toggled on mobile')
        }
        
    }
});

