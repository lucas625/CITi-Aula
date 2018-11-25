$('document').ready(()=>{
    $.get('/get_items', (res)=>{
        const data = JSON.parse(res);//recebemos uma string no formato de json, ai passamos para json
        data.forEach((each) => {
            $('#items').append(`<p>${each}</p>`);
        });
    });
});