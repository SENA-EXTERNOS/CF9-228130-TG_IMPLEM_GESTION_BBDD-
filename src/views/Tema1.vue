<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Servicios de red
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4(data-aos='fade-right') Cuando se habla de servicios de red, se hace referencia a aquellos que se basan en una red de trabajo, los cuales son instalados en el <em>firewall</em> del servidor. Estos servicios son configurables, para así mantener la transmisión de los datos y su seguridad, brindando ayuda en la simplificación de muchos procesos y problemas, ayudando a que la red funcione eficazmente. (Philippe, 2010)

        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #fff4da")
          p.mb-0 La arquitectura de los servicios de red es fundamentalmente la de cliente-servidor y en algunos de estos servicios de red el cliente puede configurar de forma automática la gestión del servicio. Dentro del servicio de red más utilizado está el de; (DHCP) Protocolo de Configuración Dinámica de <em>Host</em>. Este es un estándar diseñado para reducir la carga administrativa y la complejidad de la configuración de <em>hosts</em> en un Protocolo de Control de Transmisión / Protocolo de Internet (TCP/IP) basado en red.
        p.mb-5(data-aos='fade-right') Se puede gestionar la configuración TCP/IP en los equipos clientes de forma automática en el protocolo DHCP con relación al siguiente esquema.
      .col-lg-5.col-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1
          br
          span <em>Servicios de red</em>
        figure
          img(src='@/assets/curso/temas/tema1/1.svg', alt='').mb-2
          figcaption Nota. Tomado de Linares (2017).


    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Generalidades

    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p La finalidad de una red se fundamenta en que los usuarios de una entidad o empresa, puedan optimizar los recursos para garantizar un rendimiento eficaz; es por esta razón, que las organizaciones cuentan con grandes beneficios a la hora de trabajar en red, como son los que veremos a continuación:

        ul.lista-ul--color
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            | Dinámica grupal.
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            p.mb-0 Administración del  #[em software.]
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            | Seguridad de la información.
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            | Mejores tiempos de respuesta.
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            | Facilidad de uso.
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            | Mejoramiento de la competitividad.
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            | Mejora la comunicación.
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            | Reduce los costos en los procesos.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/2.svg', alt='')

    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Acuerdos de nivel de servicio

    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/3.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        p Es importante que en todo servicio se elabore un documento o contrato que contemple los acuerdos y condiciones que deben cumplir el proveedor y el cliente; a esto se le llama acuerdo del nivel de servicio #[em Service level agreement], (SLA), el cual es importante para garantizar que el servicio prestado se cumpla entre ambas partes. En el área TIC se les llama SLA con este el proveedor se compromete con el cumplimiento de los requerimientos del cliente; estos servicios se organizan por niveles o métricas que indican un rango.
        .cajon.color-primario.p-4.mb-4(style="background-color: #dae4ef")
          p.mb-0 ¿Ahora bien, porque son importantes los SLA?, los proveedores que suministran servicios necesitan de los acuerdos de nivel de servicio para ayudar a administrar las expectativas de los clientes y mirar las circunstancias en las que no son responsables de la calidad del servicio; también hay un beneficio por parte de los clientes, ya que estos describen las características en el rendimiento del servicio.
        p Los SLA entonces ayudan a gestionar los problemas del servicio, estos se incorporan generalmente en un contrato de servicio del proveedor; ahora bien, ¿qué contiene un SLA?, estos generalmente tienen declarados los objetivos y una lista de servicios que están cubiertos por el acuerdo, este definirá las responsabilidades del mismo. El SLA incluye las exclusiones explicando las situaciones en que las garantías no se aplican, este puede ser eventos como actos terroristas o desastres causados por la naturaleza.

    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Calidad del servicio

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p El término de calidad del servicio se refiere a la capacidad de una red para brindar los distintos niveles de garantías al servicio en el tráfico; ahora bien, que el QoS es una técnica que mejora el uso de la red en donde se priorizara el tráfico.
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #ffecc1")
          p.mb-0 La variedad de aplicaciones influye en la red en múltiples maneras y esto hace que se deba ejercer un control en el uso del ancho de banda para así garantizar un rendimiento óptimo; es por esto por lo que se necesita identificar y darle prioridad al tráfico, ya que es algo muy importante en un negocio.
        p El QoS nos brinda una serie de beneficios como lo son:
        ul.lista-ul--color
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            | La previsibilidad
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            | Mensurabilidad
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            | Seguridad
      .col-lg-5.col-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2
          br
          span <em>Calidad del servicio en la red</em>
        img(src='@/assets/curso/temas/tema1/img1.svg', alt='')

    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Conceptos de servicios de redes

    p.mb-5(data-aos='fade-right') Podemos definir que los servicios de redes son un medio en donde dos o más sistemas se comunican; estas tienen una arquitectura que generalmente es la de cliente-servidor, en donde se exponen las tareas que el cliente puede consumir. A continuación, se encuentran los tipos de servicios en red:
    .contenedor-tarjetas.d-flex.flex-wrap.justify-content-center
        .col-md.tarjeta.p-4.m-1(style="background-color: #dae4ef")
          .row.justify-content-center.mb-4
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/5.svg', alt='Texto que describa la imagen')
          h4.text-center Impresión
          p Este servicio nos permite compartir impresoras en una red.
        .col-md.tarjeta.p-4.m-1(style="background-color: #dae4ef")
          .row.justify-content-center.mb-4
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/6.svg', alt='Texto que describa la imagen')
          h4.text-center Comunicación
          p Permite comunicar varios usuarios utilizando mensajes #[em (E-mail).]
        .col-md.tarjeta.p-4.m-1(style="background-color: #dae4ef")
          .row.justify-content-center.mb-4
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/7.svg', alt='Texto que describa la imagen')
          h4.text-center Información
          p Aquí los servidores almacenan información como lo son las bases de datos para que sean consultadas por un usuario (Web).
        .col-md.tarjeta.p-4.m-1(style="background-color: #dae4ef")
          .row.justify-content-center.mb-4
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/8.svg', alt='Texto que describa la imagen')
          h4.text-center Ficheros
          p Este servicio es ideal para guardar grandes volúmenes de información para que el cliente pueda hacer la descarga (FTP).
        .col-md.tarjeta.p-4.m-1(style="background-color: #dae4ef")
          .row.justify-content-center.mb-4
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/9.svg', alt='Texto que describa la imagen')
          h4.text-center Administración
          p Este elemento ayuda con la administración y configuración de los usuarios o clientes de la red (DHCP/DNS).

    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Protocolos y servicios de red

    .cajon-b.color-secundario.p-3.mb-5
      p.mb-0 Los protocolos se definen como un conjunto de reglas permanentes en la red; estos protocolos son estándares y tienen políticas que definen la comunicación entre dos o más equipos en la red; estas políticas aseguran la comunicación de extremo a extremo y también los protocolos que deben ser instalados por el emisor y receptor, para dar garantía a la comunicación de la red. (Philippe, 2010)
      br
      p Ahora bien, cuando se hace referencia a una pila de protocolos, se está hablando del conjunto completo de capas que trabajan entre sí, para brindar capacidades de red.

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Dentro de los protocolos más comunes, se encuentra el protocolo HTTP (protocolo de transferencia de hipertexto) que es la base de la comunicación de datos en la internet, también se encuentra el HTTPS (protocolo de transferencia de hipertexto sobre SSL/TLS), que utiliza los mismos servicios del HTTP, pero utilizando una conexión segura.
          br
          br
          |FTP (protocolo de transferencia de archivos) es utilizado para transferir datos en internet y en redes privadas, SSH (#[em shell] seguro) se utiliza para administrar dispositivos en una red de forma segura, SMTP (protocolo simple de transferencia de correo) se utiliza para enviar mensajes o datos desde el origen al destino entre servidores de correo.
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #ffecc1")
          p.mb-0 Otro protocolo de importancia es el DNS (sistema de nombres de dominio), que se utiliza para convertir el nombre en una dirección IP, este utiliza el puerto 53.
      .col-lg-5.col-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3
          br
          span <em>Protocolos de red</em>
        img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')
    .row.justify-content-center
      .col-lg-2.col-8(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/11.jpg', alt='')
      .col-lg-10(data-aos="fade-left")
        p Ahora bien, con relación a los servicios de red, se resalta que estos facilitan la conexión entre dos o más ordenadores, dando como finalidad compartir recursos tanto en el <em>software</em> o en el <em>hardware</em>; es por esto, por lo que podemos compartir impresoras o programas en una red, así como también los servicios de red garantizan una mejor seguridad de la información.

        p <b>Un ejemplo más conciso</b>

        p La interconexión de ordenadores conectados en diferentes sitios del mundo, estos intercambian datos y recursos; las redes inalámbricas Wifi también son otro servicio de red; esta funciona sin cables y trabaja igual, a los servicios de redes tradicionales.









</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
