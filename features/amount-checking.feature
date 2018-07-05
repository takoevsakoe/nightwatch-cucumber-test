Feature: Amount calculating

  Scenario: Checking amount calculating

    Given As a player I open page with spin
    When I play until win
    Then Check that winning amount was changed
    And  Check that spin amount was added to the total spins