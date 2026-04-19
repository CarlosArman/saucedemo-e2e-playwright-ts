@allure.label.owner:Carlos_Ruiz @allure.label.severity:critical @allure.label.epic:Checkout @checkout
Feature: Proceso de compra en Sauce Demo
  Como usuario autenticado de Sauce Demo
  Quiero completar el proceso de compra
  Para confirmar mi pedido exitosamente

  Background:
    Given el usuario ha iniciado sesión en Sauce Demo

  @allure.label.story:Checkout_exitoso @TC_CO_001 @smoke @positive
  Scenario: Completar el proceso de compra hasta la confirmación
    And el usuario tiene productos agregados al carrito
    And el usuario se encuentra en la página del carrito de compras
    When el usuario inicia el proceso de checkout
    And completa la información personal con:
      | firstName | Carlos |
      | lastName  | Ruiz   |
      | zipCode   |  12345 |
    And confirma el resumen de la compra
    Then debería ver la confirmación de la orden
    And debería ver el mensaje de confirmación "Thank you for your order!"

  @allure.label.story:Compra_completa_con_multiples_productos @TC_E2E_001 @regression @positive
  Scenario Outline: Comprar múltiples productos y completar el checkout exitosamente
    When agrega los siguientes productos al carrito:
      | producto     |
      | <producto_1> |
      | <producto_2> |
    And accede al carrito de compras
    Then se muestran los productos agregados en el carrito con su precio correcto:
      | producto     | precio     |
      | <producto_1> | <precio_1> |
      | <producto_2> | <precio_2> |
    And el contador del carrito muestra la cantidad "<cantidad>"
    When el usuario inicia el proceso de checkout
    And completa la información personal con:
      | firstName | Carlos |
      | lastName  | Ruiz   |
      | zipCode   |  12345 |
    And confirma el resumen de la compra
    Then debería ver la confirmación de la orden
    And debería ver el mensaje de confirmación "Thank you for your order!"

    Examples:
      | producto_1               | precio_1 | producto_2              | precio_2 | cantidad |
      | Sauce Labs Onesie        | $7.99    | Sauce Labs Bike Light   | $9.99    |        2 |
      | Sauce Labs Fleece Jacket | $49.99   | Sauce Labs Bolt T-Shirt | $15.99   |        2 |
