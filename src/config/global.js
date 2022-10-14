export default {
  global: {
    componenteFormativo: 'Servicios de red, virtualización y pruebas de red',
    descripcionCurso:
      'La tecnología avanza a pasos significativos, es por esto que es importante tener claros muchos de los conceptos relacionados con esta temática. Hoy en día las empresas y organizaciones implementan sistemas de redes que permiten mejorar el rendimiento y productividad de las mismas; esto debido a que automatizan procesos brindando beneficios, entre los que se cuenta la reducción de gastos y tiempos de ejecución. Es por esto que la buena planificación, implementación y mantenimiento de una red es vital para la aplicación de tales tecnologías en las organizaciones. ',
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
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Generalidades',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Acuerdos de nivel de servicio',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Calidad del servicio',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Conceptos de servicios de redes',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Protocolos y servicios de red',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Cloud computing</em>        ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de servicios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelos de servicios en la nube',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos de nubes',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Virtualización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Componentes',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Herramientas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Plataforma Azure',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Plataforma Google',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'AWS            ',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<em> Software</em> de virtualización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Contenedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Generalidades',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Características',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: ' Imágenes',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Despliegue y gestión',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
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
      tema: 'Windows Server 2008: Los Servicios De Red TCP/IP',
      referencia:
        'Philippe, F. (2010). Windows server 2008: los servicios de red TCP/IP. Ediciones ENI.',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniRIT08TCP',
    },
    {
      tema: 'Microsoft Azure: Gestione Su Sistema De Información En La Nube',
      referencia:
        'Philippe, P. (2021). Microsoft Azure: gestione su sistema de información en la nube. Ediciones ENI.',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT3AZWIN',
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
        'el protocolo de transferencia de hipertexto es el protocolo de comunicación que permite las transferencias de información a través de archivos en la <em>World Wide Web.</em>',
    },
    {
      termino: 'IGP',
      significado:
        'el <em> Interior Gateway Protocol</em>, es un protocolo de pasarela interna o protocolo de pasarela interior, este hace referencia a los usados dentro de un sistema autónomo.',
    },
    {
      termino: 'IP',
      significado:
        'una dirección IP es una dirección única que identifica a un dispositivo en internet o en una red local. IP significa “protocolo de internet”, que es el conjunto de reglas que rigen el formato de los datos enviados a través de Internet o la red local.',
    },
    {
      termino: 'ISNS',
      significado:
        'el protocolo propuesto del servicio de nombres de almacenamiento de internet permite el descubrimiento, administración y configuración automatizada de dispositivos iSCSI y <em>Fibre Channel</em> en una red TCP / IP.',
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
        'Emprendices. (2014). ¿Qué es Google Cloud Platform?. Emprendices. ',
      link:
        'https://lh6.googleusercontent.com/-XhuI4DcK8FM/VFDg50K6AhI/AAAAAAAASxU/fHzSlvPY66M/s750/google-cloud-platform.jpg',
    },
    {
      referencia:
        'Gouigoux, J. (2018). Primeros pasos y puesta en práctica de una arquitectura basada en microservicios. Ediciones ENI. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT2DOC',
    },
    {
      referencia:
        'Interponalos. (2022). Interacción de protocolos de red. Interpolados, como un cuaderno personal.',
      link: 'https://interpolados.files.wordpress.com/2017/03/14.png',
    },
    {
      referencia:
        'Joyanes, L. (2012). Computación en la nube: Estrategias de Cloud Computing en las empresas. Alfaomega Grupo Editor. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000061577',
    },
    {
      referencia:
        'Microsoft. (2022). Implementar calidad de servicio (QoS) en Microsoft Teams. Microsoft. ',
      link:
        'https://docs.microsoft.com/es-es/microsoftteams/media/qos-in-teams-image2.png',
    },
    {
      referencia:
        'Linares, K. (2017). Protocolos y aplicaciones de redes pequeñas - CCNA V6.0. Kevin Linares',
      link:
        ' https://3.bp.blogspot.com/-yOSvNtxMKeg/WSJBkZY2c6I/AAAAAAAAD0E/buUO_7iUmWAIz0LhSYuA7rKWXO9cIVWogCLcB/s1600/Protocolos%2Bcomunes.jpg',
    },
    {
      referencia:
        'Lubanski, M. (2019). Sistemas de control de versiones centralizados vs distribuidos. Publicación FAUN. ',
      link:
        'http://www.futurefundamentals.com/wp-content/uploads/2018/08/centralized-vcs.png',
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
      referencia: 'Prozess group. (S.F). Microsoft Azure. Prozess group',
      link:
        'http://www.prozessgroup.com/wp-content/uploads/2017/07/AzureNube.jpg',
    },
    {
      referencia:
        'Ramírez, I. (2016). Máquinas virtuales: qué son, cómo funcionan y cómo utilizarlas. Xalaka. ',
      link: 'https://i.blogs.es/888d44/vm/1366_2000.jpg',
    },
    {
      referencia:
        'Serrano, J. (2022). AWS, el rentable negocio en la nube de Amazon. Unidad Editorial Revistas, SLU. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_proquest_miscellaneous_2664218413',
    },
    {
      referencia:
        'Shutterstock. (S.F). Git repositorios software subversión proceso de servidor de backup en programación y codificación. Shutterstock.',
      link:
        'https://image.shutterstock.com/image-vector/git-repositories-software-subversion-backup-600w-626630348.jpg',
    },
    {
      referencia:
        'Villarino, J. (2018). La privacidad en el entorno del Cloud Computing. Editorial ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB121544',
    },
    {
      referencia: 'Wikipedia. (S.F). Amazon Web Services. Wikipedia. ',
      link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png',
    },
    {
      referencia: 'Wikipedia. (S.F). Computación en la nube. Wikipedia. ',
      link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Cloud_computing-es.svg/1200px-Cloud_computing-es.svg.png',
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
