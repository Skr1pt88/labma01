function config() {

    let dni_elements = {
        numero: document.getElementById("dni-number") || {},
        surname: document.getElementById("dni-surname") || {},
        name: document.getElementById("dni-name") || {},
        sex: document.getElementById("dni-sex") || {},
        birth: document.getElementById("dni-birth") || {},
        issue: document.getElementById("dni-issue") || {},
        expiration: document.getElementById("dni-expiration") || {},
        tramite_num: document.getElementById("dni-tramite-num") || {},
        ejemplar: document.getElementById('dni-ejemplar') || {},
        image: document.getElementById('dni-image') || {},
        address: document.getElementById('dni-address') || {},
        mrz: document.getElementById('dni-mrz') || {},
        firma: document.getElementById('dni-firma')
    }
    
    dni_elements.surname.innerText = localStorage.getItem('dni_surname') || 'VIDAL DARMANDRAIL'
    dni_elements.name.innerText = localStorage.getItem('dni_name') || 'LAUREANO'
    dni_elements.sex.innerText = localStorage.getItem('dni_sex') || 'M'
    dni_elements.birth.innerText = localStorage.getItem('dni_birthdate') || '23 MAY/ MAY 2005'
    dni_elements.issue.innerText = localStorage.getItem('dni_emission') || '22 SET/ SET 2012'
    dni_elements.expiration.innerText = localStorage.getItem('dni_expiration') || '23 ABR/ ABR 2038'
    dni_elements.tramite_num.innerText = localStorage.getItem('dni_tramite_num') || '007038858087509'
    dni_elements.ejemplar.innerText = localStorage.getItem('dni_ejemplar') || 'A'
    dni_elements.numero.innerText = localStorage.getItem('dni_numero') || '46.033.971'
    dni_elements.image.src = localStorage.getItem('dni_image') || 'res/foto_dni.png'
    dni_elements.firma.src = localStorage.getItem('dni_firma') || 'res/firma_dni.png'
    dni_elements.address.innerHTML = '<font style="font-size: calc(7px * var(--dni-size-multiplier)); font-weight: 500; letter-spacing: 0;">DOMICILIO</font>' + (localStorage.getItem('dni_address') || 'ESPAÑA 906 -SAN ISIDRO- SAN ISIDRO - BUENOS AIRES'); 
    dni_elements.mrz.innerText = localStorage.getItem('dni_mrz')
}
