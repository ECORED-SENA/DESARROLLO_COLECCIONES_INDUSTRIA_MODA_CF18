export default {
  global: {
    componenteFormativo:
      'Interpretación del diseño para el desarrollo de la colección',
    descripcionCurso:
      'En este componente formativo, se abordarán los elementos a tener en cuenta para la interpretación de colecciones de moda, también se tratarán temas como el contexto de las marcas nacionales e internacionales, los problemas y las necesidades del mercado y el consumidor, el <i>Concept Book</i>, el ADN de la marca, el desarrollo de Concepto, el <i>moodboard</i> y la ilustración en figurín, con lo cual el aprendiz desarrollará por completo su capacidad para identificar las necesidades de un segmento del mercado y desarrollar nuevos productos para colecciones de moda.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Interpretación y conceptualización de la marca',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Contexto de marcas, problemáticas y necesidades de los segmentos de mercado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Identificación del <i>target</i> o segmento de los mercados nuevos, tradicionales o emergentes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Caracterizar el producto por segmento de mercado',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Elaborar el <i>Concept Book</i> del proyecto según ADN de marca',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Brief</i> de proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Informe de investigación y conceptualización del proyecto según ADN de marca',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Concepto de la colección',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<i>Moodboard</i> del concepto de la colección',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Ilustración de la colección (figurín)',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Aitex. (s. f.). Análisis y gestión de tendencias.',
    },
    {
      referencia: 'Aitex. (s.f.). Branding 1.',
    },
    {
      referencia:
        'Ballestas, M. (s. f.). Malébolo [manuscrito no publicado]. SENA.',
    },
    {
      referencia:
        'Balmain. (2017, 28 junio). Balmain Spring/Summer 2018 Menswear Show [video]. YouTube. ',
      link: 'https://youtu.be/iFHifGono8Y',
    },
    {
      referencia: 'Bell, A. (s.f.). El Consumidor del Futuro 2022. WGSN. ',
      link:
        'https://www.wgsn.com/wp-content/uploads/future-consumer-2022-executive-summary-es.pdf',
    },
    {
      referencia:
        'Bellvís, M. (2012). Las estrategias de Visual Merchandising en la distribución del fashion retail: manual operativo del desarrollo e implantación para un producto moda textil predeterminado. Universidad CEU Cardenal Herrera. ',
      link: 'http://hdl.handle.net/10637/4139',
    },
    {
      referencia:
        'Díaz, P. (2014). Comunicación y gestión de marcas de moda. Editorial Gustavo Gili. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45542?page=1',
    },
    {
      referencia:
        'DIESEL. (2017, 14 febrero). Make Love Not Walls - Diesel SS17 [Video]. YouTube. ',
      link: 'https://youtu.be/COXx3YTNW1s',
    },
    {
      referencia:
        'Echeverry, D. (s. f.). DANIEL ECHEVERRY [manuscrito no publicado]. SENA.',
    },
    {
      referencia:
        'Echeverry, L. (2019a). 11 Conceptos de moda [manuscrito no publicado]. SENA.',
    },
    {
      referencia:
        'Echeverry, L. (2019b). 26 Conceptos Fashion [manuscrito no publicado]. SENA.',
    },
    {
      referencia:
        'Gutiérrez, G. (s. f.). YƎLLOW [manuscrito no publicado]. SENA.',
    },
    {
      referencia:
        'INEXMODA. (s. f.). La nueva visión del consumidor de moda. (ISCI).',
    },
    {
      referencia: 'Mesa, N. (s. f.). VICI [manuscrito no publicado]. SENA.',
    },
    {
      referencia:
        'Montava, X. (s. f.). El Concept Book. (Máster en moda, gestión del diseño y operaciones). Asociación de Investigación de la Industria Textil [AITEX].',
    },
    {
      referencia:
        'Osorio, N. (s. f.). Mandrágora [manuscrito no publicado]. SENA.',
    },
    {
      referencia:
        'Posner, H. (2015). Marketing de moda (2ª. ed.). Editorial Gustavo Gili. ',
      link: 'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/',
    },
    {
      referencia:
        'Pulgarin, M. (s. f.). SERES [manuscrito no publicado]. SENA.',
    },
    {
      referencia:
        'Reig, M. (s. f.). Moda, gestión del diseño y operaciones. Universidad CEU Cardenal Herrera. ',
      link:
        'https://repositorioinstitucional.ceu.es/bitstream/10637/4137/1/IndiceyResumen_TFM_ReigOrtega%2CMar%C3%ADa.pdf',
    },
    {
      referencia:
        'Seivewright, S. (2013). Diseño e Investigación (2.ª ed.). Editorial Gustavo Gili.',
    },
    {
      referencia:
        'Trendencias. (2018, 7 junio). Todo lo que tienes que saber si quieres dedicarte a la moda: colecciones, tejidos, diseñadores y más [video]. YouTube. ',
      link: 'https://youtu.be/cbYcsNxBLg8',
    },
    {
      referencia:
        'Tutoriales Con La Miss. (2018, 23 noviembre). 73 ¿Cómo definir el concepto de una colección de moda? [video]. Youtube. ',
      link: 'https://youtu.be/fkjgvkujtpk',
    },
    {
      referencia: 'Zapata, M. (s. f.). Slowly [manuscrito no publicado]. SENA.',
    },
  ],
  glosario: [
    {
      termino: 'ADN de marca',
      significado:
        'Viene a ser un compendio de información genética de los seres vivos; y del mismo modo, las marcas, como los seres vivos, nacen, crecen, se reproducen y mueren. Esto hace que en el ADN de una marca se encuentren diferentes aspectos claves emocionales, numéricos, de propuesta única, personalidad y filosofía.',
    },
    {
      termino: 'Aitex',
      significado:
        'Es una asociación de carácter privado, sin ánimo de lucro, integrada por empresas textiles y afines, cuyo objetivo principal es mejorar la competitividad del sector. Por este motivo, desde el instituto se fomenta la modernización y la introducción de las tecnologías emergentes y nuevas mediante la realización de proyectos de investigación y desarrollo (i+d) y, en general, de actuaciones que contribuyen al progreso industrial del sector.',
    },
    {
      termino: 'Alfabeto visual',
      significado:
        'Son los elementos que es posible encontrar en cada una de las composiciones visuales. Cada vez que se diseña algo o se elabora alguna pieza visual, se utilizan diferentes elementos visuales que constituyen la sustancia básica de todo lo que vemos, lo que se denomina como el alfabeto visual.',
    },
    {
      termino: 'Armonía',
      significado:
        'Desde una perspectiva general, la armonía es el equilibrio de las proporciones entre las distintas partes de un todo, y su resultado siempre connota belleza.',
    },
    {
      termino: 'Aspiracional',
      significado:
        'Esta tipología de marca es clave en el <i>branding</i>, ya que la propuesta que ofrece la marca a los consumidores debe apuntar a un objetivo en el horizonte. Este ha de ser motivador para que el público lo plantee como un sueño optimista (no frustrante).',
    },
    {
      termino: 'Branding',
      terminoHtml: '<em>Branding</em>',
      significado:
        'Hace referencia al proceso de crear y construir una marca (en inglés, <i>brand equity</i>) mediante la administración estratégica del conjunto total de activos vinculados en forma directa o indirecta al nombre y símbolo (logo) que identifican la marca, influyendo en el valor de la marca, tanto para el cliente como para la empresa propietaria de la marca.',
    },
    {
      termino: 'Brief',
      terminoHtml: '<em>Brief</em>',
      significado:
        'Es un documento escrito que el cliente le entrega al diseñador en la etapa de definiciones del proyecto. Al emitir un resumen escrito (<i>brief</i>), el cliente está definiendo objetivos, expectativas y alcance del trabajo a realizarse.',
    },
    {
      termino: 'Collage',
      terminoHtml: '<em>Collage</em>',
      significado:
        'Es una técnica artística que consiste en pegar distintas imágenes sobre un lienzo o papel. El término se aplica sobre todo a la pintura, pero por extensión se puede referir a cualquier otra manifestación artística, como la música, el cine, la literatura o el videoclip.',
    },
    {
      termino: 'Conceptualizar',
      significado:
        'Se entiende por conceptualización la representación de una idea abstracta en un concepto; surge de los conocimientos generales que se posee sobre diversos temas.',
    },
    {
      termino: 'Concept Book',
      terminoHtml: '<em>Concept Book</em>',
      significado:
        'El principal objetivo de la propuesta consiste en el aprendizaje, conceptualización y ejecución de un <i>concept book</i>. Se trata de un manual de valores que ayude a visualizar y representar el dogma de la “marca”, a partir del cual puedan trabajar todos los departamentos de la empresa, se encuentren internos o externos a esta.',
    },
    {
      termino: 'Confortables',
      significado:
        'Es un adjetivo para referirnos a algo que conforta o alienta, o que es agradable o placentero.',
    },
    {
      termino: 'Consumidor',
      significado:
        'Es una persona u organización que consume bienes o servicios, los mismos que le sirven para satisfacer algún tipo de necesidad.',
    },
    {
      termino: 'Contexto',
      significado:
        'Es un marco, un ambiente, un entorno físico o simbólico, un conjunto de fenómenos, situaciones y circunstancias (como el tiempo y el lugar), no comparables a otras, que rodean o condicionan un hecho.',
    },
    {
      termino: 'Croquis de colección',
      significado:
        'Es la representación matemática de la cantidad y tipo de prendas, por color y silueta, y las posibles combinaciones entre ellas que se proponen para la colección.',
    },
    {
      termino: 'Cuaderno de bocetos',
      significado:
        'Recoge una parte del pensamiento reflexivo durante el proceso de creación. Ahí queda plasmado en imágenes, grafismos, ilustraciones, textos y demás, el registro visual de lo que se observa o se piensa, y esto es muy útil en el día a día sometido a continuos cambios.',
    },
    {
      termino: 'Emergente',
      significado:
        'Un grupo emergente se define como un grupo particular de individuos que le plantea a la sociedad una reivindicación buscando ser aceptados por esta.',
    },
    {
      termino: 'Fashion Snoops',
      terminoHtml: '<em>Fashion Snoops</em>',
      significado:
        'Innovadora agencia de consultoría con sede en Nueva York. Lleva más de diecisiete años inspirando y creando confianza en sus clientes a través de su plataforma virtual, para que se conozcan anticipadamente las tendencias de moda, belleza, decoración y hogar que estarán presentes en el mercado, desarrollando así productos coherentes con lo que exige el consumidor.',
    },
    {
      termino: 'Hilo conductor',
      significado:
        'Factor que permite la coherencia de un texto o discurso en su desarrollo. En el caso de la moda específicamente, es el que hace posible la coherencia entre las diferentes piezas y elementos de una colección.',
    },
    {
      termino: 'Identidad',
      significado:
        'Circunstancia de ser una persona o cosa en concreto y no otra, determinada por un conjunto de rasgos o características que la diferencian de otras.',
    },
    {
      termino: 'Imagen de marca',
      significado:
        'Es el conjunto de elementos gráficos, visuales, emocionales, que demuestra y define lo que es y representa la marca.',
    },
    {
      termino: 'Lafayette',
      significado:
        'es una empresa textil colombiana, verticalmente integrada, que cuenta con más de 2000 empleados y una planta de más de 80 mil metros cuadrados de área construida. El informe de tendencias de Lafayette es el resultado de una cuidadosa investigación de comportamientos del consumidor y sus múltiples configuraciones mentales, proyectados hacia el futuro y aterrizados en el mercado textil. Su contenido se construye a partir de un robusto ecosistema de investigación, al cual pertenecen las fuentes de análisis de tendencias más relevantes y con mayor experticia del sector, paralelamente a un continuo análisis de datos sobre producto y consumidor, además de un monitoreo constante de tendencias digitales.',
    },
    {
      termino: 'Marca',
      significado:
        'Señal que permite identificar o distinguir algo o para dar alguna información sobre ello. ',
    },
    {
      termino: 'Outfit',
      terminoHtml: '<em>Outfit</em>',
      significado:
        'Es una palabra del inglés que significa vestimenta, ropa o conjunto. El término se ha vuelto popular gracias a las redes sociales, donde se utiliza para comentar la manera de vestir de alguien, especialmente de celebridades e influenciadores.',
    },
    {
      termino: 'Portable',
      significado:
        'La definición de portable aplicado a cualquier elemento, cosa y objeto en particular, que es posible, fácil o sencillo de mover, trasladar, transportar, enviar, transbordar, acarrear, embarcar, portear, cargar, traer, llevar o mover. A esta acepción se le conoce como portátil con el mismo significado.',
    },
    {
      termino: 'Prenda',
      significado:
        'Vestimenta o indumentaria es la denominación genérica que reciben las prendas y accesorios confeccionados a partir de tejidos textiles y de tejidos animales que los humanos usan para abrigar, cubrir, adornar, proteger y vestir el cuerpo.',
    },
    {
      termino: 'Producto',
      significado:
        'Es una cosa o un objeto producido o fabricado, algo material que se elabora de manera natural o industrial mediante un proceso, para el consumo o utilidad de los individuos.',
    },
    {
      termino: 'Reinventar',
      significado:
        'Es una modificación de algo que existe y requiere ser modificado, ya sea por gusto o necesidad; tiene lugar cuando una persona ha de enfrentarse a un cambio (negativo o positivo) importante en su vida o su entorno, que suele ocurrir de forma inesperada. La reinvención, pues, parece espoleada por un elemento externo que impulsa el cambio.',
    },
    {
      termino: 'Tangible vs intangible',
      terminoHtml: 'Tangible <em>vs</em> intangible',
      significado:
        'Tangible es un adjetivo que indica que algo se puede tocar. También indica que se puede percibir de manera precisa. Esta palabra procede del latín <i>tangibĭlis</i>. Algunos sinónimos son palpable, perceptible, concreto y real. Como antónimos, se pueden utilizar las palabras: intangible, inmaterial, abstracto, etéreo.',
    },
    {
      termino: 'Target',
      terminoHtml: '<em>Target</em>',
      significado:
        'En el ámbito de la publicidad, los anglicismos <i>target, target group y target market</i> se utilizan como sinónimos para designar al destinatario ideal de una determinada campaña, producto o servicio.',
    },
    {
      termino: 'Tendencia',
      significado:
        'La podemos definir como aquel proceso de cambio en los grupos humanos, que da lugar a nuevas necesidades, deseos, formas de comportamiento y, por ende, a nuevos productos y servicios.',
    },
    {
      termino: 'Tienda',
      significado:
        'Un tipo de establecimiento comercial, físico o virtual, donde el comprador puede adquirir tanto bienes como servicios a cambio de dinero.',
    },
    {
      termino: 'Usuario',
      significado:
        'Se refiere a la persona que utiliza un producto o servicio de forma habitual.',
    },
    {
      termino: 'WGSN ',
      significado:
        'Es una compañía de pronóstico de tendencias de la organización matriz <i>Ascential</i>. WGSN fue fundada en 1998 en el oeste de Londres por los hermanos Julian y Marc Worth.',
    },
  ],
  complementario: [
    {
      texto:
        'Bellvís, M. (2012). Las estrategias de <i>Visual Merchandising</i> en la distribución del <i>fashion retail</i>: manual operativo del desarrollo e implantación para un producto moda textil predeterminado. Universidad CEU Cardenal Herrera.',
      tipo: 'Trabajo fin de Máster',
      descarga: '/downloads/U1_Anexo_K_TFM_BellvisVazquez_Maria_Parte2.pdf',
    },
    {
      texto: 'Aitex. (s. f.). Análisis y gestión de tendencias.',
      tipo: 'PDF',
      descarga: '/downloads/U2_Anexo_K_Analisis_y_Gestion_de_Tendencias.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura -  Regional Santander',
      },
      {
        nombre: 'Luis Alfonso Hincapié Echeverri',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia.',
      },
      {
        nombre: 'Idian Fernando López Agudelo',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia.',
      },
      {
        nombre: 'Ruth Elena Morales Ríos',
        cargo: 'Instructora',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia.',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la comunicación de la Industria Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Alba Inés Gutiérrez González',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Comunicación de la Industria Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Regional Tolima – Centro Agropecuario La Granja',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
