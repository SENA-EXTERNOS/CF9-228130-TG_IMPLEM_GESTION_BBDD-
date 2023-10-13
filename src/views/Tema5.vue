<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Sistemas de control de versiones, GIT, integración y entrega continua

    .row.mt-5

      p A través de los sistemas de control de versiones, se pueden gestionar y rastrear los cambios que se presentan en el código de un <em>software</em>.

      p Dentro de los elementos importantes de los sistemas de control de versiones, se resaltan los siguientes:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/1.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="¿Qué es?")
            p Es una herramienta que vigila y gestiona cambios en un sistema de archivos, de igual manera un VCS monitorizara las adiciones, eliminaciones y modificaciones en las líneas de texto que contiene el archivo.
              br
              br
              |Es la práctica de rastrear y gestionar los cambios en el código de <em>software</em>; los sistemas de control de versiones son #[em software] que mejoran a los equipos de #[em software] al gestionar los cambios en el código fuente a lo largo del tiempo; estos entornos se aceleran y los sistemas de control mejoran los tiempos en la gestión de los proyectos. (Dauzon, 2022)
          div(titulo="Utilizado para")
            p Son especialmente utilizados para equipos de <em>DevOps</em>, ya que permiten reducir tiempo en el desarrollo; también se puede decir que se realizan seguimientos a las modificaciones del código en un tipo especial de bases de datos, en este si comete un error en la codificación, los desarrolladores pueden ir a sus versiones anteriores y hacer comparaciones para ayudar a resolver los errores, lo que permite minimizar las interrupciones a todos los miembros del equipo.
              br
              br
              |Para los proyectos de desarrollo de #[em software] el código fuente es fundamental, ya que se convierte en un activo valioso cuyo valor debe protegerse; es por eso por lo que el control de versiones protege el código tanto de las catástrofes como del deterioro causal de los errores y consecuencias accidentales.
          div(titulo="Puede ayudar a")
            p Los desarrolladores que trabajan continuamente en grupo escribiendo líneas de código y modificando los existentes, el código del proyecto generalmente se organiza en una estructura de carpetas o árbol de archivos; un desarrollador del equipo podría estar trabajando en una rama del árbol mientras otro desarrollador podría hacer cambios en varias partes del árbol de archivos.
              br
              br
              |El control de versiones ayuda al grupo de desarrolladores a resolver este tipo de problemas al realizar seguimiento a todos los cambios individuales de cada colaborador, esto al contribuir a evitar que el trabajo entre en conflicto; los cambios realizados por una parte del <em>software</em> pueden ser incompatibles con los que hayan escrito o desarrollado otros desarrolladores que estén trabajando al mismo tiempo. Este problema debe gestionarse de una manera ordenada sin interferir en el trabajo del resto del equipo, un buen #[em software] de control de versiones soporta el flujo de trabajo de un desarrollador sin imponer una forma de trabajar, también forma en cualquier plataforma. Estos también facilitan el flujo sencillo y continuo del código.
          div(titulo="Equipos de <em>software</em>")
            p Los equipos de software que no utilizan ninguna plataforma de control de versiones, con frecuencia se encuentran con problemas como el no saber qué cambios que se han realizado están disponibles para los usuarios; si es un desarrollador que nunca ha utilizado el control de versiones, puede que haya añadido versiones a los archivos y el <em>software</em> de control de versiones es una parte fundamental en el área de las prácticas profesionales del equipo de mismo. Los desarrolladores individuales están acostumbrados a trabajar con un sistema de control de versiones potente, en sus equipos; por ende, suelen reconocer el increíble valor que el control de versiones da a los proyectos. (Dauzon, 2022)
    .row.justify-content-center.mb-5.g-0.align-items-center
      .col-lg-8(data-aos="fade-left")
        div(style="background-color: #ffb30b").p-3
          .contenedor-dashed.p-4
            .bg-white.p-4
              h5 Repositorios Git
              p.mb-0 Git es un sistema de control de versiones y de código abierto creado originalmente por Linus Torvalds en 2005. A diferencia de los antiguos sistemas centralizados como SVN y CVS, Git está distribuido de forma en que cada desarrollador tiene la posibilidad de mirar la trazabilidad completa de su repositorio de manera local, de este modo la clonación inicial es más lenta, pero las operaciones posteriores como el #[em commit, diff, marge] y #[em log] son mucho más rápidas.
                br
                br
                |Los repositorios <em>Git</em> incluyen las funcionalidades de crear ramas, fusionar y reescribir información en los proyectos, lo cual ha resultado de mucha ayuda en trabajos colaborativos por su fluidez en trabajos innovadores y eficaces. También es una de las herramientas más populares con la que los equipos pueden colaborar en las ramas y revisar con eficacia el código de los demás; se considera el modelo actual para el desarrollo del <em>software</em>.
      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema6/2.svg', alt='')
    .row.justify-content-center.mb-5.g-0.align-items-center
      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema6/3.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        div(style="background-color: #00defc").p-3
          .contenedor-dashed.p-4
            .bg-white.p-4
              p.mb-0 Estos repositorios son instalaciones virtuales donde se almacenan investigaciones científicas según su temática multidisciplinaria; estos pueden ser de tres tipos como: repositorios institucionales que son creados por las propias empresas para almacenar, usar y preservar a producción científica; también se encuentran repositorios temáticos que fueron creados por investigadores o instituciones, que reúnen información en un área específica; por último, se tienen los repositorios de datos que almacenan, conservan y comparten los datos de las investigaciones. (Dauzon, 2022)

                br
                br
                |También se puede mencionar que un repositorio Git es un almacenamiento virtual para la gestión de un proyecto, esto porque permite guardar versiones del código a las que se puede acceder cuando se necesite. Git almacena las opciones de configuración en tres archivos, lo que permite el ajuste individual local, global y de sistema; en conclusión, todas las opciones de configuración se almacenan en archivos de texto sin formato, así que el comando Git #[em config] en realidad no es más que una interfaz práctica de línea de comandos. En entrega continua se mejora la productividad del desarrollo ya que se reducen los errores y los #[em bugs] enviados a los clientes, también se optimiza los tiempos de encontrar errores gracias a la realización de pruebas; lo que permite al equipo de producción entregar las actualizaciones de manera rápida.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #ffe4a9")
          p.mb-0 Gracias a que la integración permite a los desarrolladores subir y fusionar los cambios del código en una misma rama del repositorio, el objetivo de la integración es garantizar que las nuevas características se fusionen a la base del código y al código entrante; esto se traduce en ejecución de pruebas. (Dauzon, 2022)
    p.mb-5(data-aos='fade-right') Git es una plataforma de desarrollo colaborativo donde se almacenan proyectos que utilizan un sistema para el control de versiones. Para entenderlo es necesario explicar cada uno de los comandos para el manejo de la herramienta, que se hace indispensable para cualquier grupo o proyecto de <em>software</em>. Dentro de los comandos básicos se encuentran:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Git <em> init</em>")
            p Para crear un nuevo repositorio se usa el comando Git #[em Init], este es un comando que se utiliza una vez durante la configuración inicial. Cuando se ejecuta este comando se creará un nuevo subdirectorio git en el repositorio actual, también se creará una nueva rama principal.
          div(titulo="Git <em> clone</em>")
            p Si se quiere clonar un repositorio existente se hace mediante el comando Git #[em clone]; la clonación suele ser una operación única, todas las operaciones de control de versiones sé administran por medio de su repositorio local.
          div(titulo="Git <em> add</em>")
            p Para guardar cambios en el repositorio se usan los comandos Git #[em add], pero antes se pueden realizar commits en la versión del archivo, los pasos que se deben hacer son los siguientes:
            ul.lista-ul--color
              li
                i.fas.fa-check.fa-xs(style="color: #084a93")
                p.mb-0 Cambiar el directorio a #[em /path/to/proyect.]

              li
                i.fas.fa-check.fa-xs(style="color: #084a93")
                p.mb-0 Crear un archivo nuevo comminttest.txt con el contenido #[em “Test”.]

              li
                i.fas.fa-check.fa-xs(style="color: #084a93")
                p.mb-0 Ejecutar el comando Git #[em add] para añadir committest.txt al área de preparación del repositorio.

              li
                i.fas.fa-check.fa-xs(style="color: #084a93")
                p.mb-0 Crear un #[em commit] nuevo con un mensaje que describa que el trabajo se ha hecho en el #[em commit.]
            p Es importante diferenciar las copias de trabajo en Git a las copias de trabajo al extraer código fuente de un repositorio SVN; a diferencia de SVN, Git no distingue entre las copias de trabajo y el repositorio central, es por eso que colaborar con Git es distinto que con SVN.


            p Se puede añadir también una URL de un repositorio remoto al Git config local y configurar una rama de nivel superior para ramas locales; el comando Git remote ofrece esta utilidad, un ejemplo de esto sería:

            p <em>Git remote add</em>, , este comando asignará el repositorio remoto a una referencia en el repositorio local y una vez asignado, se podrá enviar a las ramas locales.

          div(titulo="Git <em> push -u</em>")
            p Este comando enviará la rama del repositorio local además a configuración del URL del repositorio remoto, este puede pedir configurar ajustes como el #[em username] o el #[em email-] El comando Git #[em config] permite configurar la instalación de Git desde la línea de comandos, este comando puede definir ciertos ajustes, desde la información del usuario hasta las preferencias o el comportamiento del repositorio.
      .col-lg-4.col-8(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/4.svg', alt='')


</template>

<script>
export default {
  name: 'Tema6',
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
