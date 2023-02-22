export default {
  global: {
    componenteFormativo: 'Servicios de red, virtualización y pruebas de red',
    descripcionCurso:
      'La tecnología avanza a pasos significativos, y es por esta razón que es importante tener claros muchos de los conceptos relacionados con esta temática. Hoy en día, las empresas y organizaciones implementan sistemas de redes que permiten mejorar el rendimiento y productividad de las mismas; esto se presenta, debido a que automatizan procesos brindando beneficios, entre otros, la reducción de gastos y tiempos de ejecución. La buena planificación, implementación y mantenimiento de una red es vital para la aplicación de tales tecnologías en las organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
    ],
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
        titulo: 'Servicios de red',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Cloud computing</em>        ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Virtualización y <em>software</em> de virtualización',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Contenedores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Sistemas de control de versiones, GIT, Integración y entrega continua',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: 'Servicios de red',
      referencia:
        'Philippe, F. (2010). <em>Windows server 2008: los servicios de red TCP/IP</em>. Ediciones ENI.',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniRIT08TCP',
    },
    {
      tema: 'Virtualización y <em>software</em> de virtualización',
      referencia:
        'Philippe, P. (2021). <em>Microsoft Azure: gestione su sistema de información en la nube. Ediciones ENI</em>.',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT3AZWIN',
    },
    {
      tema: '<em>Cloud Computing</em>',
      referencia:
        'Joyanes, L. (2012). Computación en la nube: Estrategias de Cloud Computing en las empresas. Alfaomega Grupo Editor. ',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000061577',
    },
    {
      tema: '<em>Cloud Computing</em>',
      referencia:
        'Villarino, J. (2018). <em>La privacidad en el entorno del Cloud Computing</em>. Editorial Reus.',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB121544',
    },
  ],
  glosario: [
    {
      termino: 'DHCP',
      significado:
        'el protocolo de configuración dinámica de host es un protocolo de red de tipo cliente/servidor mediante el cual un servidor DHCP asigna dinámicamente una dirección IP y otros parámetros de configuración de red a cada dispositivo, esto en una red para que pueda comunicarse con otras redes IP.',
    },
    {
      termino: 'FTP',
      significado:
        'el protocolo de transferencia de archivos es un protocolo de red para la transferencia de archivos entre sistemas conectados a una red TCP basado en la arquitectura cliente-servidor.',
    },
    {
      termino: 'HTTP',
      significado:
        'el protocolo de transferencia de hipertexto, es el protocolo de comunicación que permite las transferencias de información, a través de archivos en la World Wide Web.',
    },
    {
      termino: 'IGP',
      significado:
        'el Interior Gateway Protocol, es un protocolo de pasarela interna o protocolo de pasarela interior, este hace referencia a los usados dentro de un sistema autónomo.',
    },
    {
      termino: 'IP',
      significado:
        'una dirección IP es una dirección única que identifica a un dispositivo en internet o en una red local. IP significa “protocolo de internet”, que es el conjunto de reglas que rigen el formato de los datos enviados a través de Internet o la red local.',
    },
    {
      termino: 'ISNS',
      significado:
        'el protocolo propuesto del servicio de nombres de almacenamiento de Internet permite el descubrimiento, administración y configuración automatizada de dispositivos iSCSI y Fibre Channel en una red TCP / IP.',
    },
    {
      termino: 'NETBIOS',
      significado:
        'especificación de interfaz para acceso a servicios de red, es decir, una capa de software desarrollado para enlazar un sistema operativo de red con <em> hardware</em> específico.',
    },
    {
      termino: 'NFS',
      significado:
        '<em> Network File System</em>, es un protocolo de nivel de aplicación, según el Modelo OSI. Es utilizado para sistemas de archivos distribuido en un entorno de red de computadoras de área local.',
    },
    {
      termino: 'OSI',
      significado:
        'es un estándar que tiene por objetivo conseguir interconectar sistemas de procedencia distinta para que estos pudieran intercambiar información, sin ningún tipo de impedimentos debido a los protocolos con los que estos operaban de forma propia según su fabricante.',
    },
    {
      termino: 'RIP',
      significado:
        'el protocolo de información de encaminamiento o <em>Routing Information Protocol </em>, es un protocolo de puerta de enlace interna o interior utilizado por los routers o encaminadores para intercambiar información acerca de redes del <em>Internet Protocol </em> a las que se encuentran conectados.',
    },
    {
      termino: 'TCP',
      significado:
        'el protocolo de control de transmisión es uno de los protocolos fundamentales en internet.',
    },
  ],
  referencias: [
    {
      referencia:
        'Dauzon, S. (2022). Git: Controle la gestión de sus versiones (conceptos, utilización y casos prácticos). (2ª Edición). Ediciones ENI. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT3GIT',
    },

    {
      referencia:
        'Gouigoux, J. (2018). Primeros pasos y puesta en práctica de una arquitectura basada en microservicios. Ediciones ENI. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT2DOC',
    },

    {
      referencia:
        'Joyanes, L. (2012). Computación en la nube: Estrategias de Cloud Computing en las empresas. Alfaomega Grupo Editor. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000061577',
    },

    {
      referencia:
        'Linares, K. (2017). Protocolos y aplicaciones de redes pequeñas - CCNA V6.0. Kevin Linares',
      link:
        ' https://3.bp.blogspot.com/-yOSvNtxMKeg/WSJBkZY2c6I/AAAAAAAAD0E/buUO_7iUmWAIz0LhSYuA7rKWXO9cIVWogCLcB/s1600/Protocolos%2Bcomunes.jpg',
    },

    {
      referencia:
        'Philippe, F. (2010). Windows server 2008: los servicios de red TCP/IP. Ediciones ENI. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniRIT08TCP',
    },
    {
      referencia:
        'Philippe, P. (2021). Microsoft Azure: gestione su sistema de información en la nube. Ediciones ENI. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT3AZWIN',
    },

    {
      referencia:
        'Serrano, J. (2022). AWS, el rentable negocio en la nube de Amazon. Unidad Editorial Revistas, SLU. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_proquest_miscellaneous_2664218413',
    },
    {
      referencia:
        'Villarino, J. (2018). La privacidad en el entorno del Cloud Computing. Editorial ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB121544',
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
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
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
