<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    img(data-aos="zoom-in").img-t.img-a(src='@/assets/ilustraciones/img1.jpg', alt='')

    p(data-aos="fade-down").mt-5 En este componente formativo, se abordarán los elementos a tener en cuenta para la interpretación de colecciones de moda, también se tratarán temas como el contexto de las marcas nacionales e internacionales, los problemas y las necesidades del mercado y el consumidor, el Concept Book, el ADN de la marca, el desarrollo de Concepto, el moodboard y la ilustración en figurín, con lo cual el aprendiz desarrollará por completo su capacidad para identificar las necesidades de un segmento del mercado y desarrollar nuevos productos para colecciones de moda.
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
