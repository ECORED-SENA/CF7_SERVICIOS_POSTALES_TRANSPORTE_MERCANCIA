export default {
  global: {
    componenteFormativo: 'Preparación de la carga para distribución',
    descripcionCurso:
      'Preparar la carga consiste en reconocer el tipo de producto, identificar la mercancía, ordenar de forma específica de acuerdo a sus características que faciliten la colocación en <i>pallets</i>, establecer el volumen para seleccionar el medio de transporte que logre realizar el traslado con rapidez y facilidad; según el plan de rutas establecido.',
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
        titulo: 'Manipulación de producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de manipulación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Zonas de cargue y descargue',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Planeación rutas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Cadena logística',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Información documentada',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Código de barras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Condiciones de seguridad de las mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características de la mercancía',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Criterios de verificación de la mercancía',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Técnicas de inspección de mercancías',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Registro de novedades',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
      referencia:
        'Campo Varela, A. (2013). Operaciones de almacenaje. España: McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Flamarique, S. (2017). Gestión de operaciones de almacenaje. Barcelona: Marge Books.',
      link: '',
    },
    {
      referencia:
        'García, EC (2016). Optimización de la cadena logística . Mundo del Libro Editores.',
      link: 'https://bookshelf.vitalsource.com/books/978-84-9839-570-9',
    },
    {
      referencia:
        'Gómez Aparicio, J.M. (2013). Gestión Logística y Comercial. Madrid: McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Fernández Valero, G. (2016).  Manual: operaciones auxiliares de almacenaje. Madrid: Editorial CEP, S.L. ',
      link: '',
    },
    {
      referencia:
        'Ladrón de Guevara, M. Á. Operaciones auxiliares de almacenaje. MF1325. Logroño (La Rioja): Editorial Tutor Formación, 2020. p. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/129696',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2020). Plan de Modernización Sector Postal 2020_2024. Bogotá: MinTIC.',
      link: '',
    },
    {
      referencia:
        'Monzó, J.E. (2005). Almacenaje de productos. España: McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Sánchez RamosJ. (2007). Tecnologías de apoyo a la automatización de la cadena logística [Escuela de Ingeniería de Transporte, Facultad de Ingeniería, Pontificia Universidad Católica de Valparaíso].',
      link:
        'https://www-virtualpro-co.bdigital.sena.edu.co/biblioteca/tecnologias-de-apoyo-a-la-automatizacion-de-la-cadena-logistica',
    },
    {
      referencia:
        'Sorlózano González, M. J. Optimización de la cadena logística: MF1005_3. Antequera, Málaga: IC Editorial, 2018. p. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/59202',
    },
  ],
  glosario: [
    {
      termino: 'Albarán',
      significado:
        'También llamado nota de entrega; es el documento que acompaña la mercancía enviada por el proveedor al cliente y refleja los artículos que se entregan en cantidades y lotes.',
    },
    {
      termino: 'Almacén',
      significado:
        'Nave donde se guardan los productos y mercancías necesarias para la fabricación o envío a clientes, incluyendo otros almacenes.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'Aquellas actividades de planificación, compra, almacenaje, fabricación, logística, distribución y atención al cliente; así como el movimiento físico de las mercancías.',
    },
    {
      termino: 'Cadena logística',
      significado:
        'Sistema integrado por empresas que participan en aquellos medios y métodos necesarios para organizar las mercancías, llevarlas en los términos y condiciones pactadas con el cliente final.',
    },
    {
      termino: 'Carga',
      significado:
        'Conjunto de mercancías que son objeto de una operación de transporte desde un puerto, aeropuerto, terminal terrestre o lugar de entrega, con destino a otro puerto, aeropuerto, terminal o lugar de destino, amparadas en un documento de transporte.',
    },
    {
      termino: 'Carga y descarga',
      significado:
        'Acción de subir y bajar bultos o paletas al vehículo de transporte, que trae productos del proveedor u otro almacén.',
    },
    {
      termino: 'Código de barras',
      significado:
        'Código basado en la representación de un conjunto de líneas paralelas de distinto grosor y espaciado que en su conjunto contienen una determinada información.',
    },
    {
      termino: 'Equipo de almacenamiento',
      significado:
        'Medios disponibles para guardar o almacenar productos y mercancías; como estanterías, armarios o cestas.',
    },
    {
      termino: 'Equipo de manipulación',
      significado:
        'Vehículos y equipos capaces de transportar artículos, bultos, paletas y cajas dentro del almacén; son necesarios para trasladar cargas y que el operario no realice sobreesfuerzo físico.',
    },
    {
      termino: 'Logística',
      significado:
        'Conjunto de actividades necesarias para prestar un servicio, desde la compra, empaquetado, transporte, envío y entrega de un producto al cliente final.  Cómo llevar de la manera más eficiente y eficaz la mercancía a los clientes.  ',
    },
    {
      termino: 'Logística inversa',
      significado:
        'La logística inversa es una etapa de la cadena de suministro que tiene lugar después de la entrega de mercancía al cliente final, y su objetivo es devolver el producto desde el cliente hasta el distribuidor o el proveedor. Es decir, se trata del mismo proceso que en la logística convencional (que lleva la mercancía de A hasta B), pero con sentido inverso (llevando la mercancía de B hasta A).  Aplica en el caso de las devoluciones.',
    },
    {
      termino: 'Manipulación de cargas',
      significado:
        'Todas aquellas operaciones de transporte o sujeción de la carga por parte de uno o varios trabajadores; como levantamiento, colocación, empuje y desplazamiento.',
    },
    {
      termino: 'Riesgo laboral',
      significado:
        'Posibilidad que un trabajador sufra algún daño derivado del trabajo.',
    },
    {
      termino: 'Última milla',
      significado:
        'El último paso del proceso de entrega es cuando un paquete se mueve desde un centro de transporte hasta su destino final, que, por lo general, es una residencia personal o una tienda minorista.',
    },
  ],
  complementario: [
    {
      texto:
        'Soluciones Logísticas y Aduaneras E & S. (2020). <i>Distribución del almacén.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sC_SAxJcexY',
    },
    {
      texto: 'Curso Laboral. (2021). <i>Carga y descarga de mercancías.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZYthsutIhDk',
    },
    {
      texto:
        'Instituto Nacional de Higiene y Seguridad en el Trabajo. (2016). <i>NTP 1076 Nota Técnica de Prevención: Seguridad en Muelles de carga y descarga.</i>',
      tipo: 'Norma técnica',
      descarga: '/downloads/ntp-1076.pdf',
    },
    {
      texto:
        'Gobierno Nacional. Ministerio de las Tecnologías de la información y las comunicaciones. (septiembre de 2020). <i>Plan de Modernización, sector postal 2020-2024.</i>',
      tipo: 'PDF',
      descarga: '/downloads/articles-150820_recurso_1.pdf',
    },
    {
      texto:
        'ICONTEC. (2009). <i>Norma Técnica Colombiana- NTC 5689 Especificación para el diseño, ensayo y uso de estanterías industriales.</i>',
      tipo: 'PDF',
      descarga: '/downloads/Norma-tecnica-colombiana-NTC5689.pdf',
    },
    {
      texto:
        'ICONTEC. (1997). <i>Norma Técnica Colombiana- NTC 4114. Seguridad Industrial: Realización de Inspecciones planeadas.</i>',
      tipo: 'PDF',
      descarga:
        '/downloads/NTC_4114_Realizacion_de_Inspecciones_Planeadas_ICONTEC.pdf',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gloria Esperanza Silva Guarín',
        cargo: 'Experta temática',
        centro: 'Centro de Gestión Industrial - Distrito capital',
      },
      {
        nombre: 'Gloria Lida Álzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Metodóloga para la formación virtual',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Distrito capital ',
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
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yerson Fabian Zarate Saavedra ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres ',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Maria Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
