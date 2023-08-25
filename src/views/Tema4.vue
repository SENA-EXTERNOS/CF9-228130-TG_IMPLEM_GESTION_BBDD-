<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Contenedores
    .bloque-texto-derecha
      .bloque-texto-a.bloque-texto-p.p-4.mb-5(data-aos="zoom-in" style="background-color: #ffecc1 ")
        .row.m-0.align-items-center.justify-content-between
          .col-lg-8
            .contenedor-dashed.p-4
              .bloque-texto-a__texto.p-4
                p.mb-0 Son paquetes ligeros que tienen códigos de aplicaciones, al igual que sus dependencias; además, contienen bibliotecas indispensables para la ejecución de los servicios del <em>software</em>; algo por destacar es la facilidad para compartir recursos a nivel de sistema operativo.

                  br
                  br
                  |Los contenedores se pueden definir como un mecanismo emergente, que utiliza medios de pruebas de aplicaciones; estos se utilizan en computadores domésticos y de igual manera ofrecen soluciones de red empresariales utilizando la web. Se puede asimilar un contenedor con una máquina virtual, ya que en su interior se encuentra un entorno Linux con todas las funcionalidades, usuarios y sistemas de archivos. (Gouigoux, 2018)
                  br
                  br
                  |También es posible ejecutar varios contenedores al tiempo, cada uno con sus instalaciones y dependencias. Los contenedores comparten recursos del <em>host</em>, lo que hace que los contenedores sean más pequeños y rápidos que las máquinas virtuales. Los contenedores fueron diseñados para sustituir a las máquinas virtuales, como plataformas para la implementación de microservicios. 
                  
          .col-lg-4.mb-4.mb-lg-0.p-4
            img(src='@/assets/curso/temas/tema5/1.svg', alt='')
    
    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Algunas generalidades de los contenedores

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(style='border: 2px solid #ffb30b')
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/2.svg')})`}"
      )
      .contenedor-dashed.p-3.position-relative.d-flex.justify-content-end.w-60
        .bloque-texto-g__texto.p-4.w-100
          p.mb-0 Al utilizar contenedores, los clientes evitan que se produzcan problemas de incompatibilidad o bloqueos; esto hace que mejore el rendimiento de todos los equipos. Por esta razón, los desarrolladores se pueden enfocar en la aplicación y sin sistemas operativos. Los contenedores ofrecen un óptimo despliegue en <em>clústers</em>, al dividir los componentes en contenedores; los desarrolladores también pueden actualizar individualmente, en vez de reprocesar toda la aplicación.
            br
            br
            |Ahora bien, con relación a la diferencia entre las máquinas virtuales y los contenedores, se puede decir que las máquinas virtuales emulan el <em>hardware</em> para que se pueda ejecutar en varias instancias, en un mismo sistema operativo. Otra de las ventajas es que se pueden ejecutar diferentes sistemas operativos en un mismo servidor. Ahora bien, un contenedor virtualiza el sistema operativo y hace que la aplicación en el contenedor, crea que tiene el sistema operativo; este se puede ejecutar desde cualquier lugar y para esto no se necesita arrancar un sistema operativo ni cargar bibliotecas. (Gouigoux, 2018)

    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Características de los contenedores

    p.mb-5(data-aos='fade-right') Dentro de las características de los contenedores se pueden encontrar las siguientes:

    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema5/3.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        .cajon-b-amarillo
          .cajon-b.color-primario.p-3.pb-0
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta(style='background-color: #084a93')
                  span 1
                p.mb-0 #[b Portabilidad:] ofrece la posibilidad de desplegarlo en cualquier otro sistema y, además, permite un ahorro en la posibilidad de tener que instalar aplicaciones que, normalmente, se usan en el entorno.

              li
                .lista-ol--cuadro__vineta(style='background-color: #084a93')
                  span 2
                p.mb-0 #[b Disponibilidad para uso desde cualquier parte:]  permite ejecutar aplicaciones y proyectos desde cualquier parte del mundo, brindando tranquilidad en la realización de aplicativos, evitando el uso de discos externos y memorias, entre otros dispositivos.

              li
                .lista-ol--cuadro__vineta(style='background-color: #084a93')
                  span 3
                p.mb-0 #[b Agilidad:]  en entornos portables, donde no se necesita la ejecución de sistemas operativos e instalación de aplicativos que hacen que el trabajo sea más lento; se destacan los contenedores en el trabajo ágil y ligero para el desarrollo de los proyectos de <em>software</em>.
              li
                .lista-ol--cuadro__vineta(style='background-color: #084a93')
                  span 4
                p.mb-0 #[b Seguridad:] permite la ejecución de paquetes y aplicativos de forma segura, utilizando Linux como núcleo. A su vez, los contenedores utilizan su propio sistema operativo y brindan seguridad en la información.
              li
                .lista-ol--cuadro__vineta(style='background-color: #084a93')
                  span 5
                p.mb-0 #[b Menos sobrecarga:] al poder utilizar contenedores en entornos web, se garantiza que las máquinas no usen su <em>hardware</em> y <em>software</em>, porque se están ejecutando los aplicativos mediante la utilización de servidores externos que proporcionan capacidades de <em>hardware</em>, según los requerimientos determinados por el cliente.

          .cajon-b.color-primario.p-3.pt-0.mb-5.abajo-derecha
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta(style='background-color: #084a93')
                  span 6
                p.mb-0 #[b Mayor eficiencia:] los contenedores brindan los recursos suficientes para el desarrollo de los proyectos requeridos por el cliente.


              li
                .lista-ol--cuadro__vineta(style='background-color: #084a93')
                  span 7
                p.mb-0 #[b Mejor desarrollo de aplicaciones:] permiten el uso de amplias herramientas para el desarrollo de aplicaciones en lenguajes de programación básicos y avanzados, permitiendo calidad en el desarrollo de aplicativos.
    
    
    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Imágenes
     
    p.mb-5(data-aos='fade-right') Es una plantilla de solo lectura, con todas las instrucciones que necesita el motor de Docker para crear un contenedor. Una imagen Docker se describe en forma de archivo de texto. Antes de iniciar un contenedor en un sistema, se carga un paquete con la imagen correspondiente, si no está ya guardada de forma local.
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema5/4.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        div(style="background-color: #00defc").p-3
          .contenedor-dashed.p-3
            .bg-white.p-3
              p.mb-0 Una imagen en contenedores es un archivo (<em>file</em>) que está compuesto por varias capas y se utiliza para ejecutar un código dentro de un contenedor. Contiene un sistema de ficheros para un óptimo funcionamiento, de manera que estas imágenes actúan como un conjunto de instrucciones para la construcción de un contenedor, así como lo hace una plantilla.

                br
                br
                |La ejecución de una imagen dentro de un contenedor, implica la posibilidad de convertirse en una o varias instancias; estas imágenes se pueden comparar con un sistema de máquinas virtuales, que se utilizan en los entornos. Las imágenes se pueden encontrar en diferentes repositorios, y uno de los más conocidos es el <em>Docker Hub</em>, en donde se pueden encontrar imágenes públicas que se utilizan en los proyectos; lo que se debe hacer es descargar la imagen y empezar creando las diferentes capas que se requieren para la aplicación. Gouigoux. (2018)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-left")
        div(style="background-color: #ffb30b").p-3
          .contenedor-dashed.p-3
            .bg-white.p-3
              p.mb-0 Ahora bien, cuando se habla de capas, se hace referencia a las imágenes que están hechas de capas ordenadas; se puede decir que una capa es un conjunto de cambios en el sistema de archivos. Cuando se toman todas las capas y se apilan, se obtiene una nueva imagen que contiene cambios; esto quiere decir que, cada vez que se crea una capa, hay que tener en cuenta el orden y, también, qué va a contener cada una de ellas; por ejemplo, si en una capa se crea un archivo y en la siguiente capa se elimina, y en la otra se hace uso del mismo, esto generaría un error. Es por esto por lo que se debe tener en cuenta qué capa se está ejecutando en el programa.

                br
                br
                |Un ejemplo de una imagen podría contener un sistema operativo Ubuntu con un servidor SQL y la aplicación web desarrollada instalada, las imágenes se utilizan para crear contenedores y nunca cambian; existen imágenes de tipo privadas y públicas y estas pueden contener elementos básicos como Java, Ubuntu o Apache, entre otros que se pueden descargar. Generalmente cuando se crea una imagen se parte de una imagen padre, a la que se le van adicionando cosas.
      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema5/5.svg', alt='')
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        div(style=' background-color: #d9faff; border-left: 10px solid #00defc').p-5
          h5 ¿Cómo se construye una imagen?
          p Una imagen no es un archivo individual, se trata más bien de una agrupación de distintos componentes, los cuales se detallarán a continuación:
          ul.lista-ul--color
            li
              i.fas.fa-check.fa-xs(style='color: #00defc')
              | Capa de imágenes: esta contiene datos que son agregados al operar en sistemas de archivo y, en este caso, las capas se sobreponen.

            li
              i.fas.fa-check.fa-xs(style='color: #00defc')
              | Imagen padre: esta es la capa fundamental y ancla la imagen al árbol genealógico. 

            li
              i.fas.fa-check.fa-xs(style='color: #00defc')
              | Manifiesto de imagen: describe la agrupación de las capas que contiene.
    
    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Despliegue y gestión

    p.mb-5(data-aos='fade-right') Para el despliegue y la gestión, lo primero que se debe hacer es crear una imagen en Docker, para así poder lanzar un contenedor a partir de ella. A continuación, se presentan los comandos a utilizar para el despliegue:
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema5/6.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Run")
            p # docker run …
              br
              |Este comando identifica que se va a alanzar un contenedor; todo lo que se encuentre a la derecha de run significará que será una configuración específica para la manipulación del contenedor.  
          div(titulo="- -rm")
            p Permite eliminar el contenedor que se está ejecutando, esto es necesario para usar un programa que solo esté en el contenedor y ejecutar algo dentro.
          div(titulo="- -name")
            p Se utiliza para darle un nombre o identificación a nuestro contenedor.
          div(titulo="-d")
            p Hace que un contenedor corra por debajo después de terminar la ejecución del comando.
          div(titulo="-it")
            p Abre un canal interactivo, una terminal. 
          div(titulo="-p")
            p Este comando asigna puertos entre el local y el contenedor.
              br
              |Ejemplo:
              br
              |-p 8080:8080
              br
              |-p 8080
          div(titulo="- -privileged")
            p Sirve para darle permisos al contenedor, como si fuera el <em>localhost</em>.
          div(titulo="-v")
            p Permite compartir directorios en el contenedor, tener la aplicación en el <em>localhost</em> y compartirla al contenedor.
          div(titulo="- -link ")
            p Esto enlaza un contenedor a otro.


    p.mb-5(data-aos='fade-right') En el siguiente video, se puede observar el proceso de instalación de un contenedor (Docker) en el sistema operativo Windows. Es importante prestar mucha atención a todos los procedimientos y explicaciones que se detallan:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/sKAKbpdS7Dk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5.bg-gradient
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema5/7.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-10.mb-3.mb-sm-0
                  h3.mb-1 Instalación del contenedor
                  p.text-small Igualmente, puede visualizar el paso a paso correspondiente, haciendo clic en el botón descargar.
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones.text-black(:href="obtenerLink('downloads/CF9_228130_Anexo.pdf')" target="_blank" type="application/pdf")
                    span Descargar 
                    i.fas.fa-file-download

 

</template>

<script>
export default {
  name: 'Tema5',
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
