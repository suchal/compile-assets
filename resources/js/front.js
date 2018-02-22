$(document).ready(function() {

    $("#form-forgot").on('submit', function(e) {
        e.preventDefault();
        let email = $("#forgotemail").val();
        if (isValidEmailAddress(email)) {
            $.post("/password/email", { _token: window.token, email: email }).success(function(response) {
                $("#forgotemailerr").html(response);
            });
        } else {
            $("#forgotemailerror").html("Please Enter a valid Email Address");
        }

    });

    $("#login-form").on('submit', function(e) {
        // e.preventDefault();
        var cnt = 0;
        var check = 0;
        email = $("#loginemail").val();
        password = $("#loginpassword").val();
        if (!(isValidEmailAddress(email))) {
            $("#loginemailerr").html("Enter a valid email");
            check = 1;
            $("#loginemail").keydown(function() {
                $("#loginemailerr").html("");
            });
        }
        if (check == 1)
            return false;
        $.ajax({
            type: 'GET',
            url: baseurl + '/api/validateuser',
            async: false,
            data: {
                email: email,
                password: password
            },

            beforeSend: function() {

            },

            success: function(data) {
                $("#loginemailerr").html('');
                $("#loginpassworderr").html('');
                if ($.trim(data) == 'Deactivated') {
                    $("#loginemailerr").html("Your Account is Deactivated Contact our support");
                    cnt = 1;
                } else if ($.trim(data) == 'NotExists') {
                    $("#loginemailerr").html("Email is not registered!");
                    cnt = 1;
                } else if ($.trim(data) == 'Fail') {
                    $("#loginpassworderr").html("Password you entered is wrong");
                    cnt = 1;
                } else if ($.trim(data) == 'Success') {
                    cnt = 0;
                }
            }
        });
        if (cnt == 1) {
            return false;
        } else
            location.reload();

    });

    $("#form-signup").on('submit', function(e) {

        var check = 0;
        var cnt = 0;
        email = $("#email").val();
        password = $("#password").val();
        firstname = $("#firstname").val();
        lastname = $("#lastname").val();

        if (!(isValidEmailAddress(email))) {
            $("#emailerr").html("Enter a valid email");
            check = 1;
            $("#email").keydown(function() {
                $("#emailerr").html("");
            });
        }
        if (password.length < 6) {
            $("#passworderr").html("Password Should be minimum 6 Characters");
            check = 1;
            $("#password").keydown(function() {
                $("#passworderr").html("");
            });
        }
        if ($('#agree').prop("checked") == false) {
            $("#agreeerr").html("Please check Agree to Terms and conditions");
            check = 1;
        }
        if (grecaptcha.getResponse() == "") {
            $("#captchaerr").html("Couldn't verify your captcha.");
            check = 1;

        }
        //alert(baseurl + '/validatedata');
        if (check == 1)
            return false;
        $.ajax({
            type: 'GET',
            url: baseurl + '/api/validateemailaddress',
            async: false,
            beforeSend: function() {

            },
            data: {
                email: email
            },
            success: function(data) {
                if ($.trim(data) == 'exists') {
                    $("#emailerr").html("Email is Already Registered");
                    cnt = 1;
                    $("#email").keydown(function() {
                        $("#emailerr").html("");
                    });
                } else if ($.trim(data) == 'success') {
                    cnt = 0;
                }
            }
        }); //Ajax End
        if (cnt == 1) {
            return false;
        } else
            return true;
    });



});

function IsAlphaNumeric(e) {
    var specialKeys = new Array();
    specialKeys.push(8); // Backspace
    specialKeys.push(9); // Tab
    specialKeys.push(46); // Delete
    specialKeys.push(36); // Home
    specialKeys.push(35); // End
    specialKeys.push(37); // Left
    specialKeys.push(39); // Right
    specialKeys.push(27); // Space
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode == 32) || (keyCode >= 97 && keyCode <= 122) || (specialKeys
        .indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
    return ret;
}

function IsAlphaNumericnospace(e) {
    var specialKeys = new Array();
    specialKeys.push(8); // Backspace
    specialKeys.push(9); // Tab
    specialKeys.push(46); // Delete
    specialKeys.push(36); // Home
    specialKeys.push(35); // End
    specialKeys.push(37); // Left
    specialKeys.push(39); // Right
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode != 32) || (keyCode >= 97 && keyCode <= 122) || (specialKeys
        .indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
    return ret;
}

function isAlpha(e) {
    var specialKeys = new Array();
    specialKeys.push(8); // Backspace
    specialKeys.push(9); // Tab
    specialKeys.push(46); // Delete
    specialKeys.push(36); // Home
    specialKeys.push(35); // End
    specialKeys.push(37); // Left
    specialKeys.push(39); // Right
    specialKeys.push(27); // Space
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 65 && keyCode <= 90) || (keyCode == 32) || (keyCode >= 97 && keyCode <= 122) || (specialKeys
        .indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
    return ret;
}

function isNumber(eve) {
    var charCode = (eve.which) ? eve.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function isValidEmailAddress(email) {
    var emailreg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return emailreg.test(email);
}


function initialize() {
    autocomplete = new google.maps.places.Autocomplete((document
        .getElementById('where-to-go')), {
        types: ['geocode']
    });
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        fillInAddress();
    });
}

function fillInAddress() {
    var lat = (document.getElementById('latitude'));
    var place = autocomplete.getPlace();
    var latitude = place.geometry.location.lat();
    var longitude = place.geometry.location.lng();
    $("#latitude").val(latitude);
    $("#longitude").val(longitude);
    $("#place-lat").val(latitude);
    $("#place-lng").val(longitude);
    //console.log("lat: "+latitude+" and long: "+longitude);
}

$(document).on('keyup', '#where-to-go', function(e) {
    if (e.which == 13) {
        var place = $("#where-to-go").val();
        place = place.replace(" ", "-");
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': place }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                $("#place-lat").val(latitude);
                $("#place-lng").val(longitude);
                if ($.trim(latitude) != "" && $.trim(longitude) != "") {
                    //$("#searchcalendardiv").css("display","block");
                    searchlist();
                }
            }
        });
        //searchlist();
    }
});

$(document).on('keyup', '#where-to-go-main', function(e) {
    if (e.which == 13) {
        var place = $("#where-to-go-main").val();
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': place }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                $("#place-lat").val(latitude);
                $("#place-lng").val(longitude);
                if ($.trim(latitude) != "" && $.trim(longitude) != "") {
                    //$("#searchcalendardiv").css("display","block");
                    //searchlist();
                }
            }
            $("#searchcalendardiv").css("display", "block");
        });
        //searchlist();
    }
    var place = $("#where-to-go-main").val();
    if ($.trim(place) == "") {
        $("#searchcalendardiv").css("display", "none");
    }
});
