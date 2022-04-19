<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Codificación de la mercancía
    p.mb-0 <strong>Figura 9</strong>
    p.it Codificación de la mercancía
    .row.justify-content-center
      .col-lg-4
        img(src='@/assets/curso/tema3/img01.png', alt='Texto que describa la imagen')
      .col-lg-8.mt-2.bg111
        p Así como es importante la ubicación dentro del almacén, bien sea por número de pasillo o por código de la estantería, los productos deben ser identificados a través de un código único por artículo, para la buena organización de las existencias, y por tanto, optimizar los recursos y agregar valor a las actividades que se desarrollan en el almacén.  El proceso de codificación de mercancías consiste en identificar los productos por medio de un código, el cual se asocia a una etiqueta adherida al producto, que permitirá acceder al producto electrónicamente, a través del sistema de información.  En caso de que el producto sea nuevo y no tenga código, se deberá asignar uno y registrar todas las especificaciones propias del producto.
        p Dicha codificación debe guardar relación con la aplicada para ubicaciones al interior de la empresa, logrando así trazabilidad de la información. La manera más razonable de cumplir con las entregas previstas es mantener un almacén organizado, por tanto, es necesario localizar el producto de forma sencilla, clara y rápida, para no cometer errores y enviar productos equivocados.  Dentro de los beneficios de la codificación, se tiene: 
    
    <br>
    .row.justify-content-center.bg112.mt-4
      .col-lg-6
        ol.lista-ol--cuadro.lista-ol--separador.mt-4.p-4

          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Lograr automatizar los procesos.


          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Optimizar la cadena de suministro.

          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Lograr operatividad en tiempo real.

          li 
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Rápida respuesta ante controles.

          li 
            .lista-ol--cuadro__vineta
              span 5
            p.mb-0 Histórico de movimientos.
          li 
            .lista-ol--cuadro__vineta
              span 6
            p.mb-0 Reducción de errores y costos.
      .col-lg-2
      .col-lg-4
        img(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1. Generalidades
    p Previa la codificación de los productos, se deben identificar los sitios (físicos) donde serán almacenados los bienes.  El volumen del almacén, las estanterías y muebles son los que determinan los lugares disponibles para almacenar las mercancías y los espacios libres para circulación de equipos y personal (pasillos); por lo anterior, el almacén en físico debe ser codificado o identificar cada espacio y estante, así como en cada una de nuestras ciudades las casas están ubicadas por calles, carreras, diagonales, etc.  A continuación, se describen los pasos a seguir para codificar la infraestructura del almacén:   
    <br>
    p.mb-0 <strong>Figura 10</strong>
    p.it Actividades para codificar un almacén
    .row.justify-content-center
      .col-lg-10.mt-4
         img.mt-4(src='@/assets/curso/tema3/img3.svg', alt='Texto que describa la imagen')
    <br>
    p.mt-4 A continuación, se presentan dos ejemplos de codificación de almacén: por estantería y por pasillo.
    p <strong>Ejemplos de codificación de almacén</strong>
    .row.justify-content-center
      .col-lg-1
      .col-lg-3
         img.mt-4(src='@/assets/curso/tema3/img4.svg', alt='Texto que describa la imagen')
      .col-lg-8.mt-4 
        p.mt-4 Para una eficiente operación y trazabilidad de las mercancías, los almacenes deben contar con un sistema de información denominado Sistema de Gestión del Almacén (SGA), como se mencionó anteriormente, con el objeto de controlar las referencias. 
        p Es así como la codificación de las mercancías es una labor de cuidado, desde el momento que llega el producto hasta que sale del almacén. Cada área puede participar en la asignación del código, de acuerdo con los criterios que requieran controlar y hacer seguimiento.  Existen varias metodologías de codificación:
    .row.justify-content-center
      .col-lg-1
      .col-lg-3
         img.mt-4(src='@/assets/curso/tema3/img5.svg', alt='Texto que describa la imagen')
      .col-lg-8.mt-4.bg1
        ol.lista-ol--cuadro.lista-ol--separador.p-4

          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 <strong>Codificación libre:</strong> no existe un parámetro específico, simplemente se asigna un código que no    esté repetido o no se haya utilizado.



          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 <strong>Codificación libre al azar:</strong> se asigna un código al azar, para aquellos productos nuevos.


          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 <strong>Codificación Inteligente:</strong> se utilizan los códigos de familias y subfamilias, así:
        img.p-4.aqs(src='@/assets/curso/tema3/img6.svg', alt='Texto que describa la imagen')
    <br><br>
    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4
          .row
            .col-lg-2
              img(src='@/assets/curso/tema3/ico1.svg', alt='Texto que describa la imagen')
            .col-lg-7.mt-2
              h5 Ejemplo:
              p.mt-4 Camisa adulto referencia 
                span.etiqueta1 56789
                |, de la colección 
                span.etiqueta2 2020
                |, subfamilia 
                span.etiqueta2 34 
                | (talla M) 
                | Código: 
                span.etiqueta3 <strong>20</strong>
                span.etiqueta2 <strong>34</strong>
                span.etiqueta1 <strong>56789</strong>
    h5 Ejemplo etiqueta inteligente para el producto
    .row.justify-content-center
      .col-lg-3.mt-4
        img(src='@/assets/curso/tema3/img7.png', alt='Texto que describa la imagen')
      .col-lg-8.mt-4
        <br>
        p Se recomienda que los productos estén identificados en la etiqueta adhesiva con el código inteligente, código de barras y nombre de la referencia, como se muestra en la imagen.
    <br><br>
    h5 Códigos y etiquetas
    .row.justify-content-center
      .col-lg-9.mt-4
        <br>
        p De acuerdo con el ítem anterior, la codificación puede ser libre, de acuerdo con la naturaleza de la organización; sin embargo, en Colombia, a través del decreto 2153 del 26/diciembre/2016, se establece el Sistema armonizado de designación y codificación de mercancías, que es una nomenclatura internacional de productos multipropósito desarrollada por la Organización Mundial de Aduanas (OMA), la cual contiene alrededor de 5.000 grupos de productos, cada uno identificado por un código de seis dígitos, apoyado por reglas bien definidas para lograr una clasificación uniforme.  A continuación, se relacionan los diferentes tipos de etiquetas:
      .col-lg-2.mt-4
        img(src='@/assets/curso/tema3/img8.svg', alt='Texto que describa la imagen')
      .col-lg-1
    .titulo-sexto.color-acento-contenido.mt-4
      h5 Tabla 7
      span Tipos de etiquetas
    .tabla-a.color-primario.mb-5 
      table
        thead
          tr
            th.wid3 TIPO DE ETIQUETA
            th DESCRIPCIÓN
            th IMAGEN

        tbody
          tr
            td.text-center <strong>CÓDIGO DE BARRAS</strong>
            td Denominado sistema GS1 de identificación y transmisión de datos mediante código de barras.  Utilizado en más de 105 países.  Permite identificar todas las unidades de productos en la cadena logística.
              p Se compone de dos partes: código numérico y el símbolo; las barras contienen información codificada.    
            td 
              img(src='@/assets/curso/tema3/img9.svg', alt='Texto que describa la imagen')
  

          tr
            td.text-center <strong>GTIN13</strong>
            td.mt-4 Código indicado para identificar mercancía o productos que se dirigen al punto de venta. Está conformado por:
              p.mb-0 Prefijo asignado al país (Colombia_770).
              p.mb-0 Prefijo de la empresa (5-8 dígitos). 
              p.mb-0 Código del producto (por marcas).
              p.mb-0 Código de control.
            td
              img(src='@/assets/curso/tema3/img10.svg', alt='Texto que describa la imagen') 
          tr
            td.mars.text-center <strong>GTIN14</strong>
            td Denominado también EAN14, por componerse de 14 dígitos.  Utilizado para cada unidad del producto contenida en un grupo GTIN13, se elimina el código de control y se asigna uno nuevo al inicio. Ver imagen.

            td 
              img(src='@/assets/curso/tema3/img11.png', alt='Texto que describa la imagen')
          tr
            td.bac.text-center <strong>GS1-128</strong>
            td.mb-0 Sistema estándar internacional de identificación de mercancías en entornos logísticos.
              p.mb-0 Requisito: toda la información de la etiqueta debe ser legible.
              p.mb-0 Contenido: características del producto, código agrupación, cantidad, lote, fecha fabricación, envasado, consumo, etc.
              p Importante tener en cuenta que esta etiqueta deberá estar en el producto a lo largo de toda la cadena de suministro.

            td 
              img.wid(src='@/assets/curso/tema3/img12.png', alt='Texto que describa la imagen')
          tr
            td.text-center <strong>CÓDIGO DATA MATRIX</strong>
            td.mb-0 Sistema de código de barras bidimensionales (2D), que permite almacenar gran cantidad de información en una matriz de puntos.

              p.mb-0 Requiere un contacto visual entre el equipo lector y el código.

            td 
              img.wid(src='@/assets/curso/tema3/img13.png', alt='Texto que describa la imagen')
          tr
            td.text-center <strong>ETIQUETA ELECTRÓNICA</strong>
            td.mb-0 Identificación de información a través de tecnología de radiofrecuencia.


              p.mb-0 Etiquetas que contienen insertados pequeños circuitos y microprocesadores, memorias y receptores de radio.  Consta de: una etiqueta activa o pasiva, lector, 
                span.it middleware 
                |  (micropieza de 
                span.it software
                |  ) y red EPC global.

            td 
              img.wid(src='@/assets/curso/tema3/img14.png', alt='Texto que describa la imagen')
    
    separdor                                                                 
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2. Clasificación de cargas y almacenamiento
    p.mb-0 <strong>Figura 11</strong>
    p.it Organización de mercancía en almacén
    .row.justify-content-center
      .col-lg-3
        img(src='@/assets/curso/tema3/img15.png', alt='Texto que describa la imagen')
      .col-lg-9.mt-4.bg1
        <br>
        p Las características que definen el diseño, construcción, distribución e instalaciones necesarias para un almacén están determinadas principalmente por los tipos de producto que requieran almacenamiento; de igual forma, la naturaleza del producto dará las pautas a seguir en la cadena logística en las diferentes zonas del almacén; sin embargo, todos los productos tienen características diferentes que se deben tener en cuenta para la manipulación y el almacenamiento. 
    <br><br><br><br>
    .row.justify-content-center
      .col-lg-8.bg113
        p.mb-0 <strong>Figura 12</strong>
        p.it Subdivisiones de la unidad de carga 
        <br><br>
        p El almacenamiento es más efectivo si existe una adecuada utilización de recursos disponibles, como espacios, equipos, herramientas y talento humano, por lo que requiere la organización de los productos en <strong>unidades de carga</strong>, denominadas así por ser una agrupación homogénea de un conjunto de productos, dispuesta sobre una plataforma o embalaje (caja, contenedor, etc.) para un manejo y traslado más seguro, con el menor número de movimientos posibles y traslados cortos. Para una mejor manipulación, las unidades de carga pueden subdividirse en otras más pequeñas, así:
      .col-lg-4
        img(src='@/assets/curso/tema3/img16.png', alt='Texto que describa la imagen')
    .row.justify-content-center
      .col-lg-12
        .cajon.color-primario.p-4.mb-4
          .row
            .col-lg-1.mt-4
              img(src='@/assets/curso/tema3/ico2.svg', alt='Texto que describa la imagen')
            .col-lg-11.mt-2.p-4
              img(src='@/assets/curso/tema3/img17.svg', alt='Texto que describa la imagen')
    p.mt-4 Las cargas se pueden clasificar de acuerdo con los siguientes criterios:
    <br>
    .titulo-sexto.color-acento-contenido.mt-4.mb-0
      h5 Tabla 8
    p.it.maxx Clasificación de las cargas
    img(src='@/assets/curso/tema4/img25.svg', alt='Texto que describa la imagen')

    p.mt-4 <strong>Nota fuente:</strong>
    p.it https://www.ar-racking.com/co/actualidad/blog/calidad-y-seguridad-4/tipos-de-carga-y-como-almacenarlas#
    <br>
    h5.mt-4 Normas a tener en cuenta para el almacenamiento
    .row.justify-content-center
      
      .col-lg-1
      .col-lg-1
        <br>
        img(src='@/assets/curso/tema3/ico3.svg', alt='Texto que describa la imagen')
      .col-lg-1
      .col-lg-9
        <br>
        p El almacenamiento de mercancías son las diversas formas en que estas están organizadas dentro de la bodega, ya sea en el suelo, sobre estibas o en estantes. Para elegir la técnica más apropiada de almacenamiento es importante aclarar los siguientes términos:
    .row.justify-content-center
      .col-lg-8
        img(src='@/assets/curso/tema3/img18.png', alt='Texto que describa la imagen')
    p.mt-4 Con los conceptos anteriores, es más fácil comprender algunas reglas aplicables en el almacenamiento:
    .col-lg-12.mt-4.p-4
      .cajon.color-acento-contenido.p-4.mb-4
        p.mt-4 - Almacenar en el suelo aquellos productos que estén empacados en recipientes redondos, aunque ahorra costos porque no es necesaria la estantería, obliga a recorrer largas distancias.
        p.mt-4 - Agrupar productos similares para evitar contaminación con otros que puedan presentar algún tipo de riesgo.

        p.mt-4 - Almacenar en estantes que tengan acceso directo, para facilitar la recogida y operación en general.

        p.mt-4 - Almacenar productos que por su forma requieren que sea vertical en los estantes diseñados.

        p.mt-4 - Los productos pesados deben estar en la parte inferior del estante o a nivel de la cintura del operario.

        p.mt-4 - Monitorear visualmente la forma de almacenamiento (cámaras o drones), para evitar peligro de caídas-.
        p.mt-4 - Almacenar los productos de acuerdo con el nivel de rotación.

      .row
        .col-lg-10
        .col-lg-2
          img.bbb(src='@/assets/curso/tema3/img19.png', alt='Texto que describa la imagen')        
      p Para ampliar la información sobre ubicación de la mercancía y el almacenamiento, por favor revise el siguiente video:                                              
    .row.justify-content-center
      .col-lg-10
        .tarjeta.p-4.p-md-5.mb-5.mt-4.bg555
          .row.justify-content-around.align-items-center
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            .col-md.col-lg-6.p-4                        
              <br><br><br>
              h5 Material de apoyo

              p.mb-4 Si es de su interés ampliar la información sobre ubicación de la mercancía y el almacenamiento dentro del almacén, visite la url: 
              a.boton.color-acento-botones.texto-blanco.mt-4(:href="('https://www.youtube.com/watch?v=dhGt7A0935Q')" target="_blank" type="application/pdf")
                span Ingresar
                i.fas.fa-link
              <br><br><br><br>
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema3',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
