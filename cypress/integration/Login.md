# Scenario: As a user I want to be able to log in to see my account menu

## Precondition: 
* Start at Jakibi landing page on url "https://staging.jakibi.com/buyer"
* Web browser Chrome on desktop
* Credential are valid (existing user)
* No user currently logged in

### Requirement
* GIVEN open Jakibi landing page
* AND click on Connect tab
* And click on Login button

* WHEN enter account credentials
* AND click Continue button 

#### Acceptance criteria
* THEN has account icon
* AND connect tab is not visible