$(document).ready(function() {
    $('#upload-butt').on('change', function() {
        var file = $(this).get(0).files;
        console.log(file['0']);

        if (file.length > 0) {
            var formData = new FormData();
            formData.append('File', file['0'], file['0'].name);
            $.ajax({
                url: '/upload',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                error: function(jXhr, status) {
                    console.log('error: ' + status);
                },
                success: function(data) {
                    console.log('upload successful: ' + data);
                    if (typeof data.redirect == 'string'){
                        window.location = data.redirect
                    }
                }
            });
        }
    });
});
