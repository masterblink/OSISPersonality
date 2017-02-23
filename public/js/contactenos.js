

'use strict';

$(document).ready(function(){

    // Jquery variables
    var nombres  = $('#nombres'),
        apellidos= $('#apellidos'),
        email    = $('#email'),
        telefono = $('#telefono'),
        mensaje  = $('#mensaje'),
        btncontactenos = $('#btn-contactenos');

    /**
     * Clear the "textArea"
     */
   /* $('.clear-btn').click(function(){
        $('.clear-btn').blur();
        $content.val('');
        updateWordsCount();
    });*/

    /**
     * Update words count on change
     */
    //$content.change(updateWordsCount);

    /**
     * Update words count on copy/past
     */
    /*$content.bind('paste', function() {
        setTimeout(updateWordsCount, 100);
    });*/

    /**
     * 1. Create the request
     * 2. Call the API
     * 3. Call the methods to display the results
     */
    //btncontactenos.click(function(){
        //$btncontactenos.blur();

        // check if the captcha is active and the user complete it
        //var recaptcha = grecaptcha.getResponse();

        // reset the captcha
        //grecaptcha.reset();

        /*if ($captcha.css('display') === 'table' && recaptcha === '')
            return;*/


        /*$loading.show();
        $captcha.hide();
        $error.hide();
        $traits.hide();
        $results.hide();*/

       /* $.ajax({
            /*headers:{
                'csrf-token': $('meta[name="ct"]').attr('content')
            },*/
            /*type: 'POST',
            data: {
                nombres  : nombres,
                apellidos: apellidos,
                email    : email,
                telefono : telefono,
                mensaje  : mensaje
            },
            url: '/quotes',
            dataType: 'json',
            success: function(response) {*/
                /*$loading.hide();

                if (response.error) {
                    showError(response.error);
                } else {
                    $results.show();
                    showTraits(response);
                    showTextSummary(response);
                    showVizualization(response);
                }*/
               // alert(response);

            //},
            /*error: function(xhr) {
                alert('error');*/
                /*$loading.hide();

                var error;
                try {
                    error = JSON.parse(xhr.responseText || {});
                } catch(e) {}

                if (xhr && xhr.status === 429){
                    $captcha.css('display','table');
                    $('.errorMsg').css('color','black');
                    error.error = 'Complete the captcha to proceed';
                } else {
                    $('.errorMsg').css('color','red');
                }

                showError(error ? (error.error || error): '');*/
            /*}
        });
    });*/

});
