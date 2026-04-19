@allure.label.owner:Carlos_Ruiz @allure.label.severity:critical @allure.label.epic:Carrito_de_Compras @shopping_cart
Feature: Carrito de compras en Sauce Demo
  Como usuario autenticado de Sauce Demo
  Quiero agregar productos al carrito y visualizarlos
  Para realizar una compra

  Background:
    Given el usuario ha iniciado sesión en Sauce Demo
    And el usuario se encuentra en la página de productos

  @allure.label.story:Agregar_producto @TC_SC_001 @smoke @positive
  Scenario: TC_SC_001 - Agregar un producto al carrito desde la página de productos
    When agrega un producto al carrito
    Then el producto es agregado correctamente al carrito
    And el contador del carrito muestra la cantidad "1"

  @allure.label.story:Ver_productos_en_carrito @TC_SC_002 @regression @positive
  Scenario: TC_SC_002 - Ver los productos agregados en el carrito de compras
    And el usuario tiene productos agregados al carrito
    When accede al carrito de compras
    Then se muestran los productos agregados en el carrito
    And la información del producto es correcta

  @allure.label.story:Agregar_multiples_productos @TC_SC_003 @regression @positive
  Scenario Outline: <caseId> - Agregar múltiples productos y validar nombre y precio en el carrito
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

    Examples:
      | caseId      | producto_1               | precio_1 | producto_2              | precio_2 | cantidad |
      | TC_SC_003_A | Sauce Labs Backpack      | $29.99   | Sauce Labs Bike Light   | $9.99    |        2 |
      | TC_SC_003_B | Sauce Labs Fleece Jacket | $49.99   | Sauce Labs Bolt T-Shirt | $15.99   |        2 |
