export default {
  global: {
    componenteFormativo:
      'Ubicación, consolidación y desconsolidación de la mercancía y objetos postales',
    descripcionCurso:
      'La consolidación de mercancías hace referencia a agrupar aquellos productos que tengan en común un cliente o destino.  Sin embargo, al unirlos, deben ser manipulados, organizados, ubicados y transportados con equipos de manipulación, necesarios para mover y trasladar mercancías dentro del almacén, y medios de almacenamiento, que sirven para guardar mercancías. Y la desconsolidación es la operación inversa.',
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
        titulo: 'Preparación de la carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ubicación de mercancías según clasificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Consolidación y desconsolidación de mercancía',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Equipos de movimentación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '',
        titulo: 'Continuidad tema 1',
        desarrolloContenidos: false,

        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Sistemas de información',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Codificación de la mercancía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Generalidades',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación de cargas y almacenamiento',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Contenedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Generalidades',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: ' Métodos de verificación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: ' Tecnologías de rastreo',
            hash: 't_3_3',
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
      referencia: 'Campo, A. (2013). Operaciones de almacenaje. McGraw-Hill.',
    },
    {
      referencia:
        'Decreto 1078 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector de Tecnologías de la Información y las Comunicaciones. Mayo 26 de 2015.        ',
    },
    {
      referencia:
        'Fernández, G. (2016). Operaciones auxiliares de almacenaje. Editorial CEP.         ',
    },
    {
      referencia:
        'Flamarique, S. (2017). Gestión de operaciones de almacenaje. Marge Books.        ',
    },
    {
      referencia:
        'Gómez, J. (2013). Gestión Logística y Comercial. McGraw-Hill.        ',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC]. (2020). Plan de Modernización del sector postal 2020-2024.        ',
    },
    {
      referencia:
        'Monzó, J. (2005). Almacenaje de productos. McGraw-Hill Interamericana.        ',
    },
    {
      referencia:
        'Peña, C. y Hernández, E. (2018). Cadena de suministro 4.0: beneficios y retos de las tecnologías disruptivas. Marge Books.        ',
    },
    {
      referencia:
        'Rubio, J. (2013). Gestión y pedido de stock. Ministerio de Educación y Formación Profesional de España.      ',
    },
  ],
  glosario: [
    {
      termino: 'Carga',
      significado:
        'Conjunto de mercancías que son objeto de una operación de transporte desde un puerto, aeropuerto, terminal terrestre o lugar de entrega, con destino a otro puerto, aeropuerto, terminal o lugar de destino, amparadas en un documento de transporte.        ',
    },
    {
      termino: 'Carga consolidada',
      significado:
        'Agrupamiento de mercancías pertenecientes a uno o varios destinatarios, reunidas para ser transportadas de un puerto, aeropuerto o terminal terrestre, con destino a otro puerto, aeropuerto o terminal terrestre, en unidades de carga amparadas por un único documento de transporte.        ',
    },
    {
      termino: 'Código de barras',
      significado:
        'Código basado en la representación de un conjunto de líneas paralelas de distinto grosor y espaciado que, en su conjunto, contienen una determinada información.        ',
    },
    {
      termino: 'Consolidación',
      significado:
        'Agrupación de mercancías procedentes de diferentes zonas de picking en envíos más pequeños. Permite un ahorro en costos de transporte.        ',
    },
    {
      termino: 'Contenedor',
      significado:
        'es un elemento del equipo de transporte reutilizable. Consiste en un cajón portátil, tanque movible u otro elemento análogo, total o parcialmente cerrado, destinado a contener mercancías para facilitar su transporte.        ',
    },
    {
      termino: 'Destinatario',
      significado:
        'Persona natural o jurídica que recibe las mercancías o a quien se haya endosado en propiedad el documento transporte, y que, por las condiciones del contrato de transporte, puede no ser el mismo consignatario.        ',
    },
    {
      termino: 'Dispositivo de seguridad',
      significado:
        'Es un elemento, aparato o equipo utilizado o exigido por la autoridad aduanera para garantizar el control, que se coloca en mercancías, unidades carga, medios de transporte o medios de prueba, tales como precintos, dispositivos electrónicos de seguridad, candados, cintas.        ',
    },
    {
      termino: 'Tipología',
      significado:
        'estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas.',
    },
    {
      termino: 'Dispositivo electrónico de seguridad',
      significado:
        'Es un equipo electrónico exigido por la administración aduanera, que se coloca en mercancías, en unidades carga o en los medios de transporte, para asegurar la integridad de la carga, mediante el registro de todos los cierres y aperturas y para transmitir el posicionamiento de los mismos, permitiendo un monitoreo las veinticuatro (24) horas del día, en tiempo real y con memoria de eventos.        ',
    },
    {
      termino: 'Exportación',
      significado:
        'Salida de mercancías del territorio aduanero nacional con destino a otro país.        ',
    },
    {
      termino: 'Granel',
      significado:
        'Mercancía sin envase o embalaje, como semillas y minerales.        ',
    },
    {
      termino: 'Logística',
      significado:
        'Conjunto de actividades necesarias para prestar un servicio, desde la compra, empaquetado, transporte, envío, hasta la entrega de un producto al cliente final.  Cómo se lleva de la manera más eficiente y eficaz la mercancía a los clientes.          ',
    },
    {
      termino: 'Tráfico postal',
      significado:
        'Son todos los envíos de objetos postales que llegan o salen del territorio aduanero nacional por la red del operador postal oficial, en interconexión con la red de operadores designados de los países miembros de la Unión Postal Universal y/o con operadores privados de transporte en los países que se requiera, por necesidades del servicio.        ',
    },
    {
      termino: 'Unidad de carga',
      significado:
        'Conjunto de productos que se juntan en un mismo embalaje, con la finalidad de llevarlos agrupados; su agrupación dependerá de su tamaño y características. El objetivo de la agrupación es reducir el número de movimientos al mínimo que sea posible, porque el manejo de grandes cargas facilita el transporte y el almacenamiento.        ',
    },
  ],
  complementario: [
    {
      texto:
        '1.4 sistemas de información Decreto 1078 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector de Tecnologías de la Información y las Comunicaciones. Mayo 26 del 2015. ',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77888',
    },
    {
      texto:
        '3 Contenedores Customs-Trade Partnership Against Terrorism. (2014). Cumplimiento Con los Estándares ISO 17712 Para Sellos de Alta Seguridad. U.S. Customs and Border Protection. ',
      tipo: 'Boletín',
      link:
        'https://www.cbp.gov/sites/default/files/documents/C-TPAT%20Bulletin-%20Cumplimiento%20con%20ISO%2017712%20Para%20Sellos%20de%20Alta%20Seguridad%20-%20Abril%202014.pdf',
    },
    {
      texto:
        '3.1 Generalidades Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC]. (2020). Plan de Modernización del sector postal 2020-2024.',
      tipo: 'Plan',
      link: 'https://mintic.gov.co/portal/715/articles-150820_recurso_1.pdf',
    },
    {
      texto:
        '3.1 Generalidades Decreto 390 de 2016. Por el cual se establece la regulación aduanera. Marzo 7 de 2016. DO. Nº. 49.808. ',
      tipo: 'Decreto',
      link:
        'https://www.mincit.gov.co/ministerio/normograma-sig/procesos-de-apoyo/gestion-juridica/decretos/decreto-390-de-2016.aspx',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martinez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
