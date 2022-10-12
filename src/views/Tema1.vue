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
        p.mb-4(data-aos='fade-right') Cuando se habla de servicios de red se hace referencia a estos servicios se basan en una red de trabajo los cuales son instalados en el firewall del servidor. Estos servicios son configurables, para así mantener la transmisión de los datos y su seguridad, brindando ayuda en la simplificación de muchos procesos y problemas ayudando a que la red funcione eficazmente. (Philippe, 2010)
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #fff4da")
          p.mb-0 La arquitectura de los servicios de red es fundamentalmente la de cliente-servidor y en algunos de estos servicios de red el cliente puede configurar de forma automática la gestión del servicio. Dentro del servicio de red más utilizado está el de; (DHCP) Protocolo de Configuración Dinámica de Host. Este es un estándar diseñado para reducir la carga administrativa y la complejidad de la configuración de hosts en un Protocolo de Control de Transmisión / Protocolo de Internet (TCP/IP) basado en red.
        p.mb-5(data-aos='fade-right') Se puede gestionar la configuración TCP/IP en los equipos clientes de forma automática en el protocolo DHCP con relación al siguiente esquema.
      .col-lg-5.col-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          br
          span Servicios de red
        figure
          img(src='@/assets/curso/temas/tema1/1.svg', alt='').mb-2
          figcaption Nota. Tomado de Linares (2017)
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Generalidades
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p El fin de una red es que los usuarios de una entidad u empresa puedan optimizar los recursos para garantizar un rendimiento eficaz, es por esto por lo que las organizaciones cuentan con grandes beneficios a la hora de trabajar en red como lo son:
        ul.lista-ul--color
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            | Dinámica grupal.
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            p.mb-0 Administración del #[b #[em software.]]
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
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            p.mb-0 Administración del #[b #[em software.]]
          li
            i.fas.fa-circle.fa-xs(style='color: #00defc')
            | Seguridad de la información.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/2.svg', alt='')
    Separador
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/3.svg', alt='')

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
