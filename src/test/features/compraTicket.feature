Feature: Compra de boletos
Como un usuario,
    Quiero comprar un boleto de autobus.

  Background: 
    Given Sitio web

  Scenario: Validar compra de boletos
    And Seleccionar origen 
    And Seleccionar destino
    And Seleccionar fecha de salida
    When Clic boton buscar
    And Clic Elige tu autobus
    And Clic Elige tu Asiento
    And Clic boton continuar 
    And Llenado de formulario pasajero
    And Llenado de formulario pago

      