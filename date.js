const h1 = document.querySelector('.container h1')
const data = new Date

function diaSemana (data){
if (data.getDay() === 0){
    return 'Domingo'
}else if (data.getDay() === 1){
    return 'Segunda'
}else if (data.getDay() === 2){
    return 'Terça'
}else if (data.getDay() === 3){
    return 'Quarta'
}else if (data.getDay() === 4){
    return 'Quinta'
}else if (data.getDay() === 5){
    return 'Sexta'
}else if (data.getDay() === 6){
    return 'Sábado'
}
}
 function MesAno(data){
    if (data.getMonth() === 5){
        return 'Junho'
    }
 }

 function addzero(Number){
   return Number >= 10 ? Number : `0${Number}`
    }
 
function dataCompleta(data){
    const DiaSemana = diaSemana(data);
    const mesAno = MesAno(data);
    const diaMes = data.getDate();
    const ano = data.getFullYear();
    const hora = addzero(data.getHours());
    const minuto = addzero(data.getMinutes());
    const segundo = addzero(data.getSeconds());

    return `${DiaSemana}, ${diaMes} de ${mesAno} de ${ano}, ${hora}:${minuto}:${segundo}`
    
}

h1.innerHTML = dataCompleta(data)