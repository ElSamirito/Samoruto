const obtenerTiempoFaltante = deadline => {
    let now = new Date(),
    tiempoFaltante = ((new Date(deadline) - now) / 1000)+1;
    segundosFaltantes = ("0" + Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes = ("0" + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    horasFaltantes = ("0" + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    diasFaltantes = Math.floor(tiempoFaltante / (3600 * 24));

    return{tiempoFaltante, segundosFaltantes, minutosFaltantes, horasFaltantes, diasFaltantes}
};

const cuentaRegresiva = (deadline, el, elemDia, elemHora, elemMin, elemSeg, mensajeFinal) =>{
    const Dia = document.getElementById(elemDia);
    const Hora = document.getElementById(elemHora);
    const Min = document.getElementById(elemMin);
    const Seg = document.getElementById(elemSeg);

    const timerUpdate = setInterval(()=>{
        let t = obtenerTiempoFaltante(deadline);
        Dia.innerHTML = `${t.diasFaltantes}`;
        Hora.innerHTML = `${t.horasFaltantes}`;
        Min.innerHTML = `${t.minutosFaltantes}`;
        Seg.innerHTML = `${t.segundosFaltantes}`;

        if(t.tiempoFaltante < 1){
            clearInterval(timerUpdate);
            el.innerHTML = mensajeFinal;
        }
    }, 1000)
};

cuentaRegresiva("May 31 2021 17:00:00 GMT-0300", "reloj", "días", "horas", "mins", "segs", "El episodio ya está disponible, ve a disfrutarlo!!")