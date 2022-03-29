<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.sd
      h1 Introducción
    p.mb-4 Es importante que el cliente logre conocer el estado de la mercancía y su ubicación, para fortalecer la confiabilidad y generar tranquilidad en la compra realizada. Para llegar a su destino final, la mercancía debe cruzar por varias etapas dentro del almacén o centro de distribución, como la agrupación de mercancías o la consolidación y el almacenamiento de acuerdo al tipo de producto; posteriormente, desconsolidar la mercancía o subdividir un pedido grande en otros más pequeños; y finalmente, trasladar mercancías en los diferentes medios de transporte a los destinatarios. Para comenzar el recorrido, visite el recurso didáctico que se muestra a continuación.
    
    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .col-lg-12.mt-4
      .cajon.color-secundario.p-4.mb-4
        p.p-2 Para la elaboración de este componente, se abordaron varios autores conocidos en <strong>ubicación, consolidación y desconsolidación de la mercancía y objetos postales,</strong> de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de <strong>servicios postales y transporte de mercancías.</strong>

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
