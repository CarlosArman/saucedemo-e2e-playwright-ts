@allure.label.owner:Carlos_Ruiz @allure.label.severity:critical @allure.label.epic:Autenticacion @login
Feature: Login en Sauce Demo
  Como usuario de Sauce Demo
  Quiero iniciar sesión en la aplicación
  Para acceder a la página de productos

  @allure.label.story:Login_exitoso @TC_LG_001 @smoke @positive
  Scenario: Login exitoso con credenciales válidas
    Given el usuario se encuentra en la página de login de Sauce Demo
    When ingresa usuario "standard_user" y password "secret_sauce"
    Then debería ver la página de productos

  @allure.label.story:Login_fallido @TC_LG_002 @regression @negative
  Scenario: Login fallido con usuario bloqueado
    Given el usuario se encuentra en la página de login de Sauce Demo
    When ingresa usuario "locked_out_user" y password "secret_sauce"
    Then debería ver el mensaje de error "Epic sadface: Sorry, this user has been locked out."

  @allure.label.story:Login_fallido @regression @negative
  Scenario Outline: Login fallido con credenciales invalidas
    Given el usuario se encuentra en la página de login de Sauce Demo
    When ingresa usuario "<username>" y password "<password>"
    Then debería ver el mensaje de error "<message>"

    Examples:
      | username      | password | message                                                                   |
      |               |          | Epic sadface: Username is required                                        |
      | standard_user |          | Epic sadface: Password is required                                        |
      | standard_user | asasas   | Epic sadface: Username and password do not match any user in this service |
