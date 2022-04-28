<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Contenedores      

    .row.justify-content-center.align-items-center.bg1A.mb-4
      .col-auto.mb-4.mb-lg-0
        img(src='@/assets/curso/tema4/img1.png', alt='').img350.m-auto(data-aos="zoom-in")     
      .col-lg.ms-lg-4       
        p.mb-0 Se denomina contenedor a aquel equipo tipo cajuela que apoya el transporte de la mercancía de forma permanente, tan robusto que puede ser utilizado varias veces; el diseño facilita el transporte de la mercancía a través de diferentes medios de transporte. Por lo general, es más utilizado en medios fluviales; aportando reducción del tiempo en la operación.      
   
    .cajon.cjn--amarillo.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-auto(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/ico1.svg', alt='Texto que describa la imagen').img100.m-auto
        .col
          p.mb-0 Dentro de las ventajas de transportar mercancía en contenedores están: facilitar el transporte de la carga, proteger la mercancía de daños y cambios climáticos, preservación de la mercancía almacenada, menos tráfico en los puertos, disminuir los costos aduaneros y el riesgo de saqueo.

    p.mb-5 Para facilitar la organización de las embarcaciones a nivel mundial, aprovechar completamente los espacios en la embarcación y estandarizar las dimensiones, existen dos organismos encargados de la normalización:

    .row.justify-content-center
      .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
        .crd.crd--hover
          figure
            img(src="@/assets/curso/tema4/ico2.png", alt="alt").img130.m-auto
          h4.mb-1.text-center ISO
          p.text-center (<i>International Organization for Standardization</i>)
          p.text-center Lidera la regulación a nivel internacional de los contenedores utilizados en transporte terrestre y fluvial.

      .col-auto(data-aos="zoom-in")
        .crd.crd--hover
          figure
            img(src="@/assets/curso/tema4/ico3.png", alt="alt").img130.m-auto
          h4.mb-1.text-center IATA
          p.text-center (<i>International Air Transport Association</i>)
          p.text-center Ente regulador de los contenedores utilizados en transporte aéreo; los contenedores deben adaptarse a las medidas de los aviones.    
      
    separador

    .row.justify-content-center.bgne5
      #t_3_1.titulo-segundo.color-acento-contenido
        h2 3.1. Generalidades

    .row.justify-content-center.mb-5
      .col-auto
        img(src='@/assets/curso/tema4/ico4.svg', alt='Texto que describa la imagen').img85.m-auto(data-aos="zoom-in")
      .col
        p En función del tipo de mercancía o producto que se vaya a transportar, varían las dimensiones y estructura del contenedor. Por ejemplo, pueden transportarse objetos pesados, como maquinaria pesada, mercancía pequeña como electrodomésticos o mercancía consolidada.  Son fabricados básicamente en acero, aunque existen algunos de aluminio y otros de madera contrachapada y reforzados con fibra de vidrio; al interior, poseen un recubrimiento antihumedad.  En la parte exterior (esquinas) llevan unos ganchos de amarre denominados <i>twistlocks</i>, para facilitar el enganche con las grúas. A continuación, se presentan las partes del contenedor:

    .titulo-sexto.color-acento-contenido
      h5 Figura 14.
      span Partes del contenedor    

    .row.justify-content-center.mb-5
      .col-lg-8
        img(src='@/assets/curso/tema4/img2.png', alt='Texto que describa la imagen')(data-aos="zoom-in")
    
    p El contenedor ofrece resistencia, de manera que puede utilizarse en varias ocasiones. Al momento de seleccionarlo, es importante verificar el estado en el que se encuentra, tanto interna como externamente, para garantizar que las mercancías lleguen en óptimas condiciones.

    p.mb-5 Existen varios tipos de contenedores, dependiendo de sus dimensiones, así:

    .titulo-sexto.color-acento-contenido
      h5 Figura 15.
      span Tipos de contenedores
  
    img(src='@/assets/curso/tema4/img3.svg', alt='Texto que describa la imagen').mb-5(data-aos="zoom-in")  
    
    p.mb-5 A continuación, la descripción de algunos de ellos:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 9.
      span Tipo de contenedor y sus características    

    .tabla-a.color-primario
      table
        thead
          tr
            th.wid3 TIPO CONTENEDOR
            th CARACTERÍSTICAS
            th IMAGEN
        tbody
          tr
            td.text-center.it <strong>HIGH CUBE</strong>
            td Utilizados para cargas de peso ligero y de gran volúmen; aumentando un 13% la capacidad cúbica interna. 
            td 
              img(src='@/assets/curso/tema4/img4.png', alt='Texto que describa la imagen') 

          tr
            td.text-center
              span.it <strong>HIGH CUBE</strong> 
              |  <strong>REFRIGERADOS</strong>
            td.mt-4 Contenedores para cargas refrigeradas, temperatura controlada y constante.
            td
              img(src='@/assets/curso/tema4/img5.png', alt='Texto que describa la imagen') 
          tr
            td.mars.text-center 
              span.it <strong>DRY VAN</strong>
              | <strong> O CONTENEDOR SECO</strong>
            td Categoría más utilizada en el mercado, cerrados herméticamente, sin ventilación o refrigeración.  Conveniente para cualquier tipo de carga
            td 
              img(src='@/assets/curso/tema4/img6.png', alt='Texto que describa la imagen')
          tr
            td.text-center <strong>CONTENEDOR REFIGERADO O </strong>
              span.it <strong>REEFER</strong>
            td.mb-0 Este contenedor posee un sistema de conservación para mantener un ambiente y temperatura controlada.  Deben estar conectados a una fuente de energía durante el transporte.
            td 
              img(src='@/assets/curso/tema4/img7.png', alt='Texto que describa la imagen')
          tr
            td.text-center 
              span.it <strong>OPEN TOP</strong>
              | <strong> O DE TECHO ABIERTO</strong>
            td.mb-0 Contenedor de techo removible, permite que la carga sobresalga.  Soportan hasta 1 tonelada de carga.
            td 
              img(src='@/assets/curso/tema4/img8.png', alt='Texto que describa la imagen')
          tr
            td.text-center.it <strong>OPEN SIDE </strong>
            td.mb-0 Se caracteriza por tener una única puerta lateral, facilitando el transporte de mercancías que por sus dimensiones son difíciles de manipular.
            td 
              img(src='@/assets/curso/tema4/img9.png', alt='Texto que describa la imagen')
          tr
            td.text-center.it <strong>FLAT RACK</strong>
            td.mb-0 Carecen de techo y paredes laterales, pueden ser fijados o desmontables.  Utilizados para transportar cargas atípicas y sobredimensionadas.
            td 
              img(src='@/assets/curso/tema4/img10.png', alt='Texto que describa la imagen')  
          tr
            td.text-center <strong>CONTENEDOR CISTERNA O </strong>
              span.it <strong>TANK </strong>
            td.mb-0 Las dimensiones son las mismas de un contenedor estándar, pero la estructura interna es un depósito en polietileno.  Utilizado para transportar todo tipo de líquidos a granel (aceites, cerveza o químicos).  Deben llenarse entre el 80 y el 95% de la capacidad, para dejar espacio de extensión por cambios de temperatura.
            td 
              img(src='@/assets/curso/tema4/img11.png', alt='Texto que describa la imagen')  

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2. Métodos de verificación 

    p.mb-5 Al momento de enviar un contenedor, la seguridad de la mercancía es una o la más importante de las prioridades, por lo que se requieren mecanismos de verificación a través de la identificación y los sellos (o precinto) de seguridad, obteniendo así información del contenido de los mismos. Mientras el sello asegura que el contenedor ha sido <strong>verificado</strong> antes de partir, y como solo se puede abrir una sola vez, ofrece mayor seguridad de la mercancía que transporta hasta su punto de llegada, ejerciendo un mayor control sobre la pérdida de las mercancías o el transporte de mercancía ilegal. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.ss(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img12.png')})`}"
          )
          .bloque-texto-g__texto.p-5.sss
            h5 Según ISO 17712 <br><br>
            p Establece “Procedimientos uniformes para la clasificación, aceptación y retirada de sellos para contenedores de carga mecánica”. La norma solicita información específica de: fuerza física del sello (barreras de entrada), procesos relacionados con la seguridad del fabricante y características sobre la manipulación del sello.
            
    p Asimismo, los contenedores ISO se identifican mediante combinaciones alfanuméricas, con la siguiente información, como se presenta en la imagen:

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 16.
      span Identificación de los contenedores

    .row.justify-content-center.bg--rectangle
      .col-lg-7
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/img13.png', alt='Texto que describa la imagen')(data-aos="zoom-in")

          .tarjeta.color-acento-botones.p-3(x="10%" y="12%" numero="1")
            .h5.text-center.mb-0 Sello de certificación 
          .tarjeta.color-acento-botones.p-3(x="27%" y="12%" numero="2")
            .h5.text-center.mb-0 Logotipo del propietario
          .tarjeta.color-acento-botones.p-3(x="60%" y="14%" numero="3")
            .h5.text-center.mb-0 Código del propietario
          .tarjeta.color-acento-botones.p-3(x="75%" y="14%" numero="4")
            .h5.text-center.mb-0 Número de serie 
          .tarjeta.color-acento-botones.p-3(x="90%" y="10%" numero="5")
            .h5.text-center.mb-0 Dígito de control  
          .tarjeta.color-acento-botones.p-3(x="72%" y="20%" numero="6")
            .h5.text-center.mb-0 Propiedades contenedor  
          .tarjeta.color-acento-botones.p-3(x="10%" y="40%" numero="7")
            .h5.text-center.mb-0 Aviso de peso           
          .tarjeta.color-acento-botones.p-3(x="27%" y="40%" numero="8")
            .h5.text-center.mb-0 Placa CSC-CCC         
          .tarjeta.color-acento-botones.p-3(x="72%" y="40%" numero="9")
            .h5.text-center.mb-0 Masa bruta máxima     
          .tarjeta.color-acento-botones.p-3(x="90%" y="45%" numero="10")
            .h5.text-center.mb-0 Tara  
          .tarjeta.color-acento-botones.p-3(x="72%" y="50%" numero="11")
            .h5.text-center.mb-0 Peso neto         
          .tarjeta.color-acento-botones.p-3(x="8%" y="50%" numero="12")
            .h5.text-center.mb-0 Aviso de altura 
          .tarjeta.color-acento-botones.p-3(x="72%" y="70%" numero="13")
            .h5.text-center.mb-0 Volumen interno 

    .row.justify-content-center.mb-5
      .col-lg-10
        .cta--purple
          .bubble--right
          .dots--right
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/llamados/cta_02.png", alt="alt").img385.m-auto
            .col-12.col-lg.px-3.px-5.px-lg-0.pt-0.pt-lg-5.txt-mg--right
              h5.text-white Material de apoyo
              p.text-white.mb-0 En caso de requerir ampliar la información sobre la codificación, se recomienda consultar las siguientes páginas:
              a.boton.color-acento-contenido-botones.texto-blanco.float-end(:href="('http://www.barradecomercio.org/?p=718#.Ya07_GDMLIUhttps://www.stocklogistic.com/codigos-contenedor-maritimo/')" target="_blank" type="application/pdf").mb-5.mb-lg-0
                span Ingresar
                i.fas.fa-link    

    p Regularmente, los contenedores tienen dos puertas y cada una tiene dos barras de bloqueo; para colocar el sello, se debe cerrar primero la puerta izquierda y posteriormente la derecha.  En forma inversa, se debe colocar el sello; debería ir en la última puerta que fue cerrada (derecha), pues será la primera en abrirse, o se podría colocar el sello en las dos barras, como una medida complementaria de seguridad, y realizar un registro fotográfico para tener una evidencia exacta del registro y que no se presenten inconvenientes durante la operación.  Importante tener en cuenta las siguientes recomendaciones al momento de colocar el sello:               
           
    .row.justify-content-center.align-items-center.bg1A.mb-5
      .col-lg-4.mb-5.mb-lg-0
        img(src='@/assets/curso/tema4/img21.png', alt='Texto que describa la imagen').img350.m-auto(data-aos="zoom-in")
      .col-lg-8
        p #[strong Material resistente que impida la rotura accidental.]

        ul.fa-ul
          li.mb-2
            i(style="color:#FF4A36;").fa-li.fas.fa-angle-right 
            | En caso de ser anulado el sello, deberá ser destruido totalmente.
          li.mb-2
            i(style="color:#FF4A36;").fa-li.fas.fa-angle-right 
            | Ser único y completo en el diseño para evitar duplicidad.
          li.mb-2
            i(style="color:#FF4A36;").fa-li.fas.fa-angle-right 
            | Identificación individual.
          li.mb-2
            i(style="color:#FF4A36;").fa-li.fas.fa-angle-right 
            | El diseño debe impedir la manipulación sin dejar rastros.
          li.mb-0
            i(style="color:#FF4A36;").fa-li.fas.fa-angle-right 
            | Después de ser instalado, se debe consignar el registro por la persona responsable (control de riesgos).        
    
    p.mb-5 Existen principalmente sellos plásticos o metálicos para contenedores, se describen a continuación:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 10.
      span Tipos de sellos de seguridad en contenedores    

    .tabla-a.color-primario.mb-5 
      table
        thead
          tr
            th.wid3 TIPO DE SELLO
            th DESCRIPCIÓN
            th IMAGEN
        tbody
          tr
            td.text-center <strong>INDICATIVO</strong>
            td Su función principal es solo de identificación, generalmente fabricados en plástico.
            td 
              img(src='@/assets/curso/tema4/img22.png', alt='Texto que describa la imagen')
          tr
            td.text-center <strong>DE SEGURIDAD</strong>
            td.mt-4 Fabricados en metal y plástico, son más difíciles de romper. Utilizados donde se requiera seguridad y resistencia.
            td
              img(src='@/assets/curso/tema4/img23.png', alt='Texto que describa la imagen') 
          tr
            td.mars.text-center <strong>DE ALTA SEGURIDAD</strong>
            td O tipo botella, son los más seguros y resistentes, elaborados en acero.  Resistentes a impactos.
            td 
              img(src='@/assets/curso/tema4/img24.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-10
        .cta--yellow
          .bubble--left
          .dots--left
          .row.align-items-center            
            .col-12.col-lg.pt-0.pt-lg-5.order-2.order-lg-1.txt-mg--left
              h4 Material de apoyo
              p Para ampliar la información, lo invitamos a consultar los siguientes documentos:              
              a.boton.color-acento-contenido-botones.texto-blanco.me-4(:href="obtenerLink('/downloads/5_ISO 17712_Para_Sellos_Alta_Seguridad_2014.pdf')" target="_blank" type="application/pdf").mb-2
                span ISO 17712
                i.fas.fa-download
              a.boton.color-acento-contenido-botones.texto-blanco(:href="obtenerLink('/downloads/6_Manual_Practico_gestion_logistica.pdf')" target="_blank" type="application/pdf").mb-5.mb-lg-0
                span Manual Gestión Lógistica
                i.fas.fa-download

            .col-auto.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/llamados/cta_04.png", alt="alt").img385.m-auto
        
    separador 

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3. Tecnologías de rastreo 
    
    .row.justify-content-center.align-items-center.bg1A.mb-4
      .col-lg-5.mb-5.mb-lg-0
        img(src='@/assets/curso/tema4/img15.png', alt='Texto que describa la imagen').img400.m-auto(data-aos="zoom-in")
      .col-lg-7      
        p Definitivamente, el reto de las empresas logísticas es garantizar la entrega de las mercancías de manera segura, oportuna y puntual, de aquí la necesidad de contar con un transporte de excelente calidad.  Los diferentes transportes logísticos de mercancías permiten que la mercancía pueda llegar de un sitio a otro sin presentar ningún daño, afectando así positivamente el servicio al cliente; es por eso que el servicio de transporte debe ser de la mejor calidad en términos de seguridad, regularidad, oportunidad, tiempos y eficiencia.
        p.mb-0 Existe una diversidad de medios de transporte que son un eslabón importante en la cadena logística; sin embargo, de acuerdo con su combinación, existen varias modalidades, como: intramodal, intermodal y multimodal.  Intramodal hace referencia a los medios de transporte de la misma línea, por ejemplo, hacen escala o transbordo de avión.  Intermodal es la coordinación de máximo dos modalidades de transporte, por ejemplo, barco que llega al puerto y entrega las mercancías a vehículos terrestres.  Y en la multimodal intervienen más de dos modalidades de transporte, por ejemplo, importación de ropa siguiendo las rutas marítima-terrestre y aérea para llegar a cada ciudad de destino dentro del país.
    
    p.mb-4 Si bien es cierto que nadie está exento de que se presenten cambios inesperados en la ruta, seguramente se podrán producir variaciones en la operación; estos cambios no planificados pueden llegar a generar ineficiencias, incumplimientos y mala calidad en el servicio; por lo anterior, se debe considerar la forma de hacer seguimiento y control sobre el estado de la mercancía a través de un monitoreo logístico.
    p.mb-5 En la actualidad, existen varias tecnologías de monitoreo vehicular, a continuación, se describen las más utilizadas:

    .crd.crd--slyder3.p-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h3 Monitoreo  IoT
            p Conjunto de dispositivos que, interconectados a través de Internet, pueden ser monitoreados por otros dispositivos, sensorizando cada elemento.     
          .col-auto
            figure
              img(src='@/assets/curso/tema4/img17.png', alt='').img350.m-auto

        .row.justify-content-center.align-items-center
          .col-lg-7
            h3 Monitoreo tradicional GPS
            p Se realiza utilizando el GPS vehicular; sin embargo, es limitante porque genera información únicamente del vehículo en tiempo real, no entrega información sobre el desempeño de la ruta logística.    
          .col-auto
            figure
              img(src='@/assets/curso/tema4/img18.png', alt='').img350.m-auto

        .row.justify-content-center.align-items-center
          .col-lg-7
            h3 Monitoreo inteligente con A-GPS
            p Es el sistema de georreferenciación más óptimo, pues es compatible con otros sistemas de rastreo satelital.   
          .col-auto
            figure
              img(src='@/assets/curso/tema4/img19.png', alt='').img350.m-auto

        .row.justify-content-center.align-items-center
          .col-lg-7
            h3 Precinto o sello electrónico de seguridad
            p Dispositivo GPS desarrollado específicamente para hacer seguimiento a los contenedores de mercancías.  Se instala de forma segura en la puerta trasera del contenedor.   
          .col-auto
            figure
              img(src='@/assets/curso/tema4/img20.png', alt='').img350.m-auto
            

    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
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
