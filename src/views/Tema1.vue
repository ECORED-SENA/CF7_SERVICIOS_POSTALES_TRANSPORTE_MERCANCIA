<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Preparación de la carga
    
    .row.mt-4.justify-content-center.bg1
      .col-lg-1
      .col-lg-3
        img(src='@/assets/curso/tema1/img1.svg', alt='Texto que describa la imagen')
      .col-lg-1
      .col-lg-7
        p En todo el proceso logístico, es importante que la mercancía transportada llegue en condiciones óptimas al cliente final; por lo regular, los trayectos son largos y la mercancía puede sufrir algún daño si no ha sido preparada con responsabilidad, normas y protocolos de operación en logística. Se debe conocer el tipo de mercancía que se va a manipular, almacenar y transportar, para identificar el tratamiento que se debe aplicar.
        p El objetivo principal es preparar la mercancía para que llegue en perfectas condiciones, por lo que requiere desarrollar tareas de embalaje, identificación, consolidación, paletización y flejado de las cargas, para ser entregada al vehículo y así lograr que la carga no se mueva durante el transporte o sufra averías.  
        p La preparación de la carga al interior del almacén está acompañada de actividades que planifican y ejecutan los operarios, las cuales están descritas en la siguiente secuencia:
    <br>
    .tarjeta.tarjeta--gris.p-4.mt-4
      PasosB.color-acento-contenido
        .row.justify-content-center(titulo="")
          .col-md-3.mb-4.mb-md-0
            p.mb-0 Al momento de llegar la mercancía al almacén, se realiza una verificación sobre el tipo de ingreso, según las siguientes características: 
            p ingreso de mercancía al almacén, salida de mercancía del almacén, traspasos de mercancía y recontrol.
            p Durante el ingreso de la mercancía, se desarrollan otros procesos más pequeños, como: a) Planear la entrada, para lo cual se debe tener claro y por escrito la programación del día, la semana o el periodo, y así poder organizar los recursos necesarios (personal, equipos y muelle, donde aplique). b) Verificación inicial, el registro de entrada debe coincidir con la información que refleja el software.
          .col-md-7
              img(src='@/assets/curso/tema1/img2.svg', alt='Texto que describa la imagen')


        .row.justify-content-center(titulo="")
          .col-md-5.mb-4.mb-md-0
            p <strong>Ubicación en estantes</strong>
            p Al momento de llegar la mercancía al almacén y hacer la descarga a nivel del piso, se hace la verificación sobre el correcto estado de la mercancía y se informa a los operarios el lugar donde se debe colocar en el almacén, para lo cual existen varias formas:
            p.mb-1 - Ubicación fija
            p.mb-1 - Ubicación caótica
            p.mb-1 - Ubicación por cliente
            p.mb-1 - Ubicación por proyecto
            p - Ubicación por temperatura
          .col-md-1
          .col-md-5
              img(src='@/assets/curso/tema1/img3.svg', alt='Texto que describa la imagen')


        .row.justify-content-center(titulo="")
          .col-md-5.mb-4.mb-md-0
            <br><br>
            p <strong>Consolidación de mercancías</strong>
            p Es un proceso que se realiza dentro de la cadena de suministro con el fin de optimizar la distribución de las mercancías y agilizar los procesos, permitiendo minimizar los costes de transporte y crear economías de escala.
          .col-md-1
          .col-md-5
              img(src='@/assets/curso/tema1/img4.svg', alt='Texto que describa la imagen')

        .row.justify-content-center(titulo="")
          .col-md-5.mb-4.mb-md-0
            <br><br>
            p.it <strong>Cross docking</strong>
            p O cruce de muelle, es una operación que busca mejorar la eficiencia en la cadena de suministro, disminuyendo o volviendo nulo el tiempo de almacenamiento.
          .col-md-1
          .col-md-5
              img(src='@/assets/curso/tema1/img5.svg', alt='Texto que describa la imagen')

        .row.justify-content-center(titulo="")
          .col-md-5.mb-4.mb-md-0
            <br><br>
            p <strong>Expedición</strong>
            p Consiste en la salida de las mercancías. El pedido sale del almacén para ser entregado en el tiempo y condiciones establecidas por el cliente.  Por lo general, las zonas de expedición están ubicadas cerca de los muelles (puertas de entrada y salida).
          .col-md-1
          .col-md-5
              img(src='@/assets/curso/tema1/img6.svg', alt='Texto que describa la imagen')

        .row.justify-content-center(titulo="")
          .col-md-5.mb-4.mb-md-0
            <br><br>
            p <strong>Aprovisionamiento</strong>
            p Aplica principalmente para aquellas empresas que tienen líneas de producción; el almacén debe igualmente recepcionar la mercancía y mantener el control de la misma a través de las órdenes de fabricación.
          .col-md-1
          .col-md-5
              img(src='@/assets/curso/tema1/img7.svg', alt='Texto que describa la imagen')
    <br><br>
    .row.justify-content-center
      .col-lg-10
        .tarjeta.p-4.p-md-5.mb-5.mt-4.bg2
          .row.justify-content-around.align-items-center
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            .col-md.col-lg-7.p-4
              <br>
              p.mb-4 <strong>Si es de su interés ampliar la información sobre la secuencia de actividades diarias, se invita a descargar el siguiente archivo PDF. </strong> 
              a.boton.color-acento-botones.texto-blanco.mt-4(:href="obtenerLink('/downloads/8_beneficios_de_Sistema_de_seguimiento.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-link
              <br><br><br><br>
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Ubicación de mercancías según clasificación
    p Las mercancías en el almacén se deben ubicar de una forma lógica y atendiendo las normas de seguridad establecidas por el sector logístico para la manipulación de las mismas durante la ubicación.  Se debe prestar especial atención a diferentes criterios, tanto de espacio como de ubicación, para el tipo de mercancía. Para aquellas organizaciones que cuenten con un Sistema de Gestión de Almacén (SGA), es más fácil la tarea, ya que el mismo indica la ubicación precisa donde se encuentra el producto en tiempo real.  Dentro de las normas de seguridad que se deben atender, se tiene:
    .row.justify-content-center.mt-4.mb-5
      .col-sm-6.col-xl-3.mb-2.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.p-xl-5
              img.ps.mt-4(src='@/assets/curso/tema1/ico1.svg', alt='Texto que describa la imagen', width='75px')
              <br>
              p.text-center.mt-4 <strong>Compatibilidad:</strong>            
            .tarjeta-flip__contenido.p-4.p-xl-5
              p <strong>Compatibilidad</strong>
              p La matriz de compatibilidad para sustancias químicas (la desarrolla el departamento de Seguridad y Salud en el Trabajo) indica qué productos pueden estar almacenados juntos o distantes.  Por ejemplo, no se pueden almacenar productos tóxicos con alimentos o fármacos.  

      .col-sm-6.col-xl-3.mb-2.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.p-xl-5
              <br>  
              img.ps.mt-3(src='@/assets/curso/tema1/ico2.svg', alt='Texto que describa la imagen', width='75px')
              <br><br>
              p.text-center.mt-4 <strong>Complementariedad:</strong>            
            .tarjeta-flip__contenido.p-4.p-xl-5
              p <strong>Complementariedad </strong>
              p Se podrán colocar cercanas las mercancías que, por lo regular, deben ir en el mismo pedido.  

      .col-sm-6.col-xl-3.mb-2.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.p-xl-5
              <br><br>
              img.ps.mt-2(src='@/assets/curso/tema1/ico3.svg', alt='Texto que describa la imagen', width='75px')
              <br>
              p.text-center.mt-4 <strong>Tamaño y peso:</strong>            
            .tarjeta-flip__contenido.p-4.p-xl-5
              p <strong>Tamaño y peso </strong>
              p En lo posible, aquellas mercancías de gran tamaño y volumen realizarán los menores desplazamientos.


      .col-sm-6.col-xl-3.mb-2.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.p-xl-5
              <br>  
              img.ps.mt-3(src='@/assets/curso/tema1/ico4.svg', alt='Texto que describa la imagen', width='75px')
              <br><br>
              p.text-center.mt-4 <strong>Rotación:</strong>            
            .tarjeta-flip__contenido.p-4.p-xl-5
              p <strong>Rotación</strong>
              p Cerca de la zona de expedición, se ubicarán los productos de mayor rotación o actividad en el almacén.
    .row.justify-content-center
      .col-lg-4
        img(src='@/assets/curso/tema1/img8.svg', alt='Texto que describa la imagen')

      .col-lg-8.bg3
        <br><br><br><br>
        p.mt-4 Los centros de despacho deben asegurar una correcta manipulación y ubicación de la mercancía, para lo cual se requiere conocer características como: dimensiones, forma, volumen, peso, ubicación, fragilidad, propiedades, estado físico y nivel de rotación.  Estas características permiten clasificarla e identificar los equipos necesarios para las actividades de recepción, manipulación, ubicación y almacenamiento, las cuales se describen a continuación:
    .titulo-sexto.color-secundario.mt-4.mb-0
      h5 Tabla 1
    P.it.maxx Clasificación de las mercancías según características
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.text-center SEGÚN VOLUMEN O DIMENSIONES
      table
        tr
          th.bgsa <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr
          th Muy voluminosa
          td Unidades muy grandes o agrupación de varias mercancías. Requieren contenedor.
        tr
          th.bgsa Volumen excepcional
          td Medidas excesivamente grandes, que requieren de algún medio especial de transporte, permisos y señalización.
        tr
          th Voluminosas
          td Muy parecido a paletizadas, sin embargo, las dimensiones forman parte del producto y no se pueden apilar.
        tr
          th.bgsa Dimensiones especiales
          td Requieren puente grúa para la manipulación.
        tr
          th Pequeñas
          td Se pueden manipular fácilmente con las manos (máximo 10 Kg).
        tr
          th.bgsa Paletizadas
          td Mercancía sobre paletas, con peso recomendado máximo de 1.000 kg
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.text-center  SEGÚN EL PESO
      table
        tr
          th.bgsa <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr
          th Ligera
          td Mercancía hasta 5 kg.
        tr
          th.bgsa Media
          td Productos o mercancía entre 5 y 25 kg.
        tr
          th Pesada
          td Mercancía entre 25 kg y 1 tonelada
        tr
          th.bgsa Muy pesada
          td Mercancía que supere 1 tonelada
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.text-center  SEGÚN UBICACIÓN
      table
        tr
          th.bgsa <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr
          th Sencillas
          td Con dimensiones dentro del rango (normales), se pueden ubicar fácilmente en los estantes del almacén.  No pueden apilarse
        tr
          th.bgsa Apilables
          td Se pueden apilar, con algunas limitaciones.
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.text-center  SEGÚN FRAGILIDAD
      table
        tr
          th.bgsa <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr
          th Ligera
          td Pueden soportar peso encima con limitaciones. Por ejemplo, cajas de yogurt.
        tr
          th.bgsa Resistentes
          td Soportan mucho peso, por ejemplo, cajas de cerámicas para pisos.
        tr
          th Frágiles
          td No pueden soportar peso encima, se deben organizar individualmente.      
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.text-center  SEGÚN PROPIEDADES
      table
        tr
          th.bgsa <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr
          th Duradero
          td No es prioritario organizar por orden de salida; el tiempo de almacenamiento es indiferente.
        tr
          th.bgsa Perecedero
          td Por lo regular, llevan una fecha de vencimiento; al momento de despachar las mercancías, deben salir primero las más antiguas. Ocurre en el caso de alimentos y medicinas.
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.text-center  SEGÚN ESTADO FÍSICO
      table
        tr
          th.bgsa <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr
          th Líquido
          td Es necesario identificar la composición y reacción química con otros productos, pues podría cambiar su estado físico y generar algún tipo de riesgo.
        tr
          th.bgsa Sólido
          td Aquellos productos compactos o individuales, como los utilizados en el sector agrícola.
        tr
          th Gaseoso
          td Al igual que el estado líquido, se requiere identificar la composición química y reactividad con otros productos.                
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.text-center  SEGÚN ROTACIÓN
      table
        tr
          th.bgsa <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr
          th Baja
          td Registran movimientos mínimos en el almacén.
        tr
          th.bgsa Media
          td De mediana rotación.
        tr
          th Alta
          td Flujo bastante alto de movimiento, tanto de entradas como salidas del almacén.
    <br>
    .row.justify-content-center
      .col-lg-12
        p.text-center.it Nota. Fuente: https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50249
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Consolidación y desconsolidación de mercancía
    p Generalmente, en los almacenes y centros de distribución, se agrupan (consolidan) y almacenan las mercancías según el tipo de producto; por ejemplo, donde se utilizan los soportes rígidos horizontales metálicos o de madera, comúnmente conocidos como estibas (técnicamente, pallet o paletas), es necesario una estantería tipo rack o de paletización. En caso de que la mercancía sean perfiles, se requiere una estantería tipo cantiléver, para mantenerlos bien organizados.
    .row.justify-content-center
      .col-lg-8
        separador
        .bloque-texto-f.bg4.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-regular.bloque-texto-f__texto.p-2 El éxito de la organización y agrupación de la mercancía en un almacén es la forma como se gestionan los productos; se recomienda aplicar la técnica de gestión japonesa 5S (cinco palabras que comienzan por S), cuyo fundamento es lograr lugares de trabajo mejor organizados, más limpios, más ordenados y, por consiguiente, más productivos.  
        .row
          .col-lg-2
            img.aa(src='@/assets/curso/tema1/ico5.svg', alt='Texto que describa la imagen')

      .col-lg-4
        img(src='@/assets/curso/tema1/img9.png', alt='Texto que describa la imagen')
    <br><br>
    .col-lg-12.mt-4.p-4
      .cajon.color-acento-contenido.p-4.mb-4
        p <strong>Técnica gestión japonesa 5S</strong>
        p.mt-4 <strong>SEIRI</strong> – Clasificar:  identificar y separar todos aquellos materiales considerados innecesarios y retirarlos del entorno laboral.
        p.mt-4 <strong>SEITON</strong> – Ordenar: establecer la forma en que deben identificarse y ubicar los materiales requeridos, de manera que sea fácil y rápido encontrarlos para la utilización.
        p.mt-4 <strong>SEISO</strong> – Limpieza: identificar y eliminar las fuentes de suciedad, asegurando que siempre todo se encuentre en perfecto estado de higiene.
        p.mt-4 <strong>SEIKETSU</strong> – Estandarización: el objetivo es lograr distinguir una situación normal de otra anormal, mediante información sencilla, como etiquetas, avisos informativos o señalización; y así lograr un control visual a través de la información.
        p.mt-4 <strong>SHITSUKE</strong> –Disciplina: continuar y trabajar permanentemente aplicando las 4s anteriores en todos los sitios de trabajo, de acuerdo con las normas establecidas.
        p.mt-4 Las tres primeras “S” están enfocadas al entorno físico, y las dos últimas se orientan al comportamiento de las personas
      .row
        .col-lg-10
        .col-lg-2
          img.bb(src='@/assets/curso/tema1/ico6.svg', alt='Texto que describa la imagen')
    p <strong>Consolidación de mercancías</strong>
    p.mb-0 <strong>Figura 1</strong>
    p.it Tipos de consolidación
    .row.justify-content-center
      .col-lg-5
        img(src='@/assets/curso/tema1/img10.svg', alt='Texto que describa la imagen')
      .col-lg-7.bg5.p-4
        <br><br><br>
        p La consolidación consiste en agrupar o combinar las mercancías sueltas provenientes de las áreas de picking, líneas de pedido o destinos y así organizar un solo paquete, con el objetivo de economizar transporte y manipulación de las mismas.  Esta actividad es desarrollada en la zona de alistamiento (expedición), preferiblemente cerca del muelle, para optimizar los recursos disponibles; dicha agrupación consiste en colocar sobre una paleta varios paquetes pequeños, para facilitar la manipulación, almacenamiento y transporte; en ocasiones, depende del cliente y el destino para organizar la mercancía, como se presenta a continuación: 
    <br><br>
    p.mt-4 Para realizar la consolidación de mercancías y objetos postales, se deben tener en cuenta las siguientes actividades:
    <br>
    ImagenInfograficaB.color-acento-contenido.mb-5.mt-4
      template(v-slot:imagen)
          img(src='@/assets/curso/tema1/img11.svg', alt='Texto que describa la imagen')

      div(x="32%" y="35%" tooltip="Paletizado" numero="1")
        .row.justify-content-center.bg6
          .col-lg-5.p-4
            <br>
            h5 Paletizado
            p Hace referencia a la forma de organizar las mercancías sobre un pallet (estiba) para almacenamiento y transporte, con la finalidad de tener uniformidad y facilitar la manipulación.  El paletizado podrá realizarse de forma manual o mecanizado, utilizando toda la superficie de la estiba.
          .col-lg-5
            
            img(src='@/assets/curso/tema1/img12.png', alt='Texto que describa la imagen')
            <br>
      
      div(x="88%" y="68%" tooltip="Retractilado" numero="2")
        .row.justify-content-center.bg6
          .col-lg-5.p-4
            <br>
            h5 Retractilado
            p Es el proceso de embalaje en el que una máquina retractiladora envuelve en una película plástica (papel termo film) las mercancías, para quedar adheridas al plástico, evitando así daños o suciedad; quedan pegadas al pallet y se facilita tanto la manipulación como el transporte.

          .col-lg-5
            <br>
            img(src='@/assets/curso/tema1/img13.png', alt='Texto que describa la imagen')
            <br>
      div(x="57%" y="68%" tooltip="Flejado" numero="3")
        .row.justify-content-center.bg6
          .col-lg-5.p-4
            <br>
            h5 Flejado
            p Es la forma de agrupar y asegurar las cajas, mercancías u objetos postales mediante unas tiras plásticas llamadas flejes, que aseguran el pedido que ya está retractilado para evitar la separación y asegurar mejor los productos, como se observa a continuación:
          .col-lg-5
            img(src='@/assets/curso/tema1/img14.png', alt='Texto que describa la imagen')
            <br><br>
      div(x="25%" y="85%" tooltip="Pool de paletas" numero="4")
        .row.justify-content-center.bg6
          .col-lg-5.p-4
            <br>
            h5 Pool de paletas
            p Aquellas empresas que reciben y expiden productos por grupos de paletas manejan inventario de paletas y no por productos. Paletizar quiere decir colocar cajas sobre la paleta, hasta completar la unidad de carga de forma uniforme, lo que permite reducir tiempos en los movimientos, optimizar el espacio del almacén y reducir el esfuerzo humano.
          .col-lg-5
            <br>
            img(src='@/assets/curso/tema1/img15.png', alt='Texto que describa la imagen')
            <br><br>
    p De acuerdo con las actividades descritas anteriormente, la consolidación requiere de pallets de madera, plástico u otros materiales necesarios para el movimiento de la carga, para facilitar el levantamiento y movimiento con carretillas elevadoras o transpaletas. 
    p Conozca algunas definiciones según normatividad:
    .row.justify-content-center.mt-4
      .col-lg-10.mt-4
        .bloque-texto-g.bginfo.p-3.p-sm-4.p-md-5.mt-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img16.png')})`}"
          )
          .bloque-texto-g__texto.p-4.ax
            p.pax <strong>Según norma técnica NTC 44680/2013</strong><br><br>
            p.pax En Colombia, se encuentran estandarizadas las dimensiones de los 
            p.pax pallets, cuyo objetivo está enmarcado en “Estiba intercambiable de 
            p.pax madera, utilizable por una vez, en la cadena de valor”, donde se<br>
            p.pax establece que las medidas para la estiba o pallet son: largo 120 cm,<br> 
            p.pax ancho 100 cm y altura 15,5 cm.
    .row.justify-content-center.mt-4
      .col-lg-10.mt-4
        .tarjeta.color-secundario.p-4.p-md-5.mb-5.mt-4.bg22
          .row.justify-content-around.align-items-center
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            .col-md.col-lg-7.p-5
              <br>
              p.mb-4.text-white Si es de su interés ampliar la información sobre <strong>Entregas paletizadas y métodos de paletización,</strong>  revise la presentación que aparece en el siguiente enlace: 
              a.boton.color-acento-botones.texto-blanco.mt-4(:href="('https://docplayer.es/3658902-Entregas-paletizadas.html')" target="_blank" type="application/pdf")
                span Ingresar
                i.fas.fa-link
              <br>
    p Los pallets de madera son los más comunes, aunque existen de plástico y material reciclado. Los vehículos de transporte están diseñados para ubicar exactamente un número específico de estibas con las unidades de carga (aproximadamente 33 pallets) y así poder calcular el volumen a transportar. Sin embargo, antes de llevar la carga a los medios de transporte, se requiere consolidar o agrupar las cargas con la ayuda de herramientas y equipos como los que aparecen descritos a continuación:
    #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')


      .carousel-inner
        .carousel-item.active.bginfo
          p.p-2 <strong>Flejadora</strong>
          p.p-2  Herramienta manual cuya función es tensar, cortar y unir cinta o fleje en el contorno de la carga.  

            img.mt-2(src='@/assets/curso/tema1/img18.png', alt='Texto que describa la imagen')
        .carousel-item.bginfo
          p.p-2.mb-0 <strong>Retractiladora </strong>
          p.p-2.mt-0 Equipo cuya función es cubrir los paquetes o pedidos con una película plástica, para proteger, facilitar el traslado y almacenamiento.  

            img.mt-2(src='@/assets/curso/tema1/img19.png', alt='Texto que describa la imagen')
        .carousel-item.bginfo
          p.p-2 <strong>Selladoras Holt-Melt </strong>
          p.p-2 Adhesivo empleado para sellar cartón, plástico y otros materiales.
            img.mt-2(src='@/assets/curso/tema1/img20.png', alt='Texto que describa la imagen')
        .carousel-item.bginfo
          p.p-2 <strong>Precintadoras</strong>
          p.p-2  Equipo empleado para realizar sellado automático superior e inferior de cajas de cartón con papel engomado.

            img.mt-2(src='@/assets/curso/tema1/img21.png', alt='Texto que describa la imagen')
        .carousel-item.bginfo
          p.p-2 <strong>Paletizadora </strong>
          p.p-2  Equipo automático que realiza la función de paletizar una amplia gama de pedidos, envases, cajas, latas, botellas, etc. 

            img.mt-2(src='@/assets/curso/tema1/img22.png', alt='Texto que describa la imagen')
        .carousel-item.bginfo
          p.p-2 <strong>Pesaje y etiquetado</strong>
          p.p-2  Equipo automático cuyo objetivo es completar el ciclo de embalaje en instalaciones manuales y automáticas, donde expide las etiquetas para cualquier tipo de carga, con la identificación completa de la carga, incluyendo el peso.

            img.mt-2(src='@/assets/curso/tema1/img23.png', alt='Texto que describa la imagen')            
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next
    
    p.mt-4 <strong>Desconsolidación de la mercancía</strong>
    p La desconsolidación hace referencia a desagrupar mercancías que previamente habían sido consolidadas y relacionadas en un mismo documento de envío, lo que indica que toda la mercancía que conforma el pedido debe ser entregada a diferentes clientes, según la carta individual de transporte y nota de entrega.  En otras palabras, consiste en subdividir un pedido grande en otros más pequeños; esta tarea debe desarrollarse en los centros de distribución que posean tecnologías para desconsolidar y trasladar mercancías a los diferentes destinatarios.
    
    p.mb-0.mt-4 <strong>Figura 2</strong>
    p.it Grúa tipo pórtico
    <br>
    p Durante esta operación, los contenedores que llegan deben ser vaciados de los pedidos entrantes consolidados, para volver a combinarse en los medios de transporte disponibles y ruta programada para los vehículos.  En los centros de distribución, se logran reducir las existencias del inventario y mejorar la cadena de distribución y suministro, dado que se realiza una minuciosa organización que permiten hacer las entregas en los tiempos acordados.  Un ejemplo claro es el recibimiento de contenedores con mercancías en el puerto, allí se desconsolida el pedido, abriendo las puertas, verificando y abriendo el sello de seguridad, para continuar con el vaciado del mismo, permitiendo así que toda la mercancía se clasifique y reorganice para llevarla a los vehículos o medios de transporte (por lo regular terrestre) encargados de la distribución.
    .row.justify-content-center
      .col-lg-5
        img(src='@/assets/curso/tema1/img24.png', alt='Texto que describa la imagen')
      .col-lg-7.bg33
        <br><br>
        p Para la operación de desconsolidación en puerto, se requiere de personal capacitado, grúas tipo horquilla y pórtico, necesarias para la operación, los documentos portuarios necesarios para la entrega del pedido, descarga del contenedor y traslado hacia el área de recepción temporal en puerto, paletizadoras, embalaje, retractilados, etiquetas, entre otros equipos. Existen, principalmente, tres tipos de desconsolidación de contenedores:
    <br><br>
    img.mt-4(src='@/assets/curso/tema1/img25.svg', alt='Texto que describa la imagen')
    <br><br>
    h5 En cualquiera de los tres casos, se deben realizar las siguientes actividades:
    p.mb-0.mt-4 <strong>Figura 3</strong>
    p.it Secuencia de actividades a desarrollar en la desconsolidación
    .row.justify-content-center
      .col-lg-10
        img.mt-4(src='@/assets/curso/tema1/img26.svg', alt='Texto que describa la imagen')
    <br><br>
    h5.mt-4 *SGI:  Sistema de Gestión Informático 
      span.it (software)
    .col-lg-12.mt-4.p-4
      .cajon.color-acento-contenido.p-4.mb-4
        .row.justify-content-center
          .col-lg-1
            img(src='@/assets/curso/tema1/ico7.svg', alt='Texto que describa la imagen')
          .col-lg-9
            p En el desarrollo de las anteriores actividades, el <strong>agente de carga</strong> juega un papel importante, es la persona encargada de realizar los trámites documentales al momento de recibir el contenedor para la desconsolidación.   
    p.mb-0.mt-4 <strong>Figura 4</strong>
    p.it Desconsolidación de mercancía
    .row.justify-content-center
      .col-lg-7
        <br>
        p.mt-4 La función principal del agente de carga es ayudar a resolver inconvenientes logísticos y de transporte que se lleguen a presentar, tanto para el importador como para el exportador, bien sea en la consolidación o desconsolidación de la carga; presta asistencia técnica en temas fiscales y aduaneros, aseguramiento y recolección de productos, e incluso hace seguimiento al tema documental.  En caso de que el contenedor llegue por vía marítima, el agente de carga debe emitir el <strong>“Conocimiento de embarque”</strong> y, en caso aéreo, la <strong>“Guía aérea”</Strong>.
      .col-lg-5
        img(src='@/assets/curso/tema1/img27.png', alt='Texto que describa la imagen')
    .titulo-sexto.color-secundario.mt-4.mb-0
      h5 Tabla 3
    p.it.maxx Características de documentos requeridos en la desconsolidación
    .tabla-a.color-primario.mb-5 
      table
        thead
          tr
            th.wid5 Documento
            th Definición
            th Objetivo
            th Características
            th.wid5 Datos
        tbody
          tr
            td <strong>Conocimiento de embarque</strong>
            td Documento relacionado con el transporte marítimo de mercancía. Obligatorio para operaciones de importación y exportación.
            td Dejar constancia de que el buque de carga se hace cargo de la mercancía y la entrega en el puerto acordado.
            td - Contrato de transporte en buques de carga <br>- Registra quién es el destinatario(s) <br>- Recibo que registra la cantidad y estado de la mercancía <br>- Debe registrar la información procesada en la fase de consolidación
            td - Datos completos de quien envía y quien recibe <br>- Nombre y matrícula de los buques de carga <br>- Puerto de carga y descarga <br>- Descripción detallada de la mercancía <br>- Constancia del precio de la operación
          tr
            td <strong>Guía aérea</strong>
            td Documento que acredita el contrato de transporte internacional vía aérea
            td Dejar constancia de que el avión o aerolínea se hace cargo de la mercancía y conoce de la existencia de la misma.
            td - Conocida como air waybill <br>- Sirve de recibo para el remitente <br>- El transportista se compromete a llevar la mercancía al aeropuerto acordado <br>- Lo emite la aerolínea o quien haya consolidado la mercancía <br>- El documento debe ser entregado en el país de destino (importador)
            td - Datos completos del destinatario y de quien envía <br>- Número de vuelo <br>- Aeropuerto de salida y de llegada <br>_Valor del flete <br>- Reflejar la fecha de emisión y detalles de la carga <br>- Emisión de seis (6) copias para entregar, así: línea aérea, destinatario, expedidor, destinatario (firmada al momento de entregar la mercancía), aeropuerto de destino, agente aéreo
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta.p-4.p-md-5.mb-5.mt-4.bg44
          .row.justify-content-around.align-items-center
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            .col-md.col-lg-7.p-2
              <br>
              p.text-white Si es de su interés ampliar la información sobre:
              p.text-white <strong>Agente de carga,</strong>  revisar el video que aparece en el siguiente enlace:  
              a.boton.color-acento-botones.texto-blanco.mt-4.aq(:href="('https://www.youtube.com/watch?v=cLgS23sdvEQ')" target="_blank" type="application/pdf")
                span Ingresar
                i.fas.fa-link
              
              p.text-white.mt-4 Documentos de embarque requeridos en Latinoamérica:
              a.boton.color-acento-botones.texto-blanco.mt-4.aq(:href="('https://comercioexterior.la/broker-internacional/documentos-de-embarque/')" target="_blank" type="application/pdf")
                span Ingresar
                i.fas.fa-link     
    .row.justify-content-center
      .col-lg-10
        .tarjeta.p-4.p-md-5.mb-5.mt-4.bg55
          .row.justify-content-around.align-items-center
            .col-md.col-lg-7.p-4            
              <br>
              p Si es de su interés ampliar la información sobre:
              p.mb-4 La regulación aduanera en Colombia, puede ir al material de apoyo y descargar el pdf <strong>3_ Decreto 390 de 2016 Regulación aduanera.pdf</strong> 
              a.boton.color-acento-botones.texto-blanco.mt-4(:href="('https://www.mincit.gov.co/ministerio/normograma-sig/procesos-de-apoyo/gestion-juridica/decretos/decreto-390-de-2016.aspx')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-download
              <br><br><br><br>                  
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
    separador
    #t_1_3.titulo-segundo.color-secundario
      h2 1.3 Equipos de movimentación
    .row.justify-content-center
      .col-lg-8
        p En la gestión del almacén, se requiere revisar qué medios o equipos de manipulación son necesarios para mover y trasladar mercancías dentro del almacén; mientras que los medios o equipos de almacenamiento hacen referencia a los estantes, cajas, armarios, suelos, silos, contenedores, etc., que sirven para guardar mercancías requeridas posteriormente.
        p Existe un gran número de equipos de almacenamiento, pues existen diversos tipos de mercancías, lo que requiere analizar y seleccionar los más adecuados para los productos.  Incluso, se puede solicitar asesoría con el proveedor sobre nuevas tecnologías, materiales o formas de almacenar.  De igual forma, en las actividades de manipulación de mercancías se pueden utilizar sistemas manuales o automatizados, lo cual requiere recursos humanos y materiales.
      .col-lg-4
        img(src='@/assets/curso/tema1/img30.png', alt='Texto que describa la imagen')
    p En aquellos sistemas manuales y de acuerdo con estándares para manejo de cargas en salud ocupacional, un operario de género masculino está en capacidad de trasladar cargas hasta de 25 kg con un recorrido máximo de 30 m, mientras que la mujer puede realizar traslados máximos de 15 kg; un mecanismo de apoyo para superar estas limitaciones y aumentar la capacidad tanto de carga como traslados son los diferentes equipos de manipulación y movimentación de cargas. Es importante tener en cuenta aspectos como rotación de productos y espacio disponible al momento de elegir.  A continuación, se presenta la clasificación general de los equipos:
    <br><br>
    p.mb-0 <strong>Figura 5</strong>
    p.it Clasificación equipos de manipulación y movimentación   
    .row.justify-content-center
      .col-lg-7
        img(src='@/assets/curso/tema1/img31.png', alt='Texto que describa la imagen')
      .col-lg-5
        img(src='@/assets/curso/tema1/img32.png', alt='Texto que describa la imagen')
    <br> 
    p.mt-4 <strong>Clasificación de equipos dinámicos sin traslado:</strong>  son equipos que están fijos al piso o techo de la edificación y que pueden realizar algún tipo de transporte, como aparece en el siguiente recurso.
    
    .row.justify-content-center
      .col-lg-10.bg77
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Transportadora de banda</strong>
              p.mb-0.margl - Plataforma de goma deslizante, sobre conjunto de rodillos.
              p.mb-0.margl - Aplica para embalajes de base irregular.
              p.mb-0.margl - Transporte a granel.
              p.margl - Adecuada para trayectos largos, con curvas y diferentes niveles.    
            .col-md-1.wax
            .col-md-5
              <br><br>
              figure
                img(src='@/assets/curso/tema1/img33.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Transportadora de rodillos</strong>
              p.mb-0.margl - Plataforma de rodillos, sobre rodamientos.
              p.mb-0.margl - Opera en función del tipo de mercancía.
              p.mb-0.margl - Los productos se desplazan como consecuencia de la gravedad.
            .col-md-1.wax

            .col-md-5
              <br><br>            
              figure
                img(src='@/assets/curso/tema1/img34.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Vehículo que comunica varias áreas del almacén </strong>
              p.mb-0.margl - Desplazamiento a altas velocidades
              p.mb-0.margl -Movimientos en línea recta
              p.mb-0.margl - Opera con un sistema neumático
              p.mb-0.margl - Precisión en la ubicación de carga
              p.mb-0.margl - Requiere uso de telémetros (láser)
            .col-md-1.wax

            .col-md-5
              <br><br>
              figure
                img(src='@/assets/curso/tema1/img35.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Equipo de transporte fijo al techo </strong>
              p.mb-0.margl - Permite transporte de mercancía dentro del almacén a diferentes zonas
              p.mb-0.margl - Mantiene despejado el suelo
              p.mb-0.margl - Requiere techos muy altos en el almacén
              p.mb-0.margl - Uso principal en el sector automotriz
            .col-md-1.wax

            .col-md-5
              <br><br>
              figure
                img(src='@/assets/curso/tema1/img36.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Equipo  con desplazamiento  por pasillos estrechos a velocidad alta </strong>
              p.mb-0.margl - Diseñados especialmente para almacenes automatizados
              p.mb-0.margl - Operan con dos movimientos: longitudinal sobre rail y vertical para extraer o colocar pallets
              p.mb-0.margl - Desarrollan tareas de picking a gran altura

            .col-md-1.wax

            .col-md-5
              <br><br>
              figure
                img(src='@/assets/curso/tema1/img37.png', alt='Texto que describa la imagen')      
    <br>
    p.mt-4 Dinámicos con traslado:  Aquellos equipos que pueden trasladar mercancías dentro del almacén. Se describen a continuación:
    .row.justify-content-center
      .col-lg-10.bg88
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Equipo mecánico de transporte</strong>
              p.mb-0.margl - Sirven de apoyo a otros equipos
              p.mb-0.margl - Transportan la carga a distancias cortas
              p.mb-0.margl - Levantan distancias muy cortas del suelo
              p.margl - Apoyan actividades del muelle  
            .col-md-1.wax
            
            .col-md-5
              <br><br>
              figure
                img(src='@/assets/curso/tema1/img38.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Apilador eléctrico con mástil telescópico</strong>
              p.mb-0.margl - Elevación hasta altura específica
              p.mb-0.margl - Desplazamiento de altura y horizontal
              p.mb-0.margl - Permite realizar trabajo de apilado
              p.mb-0.margl - Puede ser utilizado en recepción y expedición
              p.mb-0.margl - No se recomienda para cargas pesadas
            .col-md-1.wax
            
            .col-md-5
              <br><br>
              figure
                img(src='@/assets/curso/tema1/img39.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Carretilla retráctil, contrabalanceada, de toma lateral (bi o trilateral) </strong>
              p.mb-0.margl - Movimientos vertical y horizontal
              p.mb-0.margl - Levanta cargas hasta 10 m
              p.mb-0.margl - Necesita pasillos para operar
              p.mb-0.margl - Recorridos medios-largos
              p.mb-0.margl - Uso en ubicación y apilado de mercancía
            .col-md-1.wax
 
            .col-md-5
              <br><br>
              figure
                img(src='@/assets/curso/tema1/img40.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Automatic Guided Vehicles </strong>
              p.mb-0.margl - No requieren conductor (inteligentes)
              p.mb-0.margl - Ordenador que comunica con PC
              p.mb-0.margl - Aplica diferentes técnicas de guía: hilo conductor a poca profundidad del suelo; uso banda magnética sobre el suelo
              p.mb-0.margl - Sigue un trayecto orientado por demarcación
            .col-md-1.wax
 
            .col-md-5
              <br><br>
              figure
                img(src='@/assets/curso/tema1/img41.png', alt='Texto que describa la imagen')
  
    <br><br> 
    p <strong>Estáticos:</strong>  Se utilizan para almacenar mercancía a granel, tienen un orificio de entrada y uno de salida.  Son muy utilizados para manejar semillas y minerales, pueden ser cilíndricos o poligonales. Los más comunes son los silos de almacenamiento.            
    .row.justify-content-center
      .col-lg-10
        .tarjeta.p-4.p-md-5.mb-5.mt-4.bg2
          .row.justify-content-around.align-items-center
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            .col-md.col-lg-7.p-4
              <br>
              p <strong>Material de apoyo</strong>
              p.mt-4 En caso de ser necesario ampliar la información, ingrese a Sistemas de Biblioteca Sena: Flamarique, S. (2017). Gestión de operaciones de almacenaje. Marge Books
              a.boton.color-acento-botones.texto-blanco.mt-4(:href="(' https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43773?page=55')" target="_blank" type="application/pdf")
                span Ingresar
                i.fas.fa-link
              <br>      
    p <strong>Sistemas de almacenamiento</strong>
    p Así como los equipos de manipulación son importantes para trasladar las cargas y servir de complemento a los operarios, el volumen del almacén aumenta de acuerdo con las dimensiones de la infraestructura, la forma de organizarlo y el flujo de la mercancía.  Para cada sector, existen soluciones de almacenamiento diferentes, las cuales ayudan a reducir costos, aumentar la eficiencia en la operación y cumplir objetivos como:             
    <br>  
      ol.lista-ol--cuadro.lista-ol--separador.mt-4
        li 
          .lista-ol--cuadro__vineta
            span 1
          p.it Aprovechar al máximo la capacidad del almacén.

        li 
          .lista-ol--cuadro__vineta
            span 2
          p.it Facilitar las tareas de manipulación y acceso a los objetos.

        li 
          .lista-ol--cuadro__vineta
            span 3
          p.it Mejorar el control de inventario.

        li 
          .lista-ol--cuadro__vineta
            span 4
          p.it Optimizar el uso de los recursos técnicos y humanos.
    .row.justify-content-center
      .col-lg-1
      .col-lg-1
        <br>
        img.all(src='@/assets/curso/tema1/ico8.svg', alt='Texto que describa la imagen')
      .col-lg-9
        p Existen principalmente dos categorías de almacenes: manuales y automáticos.  Los <strong>manuales</strong> básicamente son operados solo por el talento humano, quienes aumentan en cantidad a medida que las operaciones y movimientos son mayores; se apoyan en equipos muy sencillos, como carretillas, puente-grúa, transpalés, etc.  De otro lado, los almacenes <strong>automatizados</strong> tienen mayor complejidad técnica, pues son operados por un conjunto de recursos mecánicos, dinámicos, por gravedad o eléctricos, por tanto, requieren menos personal y una mayor efectividad en los sistemas de gestión informática o de radiofrecuencia.  A continuación, se realiza la descripción de las diferentes clases de sistemas de almacenamiento:
      .col-lg-1
    <br><br><br>
    .row.justify-content-center
      .col-lg-10.bg99
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Sistema de bloque</strong>
              p.mb-0.margl - Organiza la mercancía en bloques homogéneos. 
              p.mb-0.margl - Puede ser al aire libre, no requiere estantes.
              p.mb-0.margl - Uso para mercancía que viene en grandes cantidades.
            .col-md-1.wax
            
            .col-md-5
              figure
                img(src='@/assets/curso/tema1/img42.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Sistema convencional</strong>
              p.mb-0.margl - Almacenamiento de productos combinando pallets y estantería.
              p.mb-0.margl - Requiere la utilización de un soporte intermedio para separar la - mercancía.

              p.mb-0.margl - Se aprovecha el uso del espacio del almacén.
            .col-md-1.wax

            .col-md-5
              <br><br>

              figure
                img(src='@/assets/curso/tema1/img43.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Sistema compacto </strong>
              p.mb-0.margl - Almacenamiento de mercancías en estantes que permitan el paso de carretillas en los pasillos.
              p.mb-0.margl Permite ocupación de la superficie y del volumen del almacén.
              p.mb-0.margl Requiere poco mantenimiento, centrado en infraestructura y estanterías.

            .col-md-1.wax
 
            .col-md-5
              <br><br>

              figure
                img(src='@/assets/curso/tema1/img44.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Sistema dinámico </strong>
              p.mb-0.margl - Recomendado para mercancías que requieran una rotación exacta.
              p.mb-0.margl - Se compone de estanterías metálicas, que forman caminos con   rodillos (inclinada o de forma horizontal).
              p.mb-0.margl - Óptimo aprovechamiento de la superficie.

            .col-md-1.wax
 
            .col-md-5
              <br><br>

              figure
                img(src='@/assets/curso/tema1/img45.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Sistema móvil </strong>
              p.mb-0.margl - Requiere la instalación de estantes sobre bases móviles, separadas unas de otras.
              p.mb-0.margl - El desplazamiento se realiza en función del pasillo principal y sobre el cual se requiera acceder.
              p.mb-0.margl - Muy utilizado para almacenar mercancía pequeña y heterogénea, por ejemplo, documentos o libros.

            .col-md-1.wax
 
            .col-md-5
              <br><br>

              figure
                img(src='@/assets/curso/tema1/img46.png', alt='Texto que describa la imagen')
  
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Sistema de Shuttle OSR </strong>
              p.mb-0.margl - Preparación de pedidos semiautomática; basado en el principio de mercancía al hombre.
              p.mb-0.margl - Los productos se desplazan desde las estanterías con ayuda de los shuttles (lanzaderas), hasta la zona de expedición
              p.mb-0.margl - Un elevador se encarga del transporte vertical.


            .col-md-1.wax
 
            .col-md-5
              <br><br>

              figure
                img(src='@/assets/curso/tema1/img47.png', alt='Texto que describa la imagen')
  
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>En estanterías </strong>
              p.mb-0.margl - A lmacenaje de unidades lista para posterior uso.
              p.mb-0.margl - Los pasillos se deben adaptar a la maquinaria utilizada.
              p.mb-0.margl - Ancho estandarizado de acuerdo con medidas de pallets.
              p.mb-0.margl - Estanterías compacta, dinámica, rack para picking, estantería para bidones y ruedas


            .col-md-1.wax
 
            .col-md-5
              <br><br>

              figure
                img(src='@/assets/curso/tema1/img48.png', alt='Texto que describa la imagen')
  
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Estanterías Cantilever </strong>
              p.mb-0.margl - Almacenaje de unidades de gran longitud.
              p.mb-0.margl - Estructura vertical fijada al suelo, con ganchos o agarres para colocar los productos, como perfiles metálicos (en forma de U o T).


            .col-md-1.wax
 
            .col-md-5
              <br><br>

              figure
                img(src='@/assets/curso/tema1/img49.png', alt='Texto que describa la imagen')
  
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Armarios </strong>
              p.mb-0.margl - Especie de mueble tipo closet para almacenar mercancías pequeñas.
              p.mb-0.margl - Ofrecen seguridad, pues se puede almacenar bajo llave.
              p.mb-0.margl - Existen estructuras con vidrios de seguridad para exhibir los productos (tipo vitrina).

            .col-md-1.wax
 
            .col-md-5
              <br><br>

              figure
                img(src='@/assets/curso/tema1/img50.png', alt='Texto que describa la imagen')
  
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Dispensadores </strong>
              p.mb-0.margl - Tolvas o depósitos verticales, opera como   dosificador y deja caer por gravedad la cantidad necesaria.
              p.mb-0.margl - El producto lo recibe una banda transportadora que lleva el producto.
              p.mb-0.margl - Muy utilizado en la industria farmacéutica.


            .col-md-1.wax
 
            .col-md-5
              <br><br>

              figure
                img(src='@/assets/curso/tema1/img51.png', alt='Texto que describa la imagen')
  
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Autoportantes </strong>
              p.mb-0.margl - Integración de la propia estructura del edificio al almacenamiento.
              p.mb-0.margl - Soportan cargas almacenadas hasta 35 m de altura.
              p.mb-0.margl - Utilización principalmente por almacenes automatizados.
              p.mb-0.margl - Nivel de codificación e información debe ser elevado.



            .col-md-1.wax
 
            .col-md-5
              <br><br>

              figure
                img(src='@/assets/curso/tema1/img52.png', alt='Texto que describa la imagen')
  
          .row
            .col-md-6.mb-4.mb-md-0.xx
              <br><br><br><br>
              p.margl <strong>Carruseles </strong>
              p.mb-0.margl - Almacenamiento vertical (automatizado).  Desplazamiento de la carga hacia el manipulador.
              p.mb-0.margl - Estanterías en serie para almacenar piezas pequeñas; giran automáticamente de manera horizontal.
              p.mb-0.margl - Producto controlado por el software de gestión y control de almacén.

            .col-md-1.wax
 
            .col-md-5
              <br><br>
              figure
                img(src='@/assets/curso/tema1/img53.png', alt='Texto que describa la imagen')
  
  

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
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
