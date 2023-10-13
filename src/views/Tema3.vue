<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Virtualización y <em>software</em> de virtualización
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Esta es una tecnología que permite, mediante los servicios TI, crear otros servicios; distribuye las funciones del <em>hardware</em> entre varios usuarios o entornos, posibilitando el uso de la totalidad de la máquina; dichos recursos se dividen según las necesidades.

        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #d9faff")
          p.mb-0 Debido a las limitaciones de los servidores con arquitectura x86, muchas empresas del sector TI, se ven obligadas a implementar múltiples servidores que funcionan por debajo de su capacitad y rendimiento; esta situación genera ineficiencia y costos operativos excesivos.

        p Por ello, la virtualización utiliza el <em>software</em> para imitar todas las características que posee el <em>hardware</em> y crear un sistema informático virtual; esto permite a las empresas, la ejecución de múltiples sistemas operativos y aplicaciones en un solo servidor, mejorando temas de rendimiento, economía y mejoramiento de la eficiencia. (Joyanes, 2012)

        p La virtualización en red, permite ejecutar las aplicaciones en una red virtual del mismo modo que en una red física y ofrece mejores ventajas con toda la independencia del <em>hardware</em> en la virtualización. También permite mostrar dispositivos y servicios de red, de manera lógica, como los puertos lógicos, conmutadores, <em>firewall</em>, VPN, etc.


      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/1.svg', alt='')

    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Tipos de virtualización

      p En la virtualización, también son múltiples los entornos simulados; estos se gestionan por un software llamado hipervisor, que permite establecer una conexión al <em>hardware</em>, permitiendo dividir un sistema en varios entornos; a estos se les conoce como máquinas virtuales (VM). Entre sus ventajas está, el que los administradores puedan agrupar y organizar mejor los recursos físicos. (Joyanes, 2012)

      p A continuación, conozca algunos tipos de virtualización y sus generalidades:


    .tarjeta(style="background-color: #f1f8ff").p-5
      SlyderA(tipo='b')
        .row.justify-content-center.mb-5
          .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
            h5 Virtualización de los datos
            p Este permite reunir datos de varias fuentes gestionando y transformando los datos según los requerimientos del cliente; estos datos generalmente se encuentran en varias ubicaciones y permiten dinamismo en la incorporación de fuentes.
          .col-8.order-1.order-lg-2(data-aos="fade-left")
            .tarjeta.bg-white.p-4
              img(src='@/assets/curso/temas/tema3/2.svg', alt='').mb-3
              figcaption Nota: Adaptado de Hypervisor. Red Hat (s/f).
        .row.justify-content-center.mb-5
          .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
            h5 Virtualización en escritorios
            p Permite experimentar entornos simulados de escritorio en varias máquinas físicas al mismo tiempo, también permite que los administradores hagan varias actualizaciones y configuraciones en todos los escritorios virtuales.
          .col-8.order-1.order-lg-2(data-aos="fade-left")
            .tarjeta.bg-white.p-4
              img(src='@/assets/curso/temas/tema3/3.svg', alt='').mb-3
              figcaption Nota: Adaptado de Hypervisor. Red Hat (s/f).
        .row.justify-content-center.mb-5
          .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
            h5 Virtualización en los servidores
            p Esta permite procesar más funciones específicas, para esto se dividen los elementos y así realizar varias tareas.
          .col-8.order-1.order-lg-2(data-aos="fade-left")
            .tarjeta.bg-white.p-4
              img(src='@/assets/curso/temas/tema3/4.svg', alt='').mb-3
              figcaption Nota: Adaptado de Hypervisor. Red Hat (s/f).
        .row.justify-content-center.mb-5
          .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
            h5 Virtualización en los sistemas operativos
            p Los sistemas operativos se virtualizan en su núcleo (Kernel), lo que facilita la ejecución de varios sistemas operativos en paralelo; esto genera grandes beneficios porque se reduce los gastos en el #[em hardware] y aumenta la seguridad, ya que las instancias virtuales se pueden aislar.
          .col-8.order-1.order-lg-2(data-aos="fade-left")
            .tarjeta.bg-white.p-4
              img(src='@/assets/curso/temas/tema3/5.svg', alt='').mb-3
              figcaption Nota: Adaptado de Hypervisor. Red Hat (s/f).
        .row.justify-content-center.mb-5
          .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
            h5 Virtualización de las funciones de red
            p Se utiliza en el área de las redes y telecomunicaciones, reduce costos en el #[em hardware] como servidores, cables y centrales que son necesarios para crear varias redes independientes.
          .col-8.order-1.order-lg-2(data-aos="fade-left")
            .tarjeta.bg-white.p-4
              img(src='@/assets/curso/temas/tema3/6.svg', alt='').mb-3
              figcaption Nota: Adaptado de Hypervisor. Red Hat (s/f).

    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Componentes

    p.mb-5(data-aos='fade-right') Los siguientes son elementos que componen a la virtualización:
    .row.justify-content-center.mb-5
      .col-lg-1.col-5(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/7.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        ul.lista-ul--color
          li
            i.fas.fa-check.fa-xs
            p.mb-0 #[b #[em Hardware] de la máquina:] este aportará los recursos que se utilizarán y será el actor al que se le aplicarán las técnicas de virtualización.

          li
            i.fas.fa-check.fa-xs
            p.mb-0 #[b Capa de virtualización:] se llama hipervisor o monitor de máquina virtual y permite usar, al mismo tiempo, diferentes sistemas operativos en una misma máquina.
          li
            i.fas.fa-check.fa-xs
            p.mb-0 #[b Máquinas virtuales:] es un entorno virtual que dispone el <em>hardware</em>, formado, a su vez, por un sistema operativo. Se ejecutan como cualquier proceso del sistema operativo, realizando una interpretación de enlace entre la fuente y el código máquina.

    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Herramientas

    p.mb-5(data-aos='fade-right') Podemos decir que existen, actualmente, muchas herramientas que brindan <em>software</em> para la virtualización, tanto en servidores como en sistemas operativos; a continuación, se mencionan algunos <em>software</em> de virtualización, orientados a los sistemas operativos y que se han hecho populares gracias a su facilidad de uso y estabilidad:
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        div(style="background-color: #ffb30b").p-3
          .contenedor-dashed.p-3
            .bg-white.p-3
              ul.lista-ul--color
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <em>Oracle VirtualBox</em>.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <em>VMware Workstation Pro</em>.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <em>OpenVZ</em>.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <em>QEMU</em>.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <em>KVM</em>.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Parallels Desktop para Mac.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <em>VMware Fusion Pro</em>.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <em>Microsoft Hyper-V Manager</em>.

      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/8.svg', alt='')

    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Plataforma <em>Azure</em>

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-derecha
          .bloque-texto-a.bloque-texto-p.p-4.mb-5(data-aos="zoom-in" style="background-color: #ffecc1 ")
            .row.m-0.align-items-center.justify-content-between
              .col-lg-8
                .contenedor-dashed.p-4
                  .bloque-texto-a__texto.p-4
                    p.mb-0 Es una plataforma en la nube desarrollada por la compañía de Microsoft donde es pública y paga, esta te permite compilar, implementar y administrar aplicaciones en centros de datos, nos ofrecen servicios en infraestructuras como lo son almacenamientos, redes, máquinas virtuales y plataformas tales como SQL, CMS, #[em backened] para aplicaciones móviles. (Philippe, 2021)
              .col-lg-4.mb-4.mb-lg-0.p-4
                img(src='@/assets/curso/temas/tema3/9.svg', alt='')
    .titulo-square.d-flex.align-items-center(data-aos="fade-right").mb-5
      i.fas.fa-square.fa-xs(style=" color:#ffb30b").me-3
      h3.mb-0 ¿Cómo funciona <em>Microsoft Azure</em>?
    p.mb-5(data-aos='fade-right') Este servicio funciona con una gran variedad de sistemas operativos, lenguajes de programación y herramientas para el desarrollo. Además, cuenta con todas las tecnologías necesarias para el desarrollo de aplicaciones.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        div(style="background-color: #00defc").p-3
          .contenedor-dashed.p-3
            .bg-white.p-3
              p Entre las funcionalidades de Azure se encuentran las siguientes:
              ul.lista-ul--color
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <b>Servicios de infraestructura:</b> la nube híbrida de Microsoft, permite usar máquinas virtuales, almacenamiento, copia de seguridad y herramientas de gestión.

                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <b>Desarrollo de aplicaciones modernas:</b> permite crear variedad de aplicaciones como soluciones web, móviles y de línea de negocios; en las características de escalado automático, se tienen App Service Web y movilidad multimedia.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <b>Información basada en datos:</b> se puede extraer información de todos los datos. Estos se proporcionan por el administrador de SQL y NoSQL, con compatibilidad integrada para realizar análisis a bases de datos.

                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <b>Administración de identidad:</b>  Active Directory es una solución en la nube, completa, para la administración de identidades y acceso. Puede, a su vez, administrar las cuentas de usuario y sincronizar con directorios locales.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        div(style="background-color: #00defc").p-3
          .contenedor-dashed.p-3
            .bg-white.p-3
              p Ahora bien, la plataforma <em>Azure</em> ofrece muchas ventajas a empresas medianas y grandes, entre las cuales se destacan las siguientes:
              ul.lista-ul--color
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <strong>Desarrollo y operación a través del trabajo colaborativo:</strong> con una cultura en el desarrollo, implementación, administración de aplicaciones en la nube, el equipo TI tiene la ventaja de aumentar su productividad.

                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <strong>Seguridad en la nube:</strong> uno de los temas más interesantes en las empresas, es la migración de la información en sistemas locales al entorno de la nube.

                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <strong>Resiliencia en la nube:</strong>  una de las ventajas en la nube es bajar los costos con el uso de un <em>hardware</em> optimizado. Anteriormente, las empresas pensaban en invertir en equipos costosos para resolver el tema de escalabilidad.

                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <strong>Análisis de los datos:</strong> la plataforma de <em>Microsoft Azure</em>, ofrece herramientas para ordenar los algoritmos y categorías de la información recopilada.
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 <strong>Inteligencia artificial:</strong> la plataforma revoluciona la forma en que se organizan la información y los recursos TI; además, permite desarrollar una cultura de cooperación, basada en el aprendizaje, optimización y pruebas. (Philippe, 2021)

      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/11.svg', alt='')

    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Plataforma <em>Google</em>

    .row.justify-content-center.mb-5

      p Esta plataforma es llamada <em>Google Cloud</em> y ha reunido aplicaciones para el desarrollo web y es utilizada para las soluciones de tecnologías de almacenamiento en la nube.

      p <em>Google</em> ofrece una variedad de servicios como <em>Google Cloud Print</em>, el cual permite imprimir desde la web sin necesidad de portar o instalar un sistema operativo. La plataforma de <em>Google</em> está abastecida por fibra óptica y está interconectada en todo el planeta; es por esto que la mayor ventaja de la plataforma es el acceso a las innovaciones de <em>Google</em>.


      .col-lg-7(data-aos="fade-right")

        .cajon-b.color-secundario.p-3.mb-2
          p Todos los recursos que se asignan y usan deben pertenecer a un proyecto; los proyectos están compuestos por la configuración, permisos y metadatos, para describir aplicaciones. Cada proyecto debe contener las siguientes características: nombre del proyecto, ID y un número de proyecto.

          p Para estos casos, la consola proporciona una interfaz gráfica orientada en la web, en donde se pueden administrar los proyectos y recursos de <em>Google Cloud</em>; también se pueden crear varios proyectos y usarlos para separar el trabajo de una mejor manera. Villarino (2018)

          p Entre la lista de funciones que <em>Google Cloud</em> ofrece, se encuentran más de 100 productos y servicios, dando solución a problemas empresariales como: máquinas virtuales, alojamiento web, almacenamiento de archivos, VPS, creación de aplicaciones, herramientas de gestión, etc.

      .col-lg-5.col-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img12.svg', alt='')

    .row.mt-3.justify-content-center
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #d9faff")
            p.mb-0 <em>Google Cloud</em> sirve para la realización de sitios web, administradores de procesos y almacenamiento de grandes volúmenes de datos; además tienen su propio espacio en la nube, manteniendo un alto nivel de seguridad con un sistema de encriptado, que evita la invasión y robo de datos.


    p.mb-5(data-aos='fade-right') Con <em>Google Cloud</em> se puede hacer una inversión en una plataforma en la nube. Ahora bien, cuando se habla específicamente de Google, se tienen aún más ventajas, en comparación de servicios similares, como:

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

    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Amazon Web Services AWS

    .cajon-b-amarillo
      .cajon-b.color-secundario.p-3.mb-5
        p Esta es una de las plataformas más populares en la nube. Ofrece gran variedad de servicios integrales: cómputo, almacenamientos y bases de datos, lo que hace que las aplicaciones en la nube sean mucho más rápidas, rentables y fáciles de usar.

        p Se puede decir que Amazon Web Services, es un paquete de servicios web que forman una plataforma de computación en la nube; es usado en aplicaciones famosas como Dropbox, Hootsuite y compite directamente con Azure, <em>Google Cloud</em> e IBM Cloud.

        p.mb-0 AWS fue lanzado en el año 2006, ofreciendo servicios para sitios web. La mayoría de estos servicios no están expuestos a los usuarios finales. A ella se ingresa a través del protocolo HTTP (Serrano, 2022).

      .cajon-b.color-secundario.p-3.mb-5.abajo-derecha
        p.mb-0 En el año 2020, AWS hizo convenios con la empresa colombiana SENA, para formar profesionales en tecnologías como: ciencias de datos, inteligencia artificial y <em>Cloud Computing</em>, con lo que se espera formar a más de 150.000 colombianos.

    .row.mt-3
      p Amazon Web Service ofrece herramientas como las siguientes:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/13.jpg', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Bases de datos")
            p Entre las diferentes bases de datos que ofrece el servicio AWS están MySQL, posgreSQL, Oracle, SQL server, Amazon Aurora.
          div(titulo="Creación de redes virtuales")
            p Permite a los usuarios crear redes privadas virtuales en la nube.
          div(titulo="Aplicación en el ámbito empresarial")
            p Amazon WorkMail es el servicio de correo que ofrece Amazon a través de este se gestionan los correos empresariales.
          div(titulo="Almacenamiento y gestores de contenido")
            p Ofrece diferentes tipos de almacenamientos desde archivos con acceso regular poco frecuente o incluso como un solo archivo.
          div(titulo="<em>Cloud computing</em>")
            p Desarrollado para la creación de instancias y mantenimiento.
          div(titulo="Inteligencia de negocios ")
            p Permite realizar análisis de datos empresariales a gran volumen, y servicios para la gestión de flujos de datos.
          div(titulo="Gestión de aplicaciones móviles")
            p Proporciona herramientas para la creación, testeo y mantenimiento de aplicaciones móviles utilizando entornos Web.
          div(titulo="Internet de las cosas ")
            p Establece conexiones y análisis de los dispositivos conectados a la internet.
          div(titulo="Herramientas para desarrolladores")
            p Gestión de códigos, implementación y publicación del #[em software.]
          div(titulo="Seguridad y control de acceso")
            p Nos permite autenticar en varios pasos, para así poder acceder a sistemas internos.


    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 <em>Software</em> de virtualización

      p Es aquel que emula un equipo o sistema; se puede decir que es un <em>software</em> que puede hacerse pasar por otro dispositivo; es por eso que puede ejecutar otro sistema operativo en su interior, teniendo sus propios dispositivos como disco duro, memoria, entre otros componentes. Existen dos tipos de máquinas virtuales: las de sistema y las de proceso.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        div(style="background-color: #ffb30b").p-3
          .contenedor-dashed.p-3
            .bg-white.p-3
              p Muchas empresas apuestan por crear máquinas virtuales en los equipos debido a que esto les permite multiplicar sus recursos y trabajar en entornos seguros; pero ¿qué es la virtualización?

              p Es un proceso que consiste en crear entornos virtuales, simulados, dentro de una máquina física. Sería como crear pequeños equipos virtuales y, de esta manera, se puede trabajar en ellos como si se tratara del equipo físico. Dentro de sus funciones están:

              ul.lista-ul--color
                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 La capacidad de adaptar procesos internos a un entorno digital, para favorecer el trabajo colaborativo.

                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Optimizar el aprovechamiento de los recursos, multiplicando los entornos de trabajo.

                li
                  i.fas.fa-check.fa-xs
                  p.mb-0 Favorecer un almacenamiento seguro de la información, en un entorno virtual.

      .col-lg-4.col-8(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img13.svg', alt='')

    .row.mt-5
      p Hay que resaltar que una máquina virtual no puede ingresar a la información o datos de la máquina anfitrión. Para que funcione el <em>software</em> de virtualización, este mapea los dispositivos virtuales, dependiendo de los reales que se encuentren en la máquina física.

      p A continuación, se detallan algunos de los <em>software</em> de virtualización, más populares en el mercado:


    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img14.svg', alt='')
        figcaption Tomada de Ramírez (2016)
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="<em>VirtualBox</em>")
            p Considerado como el mejor <em>software</em> para la virtualización porque está disponible en forma libre, es muy sencillo y versátil y cuenta con funcionalidades para ejecutar la máquina virtual en pantalla completa.
          div(titulo="<em>Citrix XenServer</em>")
            p Se ha destacado como uno de los mejores, ya que integra tecnología Xen, que proporciona entornos administrables seguros y fiables.
          div(titulo="<em>Vmware Workstation</em>")
            p Permite crear múltiples máquinas virtuales y un <em>software</em> muy robusto en cuanto a compatibilidad y rendimiento.
          div(titulo="<em>Sandboxie </em>")
            p Permite ejecutar <em>software</em> malicioso sin afectaciones al resto del equipo y una vez que se finalice la sesión, el entorno de prueba será eliminado.
          div(titulo="<em>Cameyo</em>")
            p Permite ejecutar un programa virtual dentro de un paquete virtualizado; es la solución ideal para convertir programas normales a portables.
          div(titulo="<em>Xen hypervisor</em>")
            p Es una herramienta <em>open source</em> empleada por empresas de todos los tamaños.
          div(titulo="<em>Parallels</em>")
            p Está diseñado para sistemas operativos IOS, su principal ventaja es la capacidad de ejecutar otros sistemas operativos de la marca Apple.
          div(titulo="<em>QEMU</em>")
            p Es un <em>software</em> gratuito y es posible descargarlo como extensión para Windows y Mac.
          div(titulo="<em>Microsoft Hyper-V Server</em>")
            p Microsoft cuenta con su propio <em>software</em>, que emula el funcionamiento y las opciones de Vmware.
          div(titulo="<em>KVM</em>")
            p Es capaz de hacer funcionar máquinas virtuales a través de imágenes de disco con sistemas operativos.
          div(titulo="<em>Aviat Design</em>")
            p Puede automatizar y virtualizar redes inalámbricas, además permite trabajar con la herramienta desde cualquier lugar y en cualquier momento.













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
