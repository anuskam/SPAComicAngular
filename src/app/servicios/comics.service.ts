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

  fantasias:Fantasia[] = [
    {
      nombre: "Siega",
      descripcion: "Antes, las personas morían por causas naturales. Existían asesinos invisibles llamados enfermedades, el envejecimiento era irreversible y se producían accidentes de los que no se podía regresar. Ahora, todo eso ha quedado atrás y sólo perdura una verdad muy simple: la gente tiene que morir. Y esa es la tarea de los segadores. Porque en un futuro donde la humanidad controla la muerte, ¿quién decide cuándo y cómo sembrarla? Citra y Rowan acaban de ser seleccionados como aprendices de segadores. ¿Su objetivo? Superar las pruebas de su mentor, sean las que sean. Aunque en el proceso renuncien a todo lo que les hace humanos.",
      img: "../assets/img/siega.jpg",
      autore: "Neal Shusterman",
      editorial: "Nocturna Ediciones"
    },
    {
      nombre: "Nimbo",
      descripcion: "No ha pasado más que un año desde que los caminos de Citra y Rowan se separaron, pero en este tiempo los rumores sobre un justiciero que persigue a los segadores corruptos se han multiplicado. Por todo el continente se oyen susurros de que los culpables acaban siempre devorados por las llamas. La segadora Anastasia criba con compasión y desafía abiertamente las ideas del nuevo orden. No obstante, cuando su vida se ve amenazada y sus métodos se cuestionan, queda claro que no todos los miembros de la Guadaña desean el cambio y que la podredumbre crece hasta en los cimientos más sólidos. La muerte debe existir para que la vida tenga sentido. Pero ¿cuál es el precio que cada segador está dispuesto a pagar?",
      img: "../assets/img/nimbo.jpg",
      autore: "Neal Shusterman",
      editorial: "Nocturna Ediciones"
    },
    {
      nombre: "Trueno",
      descripcion: "Todo cambió hace tres años: fue entonces cuando Anastasia y Lucifer desaparecieron; cuando el segador Goddard llegó al poder; cuando el Nimbo retiró la palabra a toda la humanidad, menos a Grayson Tolliver. En este impactante desenlace de El arco de la Guadaña, la trilogía que Neal Shusterman comenzó con Siega, se pondrán a prueba las lealtades y reaparecerán viejos amigos. Pero el rugir del trueno siempre es el preludio de la tormenta, y puede que el ruido del cambio ya haya empezado a resonar entre los portadores de la muerte.",
      img: "../assets/img/trueno.jpg",
      autore: "Neal Shusterman",
      editorial: "Nocturna Ediciones"
    },
    {
      nombre: "Luna 174",
      descripcion: "Luna Hatton tiene veinte años y vive en un pueblo perdido en Australia.Aunque su vida parece idéntica a la de cualquier otra persona, posee un don que la persigue desde que era una niña: es capaz de ver el alma del resto de los seres humanos. La mayoría de los que le rodean son todos de color gris, en ese punto intermedio que separa lo malo de lo bueno, pero existe una chica, una chica con el alma blanca, a la que se siente atada y con la que acabará conociendo las estrellas que brillan sobre su tejado: Gaia Wheeler. Un día, Luna recibe una oferta de una empresa que parece conocer su secreto, a pesar de que ella nunca lo haya compartido. A simple vista, son solo unos locos dispuestos a pagarle dinero por algo que ella considera intuición desde hace años. Lo que no sabe todavía es la amenaza que se cierne sobre la Tierra y el significado del número ciento setenta y cuatro.",
      img: "../assets/img/luna174.jpg",
      autore: "Clara Duarte",
      editorial: "La Galera"
    },
    {
      nombre: "Sombra y hueso",
      descripcion: "Alina Starkov no espera mucho de la vida. Se quedó huérfana después de la guerra y lo único que tiene en el mundo es a su amigo Mal. A raíz de un ataque que recibe Mal al entrar en La Sombra, una oscuridad antinatural repleta de monstruos que ha aislado el país, Alina revela un poder latente que ni ella misma sabía que tenía. Tras ese episodio, Alina es conducida a la fuerza hasta la corte real para ser entrenada como un miembro de los Grisha, un grupo de magos de élite comandado por un individuo misterioso que se hace llamar El Oscuro.",
      img: "../assets/img/sombrayhueso.jpg",
      autore: "Leigh Bardugo",
      editorial: "Editorial Hidra"
    },
    {
      nombre: "Asedio y tormenta",
      descripcion: "Perseguida a través del Mar Auténtico, atormentada por las vidas con las que acabó en la Sombra, Alina trata de sobrevivir junto a Mal en una tierra extraña, a la vez que mantiene en secreto su identidad como Invocadora del Sol. Pero no podrá huir durante mucho tiempo ni de su pasado ni de su destino. El Oscuro ha emergido de la Sombra con un terrorífico poder nuevo, y con un peligroso plan que pondrá a prueba los mismísimos límites del mundo natural. Con la ayuda de un carismático corsario, Alina volverá al país que trató de abandonar, decidida a luchar contra las fuerzas que amenazan a Ravka. Pero a medida que su poder crece, Alina se pierde cada vez más en el juego de magia prohibida del Oscuro, y se aleja de Mal. Pronto tendrá que elegir entre su país, su poder y el amor que siempre pensó que la guiaría, o arriesgarse a perderlo todo en la tormenta que se avecina",
      img: "../assets/img/asedioytormenta.jpg",
      autore: "Leigh Bardugo",
      editorial: "Editorial Hidra"
    },
    {
      nombre: "Ruina y ascenso",
      descripcion: "El Oscuro gobierna Ravka desde su trono de sombras. Ahora el destino de la nación está en manos de una Invocadora del Sol sin poderes, un rastreador caído en desgracia y los últimos vestigios de lo que alguna vez fue un gran ejército de magos. En las profundidades de una antigua red de túneles y cuevas, una debilitada Alina debe someterse a la dudosa protección del Apparat y de aquellos que la veneran como a una Santa. Pero tiene otros planes, como lanzarse a la caza del elusivo pájaro de fuego y comprobar si la supervivencia de cierto príncipe forajido es algo más que una esperanza. Alina deberá forjar nuevas alianzas y dejar de lado antiguas rivalidades para, junto con Mal, encontrar el último amplificador de Morozova. Pero tan pronto como empieza a desvelar los secretos del Oscuro, sale a la luz un pasado que alterará para siempre su visión del lazo que los une y el poder que ella detenta. El pájaro de fuego es lo único que se interpone entre Ravka y la destrucción, y Alina podría pagar un alto precio por conseguirlo: el mismísimo futuro por el que está luchando.",
      img: "../assets/img/ruinayascenso.jpg",
      autore: "Leigh Bardugo",
      editorial: "Editorial Hidra"
    },
    {
      nombre: "El priorato del naranjo",
      descripcion: "La Casa de Berethnet ha gobernado Inys durante mil años. Aún sin casar, la reina Sabran IX debe concebir una hija para proteger a su reino de la destrucción. Pero los asesinos cada vez están más cerca. Ead Duryan es una intrusa en la corte. A pesar de que se ha posicionado como dama de compañía, es leal a una sociedad oculta de magos. Ead vigila a Sabran, protegiéndola en secreto con magia prohibida. Al otro lado del mar oscuro, Tane ha entrenado toda su vida para ser una jinete de dragón, pero se ve obligada a tomar una decisión que podría romper su vida en añicos. Mientras tanto, el Este y el Oeste siguen divididos. Cada región tiene una religión diferente basada en los sucesos acaecidos mucho tiempo atrás. Los que adoran a los dragones, los que los detestan y quienes adoran al Sin Nombre aparentemente nunca se pondrán de acuerdo. Y las fuerzas del caos se despiertan de su letargo y parecen estar a punto de llegar.",
      img: "../assets/img/elprioratodelnaranjo.jpg",
      autore: "Samantha Shannon",
      editorial: "Roca Editorial"
    },
    {
      nombre: "Cada seis meses",
      descripcion: "Hana conoce a Ro. Ro conoce a Hana. Hana es esta chica medio coreana que reparte los pedidos del wok de sus padres, y Ro aparece de pronto. Ro es alta como Madrid y las farolas. La historia de Hana y Ro empieza así: una pelea. Un supermercado. La puerta rota de un baño sucio. Un piano electrónico y ocho plantas con nombre. Es cutre y torpe, como todo, pero es bonita. Es normal. Hana piensa, durante ese verano: «esto podría durar para siempre». Hana se duerme el 31 de agosto. Cuando despierta, Ro no está. Ro no existe. Nadie la recuerda, nadie parece haberla conocido. Todo lo que tiene que ver con ella ha desaparecido, y la única que la recuerda ahora es Hana.",
      img: "../assets/img/cadaseismeses.jpg",
      autore: "Clara Duarte",
      editorial: "La Galera"
    },
    {
      nombre: "La flor y la muerte",
      descripcion: "Marte, 2628. Olympus es una gran corporación que se extiende por la galaxia y divide a la sociedad en trece Servicios basados en las funciones de los antiguos dioses olímpicos. Asha es una hades y lleva toda la vida rodeada de muerte. Ianthe es una deméter y lleva toda la vida enraizada en la soledad. Cuando ambas entran en la Akademeia, ya saben lo que les espera: tres años de internamiento y la Odisea, la prueba por grupos donde se elige a los mejores candidatos para liderar los Servicios. Pero la competición es dura y hay mucho en juego. El poder lo conseguirá quien esté dispuesto a todo por Olympus.",
      img: "../assets/img/laflorylamuerte.jpg",
      autore: "Iria G. Parente / Selene M. Pascual",
      editorial: "Nocturna Ediciones"
    },
    {
      nombre: "Una obsesión perversa",
      descripcion: "Víctor y Eli eran dos estudiantes universitarios brillantes pero arrogantes que reconocían, el uno en el otro, la misma agudeza y la misma ambición. En el último año de su carrera, el interés compartido por la adrenalina, las experiencias cercanas a la muerte y los acontecimientos en apariencia sobrenaturales plantean una posibilidad intrigante: que, dadas ciertas condiciones, sería posible desarrollar habilidades extraordinarias. Pero cuando la tesis pasa de lo académico a lo experimental, las cosas salen horriblemente mal. Diez años más tarde, Víctor escapa de la cárcel, decidido a encontrar a su antiguo amigo (ahora enemigo), con la ayuda de una muchachita cuyo carácter reservado esconde una capacidad asombrosa. Mientras tanto, Eli se ha propuesto erradicar a todas las demás personas con superpoderes que pueda encontrar... salvo a su compañera, una mujer enigmática de voluntad inquebrantable. Ambos armados con inmenso poder, impulsados por el recuerdo de la traición y la pérdida, los archienemigos están decididos a vengarse... pero ¿quién quedará vivo al final?",
      img: "../assets/img/obsesionperversa.jpg",
      autore: "Victoria Schwab",
      editorial: "Puck"
    },
    {
      nombre: "Una venganza mortal",
      descripcion: "Aliados. Enemigos. Villanos. Ellos son ExtraOrdinarios. Eli Ever y Victor Vale eran simples estudiantes de medicina cuando descubrieron que las experiencias cercanas a la muerte pueden, si se dan ciertas condiciones, manifestar capacidades extraordinarias. Fueron muy amigos, luego rivales y, por fin, enemigos. Estuvieron muertos, revivieron, y más tarde… Eli mató a Victor de una vez por todas. Al menos, eso creía. Pero Sydney Clarke no estuvo de acuerdo y usó su propio superpoder para inclinar la balanza. Ahora, un trío se esconde en las sombras, mientras otro aprovecha la vida después de la muerte para apoderarse de la ciudad de Merit. Si puede haber vida después de la muerte… ¿habrá calma después de la venganza, o prevalecerá el caos?",
      img: "../assets/img/venganzamortal.jpg",
      autore: "Victoria Schwab",
      editorial: "Puck"
    },


  ];


  constructor() {
    console.log("Servicio listo");
  }

  //Métodos par a los comics
  getComics():Comic[]{
    return this.comics;
  }

  getComic( idx: string ){
    return this.comics[idx];
  }

  //Métodos para los libros fantasía
  getFantasias(): Fantasia[]{
    return this.fantasias;
  }

  getFantasia( idx: string ){
    return this.fantasias[idx];
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

export interface Fantasia{
  nombre: string;
  descripcion: string;
  img: string;
  autore: string;
  editorial: string;
}
