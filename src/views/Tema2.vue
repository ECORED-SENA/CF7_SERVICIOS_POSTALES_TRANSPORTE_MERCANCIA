<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 
      h1 Continuidad tema 1  
    .row.justify-content-center
      .col-lg-10
        .tarjeta.p-4.p-md-5.mb-5.mt-4.bg555
          .row.justify-content-around.align-items-center
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            .col-md.col-lg-6.p-4                        
              <br><br><br>
              h5 Material de apoyo

              p.mb-4 En caso de ser necesario ampliar la información, ingrese a Sistemas de Biblioteca Sena:
              p Flamarique, S. (2017). Gestión de operaciones de almacenaje. Marge Books. 
              a.boton.color-acento-botones.texto-blanco.mt-4(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43773?page=41')" target="_blank" type="application/pdf")
                span Ingresar
                i.fas.fa-link
              <br><br><br><br>
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Sistemas de información   
    .row.justify-content-center.mt-4
      .col-lg-10.mt-4
        .bloque-texto-g.bginfo.p-3.p-sm-4.p-md-5.mt-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Los sistemas de información gestionan aquellas actividades desarrolladas dentro del almacén cuya finalidad es apoyar la gestión física de la mercancía desde que ingresa al almacén hasta que sale en los centros de almacenamiento o distribución, e incluso hacer seguimiento a las devoluciones e inconsistencias; algunos de ellos son:
    Separador

    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')

      div(x="3.3%" y="12.5%" tooltip="1. Sistemas de información" numero="1")
        .row.justify-content-center.bg556
          .col-lg-6
            <br><br>
            h5.mt-4 1. Sistemas de información
            p EDI 
              span.it (Electronic Data Interchange),
              |  cuyo objetivo es realizar el traspaso de documentos comerciales a un formato normalizado y que pueda ser compartida la información entre empresas.  No es un correo electrónico, pues los datos deben contar con un estándar internacional.
          .col-lg-4
            <br>
            img(src='@/assets/curso/tema2/img4.svg', alt='Texto que describa la imagen')
            <br><br><br><br>


      div(x="3.3%" y="64%" tooltip="2. Sistemas de información" numero="2")
        .row.justify-content-center.bg556
          .col-lg-6
            <br><br>
            h5.mt-4 2. Sistemas de información
            p ERP 
              span.it (Enterprise Resource Planning)-
              |  Sistema Integral de Gestión Empresarial, su finalidad es automatizar la mayoría de los procesos de la organización (administración, logística, producción y comercialización).  

          .col-lg-4
            <br>

            img(src='@/assets/curso/tema2/img5.svg', alt='Texto que describa la imagen')
            <br><br><br><br>

      div(x="28.9%" y="64%" tooltip="3. Sistemas de información" numero="3")
        .row.justify-content-center.bg556
          .col-lg-6
            <br><br>
            h5.mt-4 3. Sistemas de información
            p ERP logra integrar los dos sistemas SGA-ERP.
          .col-lg-4
            <br>

            img(src='@/assets/curso/tema2/img6.svg', alt='Texto que describa la imagen')
            <br><br><br><br>

      div(x="28.9%" y="13%" tooltip="4. Sistemas de información" numero="4")
        .row.justify-content-center.bg556
          .col-lg-6
            <br><br>
            h5.mt-4 4. Sistemas de información
            p SGA- Sistema de Gestión de Almacén, cuya función más importante es mantener controlado el 
              span.it stock
              |  de mercancía (número de existencias registradas, equivalente a existencias físicas).
          .col-lg-4
            <br>

            img(src='@/assets/curso/tema2/img7.svg', alt='Texto que describa la imagen')
            <br><br><br><br>

      div(x="53%" y="13%" tooltip="5. Sistemas de información" numero="5")
        .row.justify-content-center.bg556
          .col-lg-6
            <br><br>
            h5.mt-4 5. Sistemas de información
            p Confirmación de ejecución de la orden dada por el operario.
          .col-lg-3
            <br>

            img(src='@/assets/curso/tema2/img8.svg', alt='Texto que describa la imagen')
            <br><br><br><br>

      div(x="53%" y="64%" tooltip="6. Sistemas de información" numero="6")
        .row.justify-content-center.bg556
          .col-lg-6
            <br><br>
            h5.mt-4 6. Sistemas de información
            p El sistema de gestión de almacén informa al sistema integral de gestión empresarial que el pedido ha sido completado o que se presentan algunas incidencias.
          .col-lg-4
            <br>

            img(src='@/assets/curso/tema2/img9.svg', alt='Texto que describa la imagen')
            <br><br><br><br>

      div(x="78%" y="64%" tooltip="7. Sistemas de información" numero="7")
        .row.justify-content-center.bg556
          .col-lg-6
            <br><br>
            h5.mt-4 7. Sistemas de información
            p El sistema integral de gestión empresarial le informa al cliente a través de un mensaje de intercambio electrónico de datos.

          .col-lg-4
            <br>

            img(src='@/assets/curso/tema2/img10.svg', alt='Texto que describa la imagen')
            <br><br><br><br>

      div(x="78%" y="13%" tooltip="8. Sistemas de información" numero="8")
        .row.justify-content-center.bg556
          .col-lg-6
            <br><br>
            h5.mt-4 8. Sistemas de información
            p El sistema integral de gestión empresarial informa a todas las áreas de la organización que intervienen.


          .col-lg-4
            <br>

            img(src='@/assets/curso/tema2/img11.svg', alt='Texto que describa la imagen')
            <br><br><br><br>

    .row.justify-content-center
      .col-lg-10
        .tarjeta.p-4.p-md-5.mb-5.mt-4.bg557
          .row.justify-content-around.align-items-center
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            .col-md.col-lg-6.p-4                        
              <br><br><br>
              h5 Material de apoyo
              p.mb-4 Para ampliar la información, puede ingresar a Biblioteca virtual Sena:  Rubio, J. (2013). Gestión y pedido de stock. Ministerio de Educación y Formación Profesional de España. 
              a.boton.color-acento-botones.texto-blanco.mt-4(:href="('https://books.google.com.pe/books?id=1C8bAgAAQBAJ&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false')" target="_blank" type="application/pdf")
                span Ingresar
                i.fas.fa-link

    p <strong>Integración de las tecnologías</strong>
    p.mb-0 <strong>Figura 6</strong>
    p.it Integración y funcionamiento de las tecnologías en el almacén

    .row.justify-content-center.bg559
      .col-lg-5
        img(src='@/assets/curso/tema2/img12.svg', alt='Texto que describa la imagen')
      .col-lg-1
      .col-lg-5
        p.mt-4 El sistema de radiofrecuencia (RFID) ha facilitado la gestión, el control y eficiencia en las operaciones del almacén; este facilita el almacenamiento y recuperación de la información (datos), apoyado en los diferentes dispositivos, como lectores de códigos de barras o infrarrojos y PDA, principalmente.  A su vez, los lectores envían los datos almacenados al software específico, que alimentará la base de datos principal de la compañía, como se presenta en la imagen.
        <br><br><br><br><br><br>
    <br>
    h5.mt-4 Utilidad en su aplicación:
      ol.lista-ol--cuadro.lista-ol--separador.mt-4.bgcolor.pad
        li 
          .lista-ol--cuadro__vineta
            span 1
          p.mb-0 Mayor cantidad de datos almacenados. 

        li 
          .lista-ol--cuadro__vineta
            span 2
          p.mb-0 Facilita la comunicación entre los diferentes sistemas.
        li 
          .lista-ol--cuadro__vineta
            span 3
          p.mb-0 Información en tiempo real.
        li 
          .lista-ol--cuadro__vineta
            span 4
          p.mb-0 Permite hacer cambios y seguimiento durante la cadena de suministro.
        li 
          .lista-ol--cuadro__vineta
            span 5
          p.mb-0 Mejor control a nivel de inventarios y reducción de tiempos.
        li 
          .lista-ol--cuadro__vineta
            span 6
          p.mb-0 Aporta valor en el servicio de atención al cliente (mantiene informado).
        li 
          .lista-ol--cuadro__vineta
            span 7
          p.mb-0 Amable con el medioambiente en la reducción de papelería.     
    .row.justify-content-center
      .col-lg-10
        .tarjeta.p-4.p-md-5.mb-5.mt-4.bg55
          .row.justify-content-around.align-items-center
            .col-md.col-lg-7.p-4            
              <br><br>
              p <strong>Material de apoyo:</strong> 
              p.mb-4 Para ampliar la información, puede ingresar a Biblioteca virtual Sena: <br>Flamarique (2017)
 
              a.boton.color-acento-botones.texto-blanco.mt-4(:href="('https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_elibroELB43773&context=L&vid=SENA&lang=es_ES&search_scope=sena_completo&adaptor=Local%20Search%20Engine&tab=sena_completo&query=any,contains,flamarique&mode=Basic')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-download
              <br><br>                
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0       
    h4 <strong>Generalidades bases de datos</strong>   
    .row.justify-content-center
      .col-lg-1
        img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')

      .col-lg-11
        p A lo largo de la cadena de suministro, en logística, se genera gran cantidad de información, que para este caso se denominan datos, los cuales se han multiplicado y revolucionado las tecnologías en los últimos tiempos.  En busca de una solución para el control y gestión de la información, se ha recurrido a sistemas de información que logren generar valor a los datos para la toma de decisiones. Hoy en día, se conoce como tecnología 4.0 y suministros inteligentes 
          span.it “Big Data”.
    h4.mt-4 Logística 4.0
    .row.justify-content-center
      .col-lg-11
        p También llamada cuarta revolución industrial, donde el término 4.0 es hablar de innovación, de una nueva forma de hacer logística, donde el uso de herramientas novedosas optimiza el desarrollo de los procesos, cadenas de suministro inteligentes 
          span.it <strong>(Big Data o Machine Learning).</strong>
      .col-lg-1
        img(src='@/assets/curso/tema2/ico2.svg', alt='Texto que describa la imagen')
    h4.mt-4 Características Tecnología 4.0
    .row.justify-content-center
      .col-lg-10
        <br><br>
        img(src='@/assets/curso/tema2/img13.svg', alt='Texto que describa la imagen')
    <br>
    h5.mt-4 Características 
      span.it Big Data
    p.mb-0 <strong>Figura 7</strong>
    p.it El Big Data integrado a los procesos logísticos
    .row.justify-content-center.bg558
      .col-lg-6
        img(src='@/assets/curso/tema2/img14.svg', alt='Texto que describa la imagen')
      .col-lg-6
        ol.lista-ol--cuadro.lista-ol--separador.mt-4
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Proceso de extracción de amplios volúmenes de datos.

          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Principios fundamentales para que exista homogeneidad de la información: volumen de información, variedad de datos por diferentes plataformas, veracidad, velocidad en la conectividad de los centros de distribución y valor agregado en la información suministrada por los datos.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Mejorar la relación con el cliente: saber qué, cuándo y cómo se necesita el producto.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Eficiencia en el proceso: conocimiento previo de resultados por áreas para la toma de decisiones.
          li 
            .lista-ol--cuadro__vineta
              span 5
            p.mb-0 Rutas más eficientes en la entrega de mercancías.
    <br><br>
    h5.mt-4 Fuentes de información
    p.mt-4 Debido al volumen de datos que maneja la cadena de suministro, es imposible analizar y tomar decisiones con métodos tradicionales, por lo que se requiere organizar las diferentes fuentes para el suministro de información:
    h5.mt-4 Fuentes para el suministro de información
    .row.mt-4
      .col-lg-12
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img18.svg', alt='Texto que describa la imagen')

          .tarjeta.color-secundario.p-3(x="8.5%" y="38%" numero="")
            p.text-white Alertas de desabastecimiento dentro de la distribución.
          .tarjeta.color-secundario.p-3(x="37%" y="11.8%" numero="")
            p.text-white Comportamiento de los usuarios con los registros en sitios 
              span.it web. 
          .tarjeta.color-secundario.p-3(x="30.5%" y="63%" numero="")
            p.text-white Reportes del área de transporte con el apoyo de sensores y tecnologías GPS.
          .tarjeta.color-secundario.p-3(x="46%" y="41%" numero="")
            p.text-white Flujos de distribución y rutas de transporte.
          .tarjeta.color-secundario.p-3(x="70%" y="18%" numero="")
            p.text-white Proyecciones contables.
          .tarjeta.color-secundario.p-3(x="70%" y="80%" numero="")
            p.text-white Programación mantenimiento preventivo de equipos y herramientas.
          .tarjeta.color-secundario.p-3(x="89%" y="61%" numero="")
            p.text-white Control de inventarios.
    .row.justify-content-center
      .col-lg-10
        .tarjeta.p-4.p-md-5.mb-5.mt-4.bg560
          .row.justify-content-around.align-items-center
            .col-md.col-lg-2.p-4            
            .col-md.col-lg-6.p-4            
              .row
                .col-lg-10
                  p <strong>Material de apoyo</strong> 
                  p.mb-0 Para ampliar la información sobre el tema, puede ingresar a Biblioteca virtual Sena: 
                  p.mb-0 Peña, C. y Hernández, E. (2018). Cadena de suministro 4.0: beneficios y retos de las tecnologías disruptivas. Marge Books.  
                .col-lg-2  
                  <br><br>
                  a.boton.color-acento-botones.texto-blanco.mt-2(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45161?page=1')" target="_blank" type="application/pdf")
                    span ingresar
                    i.fas.fa-link   
              .row
                .col-lg-10     
                  p.mt-4 <strong> Video Tutorial </strong>
                  p Cómo crear una base de datos en Excel.   
                .col-lg-2
                  <br>
                  a.boton.color-acento-botones.texto-blanco.mt-2(:href="('https://www.youtube.com/embed/E5T072rTNVA')" target="_blank" type="application/pdf")
                    span ingresar
                    i.fas.fa-link
    h5 Registros generados en el proceso de expedición de pedidos
    .row.justify-content-center.mt-4
      .col-lg-1
        img(src='@/assets/curso/tema2/ico3.svg', alt='Texto que describa la imagen')
      .col-lg-11
        p Todos los procesos que se desarrollan en el interior del almacén deben quedar soportados en los documentos que genera cada una de las tareas; así, por ejemplo, cuando se realiza una compra virtual, debe quedar el registro del pedido de venta y la factura emitida, la cual acompañará la mercancía al momento de llegar al cliente final.  Las empresas operan de forma independiente, sin embargo, existen documentos que son transversales o comunes al interior de su actividad, dentro de los que se encuentran los siguientes:              
    p.mb-0 <strong>Figura 8</strong>
    p.it Registros generados en la expedición de pedidos
    .row.justify-content-center
      .col-lg-5
        img(src='@/assets/curso/tema2/img17.svg', alt='Texto que describa la imagen')
      .col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador.mt-4
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 <strong>La orden de trabajo:</strong>  documento amplio donde se establece básicamente la actividad que se debe realizar, por ejemplo: recepción de pedido, grupaje, orden de traslado.


          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 <strong>Nota de entrega o albarán:</strong> documento mercantil que garantiza la entrega o recepción de un producto; a través de este, se deja constancia de la operación, mas no del pago de la mercancía.  

          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 
              span.it <strong>Picking-list:</strong> 
              |  documento donde están registrados los productos que el operario debe tomar de los estantes para organizar el envío al cliente.  Registra información como: fecha y lugar, tanto del pedido como de la entrega, número de pedido, datos del cliente, etc.

          li 
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 
              span.it <strong>Packing-list:</strong> 
              |  relación de contenidos, documento necesario para la exportación de productos, el cual va junto con la factura comercial.

          li 
            .lista-ol--cuadro__vineta
              span 5
            p.mb-0 <strong>Hoja de ruta:</strong> es la organización de rutas para hacer entrega de los pedidos, donde se relacionan los destinos junto con la orden de entrega.

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
