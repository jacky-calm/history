$(document).ready( 
	function() {
		bindLinks('country'); 
		bindLinks('people'); 
		dynasty.showDynasties('country', 'fr');

		function bindLinks(catelog) {
			var linkPath = "#" + catelog + "Links > a";
			$(linkPath).each(function(i, countryLink) {
					$(countryLink).click(function() { 
						dynasty.showDynasties(catelog, this.name); 
					});
			});
		} 
	}
); 




