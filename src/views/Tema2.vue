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
                p.mb-0 Tiene como finalidad ofrecer servicios utilizando conectividad mediante la Internet; esta permite el acceso a recursos del <em>software</em> a nivel mundial, en tiempo real; es importante resaltar que la multilocación es lo que hace diferente a este sistema, haciendo que los procesos sean mucho más eficientes que las aplicaciones antiguas. (Villarino, 2018)
                  br
                  br
                  | La computación y el acceso a la nube brinda, a personas y empresas, varias ventajas como son la seguridad, conectividad y mantenimiento en el uso de la información; es por esto por lo que las empresas tienen mayor flexibilidad en relación con los datos, a los que pueden ingresar desde cualquier parte del mundo. Esta es una tecnología que brinda la posibilidad de acceder remotamente al <em>software</em>, archivos remotos y procesamiento de la información, utilizando Internet; en este modelo, no es necesaria la instalación de una aplicación local, lo que brinda mucha más seguridad. (Joyanes, 2012)

          .col-lg-4.mb-4.mb-lg-0.p-4
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 4
              br
              span <em>Diagrama computación en la nube</em>
            img(src='@/assets/curso/temas/tema2/1.svg', alt='')

    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Tipos de servicios

    p.mb-5(data-aos='fade-right') En la actualidad existen diversas empresas que manejan la información en la nube ofreciendo una variedad de servicios los cuales se pueden clasificar en:
    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='Texto que describa la imagen')
              figcaption Nota: Adaptada de SaS (s/f). Weclapp (2021).  
          .tarjeta.color-acento-contenido.p-3.text-black(x="23.5%" y="13%" numero="+")
            h4.mb-2 SaaS
            p #[em Software] como servicio (SaaS); en este los proveedores ofrecen a sus clientes servicios de niveles de aplicación según la necesidad de cada empresa, como lo es la (CRM) o gestión de relaciones con clientes, orientación al marketing y análisis empresarial.

            p En este servicio los usuarios suben al <em>software</em> datos a cambio de pagar una cuota para el uso de esta información, que se aloja en servidores externos; es así como cuando se hace referencia a un <em>software</em> que está en la nube se habla de un SaaS.
            p Un empleo de SaaS sería en servicios como Microsoft Office 365 y CMS, con la plataforma de office los usuarios pueden trabajar desde cualquier parte del mundo y acceder a herramientas de ofimática; este se ejecuta en servidores propios de Microsoft. También se tiene el CMS, que un <em>software</em> para el diseño de páginas web. (Gouigoux, 2018)



          .tarjeta.color-acento-contenido.p-3.text-black(x="49.5%" y="13%" numero="+")
            h4.mb-2 PaaS
            p Plataforma como servicio (PasS) se orientan a componentes como lo son servidores web (SDK), kits de desarrollo de <em>software</em> y sistemas que gestionan las bases de datos.
            p Este tipo de servicio es fundamental para los desarrolladores que deseen implementar y gestionar sus aplicaciones, ya que no tienen que preocuparse por las capacidades del <em>hardware</em> y el <em>software</em> permitiendo el mejoramiento de la eficacia. Esta ofrece plataformas como servicio que pueden lanzar bases de datos, herramientas de desarrollo y servicios que contribuyen con la inteligencia empresarial. Un empleo de estas plataformas sería Google <em>App Engine</em> y <em>Bungee Connect</em>.


          .tarjeta.color-acento-contenido.p-3.text-black(x="75.5%" y="13%"  numero="+")
            h4.mb-2 laaS
            p Infraestructura como servicio (laaS), este es un centro de datos seguro, ya que permiten acceder a recursos primarios como lo son la capacidad de almacenamiento de datos, procesamiento y conectividad en la red.
            p Cuando se habla de la laaS se hace referencia a estructuras como servicios; las organizaciones hacen contrataciones de infraestructura de <em>hardware</em> a un tercero a cambio de un pago, en esta se pueden elegir las características y capacidades en el procesador, memoria y capacidad de disco duro según los requerimientos de la empresa. También se ofrecen máquinas virtuales, sistemas de copia de seguridad y <em>firewall</em>. (Gouigoux, 2018)



    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Modelos de servicios en la nube

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
    
    .row.mt-5
      ul.lista-ul--color
          li
            i.fas.fa-square
            h3 Tipos de nubes

    p.mb-5(data-aos='fade-right') Las empresas, al ofrecer sus servicios a través de la web (nube) pueden presentarlo de tres formas:

    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Texto que describa la imagen').mb-3

          .tarjeta.color-acento-botones.p-3.text-black(x="12.5%" y="39%" numero="+")
            h5.mb-2 Nube privada
            p.mb-0 Esta es una red que está protegida brindando servicios de administración con limitaciones a personas. Normalmente, son empresas grandes y entidades que se caracterizan por este tipo de almacenamiento.

          .tarjeta.color-acento-botones.p-3.text-black(x="50%" y="39%" numero="+")
            h5.mb-2 Nube híbrida
            p.mb-0 Este tipo de nube permite ampliar el servicio según los requerimientos y necesidades del usuario.
          .tarjeta.color-acento-botones.p-3.text-black(x="88%" y="39%" numero="+")
            h5.mb-2 Nube pública
            p.mb-0 En este sistema, el proveedor vende servicios en la Internet, brindando recursos abiertamente, como es el caso de <em>Amazon, Azure</em> o <em>Google Engine</em>.




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
</style>
