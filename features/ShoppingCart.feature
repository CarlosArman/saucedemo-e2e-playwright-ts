@allure.label.owner:Carlos_Ruiz @allure.label.severity:critical @allure.label.epic:Carrito_de_Compras @shopping_cart
Feature: Carrito de compras en Sauce Demo
  Como usuario autenticado de Sauce Demo
  Quiero agregar productos al carrito y visualizarlos
  Para realizar una compra

  Background:
    Given el usuario ha iniciado sesión en Sauce Demo
    And el usuario se encuentra en la página de productos

  @allure.label.story:Agregar_producto @TC_SC_003 @smoke @positive
  Scenario: Agregar un producto al carrito desde la página de productos
    When agrega un producto al carrito
    Then el producto es agregado correctamente al carrito
    And el contador del carrito muestra la cantidad "1"

  @allure.label.story:Ver_productos_en_carrito @TC_SC_004 @regression @positive
  Scenario: Ver los productos agregados en el carrito de compras
    And el usuario tiene productos agregados al carrito
    When accede al carrito de compras
    Then se muestran los productos agregados en el carrito
    And la información del producto es correcta
