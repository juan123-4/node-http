function pagina() {
    const Hobbies = [
      {
        Que_es:
          'Actividad que, como afición o pasatiempo favorito, se practica habitualmente en los ratos de ocio.',
      },
  
      { verPeliculas_accion: ['Superman', 'Terminator', 'Matrix', 'Spiderman'] },
      { Ver_anime: ['Black clover', 'Naruto', 'Pokemon'] },
      {
        Futbol:
          'Jugar fútbol con regularidad te ayudará a desarrollar habilidades físicas fundamentales, como la resistencia, la fuerza muscular, la velocidad y la agilidad.',
      },
    ];
    return JSON.stringify(Hobbies, null, 2);
  }
  module.exports = { pagina };
  