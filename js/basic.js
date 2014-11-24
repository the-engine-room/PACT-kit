function FromHTMLTOPDF() {


	var pdf = new jsPDF('p', 'pt', 'letter')

	// source can be HTML-formatted string, or a reference
	// to an actual DOM element from which the text will be scraped.
	, source = $('#fromHTMLtestdiv')[0]

	// we support special element handlers. Register them with jQuery-style 
	// ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
	// There is no support for any other type of selectors 
	// (class, of compound) at this time.
	, specialElementHandlers = {
		// element with id of "bypass" - jQuery style selector
		'#onlineContent': function(element, renderer){
			// true = "handled elsewhere, bypass text extraction"
			return true
		},
		'#downloadButton': function(element, renderer){
			// true = "handled elsewhere, bypass text extraction"
			return true
		}
	},

	margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 450
    };

    pdf.setFont("roboto_condensed", "normal");

	console.log(pdf.getFontList());
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
    	source // HTML string or DOM elem ref.
    	, margins.left // x coord
    	, margins.top // y coord
    	, {
    		'width': margins.width // max width of content on PDF
    		, 'elementHandlers': specialElementHandlers
    	},
    	function (dispose) {
    	  // dispose: object with X, Y of the last line add to the PDF 
    	  //          this allow the insertion of new lines after html
          pdf.save('RiskMapping.pdf');
        },
    	margins
    )
}
