<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-a.bloque-texto-p.p-4.mb-5(data-aos="zoom-in")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/intro/1.svg', alt='')
        .col-lg-8
          .contenedor-dashed.p-4
            .bloque-texto-a__texto.p-4
              p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán las generalidades y aspectos claves de los servicios de red, tipos de servicios, nube, software de virtualización y sistemas de control de versiones.
    
    .row.mt-5
      p Aprópiese de todos los contenidos que han sido diseñados para su aprendizaje; afiance sus saberes y conviértase en experto en red, virtualización, herramientas, plataformas de despliegues, pruebas de red, entre otros.

      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
 
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/P5tsrzSee7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style scoped lang="sass">
.bloque-texto-p
  &:before
    left: 60%
</style>
