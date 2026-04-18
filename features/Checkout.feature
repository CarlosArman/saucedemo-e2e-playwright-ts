@allure.label.owner:Carlos_Ruiz @allure.label.severity:critical @allure.label.epic:Checkout @checkout
Feature: Proceso de compra en Sauce Demo
  Como usuario autenticado de Sauce Demo
  Quiero completar el proceso de compra
  Para confirmar mi pedido exitosamente

  Background:
    Given el usuario ha iniciado sesión en Sauce Demo
    And el usuario tiene productos agregados al carrito
    And el usuario se encuentra en la página del carrito de compras

  @allure.label.story:Checkout_exitoso @TC_CO_001 @smoke @positive
  Scenario: Completar el proceso de compra hasta la confirmación
    When el usuario inicia el proceso de checkout
    And completa la información personal con:
      | firstName | Carlos |
      | lastName  | Ruiz   |
      | zipCode   |  12345 |
    And confirma el resumen de la compra
    Then debería ver la confirmación de la orden
    And debería ver el mensaje de confirmación "Thank you for your order!"
