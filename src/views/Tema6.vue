<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Contenedores

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        div(style="background-color: #ffe4a9").p-3
          .contenedor-dashed.p-3
            .bg-white.p-3
              p.mb-0 Muchas empresas apuestan por crear máquinas virtuales en los equipos ya que esto les permite multiplicar sus recursos y trabajar en entornos seguros, pero ¿qué es la virtualización?; este es un proceso que consiste en crear entornos virtuales simulados dentro de una maquina física, dicho de esta forma seria como crear pequeños equipos virtuales, de esta manera se puede trabajar en ellos como si se tratara del equipo físico. Dentro de sus funciones esta la capacidad de adaptar procesos internos a un entorno digital para favorecer el trabajo colaborativo optimiza el aprovechamiento de los recursos multiplicando los entornos de trabajo y favorecer un almacenamiento seguro de la información en un entorno virtual. (Gouigoux, 2018). Hay que resaltar que una máquina virtual no puede ingresar a la información o datos de la maquina anfitrión, para que funcione el software de virtualización este mapea los dispositivos virtuales dependiendo de los reales que se encuentren en la maquina física.
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/1.svg', alt='')
    p.mb-5(data-aos='fade-right') A continuación, miraremos cuales son los #[em softwares] de virtualización más populares en el mercado:
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 13.
          br
          span Funcionamiento #[em software] de virtualización
        img(src='@/assets/curso/temas/tema4/2.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="VirtualBox")
            p Para muchos está considerado como el mejor #[em software] para la virtualización ya que está disponible en forma libre, es muy sencillo y versátil y cuenta con funcionalidades de ejecutar la máquina virtual en pantalla completa.
          div(titulo="Citrix XenServer")
            p Se ha destacado como uno de los mejores ya que integra tecnología Xen, que proporciona entornos administrables seguros y fiables.
          div(titulo="Vmware Workstation")
            p Permite crear múltiples máquinas virtuales y un software muy robusto en cuanto a compatibilidad y rendimiento.
          div(titulo="Sandboxie ")
            p Permite ejecutar #[em softwares] maliciosos sin que afecten al resto del equipo, una vez se finalice la sesión el entorno de prueba será eliminado.
          div(titulo="Cameyo")
            p Permite ejecutar un programa virtual dentro de un paquete virtualizado; es la solución ideal para convertir programas normales a portables.
          div(titulo="Xen hypervisor")
            p Es una herramienta #[em open source] empleada por empresas de todos los tamaños.
          div(titulo="Parallels")
            p Está diseñado para sistemas operativos IOS, su principal ventaja es la capacidad de ejecutar otros sistemas operativos de la marca Apple.
          div(titulo="QEMU")
            p Es un #[em software] gratuito y es posible descargarla como extensión para Windows y Mac.
          div(titulo="Microsoft Hyper-V Server")
            p Microsoft cuenta con su propio #[em software], que emula el funcionamiento y las opciones de Vmware.
          div(titulo="KVM")
            p Es capaz de hacer funcionar máquinas virtuales a través de imágenes de disco con sistemas operativos.
          div(titulo="Aviat <em>Design</em>")
            p Puede automatizar y virtualizar redes inalámbricas, además permite trabajar con la herramienta desde cualquier lugar y en cualquier momento.
    
</template>

<script>
export default {
  name: 'Tema4',
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
