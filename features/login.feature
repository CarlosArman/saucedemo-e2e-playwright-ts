@allure.label.owner:Carlos_Ruiz
@allure.label.severity:critical
@allure.label.epic:Autenticacion
@login
Feature: Login en SauceDemo

  @allure.label.story:Login_exitoso
  @login-positivo
  Scenario: Login exitoso con usuario valido
    Given el usuario ingresa a la página de login
    When ingresa usuario "standard_user" y password "secret_sauce"
    Then debería ver la página de productos

  @allure.label.story:Login_fallido
  @login-negativo
  Scenario: Login fallido con usuario bloqueado
    Given el usuario ingresa a la página de login
    When ingresa usuario "locked_out_user" y password "secret_sauce"
    Then debería ver el mensaje de error "Epic sadface: Sorry, this user has been locked out."