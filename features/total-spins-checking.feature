Feature: Spin check

  Scenario: Checking count of spins

    Given As a player I open page with spin
    When Change bet for the 2 points
    And Play the round
    Then Verify total spins count