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

    p(data-aos="fade-down").mt-5 La marca es un signo distintivo que identifica los atributos, valores y conceptos únicos y diferenciados, generan identidad, recordación y cuentan una historia que conecta con las necesidades y emociones de los clientes.
    p(data-aos="fade-down") En este componente logrará comprender cómo se construye el concepto de la marca, el cual surge a partir de entender las necesidades, problemas y emociones de los clientes, para traducirlos en productos y servicios que satisfagan sus necesidades. 
    p(data-aos="fade-down") El desarrollador de colecciones debe entender lo busca el cliente al momento de  vestir su cuerpo, su estilo de vida, aspiraciones, motivaciones y miedos que son el insumo para diseñar y construir el concepto de su marca, en ese sentido puede indagar, crear y soñar cuáles son esos conceptos que construirán su marca.  Lo invitamos a sumergirse en el mundo de las  colecciones y marcas de  vestuario.  

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
