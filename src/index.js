const spinettaMessages = [
    "Reconsidera el amor por la materia sonora",
    "Todas las hojas son del viento",
    "Cómo harás para ver y aliviar el dolor en el jardín de gente",
    "Como el sol y la afeitadora eléctrica",
    "Duerme un poco y yo entretanto construiré un castillo con tu vientre",
    "Y la mujer que sabe el devenir porque ve mirando con el ojo del sur",
    "Hoy hace su gracia el muñeco de marfil que sueña que sueña y se va",
    "Dale gracias por estar, por crecer y engendrar cerca de ti",
    "El duende del tiempo aunque no sabe contar",
    "Con una sola vez en la que el viento diga tu nombre mi corazón latirá muy fuerte hasta llegar"
];

const spinettaCommit = () => {
    const spinettaMessage = spinettaMessages[Math.floor(Math.random()*spinettaMessages.length)];
    console.log(`\x1b[34m${spinettaMessage}\x1b[89m`);
}

module.exports = {
    spinettaCommit
};
