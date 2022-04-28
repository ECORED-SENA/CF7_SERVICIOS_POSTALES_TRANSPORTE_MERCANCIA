<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Codificación de la mercancía  
    
    .row.justify-content-center.align-items-center
      .col-lg-4
        img(src='@/assets/curso/tema3/img01.png', alt='Texto que describa la imagen').img400.m-auto
      .col-lg-8.bg1A.px-4
        p Así como es importante la ubicación dentro del almacén, bien sea por número de pasillo o por código de la estantería, los productos deben ser identificados a través de un código único por artículo, para la buena organización de las existencias, y por tanto, optimizar los recursos y agregar valor a las actividades que se desarrollan en el almacén.  El proceso de codificación de mercancías consiste en identificar los productos por medio de un código, el cual se asocia a una etiqueta adherida al producto, que permitirá acceder al producto electrónicamente, a través del sistema de información.  En caso de que el producto sea nuevo y no tenga código, se deberá asignar uno y registrar todas las especificaciones propias del producto.

        p.mb-0 Dicha codificación debe guardar relación con la aplicada para ubicaciones al interior de la empresa, logrando así trazabilidad de la información. La manera más razonable de cumplir con las entregas previstas es mantener un almacén organizado, por tanto, es necesario localizar el producto de forma sencilla, clara y rápida, para no cometer errores y enviar productos equivocados.  Dentro de los beneficios de la codificación, se tiene:     
    
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

      .col-lg-6.d-none.d-lg-flex
        img(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen').m-auto.img350(data-aos="zoom-in")

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1. Generalidades

    p.mb-5 Previa la codificación de los productos, se deben identificar los sitios (físicos) donde serán almacenados los bienes.  El volumen del almacén, las estanterías y muebles son los que determinan los lugares disponibles para almacenar las mercancías y los espacios libres para circulación de equipos y personal (pasillos); por lo anterior, el almacén en físico debe ser codificado o identificar cada espacio y estante, así como en cada una de nuestras ciudades las casas están ubicadas por calles, carreras, diagonales, etc.  A continuación, se describen los pasos a seguir para codificar la infraestructura del almacén:  

    .titulo-sexto.color-acento-contenido
      h5 Figura 10
      span Actividades para codificar un almacén
 
    .row.justify-content-center.mb-5
      .col-lg-10.mt-4
        img.mt-4(src='@/assets/curso/tema3/img3.svg', alt='')(data-aos="zoom-in")

    
    p.mb-5 A continuación, se presentan dos ejemplos de codificación de almacén: por estantería y por pasillo.

    h4.mb-5 Ejemplos de codificación de almacén

    .row.justify-content-center.mb-5.bg1A        
      .col-lg-3
        .row.justify-content-center(data-aos="zoom-in")
          .col-12.mb-4
            img(src='@/assets/curso/tema3/img4.svg', alt='Texto que describa la imagen').img300.m-auto
            figcaption Codificación por estantería  
          .col-12
            img(src='@/assets/curso/tema3/img4.svg', alt='Texto que describa la imagen').img300.m-auto
            figcaption Codificación por pasillo 
      .col-lg-8.ps-4
        p Para una eficiente operación y trazabilidad de las mercancías, los almacenes deben contar con un sistema de información denominado Sistema de Gestión del Almacén (SGA), como se mencionó anteriormente, con el objeto de controlar las referencias. 

        p.mb-4 Es así como la codificación de las mercancías es una labor de cuidado, desde el momento que llega el producto hasta que sale del almacén. Cada área puede participar en la asignación del código, de acuerdo con los criterios que requieran controlar y hacer seguimiento.  Existen varias metodologías de codificación: 

        ol.lista-ol--cuadro
          li.mb-4 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 <strong>Codificación libre:</strong> no existe un parámetro específico, simplemente se asigna un código que no    esté repetido o no se haya utilizado.
          li.mb-4 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 <strong>Codificación libre al azar:</strong> se asigna un código al azar, para aquellos productos nuevos.
          li.mb-3
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 <strong>Codificación Inteligente:</strong> se utilizan los códigos de familias y subfamilias, así: 

        ul.fa-ul
          li.mb-2
            i(style="color:#FF4A36;").fa-li.fas.fa-angle-right 
            | <strong>Familias de productos principales:</strong> utilizan 2 dígitos numéricos.           
          li.mb-2
            i(style="color:#FF4A36;").fa-li.fas.fa-angle-right 
            | #[strong Subfamilia:] subdivisión de la familia, utilizan 2 dígitos más.   
          li
            i(style="color:#FF4A36;").fa-li.fas.fa-angle-right 
            | #[strong Referencia única:] asignación de código específico para el producto de 3 dígitos en adelante.   


    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.cjn--gris.p-4
          .row.justify-content-center.align-items-center
            .col-auto(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/ico1.svg', alt='').img100.m-auto
            .col
              h5 Ejemplo:
              p.mb-0 Camisa adulto referencia 
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


    h4.mb-5 Ejemplo etiqueta inteligente para el producto

    .row.justify-content-center.align-items-center.mb-5
      .col-auto.mb-4.mb-lg-0
        img(src='@/assets/curso/tema3/img7.png', alt='Texto que describa la imagen')(data-aos="zoom-in")
      .col.ms-lg-4       
        p Se recomienda que los productos estén identificados en la etiqueta adhesiva con el código inteligente, código de barras y nombre de la referencia, como se muestra en la imagen.

    
    h4.mb-4 Códigos y etiquetas

    .row.justify-content-center.align-items-center
      .col-lg.mb-4.mb-lg-0    
        p De acuerdo con el ítem anterior, la codificación puede ser libre, de acuerdo con la naturaleza de la organización; sin embargo, en Colombia, a través del decreto 2153 del 26/diciembre/2016, se establece el Sistema armonizado de designación y codificación de mercancías, que es una nomenclatura internacional de productos multipropósito desarrollada por la Organización Mundial de Aduanas (OMA), la cual contiene alrededor de 5.000 grupos de productos, cada uno identificado por un código de seis dígitos, apoyado por reglas bien definidas para lograr una clasificación uniforme.  A continuación, se relacionan los diferentes tipos de etiquetas:
      .col
        img(src='@/assets/curso/tema3/img8.svg', alt='Texto que describa la imagen').img150.m-auto(data-aos="zoom-in")       
      
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
              img.wid222(src='@/assets/curso/tema3/img9.svg', alt='Texto que describa la imagen')
  

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
      h2 2.2. Clasificación de cargas y almacenamientos   

    .row.justify-content-center.align-items-center.bg1A.mb-5
      .col-lg-3.mb-4.mb-lg-0
        img(src='@/assets/curso/tema3/img15.png', alt='Texto que describa la imagen').img300.m-auto(data-aos="zoom-in")
      .col-lg-9        
        p.mb-0 Las características que definen el diseño, construcción, distribución e instalaciones necesarias para un almacén están determinadas principalmente por los tipos de producto que requieran almacenamiento; de igual forma, la naturaleza del producto dará las pautas a seguir en la cadena logística en las diferentes zonas del almacén; sin embargo, todos los productos tienen características diferentes que se deben tener en cuenta para la manipulación y el almacenamiento. 

    .row.justify-content-center.mb-5
      .col-lg-8.bg113.mb-4.mb-lg-0         
        <br><br>
        p El almacenamiento es más efectivo si existe una adecuada utilización de recursos disponibles, como espacios, equipos, herramientas y talento humano, por lo que requiere la organización de los productos en <strong>unidades de carga</strong>, denominadas así por ser una agrupación homogénea de un conjunto de productos, dispuesta sobre una plataforma o embalaje (caja, contenedor, etc.) para un manejo y traslado más seguro, con el menor número de movimientos posibles y traslados cortos. Para una mejor manipulación, las unidades de carga pueden subdividirse en otras más pequeñas, así:
      .col-lg-4
        img(src='@/assets/curso/tema3/img16.png', alt='Texto que describa la imagen').img400.m-auto(data-aos="zoom-in")

    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon.cjn--amarillo.p-4
          .row
            .col-auto
              img(src='@/assets/curso/tema3/ico2.svg', alt='Texto que describa la imagen').img85.m-auto(data-aos="zoom-in")
            .col
              ul.fa-ul
                li.mb-2
                  i(style="color:#FF4A36;").fa-li.fas.fa-angle-right 
                  | <strong>Unidades de preparación de pedidos:</strong> aquellas unidades mínimas de referencias específicas del producto que se pueden entregar a un cliente.
                li.mb-2
                  i(style="color:#FF4A36;").fa-li.fas.fa-angle-right 
                  | <strong>Unidades de entrega:</strong> aquellos grupos conformados por unidades para la venta (mayorista o detallista).
                li.mb-0
                  i(style="color:#FF4A36;").fa-li.fas.fa-angle-right 
                  | <strong>Unidades de venta:</strong> las unidades de entrega se dividen en menores unidades, para que el consumidor adquiera al detal.
              
    p.mb-5 Las cargas se pueden clasificar de acuerdo con los siguientes criterios:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 8.
      span Clasificación de las cargas 

    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota fuente: https://www.ar-racking.com/co/actualidad/blog/calidad-y-seguridad-4/tipos-de-carga-y-como-almacenarlas#
        thead
          tr
            th(style="width:20%;") CRITERIO
            th(style="width:30%;")  TIPO DE CARGA
            th(style="width:50%;")  DESCRIPCI&Oacute;N
        tbody
          tr
            td.txt-boldCenter(rowspan='2') SEG&Uacute;N SU CONTABILIZACI&Oacute;N
            td.text-center CARGA GENERAL
            td
              | Mercanc&iacute;a que requiere un embalaje individualizado.&nbsp;&nbsp;Cargas que durante el proceso requieren ser unificadas en cajas o contenedores.
              br
              | Se contabiliza por unidades.
          tr
            td.text-center CARGA A GRANEL
            td
              | Carga que se contabiliza por criterio de masa y vol&uacute;men.&nbsp;&nbsp;Mercanc&iacute;a que va suelta, sin embalaje.&nbsp;&nbsp;Mercanc&iacute;as dif&iacute;ciles de empacar, como los gases.
              br
              | El mismo medio de transporte sirve de contenedor.
          tr
            td.txt-boldCenter(rowspan='5') SEG&Uacute;N VOL&Uacute;MEN
            td.text-center CARGA PEQUE&Ntilde;A
            td
              | Aquellas cargas que son de f&aacute;cil manipulaci&oacute;n con una sola mano. Ejemplo, un pack de gaseosas.
          tr
            td.text-center CARGA MEDIANA
            td
              | Son un poco m&aacute;s grandes que las anteriores, pueden alcanzar un peso de 10 kg, pero a&uacute;n manipulables con las manos.&nbsp;&nbsp;Un ejemplo claro son las mercanc&iacute;as disponibles en estantes de cadenas de almacenes mayoristas, como Alkosto o Makro.
          tr
            td.text-center CARGA GRANDE 
            td
              | Aquellas mercanc&iacute;as tama&ntilde;o superior. Necesitan un embalaje espec&iacute;fico. Agrupadas sobre una estiba. La carga debe ser manipulada con medios mec&aacute;nicos.&nbsp;&nbsp;Ejemplo, los electrodom&eacute;sticos como neveras y lavadoras.
          tr
            td.text-center CARGA VOLUMINOSA
            td
              | Mercanc&iacute;a de grandes dimensiones. En ocasiones, no se pueden apilar.&nbsp;&nbsp;Ejemplo, productos de construcci&oacute;n en estanter&iacute;as cantilever.
          tr
            td.text-center CARGA DE DIMENSIONES ESPECIALES
            td
              | Cargas grandes y de mucho peso, pueden exceder el tama&ntilde;o de los veh&iacute;culos para el transporte y requieren veh&iacute;culo escolta o de acompa&ntilde;amiento.&nbsp;&nbsp;Es el caso de transporte de maquinaria pesada o contenedores para obras de construcci&oacute;n.
          tr
            td.txt-boldCenter(rowspan='4') SEG&Uacute;N PESO
            td.text-center CARGA LIGERA
            td Cargas menores de 5 kg.
          tr
            td.text-center CARGA MEDIANA
            td Peso m&iacute;nimo 5 kg y m&aacute;ximo 25 kg por unidad de carga.
          tr
            td.text-center CARGA PESADA
            td Peso entre 25 kg y 1.000 kg (1 tonelada).
          tr
            td.text-center CARGA MUY PESADA
            td Superior a 1 tonelada.
          tr
            td.txt-boldCenter(rowspan='2') SEG&Uacute;N VIDA &Uacute;TIL DEL PRODUCTO
            td.text-center PERECEDERA
            td
              | Mercanc&iacute;a que tiene una vida &uacute;til limitada o determinada por una fecha de caducidad.&nbsp;&nbsp;Ejemplo, alimentos frescos.&nbsp;&nbsp;El almacenamiento de estos productos requiere condiciones especiales.
          tr
            td.text-center IMPERECEDERA
            td La vida &uacute;til del producto no es una condici&oacute;n para el almacenamiento.
          tr
            td.txt-boldCenter(rowspan='3') SEG&Uacute;N RESISTENCIA
            td.text-center RESISTENTES
            td Cargas que permiten el apilamiento porque pueden soportar peso encima.
          tr
            td.text-center LIGERAS
            td
              | Cargas que permiten el apilamiento con restricciones.&nbsp;&nbsp;Ejemplo, cajas con envases de leche.
          tr
            td.text-center FR&Aacute;GILES
            td Cargas que deben tener una manipulaci&oacute;n especial porque pueden averiarse.
          tr
            td.txt-boldCenter SEG&Uacute;N LA PELIGROSIDAD
            td.text-center
              | EXPLOSIVOS, GASES, L&Iacute;QUIDOS INFLAMABLES, S&Oacute;LIDOS INFLAMABLES, SUSTANCIAS COMBURENTES, ETC.
            td
              | Sustancias que requieren una manipulaci&oacute;n y transporte especial, de acuerdo con los riesgos que representan para la salud humana y el medio ambiente.&nbsp;&nbsp;O puede presentar alguna reacci&oacute;n espec&iacute;fica al entrar en contacto con otro material.
          tr
            td.txt-boldCenter(rowspan='2') SEG&Uacute;N EL LOTE
            td.text-center CARGA UNITARIA
            td Mercanc&iacute;a que est&aacute; conformada por una sola unidad de carga (un lote).
          tr
            td.text-center CARGAS ALMACENADAS POR LOTES
            td
              | Para explicarlo con un ejemplo: una carga de productos l&aacute;cteos no est&aacute; compuesta por las mismas unidades de un lote de electrodom&eacute;sticos.
    
    h4 Normas a tener en cuenta para el almacenamiento

    .row.justify-content-center.align-items-center.bg1A.mb-5    
      .col-auto
        img(src='@/assets/curso/tema3/ico3.svg', alt='Texto que describa la imagen').img85.m-auto(data-aos="zoom-in")     
      .col       
        p.mb-0 El almacenamiento de mercancías son las diversas formas en que estas están organizadas dentro de la bodega, ya sea en el suelo, sobre estibas o en estantes. Para elegir la técnica más apropiada de almacenamiento es importante aclarar los siguientes términos:

    .row.justify-content-center.mb-5
      .col-lg-8
        img(src='@/assets/curso/tema3/img18.png', alt='Texto que describa la imagen')(data-aos="zoom-in")


    p.mb-4 Con los conceptos anteriores, es más fácil comprender algunas reglas aplicables en el almacenamiento:

    
    .cajon.cjn-rosa.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg
          p - Almacenar en el suelo aquellos productos que estén empacados en recipientes redondos, aunque ahorra costos porque no es necesaria la estantería, obliga a recorrer largas distancias.
          p - Agrupar productos similares para evitar contaminación con otros que puedan presentar algún tipo de riesgo.
          p - Almacenar en estantes que tengan acceso directo, para facilitar la recogida y operación en general.
          p - Almacenar productos que por su forma requieren que sea vertical en los estantes diseñados.
          p - Los productos pesados deben estar en la parte inferior del estante o a nivel de la cintura del operario.
          p - Monitorear visualmente la forma de almacenamiento (cámaras o drones), para evitar peligro de caídas.
          p - Almacenar los productos de acuerdo con el nivel de rotación.
        .col-auto.d-none.d-lg-flex(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img19.png', alt='').img150.m-auto   

    p.mb-3 Para ampliar la información sobre ubicación de la mercancía y el almacenamiento, por favor revise el siguiente video: 

    .row.justify-content-center.mb-5
      .col-lg-10
        .cta--yellow
          .bubble--right
          .dots--right
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/llamados/cta_05.png", alt="alt").img385.m-auto
            .col-12.col-lg.px-3.px-5.px-lg-0.pt-0.pt-lg-5.txt-mg--right
              h5 Material de apoyo
              p.mb-0 Si es de su interés ampliar la información sobre ubicación de la mercancía y el almacenamiento dentro del almacén, visite la url: 
              a.boton.color-acento-contenido-botones.texto-blanco.float-end(:href="('https://www.youtube.com/watch?v=dhGt7A0935Q')" target="_blank" type="application/pdf").mb-5.mb-lg-0
                span Ver
                i.fas.fa-link   


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
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
