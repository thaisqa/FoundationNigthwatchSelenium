Feature: Example test
	I want to search in Wikipedia site

	Scenario Outline: Searching in Wikipedia site
		Given I access Wikipedia site
		When I inform <word> to search
		Then I verify the title <title>
		# And I am redirect to <url> page
		Examples:
			| word               | title                          |
			| SulAmérica Seguros | SulAmérica Seguros|
			#| CI&T               | CI&T - Wikipedia               |

			# | word               | url                                              | title             |
			# | SulAmérica Seguros | https://en.wikipedia.org/wiki/SulAmérica_Seguros | SulAmérica Seguros|
			# | CI&T               | https://en.wikipedia.org/wiki/CI%26T             | CI&T              |