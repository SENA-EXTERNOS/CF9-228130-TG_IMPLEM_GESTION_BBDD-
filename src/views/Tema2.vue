<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Cloud computing]
    .bloque-texto-derecha
      .bloque-texto-a.bloque-texto-p.p-4.mb-5(data-aos="zoom-in" style="background-color: #ffecc1 ")
        .row.m-0.align-items-center.justify-content-between
          .col-lg-8
            .contenedor-dashed.p-4
              .bloque-texto-a__texto.p-4
                p.mb-0 Tiene como finalidad ofrecer servicios utilizando conectividad mediante la internet; esta permite el acceso a recursos del #[em software] a nivel mundial en tiempo real, es importante resaltar que la multi locación es lo que hace diferente este sistema haciendo que los procesos sean mucho más eficientes que las aplicaciones antiguas.  (Villarino,2018).
                  br
                  br
                  |La computación y el acceso a la nube brinda a personas y empresas varias ventajas como lo son la seguridad, conectividad y mantenimiento en el uso de la información; es por esto por lo que las empresas tienen mayor flexibilidad en relación con los datos, a los que pueden ingresar desde cualquier parte del mundo. Esta es una tecnología que brinda la posibilidad de acceder remotamente al #[em software], archivos remotos y procesamiento de la información utilizando internet; en este modelo no es necesaria la instalación de una aplicación local, lo que brinda mucha más seguridad. (Joyanes, 2012).
          .col-lg-4.mb-4.mb-lg-0.p-4
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 4. 
              br
              span Diagrama computacion en la nube
            img(src='@/assets/curso/temas/tema2/1.svg', alt='')
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Tipos de servicios
    p.mb-5(data-aos='fade-right') En la actualidad existen diversas empresas que manejan la información en la nube ofreciendo una variedad de servicios los cuales se pueden clasificar en:
    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfograficaB.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/2.svg', alt='Texto que describa la imagen')
              figcaption Nota: Adaptada de SaS (s/f). Weclapp (2021).  
          div(x="23.5%" y="13%" tooltip="tooltip de max 35 caracteres" numero="+")
            h4.mb-2 SaaS
            p Software como servicio (SaaS); en este los proveedores ofrecen a sus clientes servicios de niveles de aplicación según la necesidad de cada empresa, como lo es la (CRM) o gestión de relaciones con clientes, orientación a el marketing y análisis empresarial.
              br
              br
              |En este servicio los usuarios suben al #[em software] datos a cambio de pagar una cuota para el uso de esta información, que se aloja en servidores externos; es así como cuando se hace referencia a un #[em software] que está en la nube se habla de un SaaS.
              br
              br
              |Un empleo de Saas seria en servicios como Microsoft Office 365 y CMS, con la plataforma de office los usuarios pueden trabajar desde cualquier parte del mundo y acceder a herramientas de ofimática; este se ejecuta en servidores propios de Microsoft. También se tiene el CMS, que un software para el diseño de páginas web. (Gouigoux, 2018)

          div(x="49.5%" y="13%" tooltip="tooltip de max 35 caracteres" numero="+")
            h4.mb-2 PaaS
            p Plataforma como servicio (PasS) se orientan a componentes como lo son servidores web (SDK), kits de desarrollo de #[em software] y sistemas que gestionan las bases de datos.
              br
              br
              |Este tipo de servicio es fundamental para los desarrolladores que deseen implementar y gestionar sus aplicaciones, ya que no tienen que preocuparse por las capacidades del #[em hardware] y el #[em software] permitiendo el mejoramiento de la eficacia. Esta ofrece plataformas como servicio que pueden lazar bases de datos, herramientas de desarrollo y servicios que contribuyen con la inteligencia empresarial. Un empleo de estas plataformas seria Google App Engine y Bungee Connect.
          div(x="75.5%" y="13%" tooltip="tooltip de max 35 caracteres" numero="+")
            h4.mb-2 LaaS
            p Infraestructura como servicio (IaaS), este es un centro de datos seguro ya que permiten acceder a recursos primarios como lo son la capacidad de almacenamiento de datos, procesamiento y conectividad en la red.
              br
              br
              |Cuando se habla de la laaS se hace referencia a estructuras como servicios; las organizaciones hacen contrataciones de infraestructura de hardware a un tercero a cambio de un pago, en esta se pueden elegir las características y capacidades en el procesador, memoria y capacidad de disco duro según los requerimientos de la empresa. También se ofrecen máquinas virtuales, sistemas de copia de seguridad y firewall. (Gouigoux, 2018)
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Modelos de servicios en la nube
    .row.justify-content-center.mb-5
      .col-lg-2.col-5(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/3.png', alt='')
      .col-lg-10(data-aos="fade-left")
        ul.lista-ul--color
          li
            i.fas.fa-circle.fa-xs
            p.mb-0 #[b Proveedor:] este se encarga de brindar el servicio, permite al usuario facilitarle recursos e infraestructura tecnológica garantizando el mantenimiento del mismo.
          li
            i.fas.fa-circle.fa-xs
            p.mb-0 #[b Tecnología:] este dependerá del tipo de servicio; el proveedor brindará una gestión mayor o menor en los recursos tecnológicos.

          li
            i.fas.fa-circle.fa-xs
            p.mb-0 #[b Consumidor:] se podrá acceder a los recursos ofrecidos por el proveedor, este podrá hacer uso de los mismos.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Tipos de nubes
    p.mb-5(data-aos='fade-right') Las empresas al ofrecer sus servicios a través de la web (nube) pueden presentarlo en tres tipos:
    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/4.svg', alt='Texto que describa la imagen')
              figcaption Nota: Adaptado de (s/f). Copimar.
          .tarjeta.color-acento-botones.p-3.text-black(x="17.5%" y="39%" numero="+")
            h5.mb-2 Nube privada
            p.mb-0 Esta es una red que está protegida brindando servicios de administración con limitaciones a personas, normalmente son empresas grandes y entidades que se caracterizan por este tipo de almacenamiento.
          .tarjeta.color-acento-botones.p-3.text-black(x="50%" y="39%" numero="+")
            h5.mb-2 Nube hibrida
            p.mb-0 Este tipo de nube permite ampliar el servicio según los requerimientos y necesidades del usuario.
          .tarjeta.color-acento-botones.p-3.text-black(x="83%" y="39%" numero="+")
            h5.mb-2 Nube pública
            p.mb-0 En este sistema el proveedor vende servicios en la internet brindando recursos abiertamente como es el caso de Amazon, Azure o Google Engine.





</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass">
.img-infografica-b__modal
  background-color: #ffe4a9
  border-radius: 20px
  h4, p
    color: $color-sistema-texto !important
.img-infografica-b__modal__btn-cerrar i
  color: #084a93
.text-black
  h1,h2,h3,h4,h5,h6,p
    color: $color-sistema-texto !important
</style>
