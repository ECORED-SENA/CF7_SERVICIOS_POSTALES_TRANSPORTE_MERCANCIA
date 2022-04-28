<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Preparación de la carga
    
    .row.justify-content-center.bg1.mb-5
      .col-lg-5.mb-5.mb-lg-0
        img(src='@/assets/curso/tema1/img1.svg', alt='Texto que describa la imagen').img300.m-auto(data-aos="zoom-in")      
      .col-lg-7
        p En todo el proceso logístico, es importante que la mercancía transportada llegue en condiciones óptimas al cliente final; por lo regular, los trayectos son largos y la mercancía puede sufrir algún daño si no ha sido preparada con responsabilidad, normas y protocolos de operación en logística. Se debe conocer el tipo de mercancía que se va a manipular, almacenar y transportar, para identificar el tratamiento que se debe aplicar.
        p El objetivo principal es preparar la mercancía para que llegue en perfectas condiciones, por lo que requiere desarrollar tareas de embalaje, identificación, consolidación, paletización y flejado de las cargas, para ser entregada al vehículo y así lograr que la carga no se mueva durante el transporte o sufra averías.  
        p La preparación de la carga al interior del almacén está acompañada de actividades que planifican y ejecutan los operarios, las cuales están descritas en la siguiente secuencia:    
    
    .tarjeta.tarjeta--gris.p-4.mb-5
      PasosB.color-acento-contenido
        .row.justify-content-center(titulo="")
          p.mb-4 Al momento de llegar la mercancía al almacén, se realiza una verificación sobre el tipo de ingreso, según las siguientes características:
          .col-xl-5.mb-4.mb-xl-0            
            p ingreso de mercancía al almacén, salida de mercancía del almacén, traspasos de mercancía y recontrol.
            p Durante el ingreso de la mercancía, se desarrollan otros procesos más pequeños, como: 
            p #[strong a)] Planear la entrada, para lo cual se debe tener claro y por escrito la programación del día, la semana o el periodo, y así poder organizar los recursos necesarios (personal, equipos y muelle, donde aplique). 
            p #[strong b)] Verificación inicial, el registro de entrada debe coincidir con la información que refleja el #[i software].
          .col-xl-7
            img(src='@/assets/curso/tema1/img2.svg', alt='Texto que describa la imagen').img500.m-auto(data-aos="zoom-in")

        .row.justify-content-center(titulo="")
          .col-xl-6.mb-4.mb-xl-0
            p <strong>Ubicación en estantes</strong>
            p Al momento de llegar la mercancía al almacén y hacer la descarga a nivel del piso, se hace la verificación sobre el correcto estado de la mercancía y se informa a los operarios el lugar donde se debe colocar en el almacén, para lo cual existen varias formas:
            p.mb-1 - Ubicación fija
            p.mb-1 - Ubicación caótica
            p.mb-1 - Ubicación por cliente
            p.mb-1 - Ubicación por proyecto
            p - Ubicación por temperatura
          
          .col-xl-5
            img(src='@/assets/curso/tema1/img3.svg', alt='Texto que describa la imagen').img500.m-auto

        .row.justify-content-center(titulo="")
          .col-xl-6.mb-4.mb-xl-0            
            p <strong>Consolidación de mercancías</strong>
            p Es un proceso que se realiza dentro de la cadena de suministro con el fin de optimizar la distribución de las mercancías y agilizar los procesos, permitiendo minimizar los costes de transporte y crear economías de escala.          
          .col-xl-5
            img(src='@/assets/curso/tema1/img4.svg', alt='Texto que describa la imagen').img500.m-auto

        .row.justify-content-center(titulo="")
          .col-xl-6.mb-4.mb-xl-0            
            p.it <strong>Cross docking</strong>
            p O cruce de muelle, es una operación que busca mejorar la eficiencia en la cadena de suministro, disminuyendo o volviendo nulo el tiempo de almacenamiento.          
          .col-lg-5
            img(src='@/assets/curso/tema1/img5.svg', alt='Texto que describa la imagen').img500

        .row.justify-content-center(titulo="")
          .col-xl-6.mb-4.mb-xl-0            
            p <strong>Expedición</strong>
            p Consiste en la salida de las mercancías. El pedido sale del almacén para ser entregado en el tiempo y condiciones establecidas por el cliente.  Por lo general, las zonas de expedición están ubicadas cerca de los muelles (puertas de entrada y salida).          
          .col-xl-5
            img(src='@/assets/curso/tema1/img6.svg', alt='Texto que describa la imagen').img500

        .row.justify-content-center(titulo="")
          .col-xl-5.mb-4.mb-xl-0            
            p <strong>Aprovisionamiento</strong>
            p.mb-0 Aplica principalmente para aquellas empresas que tienen líneas de producción; el almacén debe igualmente recepcionar la mercancía y mantener el control de la misma a través de las órdenes de fabricación.          
          .col-xl-5
            img(src='@/assets/curso/tema1/img7.svg', alt='Texto que describa la imagen').img500

    .row.justify-content-center.mb-5
      .col-lg-10
        .cta--yellow
          .bubble--right
          .dots--right
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/llamados/cta_01.png", alt="alt").img385.m-auto
            .col-12.col-lg.px-3.px-5.px-lg-0.pt-0.pt-lg-5.txt-mg--right
              p.mb-4 #[strong Si es de su interés ampliar la información sobre la secuencia de actividades diarias, se invita a descargar el siguiente archivo PDF.]
              a.boton.color-acento-contenido-botones.texto-blanco.float-end(:href="obtenerLink('/downloads/9_Secuencia de actividades diarias.pdf')" target="_blank" type="application/pdf").mb-5.mb-lg-0
                span Descargar
                i.fas.fa-link 

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
              img(src='@/assets/curso/tema1/ico1.svg', alt='').mt-5.mb-4.img85.m-auto             
              p.text-center <strong>Compatibilidad</strong>            
            .tarjeta-flip__contenido.p-4.p-xl-5
              p <strong>Compatibilidad</strong>
              p La matriz de compatibilidad para sustancias químicas (la desarrolla el departamento de Seguridad y Salud en el Trabajo) indica qué productos pueden estar almacenados juntos o distantes.  Por ejemplo, no se pueden almacenar productos tóxicos con alimentos o fármacos.  

      .col-sm-6.col-xl-3.mb-2.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.p-xl-5              
              img(src='@/assets/curso/tema1/ico2.svg', alt='').mt-5.mb-4.img85.m-auto              
              p.text-center <strong>Complementariedad</strong>            
            .tarjeta-flip__contenido.p-4.p-xl-5
              p <strong>Complementariedad </strong>
              p Se podrán colocar cercanas las mercancías que, por lo regular, deben ir en el mismo pedido.  

      .col-sm-6.col-xl-3.mb-2.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.p-xl-5              
              img(src='@/assets/curso/tema1/ico3.svg', alt='').mt-5.mb-4.img85.m-auto              
              p.text-center <strong>Tamaño y peso</strong>            
            .tarjeta-flip__contenido.p-4.p-xl-5
              p <strong>Tamaño y peso </strong>
              p En lo posible, aquellas mercancías de gran tamaño y volumen realizarán los menores desplazamientos.


      .col-sm-6.col-xl-3.mb-2.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.p-xl-5              
              img(src='@/assets/curso/tema1/ico4.svg', alt='').mt-5.mb-4.img85.m-auto             
              p.text-center <strong>Rotación</strong>            
            .tarjeta-flip__contenido.p-4.p-xl-5
              p <strong>Rotación</strong>
              p Cerca de la zona de expedición, se ubicarán los productos de mayor rotación o actividad en el almacén.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="zoom-in")
        img(src='@/assets/curso/tema1/img8.svg', alt='Texto que describa la imagen').img350-m-auto
      .col-lg-8.bg3        
        p.mt-5.mb-0 Los centros de despacho deben asegurar una correcta manipulación y ubicación de la mercancía, para lo cual se requiere conocer características como: dimensiones, forma, volumen, peso, ubicación, fragilidad, propiedades, estado físico y nivel de rotación.  Estas características permiten clasificarla e identificar los equipos necesarios para las actividades de recepción, manipulación, ubicación y almacenamiento, las cuales se describen a continuación:

    .titulo-sexto.color-secundario
      h5 Tabla 1.
      span Clasificación de las mercancías según características

   
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.ms-5 SEGÚN VOLUMEN O DIMENSIONES
      table
        tr.cell--gray
          th <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr.cell--gray
          th Muy voluminosa
          td Unidades muy grandes o agrupación de varias mercancías. Requieren contenedor.
        tr.cell--gray
          th Volumen excepcional
          td Medidas excesivamente grandes, que requieren de algún medio especial de transporte, permisos y señalización.
        tr.cell--gray
          th Voluminosas
          td Muy parecido a paletizadas, sin embargo, las dimensiones forman parte del producto y no se pueden apilar.
        tr.cell--gray
          th Dimensiones especiales
          td Requieren puente grúa para la manipulación.
        tr.cell--gray
          th Pequeñas
          td Se pueden manipular fácilmente con las manos (máximo 10 Kg).
        tr.cell--gray
          th.bgsa Paletizadas
          td Mercancía sobre paletas, con peso recomendado máximo de 1.000 kg
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.qqq  SEGÚN EL PESO
      table
        tr.cell--gray
          th <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr.cell--gray
          th Ligeras
          td Mercancía hasta 5 kg.
        tr.cell--gray
          th Media
          td Productos o mercancía entre 5 y 25 kg.
        tr.cell--gray
          th Pesada
          td Mercancía entre 25 kg y 1 tonelada.
        tr.cell--gray
          th Muy pesada
          td Mercancía que supere 1 tonelada.
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.qqq  SEGÚN UBICACIÓN
      table
        tr.cell--gray
          th <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr.cell--gray
          th Sencillas
          td Con dimensiones dentro del rango (normales), se pueden ubicar fácilmente en los estantes del almacén.  No pueden apilarse.
        tr.cell--gray
          th Apilables
          td Se pueden apilar, con algunas limitaciones.
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.qqq  SEGÚN FRAGILIDAD
      table
        tr.cell--gray
          th <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr.cell--gray
          th Ligeras
          td Pueden soportar peso encima con limitaciones. Por ejemplo, cajas de yogurt.
        tr.cell--gray
          th Resistentes
          td Soportan mucho peso, por ejemplo, cajas de cerámicas para pisos.
        tr.cell--gray
          th Frágiles
          td No pueden soportar peso encima, se deben organizar individualmente.      
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.qqq  SEGÚN PROPIEDADES
      table
        tr.cell--gray
          th <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr.cell--gray
          th Duradero
          td No es prioritario organizar por orden de salida; el tiempo de almacenamiento es indiferente.
        tr.cell--gray
          th Perecedero
          td Por lo regular, llevan una fecha de vencimiento; al momento de despachar las mercancías, deben salir primero las más antiguas. Ocurre en el caso de alimentos y medicinas.
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.qqq  SEGÚN ESTADO FÍSICO
      table
        tr.cell--gray
          th <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr.cell--gray
          th Líquido
          td Es necesario identificar la composición y reacción química con otros productos, pues podría cambiar su estado físico y generar algún tipo de riesgo.
        tr.cell--gray
          th Sólido
          td Aquellos productos compactos o individuales, como los utilizados en el sector agrícola.
        tr.cell--gray
          th Gaseoso
          td Al igual que el estado líquido, se requiere identificar la composición química y reactividad con otros productos.                
    .tabla-b.color-secundario.mb-4
      .tabla-b__header
        h5.mb-0.text-white.qqq  SEGÚN ROTACIÓN
      table
        tr.cell--gray
          th <strong>Característica</strong>
          td <strong>Descripción</strong>
        tr.cell--gray
          th Baja
          td Registran movimientos mínimos en el almacén.
        tr.cell--gray
          th Media
          td De mediana rotación.
        tr.cell--gray
          th Alta
          td Flujo bastante alto de movimiento, tanto de entradas como salidas del almacén.
    <br>
    .row.justify-content-center
      .col-lg-12
        p.text-center.it Nota. Fuente: https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50249

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Consolidación y desconsolidación de mercancía

    p.mb-5 Generalmente, en los almacenes y centros de distribución, se agrupan (consolidan) y almacenan las mercancías según el tipo de producto; por ejemplo, donde se utilizan los soportes rígidos horizontales metálicos o de madera, comúnmente conocidos como estibas (técnicamente, pallet o paletas), es necesario una estantería tipo rack o de paletización. En caso de que la mercancía sean perfiles, se requiere una estantería tipo cantiléver, para mantenerlos bien organizados.

    .row.justify-content-center.mb-4
      .col-lg-8       
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p El éxito de la organización y agrupación de la mercancía en un almacén es la forma como se gestionan los productos; se recomienda aplicar la técnica de gestión japonesa 5S (cinco palabras que comienzan por S), cuyo fundamento es lograr lugares de trabajo mejor organizados, más limpios, más ordenados y, por consiguiente, más productivos. 
            i.fas.fa-quote-right     
        .row.d-none.d-lg-flex
          .col-lg-2
            img(src='@/assets/curso/tema1/ico5.svg', alt='').img85

      .col-lg-4(data-aos="zoom-in")
        img(src='@/assets/curso/tema1/img9.png', alt='').img350.m-auto

    .cajon.cjn-rosa.p-4.mb-5
      p <strong>Técnica gestión japonesa 5S</strong>
      p <strong>SEIRI</strong> - Clasificar:  identificar y separar todos aquellos materiales considerados innecesarios y retirarlos del entorno laboral.
      p <strong>SEITON</strong> - Ordenar: establecer la forma en que deben identificarse y ubicar los materiales requeridos, de manera que sea fácil y rápido encontrarlos para la utilización.
      p <strong>SEISO</strong> - Limpieza: identificar y eliminar las fuentes de suciedad, asegurando que siempre todo se encuentre en perfecto estado de higiene.
      p <strong>SEIKETSU</strong> - Estandarización: el objetivo es lograr distinguir una situación normal de otra anormal, mediante información sencilla, como etiquetas, avisos informativos o señalización; y así lograr un control visual a través de la información.
      p <strong>SHITSUKE</strong> - Disciplina: continuar y trabajar permanentemente aplicando las 4s anteriores en todos los sitios de trabajo, de acuerdo con las normas establecidas.
      p.mb-0 Las tres primeras “S” están enfocadas al entorno físico, y las dos últimas se orientan al comportamiento de las personas.
      .bulb--icon.d-none.d-lg-flex  
     

    h3 Consolidación de mercancías 

    p.mb-4 La consolidación consiste en agrupar o combinar las mercancías sueltas provenientes de las áreas de #[i picking], líneas de pedido o destinos y así organizar un solo paquete, con el objetivo de economizar transporte y manipulación de las mismas.  Esta actividad es desarrollada en la zona de alistamiento (expedición), preferiblemente cerca del muelle, para optimizar los recursos disponibles; dicha agrupación consiste en colocar sobre una paleta varios paquetes pequeños, para facilitar la manipulación, almacenamiento y transporte; en ocasiones, depende del cliente y el destino para organizar la mercancía, como se presenta a continuación:   

    .row.justify-content-center.align-items-center.bg1A.mb-5
      .col-lg-8        
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Tipos de consolidación  
        .row.justify-content-center
          .col-10.col-md-8.col-lg-6.mb-4.mb-lg-0
            .crd.crd--white.crd--brad
              figure.mb-3
                img(src="@/assets/curso/tema1/t1_ico_01.svg", alt="alt").img85.m-auto
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Agrupar pedidos de un mismo cliente.
                li 
                  i.fas.fa-angle-right
                  | Único envío.
                li 
                  i.fas.fa-angle-right
                  | Reduce costos de transporte. 
          .col-10.col-md-8.col-lg-6.mb-4.mb-lg-0  
            .crd.crd--white.crd--brad
              figure.mb-3
                img(src="@/assets/curso/tema1/t1_ico_02.svg", alt="alt").img85.m-auto
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Agrupar pedidos de un mismo cliente.
                li 
                  i.fas.fa-angle-right
                  | Misma ruta.
                li 
                  i.fas.fa-angle-right
                  | Reduce costos, por compartir transporte.  
      .col-lg-6.px-4
                 
    
    p.mb-5 Para realizar la consolidación de mercancías y objetos postales, se deben tener en cuenta las siguientes actividades:

    .crd.crd--slyder.p-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h5 Paletizado
            p Hace referencia a la forma de organizar las mercancías sobre un <i>pallet</i>(estiba) para almacenamiento y transporte, con la finalidad de tener uniformidad y facilitar la manipulación.
            p El paletizado podrá realizarse de forma manual o mecanizado, utilizando toda la superficie de la estiba.    
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img12.png', alt='').img350.m-auto

        .row.justify-content-center.align-items-center
          .col-lg-7
            h5 Retractilado
            p Es el proceso de embalaje en el que una máquina retractiladora envuelve en una película plástica (papel termo film) las mercancías, para quedar adheridas al plástico, evitando así daños o suciedad; quedan pegadas al <i>pallet</i> y se facilita tanto la manipulación como el transporte.    
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img13.png', alt='').img350.m-auto

        .row.justify-content-center.align-items-center
          .col-lg-7
            h5 Flejado
            p Es la forma de agrupar y asegurar las cajas, mercancías u objetos postales mediante unas tiras plásticas llamadas flejes, que aseguran el pedido que ya está retractilado para evitar la separación y asegurar mejor los productos, como se observa a continuación.   
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img14.png', alt='').img350.m-auto

        .row.justify-content-center.align-items-center
          .col-lg-7
            h5 <i>Pool</i> de paletas
            p Es la forma de agrupar y asegurar las cajas, mercancías u objetos postales mediante unas tiras plásticas llamadas flejes, que aseguran el pedido que ya está retractilado para evitar la separación y asegurar mejor los productos, como se observa a continuación.   
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img15.png', alt='').img350.m-auto      

            
    p De acuerdo con las actividades descritas anteriormente, la consolidación requiere de pallets de madera, plástico u otros materiales necesarios para el movimiento de la carga, para facilitar el levantamiento y movimiento con carretillas elevadoras o transpaletas.

    p.mb-4 Conozca algunas definiciones según normatividad:

    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-g.bginfo.p-3.p-sm-4.p-md-5.mt-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img16.png')})`}"
          )
          .bloque-texto-g__texto.p-4.ax
            p <strong>Según norma técnica NTC 44680/2013</strong><br><br>
            p En Colombia, se encuentran estandarizadas las dimensiones de los pallets, cuyo objetivo está enmarcado en “Estiba intercambiable de madera, utilizable por una vez, en la cadena de valor”, donde se establece que las medidas para la estiba o pallet son: largo 120 cm, ancho 100 cm y altura 15,5 cm.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cta--purple
          .bubble--right
          .dots--right
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/llamados/cta_02.png", alt="alt").img385.m-auto
            .col-12.col-lg.px-5.pt-0.pt-lg-5.txt-mg--right
              p.text-white.mb-4 Si es de su interés ampliar la información sobre <strong>Entregas paletizadas y métodos de paletización,</strong>revise la presentación que aparece en el siguiente enlace: 
              a.boton.color-acento-contenido-botones.texto-blanco.float-end(href="https://docplayer.es/3658902-Entregas-paletizadas.html" target="_blank").mb-5.mb-lg-0
                span Ingresar
                i.fas.fa-link 

    p.mb-4 Los <i>pallets</i> de madera son los más comunes, aunque existen de plástico y material reciclado. Los vehículos de transporte están diseñados para ubicar exactamente un número específico de estibas con las unidades de carga (aproximadamente 33 <i>pallets</i>) y así poder calcular el volumen a transportar. Sin embargo, antes de llevar la carga a los medios de transporte, se requiere consolidar o agrupar las cargas con la ayuda de herramientas y equipos como los que aparecen descritos a continuación:
    
    #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel').mb-5
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')

      .carousel-inner
        .carousel-item.active.bginfo
          p.px-4.pt-3 <strong>Flejadora</strong>
          p.ps-4.pb-3 Herramienta manual cuya función es tensar, cortar y unir cinta o fleje en el contorno de la carga.
          img.mt-2(src='@/assets/curso/tema1/img18.png', alt='Texto que describa la imagen')

        .carousel-item.bginfo
          p.px-4.pt-3 <strong>Retractiladora</strong>
          p.ps-4.pb-3 Equipo cuya función es cubrir los paquetes o pedidos con una película plástica, para proteger, facilitar el traslado y almacenamiento. 
          img.mt-2(src='@/assets/curso/tema1/img19.png', alt='Texto que describa la imagen')

        .carousel-item.bginfo
          p.px-4.pt-3 <strong>Selladoras Holt-Melt</strong>
          p.ps-4.pb-3 Adhesivo empleado para sellar cartón, plástico y otros materiales.
          img.mt-2(src='@/assets/curso/tema1/img20.png', alt='Texto que describa la imagen')

        .carousel-item.bginfo
          p.px-4.pt-3 <strong>Precintadoras</strong>
          p.ps-4.pb-3 Equipo empleado para realizar sellado automático superior e inferior de cajas de cartón con papel engomado.
          img.mt-2(src='@/assets/curso/tema1/img21.png', alt='Texto que describa la imagen')

        .carousel-item.bginfo
          p.px-4.pt-3 <strong>Paletizadora</strong>
          p.ps-4.pb-3 Equipo automático que realiza la función de paletizar una amplia gama de pedidos, envases, cajas, latas, botellas, etc.
          img.mt-2(src='@/assets/curso/tema1/img22.png', alt='Texto que describa la imagen')

        .carousel-item.bginfo
          p.px-4.pt-3 <strong>Pesaje y etiquetado</strong>
          p.ps-4.pb-3 Equipo automático cuyo objetivo es completar el ciclo de embalaje en instalaciones manuales y automáticas, donde expide las etiquetas para cualquier tipo de carga, con la identificación completa de la carga, incluyendo el peso.
          img.mt-2(src='@/assets/curso/tema1/img23.png', alt='Texto que describa la imagen')   

      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next

    
    h3 Desconsolidación de la mercancía
    p La desconsolidación hace referencia a desagrupar mercancías que previamente habían sido consolidadas y relacionadas en un mismo documento de envío, lo que indica que toda la mercancía que conforma el pedido debe ser entregada a diferentes clientes, según la carta individual de transporte y nota de entrega.  En otras palabras, consiste en subdividir un pedido grande en otros más pequeños; esta tarea debe desarrollarse en los centros de distribución que posean tecnologías para desconsolidar y trasladar mercancías a los diferentes destinatarios.     
   
    p.mb-4 Durante esta operación, los contenedores que llegan deben ser vaciados de los pedidos entrantes consolidados, para volver a combinarse en los medios de transporte disponibles y ruta programada para los vehículos.  En los centros de distribución, se logran reducir las existencias del inventario y mejorar la cadena de distribución y suministro, dado que se realiza una minuciosa organización que permiten hacer las entregas en los tiempos acordados.  Un ejemplo claro es el recibimiento de contenedores con mercancías en el puerto, allí se desconsolida el pedido, abriendo las puertas, verificando y abriendo el sello de seguridad, para continuar con el vaciado del mismo, permitiendo así que toda la mercancía se clasifique y reorganice para llevarla a los vehículos o medios de transporte (por lo regular terrestre) encargados de la distribución.    

    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        img(src='@/assets/curso/tema1/img24.png', alt='Texto que describa la imagen')
      .col-lg-7.bg33        
        p.mt-4.mb-0 Para la operación de desconsolidación en puerto, se requiere de personal capacitado, grúas tipo horquilla y pórtico, necesarias para la operación, los documentos portuarios necesarios para la entrega del pedido, descarga del contenedor y traslado hacia el área de recepción temporal en puerto, paletizadoras, embalaje, retractilados, etiquetas, entre otros equipos. 

    p.mb-4 Existen, principalmente, tres tipos de desconsolidación de contenedores:

    .hr--line
    .row
      .col-auto
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/img25A.svg", alt="alt").img65
      .col
        h4 Desagrupar o desconsolidar varios embarques 
        p Relacionados en un mismo documento de transporte, carta de porte o equivalente, donde la mercancía está referenciada a diferentes clientes o consignatarios que necesitan una distribución posterior.   
    .hr--line     
    .row
      .col-auto
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/img25B.svg", alt="alt").img65
      .col
        h4 Desconsolidar embarques consolidados en un mismo packing 
        p Lista de empaque o lista de carga: inventario de la mercancía que se va a exportar; la cual debe ser clasificada por referencias y así facilitar la ubicación en el almacén.
    .hr--line     
    .row
      .col-auto
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/img25C.svg", alt="alt").img65
      .col
        h4 Desconsolidación de embarques mixtos 
        p Es la combinación de los dos anteriores y requiere que las mercancías sean distribuidas tanto para stock como para cross-docking (cruzar de un muelle a otro, sin necesidad de almacenar mercancías, como en el caso de objetos postales, pues simplemente llegan y luego se reparten para cada lugar de destino, no se almacenan).
    .hr--line   

    h5.text-center.my-5 En cualquiera de los tres casos, se deben realizar las siguientes actividades:

    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span Secuencia de actividades a desarrollar en la desconsolidación
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        img.mt-4(src='@/assets/curso/tema1/img26.svg', alt='Texto que describa la imagen')
        figcaption.mt-3 *SGI:  Sistema de Gestión Informático (<i>software</i>)      
    
    .cajon.cjn-rosa.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto
          img(src='@/assets/curso/tema1/ico7.svg', alt='Texto que describa la imagen').img85
        .col
          p.mb-0 En el desarrollo de las anteriores actividades, el <strong>agente de carga</strong> juega un papel importante, es la persona encargada de realizar los trámites documentales al momento de recibir el contenedor para la desconsolidación.     

    .row.justify-content-center.align-items-center
      .col-lg-7        
        p La función principal del agente de carga es ayudar a resolver inconvenientes logísticos y de transporte que se lleguen a presentar, tanto para el importador como para el exportador, bien sea en la consolidación o desconsolidación de la carga; presta asistencia técnica en temas fiscales y aduaneros, aseguramiento y recolección de productos, e incluso hace seguimiento al tema documental.  En caso de que el contenedor llegue por vía marítima, el agente de carga debe emitir el <strong>“Conocimiento de embarque”</strong> y, en caso aéreo, la <strong>“Guía aérea”</Strong>.
      .col-lg-5(data-aos="zoom-in")
        img(src='@/assets/curso/tema1/img27.png', alt='Texto que describa la imagen')


    .titulo-sexto.color-secundario.mt-4.mb-4
      h5 Tabla 3.
      span Características de documentos requeridos en la desconsolidación

    .tabla-a.color-primario.mb-5 
      table
        thead
          tr
            th(style="width:15%") Documento
            th(style="width:20%") Definición
            th(style="width:20%") Objetivo
            th(style="width:20%") Características
            th(style="width:25%") Datos
        tbody
          tr
            td <strong>Conocimiento de embarque</strong>
            td Documento relacionado con el transporte marítimo de mercancía. Obligatorio para operaciones de importación y exportación.
            td Dejar constancia de que el buque de carga se hace cargo de la mercancía y la entrega en el puerto acordado.
            td - Contrato de transporte en buques de carga <br>- Registra quién es el destinatario(s). <br>- Recibo que registra la cantidad y estado de la mercancía. <br>- Debe registrar la información procesada en la fase de consolidación.
            td - Datos completos de quien envía y quien recibe. <br>- Nombre y matrícula de los buques de carga. <br>- Puerto de carga y descarga. <br>- Descripción detallada de la mercancía. <br>- Constancia del precio de la operación.
          tr
            td <strong>Guía aérea</strong>
            td Documento que acredita el contrato de transporte internacional vía aérea.
            td Dejar constancia de que el avión o aerolínea se hace cargo de la mercancía y conoce de la existencia de la misma.
            td - Conocida como 
              span.it Air Waybill <br>
              | - Sirve de recibo para el remitente <br>- El transportista se compromete a llevar la mercancía al aeropuerto acordado. <br>- Lo emite la aerolínea o quien haya consolidado la mercancía <br>- El documento debe ser entregado en el país de destino (importador).
            td - Datos completos del destinatario y de quien envía. <br>- Número de vuelo. <br>- Aeropuerto de salida y de llegada. <br>- Valor del flete. <br>- Reflejar la fecha de emisión y detalles de la carga. <br>- Emisión de seis (6) copias para entregar, así: línea aérea, destinatario, expedidor, destinatario (firmada al momento de entregar la mercancía), aeropuerto de destino, agente aéreo.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cta--purple
          .bubble--right
          .dots--right
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/llamados/cta_03.png", alt="alt").img385.m-auto
            .col-12.col-lg.px-5.pt-0.pt-lg-5.txt-mg--right
              p.text-white.mb-4 Si es de su interés ampliar la información sobre el #[strong agente de carga] y los #[strong documentos de embarque] requeridos en Latinoamérica, consultar los siguientes enlaces:
              a.boton.color-acento-contenido-botones.texto-blanco(href="https://www.youtube.com/watch?v=cLgS23sdvEQ" target="_blank").mb-4.me-3
                span Agente de carga
                i.fas.fa-link 
              a.boton.color-acento-contenido-botones.texto-blanco(href="https://comercioexterior.la/broker-internacional/documentos-de-embarque/" target="_blank").mb-5.mb-lg-0
                span Documentos de embarque
                i.fas.fa-link 

    
    .row.justify-content-center.mb-5
      .col-lg-10
        .cta--yellow
          .bubble--left
          .dots--left
          .row.align-items-center            
            .col-12.col-lg.pt-0.pt-lg-5.order-2.order-lg-1.txt-mg--left
              p Si es de su interés ampliar la información sobre:
              p.mb-4 La regulación aduanera en Colombia, puede ir al material de apoyo y descargar el pdf <strong>3_ Decreto 390 de 2016 Regulación aduanera.pdf</strong>  
              a.boton.color-acento-contenido-botones.texto-blanco(:href="obtenerLink('/downloads/Decreto-390-de-2016.pdf')" target="_blank").mb-5.mb-lg-0
                span Descargar
                i.fas.fa-link

            .col-auto.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/llamados/cta_04.png", alt="alt").img385.m-auto              
         
    
    separador

    #t_1_3.titulo-segundo.color-secundario
      h2 1.3 Equipos de movimentación

    .row.justify-content-center
      .col-lg-8
        p En la gestión del almacén, se requiere revisar qué medios o <STRONG>equipos de manipulación</STRONG> son necesarios para mover y trasladar mercancías dentro del almacén; mientras que los <STRONG>medios o equipos de almacenamiento</STRONG> hacen referencia a los estantes, cajas, armarios, suelos, silos, contenedores, etc., que <STRONG>sirven para guardar</STRONG> mercancías requeridas posteriormente.
        p Existe un gran número de equipos de almacenamiento, pues existen diversos tipos de mercancías, lo que requiere analizar y seleccionar los más adecuados para los productos.  Incluso, se puede solicitar asesoría con el proveedor sobre nuevas tecnologías, materiales o formas de almacenar.  De igual forma, en las actividades de manipulación de mercancías se pueden utilizar sistemas manuales o automatizados, lo cual requiere recursos humanos y materiales.
      .col-lg-4(data-aos="zoom-in")
        img(src='@/assets/curso/tema1/img30.png', alt='Texto que describa la imagen')

    p.mb-5 En aquellos sistemas manuales y de acuerdo con estándares para manejo de cargas en salud ocupacional, un operario de género masculino está en capacidad de trasladar cargas hasta de 25 kg con un recorrido máximo de 30 m, mientras que la mujer puede realizar traslados máximos de 15 kg; un mecanismo de apoyo para superar estas limitaciones y aumentar la capacidad tanto de carga como traslados son los diferentes equipos de manipulación y movimentación de cargas. Es importante tener en cuenta aspectos como rotación de productos y espacio disponible al momento de elegir.  A continuación, se presenta la clasificación general de los equipos:

    .titulo-sexto.color-acento-contenido
      h5 Figura 5.
      span Clasificación equipos de manipulación y movimentación   
   
    .row.justify-content-center.bg1.mb-5(data-aos="zoom-in")
      .col-lg-7
        img(src='@/assets/curso/tema1/img31.svg', alt='Texto que describa la imagen')
      .col-lg-5
        img(src='@/assets/curso/tema1/img32.png', alt='Texto que describa la imagen').d-none.d-lg-flex
    
    p.mb-5 <strong>Clasificación de equipos dinámicos sin traslado:</strong> son equipos que están fijos al piso o techo de la edificación y que pueden realizar algún tipo de transporte, como aparece en el siguiente recurso.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .crd.crd--slyder.p-5
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0   
                p <strong>Transportadora de banda</strong>
                p - Plataforma de goma deslizante, sobre conjunto de rodillos.
                p - Aplica para embalajes de base irregular.
                p - Transporte a granel.
                p - Adecuada para trayectos largos, con curvas y diferentes niveles.            
              .col-lg-5              
                figure
                  img(src='@/assets/curso/tema1/img33.png', alt='Texto que describa la imagen').img350

            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0        
                p <strong>Transportadora de rodillos</strong>
                p - Plataforma de rodillos, sobre rodamientos.
                p - Opera en función del tipo de mercancía.
                p - Los productos se desplazan como consecuencia de la gravedad.
              .col-lg-5                       
                figure
                  img(src='@/assets/curso/tema1/img34.png', alt='Texto que describa la imagen').img350

            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0            
                p.margl <strong>Vehículo que comunica varias áreas del almacén </strong>
                p - Desplazamiento a altas velocidades.
                p - Movimientos en línea recta.
                p - Opera con un sistema neumático.
                p - Precisión en la ubicación de carga.
                p - Requiere uso de telémetros 
                  span.it (láser).
              .col-lg-5              
                figure
                  img(src='@/assets/curso/tema1/img35.png', alt='Texto que describa la imagen').img350

            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0            
                p <strong>Equipo de transporte fijo al techo </strong>
                p - Permite transporte de mercancía dentro del almacén a diferentes zonas.
                p - Mantiene despejado el suelo.
                p - Requiere techos muy altos en el almacén.
                p - Uso principal en el sector automotriz.
              .col-lg-5              
                figure
                  img(src='@/assets/curso/tema1/img36.png', alt='Texto que describa la imagen').img350

            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0              
                p <strong>Equipo  con desplazamiento  por pasillos estrechos a velocidad alta </strong>
                p - Diseñados especialmente para almacenes automatizados.
                p - Operan con dos movimientos: longitudinal sobre 
                  span.it rail 
                  | y vertical para extraer o colocar 
                  span.it pallets.
                p - Desarrollan tareas de picking a gran altura.
              .col-lg-5              
                figure
                  img(src='@/assets/curso/tema1/img37.png', alt='Texto que describa la imagen').img350   
    
    p.mb-5 <strong>Dinámicos con traslado: </strong>aquellos equipos que pueden trasladar mercancías dentro del almacén. Se describen a continuación:

    .row.justify-content-center.mb-5
      .col-lg-10
        .crd.crd--slyder2.p-5
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0              
                p <strong>Equipo mecánico de transporte</strong>
                p - Sirven de apoyo a otros equipos.
                p - Transportan la carga a distancias cortas.
                p - Levantan distancias muy cortas del suelo.
                p - Apoyan actividades del muelle.   
              .col-lg-5              
                figure
                  img(src='@/assets/curso/tema1/img38.png', alt='Texto que describa la imagen').img350.m-auto

            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0             
                p <strong>Apilador eléctrico con mástil telescópico</strong>
                p - Elevación hasta altura específica.
                p - Desplazamiento de altura y horizontal.
                p - Permite realizar trabajo de apilado.
                p - Puede ser utilizado en recepción y expedición.
                p - No se recomienda para cargas pesadas.            
              .col-lg-5              
                figure
                  img(src='@/assets/curso/tema1/img39.png', alt='Texto que describa la imagen').img350.m-auto

            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0           
                p <strong>Carretilla retráctil, contrabalanceada, de toma lateral (bi o trilateral) </strong>
                p - Movimientos vertical y horizontal.
                p - Levanta cargas hasta 10 m.
                p - Necesita pasillos para operar.
                p - Recorridos medios-largos.
                p - Uso en ubicación y apilado de mercancía. 
              .col-lg-5
                <br><br>
                figure
                  img(src='@/assets/curso/tema1/img40.png', alt='Texto que describa la imagen').img350.m-auto

            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0 
                p <strong>Automatic Guided Vehicles </strong>
                p - No requieren conductor (inteligentes).
                p - Ordenador que comunica con PC.
                p - Aplica diferentes técnicas de guía: hilo conductor a poca profundidad del suelo; uso banda magnética sobre el suelo.
                p - Sigue un trayecto orientado por demarcación.
              .col-lg-5              
                figure
                  img(src='@/assets/curso/tema1/img41.png', alt='Texto que describa la imagen').img350.m-auto 
    
    p.mb-5 <strong>Estáticos:</strong>  se utilizan para almacenar mercancía a granel, tienen un orificio de entrada y uno de salida.  Son muy utilizados para manejar semillas y minerales, pueden ser cilíndricos o poligonales. Los más comunes son los silos de almacenamiento. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .cta--yellow
          .bubble--right
          .dots--right
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/llamados/cta_01.png", alt="alt").img385.m-auto
            .col-12.col-lg.px-3.px-5.px-lg-0.pt-0.pt-lg-5.txt-mg--right
              p <strong>Material de apoyo</strong>
              p.mt-4 En caso de ser necesario ampliar la información, ingrese a Sistemas de Biblioteca Sena: Flamarique, S. (2017). Gestión de operaciones de almacenaje. Marge Books.
              a.boton.color-acento-contenido-botones.texto-blanco.float-end(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43773?page=55')" target="_blank" type="application/pdf").mb-5.mb-lg-0
                span Ingresar
                i.fas.fa-link 
      
    p <strong>Sistemas de almacenamiento</strong>
    p.mb-4 Así como los equipos de manipulación son importantes para trasladar las cargas y servir de complemento a los operarios, el volumen del almacén aumenta de acuerdo con las dimensiones de la infraestructura, la forma de organizarlo y el flujo de la mercancía.  Para cada sector, existen soluciones de almacenamiento diferentes, las cuales ayudan a reducir costos, aumentar la eficiencia en la operación y cumplir objetivos como:             
    
    ol.lista-ol--cuadro.lista-ol--separador
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

    .row.justify-content-center.mb-5      
      .col-auto        
        img.all(src='@/assets/curso/tema1/ico8.svg', alt='Texto que describa la imagen').img100.m-auto
      .col-lg-9
        p Existen principalmente dos categorías de almacenes: manuales y automáticos.  Los <strong>manuales</strong> básicamente son operados solo por el talento humano, quienes aumentan en cantidad a medida que las operaciones y movimientos son mayores; se apoyan en equipos muy sencillos, como carretillas, puente-grúa, transpalés, etc.  De otro lado, los almacenes <strong>automatizados</strong> tienen mayor complejidad técnica, pues son operados por un conjunto de recursos mecánicos, dinámicos, por gravedad o eléctricos, por tanto, requieren menos personal y una mayor efectividad en los sistemas de gestión informática o de radiofrecuencia.  A continuación, se realiza la descripción de las diferentes clases de sistemas de almacenamiento:
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .crd.crd--slyder3.p-5
          SlyderA(tipo="b")
            .row
              .col-lg-7                
                p <strong>Sistema de bloque</strong>
                p - Organiza la mercancía en bloques homogéneos. 
                p - Puede ser al aire libre, no requiere estantes.
                p - Uso para mercancía que viene en grandes cantidades.               
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/img42.png', alt='Texto que describa la imagen').img385.m-auto
            .row
              .col-lg-7
                p <strong>Sistema convencional</strong>
                p - Almacenamiento de productos combinando pallets y estantería.
                p - Requiere la utilización de un soporte intermedio para separar la - mercancía.
                p - Se aprovecha el uso del espacio del almacén.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/img43.png', alt='Texto que describa la imagen').img385.m-auto
            .row
              .col-lg-7
                p <strong>Sistema compacto </strong>
                p - Almacenamiento de mercancías en estantes que permitan el paso de carretillas en los pasillos.
                p Permite ocupación de la superficie y del volumen del almacén.
                p Requiere poco mantenimiento, centrado en infraestructura y estanterías.  
              .col-lg-5                
                figure
                  img(src='@/assets/curso/tema1/img44.png', alt='Texto que describa la imagen').img385.m-auto
            .row
              .col-lg-7
                p <strong>Sistema dinámico </strong>
                p - Recomendado para mercancías que requieran una rotación exacta.
                p - Se compone de estanterías metálicas, que forman caminos con rodillos (inclinada o de forma horizontal).
                p - Óptimo aprovechamiento de la superficie.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/img45.png', alt='Texto que describa la imagen').img385.m-auto
            .row
              .col-lg-7
                p <strong>Sistema móvil </strong>
                p - Requiere la instalación de estantes sobre bases móviles, separadas unas de otras.
                p - El desplazamiento se realiza en función del pasillo principal y sobre el cual se requiera acceder.
                p - Muy utilizado para almacenar mercancía pequeña y heterogénea, por ejemplo, documentos o libros.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/img46.png', alt='Texto que describa la imagen').img385.m-auto

            .row
              .col-lg-7
                p <strong>Sistema de </strong>
                  span.it <strong>Shuttle OSR </strong>
                p - Preparación de pedidos semiautomática; basado en el principio de mercancía al hombre.
                p - Los productos se desplazan desde las estanterías con ayuda de los <i>shuttles</i> (lanzaderas), hasta la zona de expedición.
                p - Un elevador se encarga del transporte vertical.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/img47.png', alt='Texto que describa la imagen').img385.m-auto
    
            .row
              .col-lg-7
                p <strong>En estanterías </strong>
                p - Almacenaje de unidades lista para posterior uso.
                p - Los pasillos se deben adaptar a la maquinaria utilizada.
                p - Ancho estandarizado de acuerdo con medidas de pallets.
                p - Estanterías compacta, dinámica, <i>rack</i> para <i>picking</i>, estantería para bidones y ruedas. 
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/img48.png', alt='Texto que describa la imagen').img385.m-auto

            .row
              .col-lg-7
                p <strong>Estanterías Cantilever </strong>
                p - Almacenaje de unidades de gran longitud.
                p - Estructura vertical fijada al suelo, con ganchos o agarres para colocar los productos, como perfiles metálicos (en forma de U o T).
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/img49.png', alt='Texto que describa la imagen').img385.m-auto
    
            .row
              .col-lg-7
                p <strong>Armarios </strong>
                p - Especie de mueble tipo <i>closet</i> para almacenar mercancías pequeñas.
                p - Ofrecen seguridad, pues se puede almacenar bajo llave.
                p - Existen estructuras con vidrios de seguridad para exhibir los productos (tipo vitrina).
              .col-md-5
                figure
                  img(src='@/assets/curso/tema1/img50.png', alt='Texto que describa la imagen').img385.m-auto
    
            .row
              .col-lg-7
                p <strong>Dispensadores </strong>
                p - Tolvas o depósitos verticales, opera como dosificador y deja caer por gravedad la cantidad necesaria.
                p - El producto lo recibe una banda transportadora que lleva el producto.
                p - Muy utilizado en la industria farmacéutica.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/img51.png', alt='Texto que describa la imagen').img385.m-auto
    
            .row
              .col-lg-7
                p <strong>Autoportantes </strong>
                p - Integración de la propia estructura del edificio al almacenamiento.
                p - Soportan cargas almacenadas hasta 35 m de altura.
                p - Utilización principalmente por almacenes automatizados.
                p - Nivel de codificación e información debe ser elevado.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema1/img52.png', alt='Texto que describa la imagen').img385.m-auto
    
            .row
              .col-lg-7
                p <strong>Carruseles </strong>
                p - Almacenamiento vertical (automatizado).  Desplazamiento de la carga hacia el manipulador.
                p - Estanterías en serie para almacenar piezas pequeñas; giran automáticamente de manera horizontal.
                p - Producto controlado por el <i>software</i> de gestión y control de almacén.
              .col-md-5                
                figure
                  img(src='@/assets/curso/tema1/img53.png', alt='Texto que describa la imagen').img385.m-auto

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
              p.mb-0 En caso de ser necesario ampliar la información, ingrese a Sistemas de Biblioteca Sena:
              p Flamarique, S. (2017). Gestión de operaciones de almacenaje. Marge Books. 
              a.boton.color-acento-contenido-botones.texto-blanco.float-end(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43773?page=41')" target="_blank" type="application/pdf").mb-5.mb-lg-0
                span Ingresar
                i.fas.fa-link 
                  
    

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Sistemas de información 

    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-g.bginfo.p-3.p-sm-4.p-md-5.mt-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Los sistemas de información gestionan aquellas actividades desarrolladas dentro del almacén cuya finalidad es apoyar la gestión física de la mercancía desde que ingresa al almacén hasta que sale en los centros de almacenamiento o distribución, e incluso hacer seguimiento a las devoluciones e inconsistencias; algunos de ellos son:
            
    Separador

    ImagenInfograficaB.color-primario.my-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img3.svg', alt='Texto que describa la imagen')

      div(x="19%" y="30%" tooltip="1. Sistemas de información" numero="+")
        .row.justify-content-center.bg556
          .col-lg-6            
            h5 1.Sistemas de información
            p EDI (<i>Electronic Data Interchange</i>), cuyo objetivo es realizar el traspaso de documentos comerciales a un formato normalizado y que pueda ser compartida la información entre empresas.  No es un correo electrónico, pues los datos deben contar con un estándar internacional.
          .col-lg-4            
            img(src='@/assets/curso/tema2/img4.svg', alt='Texto que describa la imagen').img430.m-auto

      div(x="19%" y="82%" tooltip="2. Sistemas de información" numero="+")
        .row.justify-content-center.bg556
          .col-lg-6           
            h5.mt-4 2.Sistemas de información
            p ERP (<i>Enterprise Resource Planning</i>)- Sistema Integral de Gestión Empresarial, su finalidad es automatizar la mayoría de los procesos de la organización (administración, logística, producción y comercialización).  
          .col-lg-4
            img(src='@/assets/curso/tema2/img5.svg', alt='Texto que describa la imagen').img430.m-auto

      div(x="44%" y="82%" tooltip="3. Sistemas de información" numero="+")
        .row.justify-content-center.bg556
          .col-lg-6
            h5.mt-4 3. Sistemas de información
            p ERP logra integrar los dos sistemas SGA-ERP.
          .col-lg-4
            img(src='@/assets/curso/tema2/img6.svg', alt='Texto que describa la imagen').img430.m-auto

      div(x="44%" y="30%" tooltip="4. Sistemas de información" numero="+")
        .row.justify-content-center.bg556
          .col-lg-6
            h5.mt-4 4. Sistemas de información
            p SGA-Sistema de Gestión de Almacén, cuya función más importante es mantener controlado el <i>stock</i> de mercancía (número de existencias registradas, equivalente a existencias físicas).
          .col-lg-4
            img(src='@/assets/curso/tema2/img7.svg', alt='Texto que describa la imagen').img430.m-auto

      div(x="70%" y="30%" tooltip="5. Sistemas de información" numero="+")
        .row.justify-content-center.bg556
          .col-lg-6
            h5.mt-4 5.Sistemas de información
            p Confirmación de ejecución de la orden dada por el operario.
          .col-lg-3
            img(src='@/assets/curso/tema2/img8.svg', alt='Texto que describa la imagen').img430.m-auto

      div(x="70%" y="82%" tooltip="6. Sistemas de información" numero="+")
        .row.justify-content-center.bg556
          .col-lg-6
            h5.mt-4 6.Sistemas de información
            p El sistema de gestión de almacén informa al sistema integral de gestión empresarial que el pedido ha sido completado o que se presentan algunas incidencias.
          .col-lg-4
            img(src='@/assets/curso/tema2/img9.svg', alt='Texto que describa la imagen').img430.m-auto

      div(x="95%" y="82%" tooltip="7. Sistemas de información" numero="7")
        .row.justify-content-center.bg556
          .col-lg-6
            h5.mt-4 7.Sistemas de información
            p El sistema integral de gestión empresarial le informa al cliente a través de un mensaje de intercambio electrónico de datos.
          .col-lg-4
            img(src='@/assets/curso/tema2/img10.svg', alt='Texto que describa la imagen').img430.m-auto

      div(x="95%" y="30%" tooltip="8. Sistemas de información" numero="8") 
        .row.justify-content-center.bg556
          .col-lg-6
            h5.mt-4 8.Sistemas de información
            p El sistema integral de gestión empresarial informa a todas las áreas de la organización que intervienen.
          .col-lg-4
            img(src='@/assets/curso/tema2/img11.svg', alt='Texto que describa la imagen').img430.m-auto

    .row.justify-content-center.mb-5
      .col-lg-10
        .cta--yellow
          .bubble--right
          .dots--right
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/llamados/cta_02.png", alt="alt").img385.m-auto
            .col-12.col-lg.px-3.px-5.px-lg-0.pt-0.pt-lg-5.txt-mg--right
              h5 Material de apoyo
              p.mb-0 Para ampliar la información, puede ingresar a Biblioteca virtual Sena:  Rubio, J. (2013). Gestión y pedido de stock. Ministerio de Educación y Formación Profesional de España. 
              a.boton.color-acento-contenido-botones.texto-blanco.float-end(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/49351?page=159')" target="_blank" type="application/pdf").mb-5.mb-lg-0
                span Ingresar
                i.fas.fa-link                 
     

    .row.justify-content-center.align-items-center.bg1A.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Integración y funcionamiento de las tecnologías en el almacén    
        img(src='@/assets/curso/tema2/img12.svg', alt='Texto que describa la imagen')(data-aos="zoom-in")
      .col-lg-6        
        p El sistema de radiofrecuencia (RFID) ha facilitado la gestión, el control y eficiencia en las operaciones del almacén; este facilita el almacenamiento y recuperación de la información (datos), apoyado en los diferentes dispositivos, como lectores de códigos de barras o infrarrojos y PDA, principalmente.  A su vez, los lectores envían los datos almacenados al software específico, que alimentará la base de datos principal de la compañía, como se presenta en la imagen.
       
    h5 Utilidad en su aplicación:
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

    .row.justify-content-center.mb-5
      .col-lg-10
        .cta--yellow
          .bubble--left
          .dots--left
          .row.align-items-center            
            .col-12.col-lg.pt-0.pt-lg-5.order-2.order-lg-1.txt-mg--left
              h4 Material de apoyo:
              p Para ampliar la información, puede ingresar a Biblioteca virtual Sena Flamarique (2017)              
              a.boton.color-acento-contenido-botones.texto-blanco.me-4(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43773?page=69')" target="_blank" type="application/pdf").mb-5.mb-lg-0
                span Ingresar  
                  i.fas.fa-link
            .col-auto.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/llamados/cta_04.png", alt="alt").img385.m-auto

       
    h4 <strong>Generalidades bases de datos</strong> 

    .row.justify-content-center.bg1A.mb-5
      .col-auto
        img.waaaq(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen').img100
      .col-lg
        p A lo largo de la cadena de suministro, en logística, se genera gran cantidad de información, que para este caso se denominan datos, los cuales se han multiplicado y revolucionado las tecnologías en los últimos tiempos.  En busca de una solución para el control y gestión de la información, se ha recurrido a sistemas de información que logren generar valor a los datos para la toma de decisiones. Hoy en día, se conoce como tecnología 4.0 y suministros inteligentes “<i>Big Data</i>”.
    
    h4.mt-4 Logística 4.0
    .row.justify-content-center.mb-5
      .col-lg
        p También llamada cuarta revolución industrial, donde el término 4.0 es hablar de innovación, de una nueva forma de hacer logística, donde el uso de herramientas novedosas optimiza el desarrollo de los procesos, cadenas de suministro inteligentes 
          span.it <strong>(Big Data o Machine Learning).</strong>
      .col-auto(data-aos="zoom-in")
        img(src='@/assets/curso/tema2/ico2.svg', alt='Texto que describa la imagen').img100

    h4.mb-4 Características Tecnología 4.0

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.mb-4
          .col-lg-6.mb-4.mb-lg-0
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema2/ico_01.svg", alt="alt").img65.m-auto
              .col
                p.mb-0 Integración entre sistemas y herramientas para una gestión más eficiente en la cadena de suministro, como: códigos de barras, RFID (radiofrecuencia en el control de inventarios) y GPS (optimización de rutas).
          .col-lg-6
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema2/ico_02.svg", alt="alt").img65.m-auto
              .col
                p.mb-0 Implementación de sensores en medios de transporte para informar la geolocalización y condiciones ambientales.

        .row.justify-content-center.mb-4
          .col-lg-6.mb-4.mb-lg-0
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema2/ico_03.svg", alt="alt").img65.m-auto
              .col
                p.mb-0 Sirve como herramienta para identificar nuevos clientes, tendencias, estrategias o ubicación del producto y centros de distribución.
          .col-lg-6
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema2/ico_04.svg", alt="alt").img65.m-auto
              .col
                p.mb-0 Es uno de los principales eslabones de las compras online.

        .row.justify-content-center.mb-4
          .col-lg-6.mb-4.mb-lg-0
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema2/ico_05.svg", alt="alt").img65.m-auto
              .col
                p.mb-0 Permite la integración y uso de dispositivos masivos.
          .col-lg-6
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema2/ico_06.svg", alt="alt").img65.m-auto
              .col
                p.mb-0 Reducción de tiempos y costos para una mejor rentabilidad.
    
    h4.mt-4 Características <i>Big Data</i>
    
    .row.justify-content-center.bg1.mb-5
      .col-lg-5.me-lg-3.mb-4.ml-g-0(data-aos="zoom-in")
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

    
    h4 Fuentes de información

    p.mb-5 Debido al volumen de datos que maneja la cadena de suministro, es imposible analizar y tomar decisiones con métodos tradicionales, por lo que se requiere organizar las diferentes fuentes para el suministro de información:    

    .row.justify-content-center.align-items-center.bg1.mb-5
      .col-lg-5.me-lg-3.mb-4.ml-g-0
        img(src='@/assets/curso/tema1/info.svg', alt='Texto que describa la imagen')(data-aos="zoom-in")
      .col-lg-6
        h5 Fuentes para el suministro de información
        ol.lista-ol--cuadro.lista-ol--separador.mt-4
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Alertas de desabastecimiento dentro de la distribución.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Comportamiento de los usuarios con los registros en sitios 
          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Reportes del área de transporte con el apoyo de sensores y tecnologías GPS.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Flujos de distribución y rutas de transporte.
          li 
            .lista-ol--cuadro__vineta
              span 5
            p.mb-0 Proyecciones contables.
          li 
            .lista-ol--cuadro__vineta
              span 6
            p.mb-0 Programación mantenimiento preventivo de equipos y herramientas.
          li 
            .lista-ol--cuadro__vineta
              span 7
            p.mb-0 Control de inventarios.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cta--yellow
          .bubble--right
          .dots--right
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/llamados/cta_06.png", alt="alt").img385.m-auto
            .col-12.col-lg.px-3.px-5.px-lg-0.pt-0.pt-lg-5.txt-mg--right
              h4 Material de apoyo
              p Para ampliar la información sobre el tema, puede consultar los recursos <strong>cadena de suministro 4.0: beneficios y retos de las tecnologías disruptivasingresar (biblioteca virtual)</strong> y <strong>cómo crear una base de datos en Excel (video tutorial)</strong> en los siguientes enlaces:                  
              a.boton.color-acento-contenido-botones.texto-blanco(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43773?page=69')" target="_blank" type="application/pdf").mb-5.mb-lg-0.me-3
                span Biblioteca virtual
                i.fas.fa-link 
              a.boton.color-acento-contenido-botones.texto-blanco(:href="('https://www.youtube.com/embed/E5T072rTNVA')" target="_blank" type="application/pdf").mb-5.mb-lg-0
                span Video Tutorial
                i.fas.fa-link     
    

    h5.mb-4 Registros generados en el proceso de expedición de pedidos

    .row.justify-content-center.mb-5
      .col-auto(data-aos="zoom-in")
        img(src='@/assets/curso/tema2/ico3.svg', alt='Texto que describa la imagen').img85
      .col
        p Todos los procesos que se desarrollan en el interior del almacén deben quedar soportados en los documentos que genera cada una de las tareas; así, por ejemplo, cuando se realiza una compra virtual, debe quedar el registro del pedido de venta y la factura emitida, la cual acompañará la mercancía al momento de llegar al cliente final.  Las empresas operan de forma independiente, sin embargo, existen documentos que son transversales o comunes al interior de su actividad, dentro de los que se encuentran los siguientes:   
    
    .row.justify-content-center.align-items-center.bg--gris
      .col-lg-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Registros generados en la expedición de pedidos
        img(src='@/assets/curso/tema2/img17.png', alt='Texto que describa la imagen')(data-aos="zoom-in")
      .col-lg-7
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
  name: 'Tema1',
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
