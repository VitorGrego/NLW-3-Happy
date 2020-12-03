const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela 
    await saveOrphanage(db, {
        lat: "-27.2212551", 
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Pesta assistencia a crianças de 06 a 13 anos que se encontre em situação de risco e/ou vunabilidade social.",
        whatsapp: "9898989891",
        images: [
            "https://images.unsplash.com/photo-1592840330988-3c88e47c1aac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
            "https://images.unsplash.com/photo-1600720685534-34b48dc60ad2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horários de visitas Das 18h as 8h",
        open_on_weekends: "0"
    });
    
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    // consultar somente 1 orphanage, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2" ');
    console.log(orphanage);

    //deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id='6'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id='7'"))
})