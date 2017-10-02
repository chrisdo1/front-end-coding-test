( function( $ ) {
// For all front-facing cards, show the back.
$( ".test-card.front .test-button--component" ).click( function() {
    $( this ).closest( ".test-card" ).addClass( "hidden" ).removeClass( "visible" );
    $( this ).closest( ".test-card" ).next().addClass( "visible" ).removeClass( "hidden" );
} );

// For all back-facing cards, show the back.
$( ".test-card.back .test-button--component" ).click( function() {
    $( this ).closest( ".test-card" ).addClass( "hidden" ).removeClass( "visible" );
    $( this ).closest( ".test-card" ).prev().addClass( "visible" ).removeClass( "hidden" );
} );
} )( jQuery );
