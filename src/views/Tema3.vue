<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Virtualización
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Esta es una tecnología que permite mediante los servicios TI crear otros servicios; esta, distribuye las funciones del #[em hardware] entre varios usuarios o entornos, posibilitando el uso de la totalidad de la máquina, dichos recursos se dividen según las necesidades.
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #d9faff")
          p.mb-0 Debido a las limitaciones de los servidores con arquitectura x86, muchas empresas del sector TI se ven obligadas a implementar múltiples servidores que funcionan por debajo de su capacitad y rendimiento, esta situación genera ineficiencia y costos operativos excesivos.
        p Es por eso por lo que la virtualización utiliza el #[em software] para imitar todas las características que posee el #[em hardware] y crear un sistema informático virtual; esto permite a las empresas la ejecución de múltiples sistemas operativos y aplicaciones en un solo servidor, mejorando temas de rendimiento, economía y mejoramiento de la eficiencia. (Joyanes, 2012)
          br
          br
          |La virtualización en red permite ejecutar las aplicaciones en una red virtual del mismo modo que en una red física y ofrece mejores ventajas con toda la independencia del #[em hardware] en la virtualización. También permite mostrar dispositivos y servicios de red de manera lógica como lo son puertos lógicos, conmutadores, #[em firewall], VPN, etc.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/1.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #fff4da")
          p.mb-0 En la virtualización también son múltiples los entornos simulados, estos se gestionan por un #[em software] llamado hipervisor, que permite establecer una conexión al #[em hardware] permitiendo dividir un sistema en varios entornos, a estos se les conoce como máquinas virtuales (VM). Entre sus ventajas está el que los administradores puedan agrupar y organizar mejor los recursos físicos. (Joyanes, 2012)
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Tipos
    .tarjeta(style="background-color: #f1f8ff").p-5
      SlyderA(tipo='b')
        .row.justify-content-center.mb-5
          .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
            h5 Virtualización de los datos
            p Este permite reunir datos de varias fuentes gestionando y transformando los datos según los requerimientos del cliente; estos datos generalmente se encuentran en varias ubicaciones y permiten dinamismo en la incorporación de fuentes.
          .col-8.order-1.order-lg-2(data-aos="fade-left")
            .tarjeta.bg-white.p-4
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 6.
                br 
                span Virtualización de los datos
              img(src='@/assets/curso/temas/tema3/2.svg', alt='').mb-3
              figcaption Nota: Adaptado de Hypervisor. Red Hat (s/f). 
        .row.justify-content-center.mb-5
          .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
            h5 Virtualización en escritorios
            p Permite experimentar entornos simulados de escritorio en varias máquinas físicas al mismo tiempo, también permite que los administradores hagan varias actualizaciones y configuraciones en todos los escritorios virtuales.
          .col-8.order-1.order-lg-2(data-aos="fade-left")
            .tarjeta.bg-white.p-4
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 7.
                br
                span Virtualización en escritorios 
              img(src='@/assets/curso/temas/tema3/3.svg', alt='').mb-3
              figcaption Nota: Adaptado de Hypervisor. Red Hat (s/f). 
        .row.justify-content-center.mb-5
          .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
            h5 Virtualización en los servidores
            p Esta permite procesar más funciones específicas, para esto se dividen los elementos y así realizar varias tareas.
          .col-8.order-1.order-lg-2(data-aos="fade-left")
            .tarjeta.bg-white.p-4
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 8.
                br
                span Virtualización en los servidores
              img(src='@/assets/curso/temas/tema3/4.svg', alt='').mb-3
              figcaption Nota: Adaptado de Hypervisor. Red Hat (s/f). 
        .row.justify-content-center.mb-5
          .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
            h5 Virtualización en los sistemas operativos
            p Los sistemas operativos se virtualizan en su núcleo (Kernel), lo que facilita la ejecución de varios sistemas operativos en paralelo; esto genera grandes beneficios porque se reduce los gastos en el #[em hardware] y aumenta la seguridad, ya que las instancias virtuales se pueden aislar.
          .col-8.order-1.order-lg-2(data-aos="fade-left")
            .tarjeta.bg-white.p-4
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 9.
                br
                span Virtualización en los sistemas operativos
              img(src='@/assets/curso/temas/tema3/5.svg', alt='').mb-3
              figcaption Nota: Adaptado de Hypervisor. Red Hat (s/f). 
        .row.justify-content-center.mb-5
          .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
            h5 Virtualización de las funciones de red
            p Se utiliza en el área de las redes y telecomunicaciones, reduce costos en el #[em hardware] como servidores, cables y centrales que son necesarios para crear varias redes independientes.
          .col-8.order-1.order-lg-2(data-aos="fade-left")
            .tarjeta.bg-white.p-4
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 10.
                br
                span Virtualización en la red
              img(src='@/assets/curso/temas/tema3/6.svg', alt='').mb-3
              figcaption Nota: Adaptado de Hypervisor. Red Hat (s/f). 
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Componentes
    p.mb-5(data-aos='fade-right') Los siguientes son elementos que componen a la virtualización:
    .row.justify-content-center.mb-5
      .col-lg-1.col-5(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/7.svg', alt='') 
      .col-lg-11(data-aos="fade-left")
        ul.lista-ul--color
          li
            i.fas.fa-check.fa-xs
            p.mb-0 #[b #[em Hardware] de la maquina:] este aportara los recursos que se utilizaran y será el actor al que se le aplicaran las técnicas de virtualización.

          li
            i.fas.fa-check.fa-xs
            p.mb-0 #[b Capa de virtualización:] se llama hipervisor o monitor de máquina virtual; este permite usar al mismo tiempo diferentes sistemas operativos en una misma máquina.
          li
            i.fas.fa-check.fa-xs
            p.mb-0 #[b Máquinas virtuales:] es un entorno virtual que dispone el #[em hardware] a su vez está formado por un sistema operativo. Se ejecutan como cualquier proceso del sistema operativo realizando una interpretación de enlace entre la fuente y código máquina.
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Herramientas
    p.mb-5(data-aos='fade-right') Podemos decir que existen actualmente muchas herramientas que nos brindan #[em software] para la virtualización tanto en servidores como en sistemas operativos; a continuación, se mencionan algunos #[em softwares] de virtualización orientados a los sistemas operativos y que se han hecho populares gracias a su facilidad de uso y estabilidad.
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        div(style="background-color: #ffb30b").p-3
          .contenedor-dashed.p-3
            .bg-white.p-3
              ul.lista-ul--color
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Oracle VirtualBox
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 VMware Workstation Pro
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 OpenVZ
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 QEMU
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 KVM
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0.fst-italic Parallels Desktop for Mac
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 VMware Fusion Pro
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Microsoft Hyper-V Manager
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/8.svg', alt='')
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Plataforma Azure
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-derecha
          .bloque-texto-a.bloque-texto-p.p-4.mb-5(data-aos="zoom-in" style="background-color: #ffecc1 ")
            .row.m-0.align-items-center.justify-content-between
              .col-lg-8
                .contenedor-dashed.p-4
                  .bloque-texto-a__texto.p-4
                    p.mb-0 Es una plataforma en la nube desarrollada por la compañía de Microsoft donde es publica y paga, esta te permite compilar, implementar y administrar aplicaciones en centros de datos, nos ofrecen servicios en infraestructuras como lo son almacenamientos, redes, máquinas virtuales y plataformas tales como SQL, CMS, #[em backened] para aplicaciones móviles. (Philippe, 2021)
              .col-lg-4.mb-4.mb-lg-0.p-4
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 11. 
                  br
                  span Modelo Azure
                img(src='@/assets/curso/temas/tema3/9.svg', alt='')
    .titulo-square.d-flex.align-items-center(data-aos="fade-right").mb-5
      i.fas.fa-square.fa-xs(style=" color:#ffb30b").me-3
      h3.mb-0 ¿Cómo funciona Microsoft Azure?
    p.mb-5(data-aos='fade-right') Este servicio funciona con una gran variedad de sistemas operativos, lenguajes de programación y herramientas para el desarrollo, además cuenta con todas las tecnologías que son necesarias para el desarrollo de aplicaciones.
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/10.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        div(style="background-color: #00defc").p-3
          .contenedor-dashed.p-3
            .bg-white.p-3
              p Entre las funcionalidades de Azure se encuentran las siguientes:
              ul.lista-ul--color
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Servicios de infraestructura: la nube hibrida de Microsoft permite usar máquinas virtuales, almacenamiento, copia de seguridad y herramientas de gestión.

                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Desarrollo de aplicaciones modernas: esta nos permite crear variedad de aplicaciones como soluciones web, móviles y de línea de negocios; en las características de escalado automático se tienen #[em App service web] y movilidad multimedia.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Información basada en datos: se pueden extraer información de todos los datos, estos se proporcionan por el administrador de SQL y NoSQL, con compatibilidad integrada para realizar análisis a bases de datos.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Administración de identidad: #[em Active directory] es una solución en la nube completa para la administración de identidades y acceso, puede a su vez administrar las cuentas de usuario y sincronizar con directorios locales.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        div(style="background-color: #00defc").p-3
          .contenedor-dashed.p-3
            .bg-white.p-3
              p Ahora bien la plataforma Azure ofrece muchas ventajas a empresas medianas y grandes entre esas destacaremos las siguientes:
              ul.lista-ul--color
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Desarrollo y operación a través del trabajo colaborativo: con una cultura en el desarrollo, implementación, administración de aplicaciones en la nube, el equipo TI tiene la ventaja de aumentar su productividad.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Seguridad en la nube: uno de los temas más interesantes en las empresas es la migración de la información en sistemas locales al entorno de la nube.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Resiliencia en la nube: una de las ventajas en la nube es bajar los costos con el uso de un #[em hardware] optimizado, anteriormente las empresas pensaban en invertir en equipos costosos para resolver el tema de escalabilidad.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Análisis de los datos: la plataforma de Microsoft Azure ofrece herramientas para ordenar los algoritmos y categorías de la información recopilada.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Inteligencia artificial: la plataforma revoluciona como organiza la información y los recursos TI, además permite desarrollar una cultura de cooperación basada en el aprendizaje, optimización y pruebas. (Philippe, 2021).
      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/11.svg', alt='')
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.5 Plataforma Google
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Esta plataforma es llamada como Google Cloud y ha reunido aplicaciones para el desarrollo web, es utilizada para las soluciones de tecnologías de almacenamiento en la nube.
          br
          br
          |Google ofrece una variedad de servicios como lo es por ejemplo (Google cloud print), este permite imprimir desde la web sin necesidad de portar o instalar un sistema operativo, dentro de las ventajas de la plataforma de Google se encuentra que esta abastecida por fibra óptica y esta interconectada en todo el planeta; es por esto que la mayor ventaja de la plataforma es el acceso a las innovaciones de Google.
        .cajon-b.color-secundario.p-3.mb-2
          p.mb-0 Todos los recursos que se asignan y usan deben pertenecer a un proyecto; los proyectos están compuestos por la configuración, permisos y metadatos para describir tus aplicaciones. Cada proyecto debe contener las siguientes características: nombre del proyecto, ID y un numero de proyecto.
            br
            br
            |Para estos casos la consola proporciona una interfaz gráfica orientada en la web en donde se pueden administrar los proyectos y recursos de Google Cloud; también se pueden crear varios proyectos y usarlos para separar el trabajo de una mejor manera. Villarino. (2018)
            br
            br
            |Entre la lista de funciones que Google Cloud ofrece se encuentran más de 100 productos y servicios dando solución a problemas empresariales como lo pueden ser; máquinas virtuales, alojamiento web, almacenamiento de archivos, VPS, creación de aplicaciones, herramientas de gestión, etc.
        .cajon-b.color-secundario.p-3.mb-5.abajo-derecha
          p.mb-0 Cloud sirve para la realización de sitios web, administradores de procesos y almacenamiento de grandes volúmenes de datos; además tienen su propio espacio en la nube para manteniendo un alto nivel de seguridad con un sistema de encriptado que evita la invasión del sistema y robos de datos.
      .col-lg-5.col-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 12.
          br
          span Plataforma Google Cloud
        img(src='@/assets/curso/temas/tema3/12.jpg', alt='')
    p.mb-5(data-aos='fade-right') Dentro de las ventajas se encuentra que se puede hacer una inversión en una plataforma en la nube, lo tienen sus beneficios. Ahora bien, cuando se habla específicamente de Google se tienen aún más ventajas a comparación de servicios similares, algunas de estas son:
    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        ol.lista-ol--cuadro
          li.mb-0
          .lista-ol--cuadro__vineta(style='background-color: #084a93')
            span 1
          | Precios competitivos.
          li.mb-0
          .lista-ol--cuadro__vineta(style='background-color: #084a93')
            span 2
          | Seguridad de nivel alto.
          li.mb-0
          .lista-ol--cuadro__vineta(style='background-color: #084a93')
            span 3
          | Migración de datos a máquinas virtuales.
          li.mb-0
          .lista-ol--cuadro__vineta(style='background-color: #084a93')
            span 4
          | Plataforma expansiva y escalable.
      .col-lg-4(data-aos="fade-left")
        ol.lista-ol--cuadro
          li.mb-0
          .lista-ol--cuadro__vineta(style='background-color: #084a93')
            span 5
          | Rendimiento superior y de calidad.
          li.mb-0
          .lista-ol--cuadro__vineta(style='background-color: #084a93')
            span 6
          | Colaboración entre usuarios y proyectos.
          li.mb-0
          .lista-ol--cuadro__vineta(style='background-color: #084a93')
            span 7
          | Copia de seguridad automática.
          li.mb-0
          .lista-ol--cuadro__vineta(style='background-color: #084a93')
            span 8
          | Red privada a alta velocidad.
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.6 AWS (Amazon web services)
    .cajon-b-amarillo
      .cajon-b.color-secundario.p-3.mb-5
        p.mb-0 Esta es una de las plataformas en la nube más populares ya que ofrece gran variedad de servicios; ofrece más de 200 servicios integrales dentro de estas tecnologías de infraestructura como computo, almacenamientos y bases de datos, lo que hace que las aplicaciones en la nube sean mucho más rápidas, rentables y fáciles de usar.
          br
          br
          |Se puede decir que Amazon Web Services es un paquete de servicios web que forman una plataforma de computación en la nube, este es usado en aplicaciones famosas como Dropbox, hootSuite y compite directamente con Azure, Google Cloud e IBM Cloud.
          br
          br
          |AWS fue lanzado en el año 2006 ofreciendo servicios para sitios web, la mayoría de estos servicios no están expuestos a los usuarios finales y a esta se ingresa a través del protocolo HTTP. (Serrano, 2022)
      .cajon-b.color-secundario.p-3.mb-5.abajo-derecha
        p.mb-0 En el año 2020, AWS hizo convenios con la empresa colombiana SENA, para formar profesionales en tecnologías como ciencias de datos, inteligencia artificial y cloud computing, con lo que se espera formar a más de 150,000 colombianos.
      p.mb-5(data-aos='fade-right') Amazon Web Service ofrece herramientas como las siguientes:
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/13.jpg', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Bases de datos")
            p Entre las diferentes bases de datos que ofrece el servicio AWS están MysQL, posgreSQL, Oracle, SQL server, Amazon Aurora.
          div(titulo="Creación de redes virtuales")
            p Permite a los usuarios crear redes privadas virtuales en la nube.
          div(titulo="Aplicación en el ámbito empresarial")
            p Amazon WorkMail es el servicio de correo que ofrece Amazon a través de este se gestionan los correos empresariales.
          div(titulo="Almacenamiento y gestores de contenido")
            p Ofrece diferentes tipos de almacenamientos desde archivos con acceso regular poco frecuente o incluso como un solo archivo.
          div(titulo="<em>Cloud computing</em>")
            p Desarrollado para la creación de instancias y mantenimiento. 
          div(titulo="Inteligencia de negocios ")
            p Nos permite realizar análisis de datos empresariales a gran volumen y servicios para la gestión de flujos de datos.
          div(titulo="Gestión de aplicaciones móviles")
            p Proporciona herramientas para la creación, testeo y mantenimiento de aplicaciones móviles utilizando entornos Web.
          div(titulo="Internet de las cosas ")
            p Establece conexiones y análisis de los dispositivos conectados a la internet.
          div(titulo="Herramientas para desarrolladores")
            p Gestión de códigos, implementación y publicación del #[em software.]
          div(titulo="Seguridad y control de acceso")
            p Nos permite autenticar en varios pasos para así poder acceder a sistemas internos. 
              br
              | (Serrano, 2022)

















</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
