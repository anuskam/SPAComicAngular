import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  comics:Comic[] = [
    {
      nombre: "Jamás tendré 20 años",
      descripcion: "Se conocieron en 1936, durante el caos destructivo de la guerra civil española: Isabel es costurera, Jaime es artillero en el ejército republicano. Se aman. Luchan. Escapan de la muerte. Sin embargo, cuando cae la República, Jaime e Isabel están en el lado perdedor y, a veces, es más difícil sobrevivir en la paz que en la guerra. Después de creer en un mañana mejor, ¿cómo es posible callar bajo una dictadura?",
      img: "../assets/img/jamastendre20anios.jpeg",
      autore: "Jaime Martín",
      editorial: "Norma Editorial"
    },
    {
      nombre: "Siempre tendremos 20 años",
      descripcion: "Años ochenta, extrarradio de Barcelona. La España de la transición está lejos de ser un paraíso para los hijos de la clase obrera: violencia, pobreza, drogadicción, los vestigios de una dictadura que se resiste a desaparecer. Pero también la música rock, los colegas, las primeras fiestas, borracheras, y sobre todo la pasión por el dibujo, transformado para el joven Jaime en una auténtica arma de supervivencia y el instrumento con el que alcanzar sus sueños.",
      img: "../assets/img/siempretendremos20anios.jpeg",
      autore: "Jaime Martín",
      editorial: "Norma Editorial"
    },
    {
      nombre: "Dos monedas",
      descripcion: "Mar, una adolescente europea, viaja a Senegal acompañando a su madre, que trabaja en el proyecto de construcción de una biblioteca y una emisora de radio en un pueblo de agricultores y pescadores al norte de la región. Habituada a las comodidades y dinámicas del llamado primer mundo, a medida que se vaya aclimatando a los ritmos y costumbres del lugar irá tomando conciencia de que la mitad de su equipaje eran tópicos, prejuicios y desconocimiento. Sobre el terreno, Mar descubrirá una cultura sensual y hospitalaria, un paisaje de belleza insólita y una sociedad con problemáticas muy específicas y sometida a graves desajustes políticos, pero también ajena a muchas de nuestras servidumbres cotidianas.",
      img: "../assets/img/dosmonedas.jpg",
      autore: "Nuria Tamarit",
      editorial: "Ediciones La Cúpula"
    },
    {
      nombre: "Ari, cazador de dragones",
      descripcion: "En Nilak, un mundo helado que se muere, o tienes la suerte de montar dragones o de combatirlos. Para Ari, un joven cazador, no hay lagarto que se le resista, o eso creía… El encuentro con una extraña jinete y su dragón cambiará su vida, para siempre. ",
      img: "../assets/img/cazador_dragones.png",
      autore: "Manuel Gutiérrez / Xulia Vicente",
      editorial: "Sallybooks"
    },
    {
      nombre: "La piel del oso",
      descripcion: "Leer a diario el horóscopo al anciano Don Palermo, ese es el sencillo trabajo al que se dedica Amadeo, un chico de quince años que vive en un pequeño pueblo italiano. Sin embargo, Don Palermo no ha sido siempre un viejo desvalido, en su juventud fue un aspirante a mafi oso que trabajó a las órdenes de uno de los capos más poderosos de su ciudad.",
      img: "../assets/img/lapieldeloso.jpeg",
      autore: "Zidrou / Oriol",
      editorial: "Norma Editorial"
    },
    {
      nombre: "Naturalezas Muertas",
      descripcion: "¿Quién fue Vidal Balaguer i Carbonell? Nacido en Barcelona en 1873, está considerado uno de los grandes genios del Modernismo catalán. Vinculado al café bohemio Els 4 Gats, junto a su íntimo amigo Joaquim Mir, formó parte de la Colla del Safrà. Sin embargo, su figura nunca obtuvo el reconocimiento que merecía. ¿Quizá porque un día desapareció sin dejar una nota ni avisar a sus amigos? Muchas son las hipótesis que giran en torno a una figura que nunca estuvo ausente de controversia.",
      img: "../assets/img/naturalezasmuertas.jpeg",
      autore: "Zidrou / Oriol",
      editorial: "Norma Editorial"
    },
    {
      nombre: "Léo, Léa",
      descripcion: "Como en el caso de Léa, cada uno de nosotros viaja, entre su equipaje, con un recuerdo predilecto, su preferido. De tanto en tanto lo inflamos, como si fuera un salvavidas, para que nos ayude a permanecer a flote. Del mismo modo cada uno de nosotros lleva, en los bolsillos, un recuerdo que le pesa como un puñado de piedras, un recuerdo que lo arrastra hasta el fondo de la piscina. ¿Quién dijo que la vida era un viaje agradable?",
      img: "../assets/img/leolea.jpeg",
      autore: "Benoît Springer / Zidrou",
      editorial: "Norma Editorial"
    },
    {
      nombre: "Hacen falta hombres",
      descripcion: "1961 - Joseph regresa de Argelia. Para los habitantes del pueblo, no es más que un oficinista parapetado tras un escritorio en vez de luchar en las zonas de combate, un cobarde que ha huido del duro trabajo de la granja. Nadie le perdona por haber abandonado a su familia, ahora que su hermano está postrado en una silla de ruedas, víctima de un accidente de tractor durante su ausencia. Joseph pasa de ser un paisano notable a regresar como un paria. Por fortuna, el honor del pueblo está a salvo: el hijo del tabernero sí ha combatido en Argelia. Pero cuando le llegue el turno de regresar de la guerra y revela a sus habitantes el secreto de Joseph, la increíble verdad sale a la luz.",
      img: "../assets/img/hacenfaltahombres.jpg",
      autore: "Philippe Pelaez / Victor L. Pinel",
      editorial: "Harriet Ediciones"
    },
    {
      nombre: "Le plongeon",
      descripcion: "Pour Yvonne qui a encore toute sa tête à 80 ans, l’arrivée en EHPAD est difficile. Contre toute attente, elle se lie d’amitié avec un groupe de résidents, aussi drôles et lucides qu’elle, et tombe même amoureuse. Mais rapidement, la vieillesse la rattrape. Prise dans le tourbillon inéluctable de la vie, l’octogénaire décide de s’offrir une dernière parenthèse enchantée. Elle embarque sa bande dans une fugue, une balade… comme un dernier plongeon dans l’eau fraîche.",
      img: "../assets/img/leplongeon.jpg",
      autore: "Séverine Vidal",
      editorial: "Bamboo Eds"
    },
    {
      nombre: "La casa de la playa",
      descripcion: "A lo largo de los años el dueño llena de recuerdos su casa, testigo mudo de su vida. Y aquél es también la fiel imagen de ella. Como las parejas que han convivido siempre juntas. Así, cuando su ocupante desaparece para siempre, el contenido de la casa se paraliza por el polvo esperando que alguna vez su dueño regrese. Los tres hermanos protagonistas de esta historia volverán un año después de la muerte de su padre a la casa familiar donde crecieron. Su intención es venderla, pero con cada trasto que tiran se enfrentan a los recuerdos. Temen estar deshaciéndose del pasado, del recuerdo de su padre, pero también del suyo propio.",
      img: "../assets/img/lacasadelaplaya.jpg",
      autore: "Victor L. Pinel / Séverine Vidal",
      editorial: "Nuevo Nueve"
    },
    {
      nombre: "¿Me estás escuchando?",
      descripcion: "Bea está huyendo. Y entonces se topa con Lou. Tras este encuentro fortuito ambas inician una ruta a través del oeste de Texas, durante la cual se ven asaltadas por circunstancias sorprendentes dondequiera que vayan: un misterioso gato se suma al viaje, son perseguidas por dos amenazadores hombres de la Oficina de Asistencia en Carreteras, y el paisaje se transforma en un mundo inquietante a medida que avanzan hacia una ciudad que no aparece en los mapas, pero tampoco fuera de ellos. \nPara mantenerse a salvo, Bea y Lou deben confiar la una en la otra mientras se ven obligadas a afrontar verdades soterradas durante demasiado tiempo.",
      img: "../assets/img/meestasescuchando.jpg",
      autore: "Tillie Walden",
      editorial: "Ediciones La Cúpula"
    },
    {
      nombre: "Laura Dean me ha vuelto a dejar",
      descripcion: "Laura Dean es la chica más popular del instituto: es encantadora, divertida y realmente preciosa, pero tiene papeletas para ser la peor novia del mundo. ¡Y si no que se lo digan a Freddy Riley! Su relación intermitente la está volviendo loca, y sus amigos son incapaces de comprender por qué siempre termina volviendo con ella.",
      img: "../assets/img/lauradean.jpg",
      autore: "Mariko Tamaki / Rosemary Valero-O'Connell",
      editorial: "Ediciones La Cúpula"
    }
  ];


  constructor() {
    console.log("Servicio listo");
  }

  getComics():Comic[]{
    return this.comics;
  }


  getComic( idx: string){
    return this.comics[idx];
  }

}



//Creo una interface para poder usar Arrays de Comics y no tipo Any
export interface Comic{
  nombre: string;
  descripcion: string;
  img: string;
  autore: string;
  editorial: string;
}
