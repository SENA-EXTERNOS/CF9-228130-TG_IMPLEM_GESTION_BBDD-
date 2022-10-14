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
              p.mb-0 En la presente temática se revisarán elementos relacionados con de los servicios de red, tipos de servicios, nube, software de virtualización y sistemas de control de versiones; antes de iniciar es importante revisar el siguiente video para identificar el contexto de aprendizaje:
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UJHOEa70wUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') Para la elaboración de este componente se abordarán varios autores conocidos en temas relacionados a #[b los servicios de red, virtualización, herramientas, y plataformas de despliegues,] de quienes se toman diversos conceptos para fines educativos de esta competencia.
    
    
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
