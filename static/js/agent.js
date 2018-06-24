$(document).ready(function () {
    $("#forceEnd").on('click', function () {
        var rideId = $("#forceEndRideId").val();
        if (!rideId) {
            alert('Please input rideId')
        } else {
            $.ajax({
                url: '',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Access-Toke");
                },
                type: 'get',
                headers: {
                    'Authentication': ''
                },
                success: function (data) {
                    alert('forend success')
                },
                error: function (err) {
                    alert('force end failed!')
                }
            })
        }
    });

    $("#deleteUser").on('click', function () {
        var userId = $("#deleteUserId").val();
        if (!userId) {
            alert('Please input userId')
        } else {
            $.ajax({
                url: 'localhost:4000/v2/bikes',
                type: 'get',
                headers: {
                    'Authentication': 'clientId=123;userId=sampleUserId;ft=firebase123'
                },
                success: function (data) {
                    alert('deleteUserId success')
                },
                error: function (err) {
                    alert('deleteUserId failed!')
                }
            })
        }
    });

    $("#cancelSubscription").on('click', function () {
        var userId = $("#cancelSubscriptionUserId").val();
        if (!userId) {
            alert('Please input userId')
        } else {
            $.ajax({
                url: 'localhost:4000/v2/bikes',
                type: 'get',
                headers: {
                    'Authentication': 'clientId=123;userId=sampleUserId;ft=firebase123'
                },
                success: function (data) {
                    alert('cancelSubscriptionUserId success')
                },
                error: function (err) {
                    alert('cancelSubscriptionUserId failed!')
                }
            })
        }
    });
});
