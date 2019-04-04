
var SubscribeDetail = require('../../model/notification.model');

exports.onlySubscribed = function (req, res) {
    SubscribeDetail.aggregate([
        {
            $lookup:
            {
                "from": "customerdbs",
                "localField": "mobileNumber",
                "foreignField": "mobileNumber",
                "as": "joinedtable"
            },
        }, { 
            $match: { "joinedtable": { $eq: [] } }
        }
    ]).exec(function (err, subscribed) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            })
        } else {
            res.status(200).json(subscribed);
        }
    })
}
exports.deleteSubscribedNumber = function (req, res) {
    SubscribeDetail.findOneAndRemove({ '_id': req.params.id }, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            SubscribeDetail.find({}, function (err, details) {
                if(err) {
                    res.status(500).send({
                        "result" : 0
                    })
                } 
                else {
                    res.status(200).json(details)
                }
            })
        }
    });
}

exports.notificationSubscription = function (req, res, date) {
    SubscribeDetail.findOne({
        'mobileNumber': req.body.mobileNumber,
        'userSubscriptions':req.body.userSubscriptions
        /* 'date':  */
    }, function (err, notificationDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if (notificationDetail == null) {
                var notification = new SubscribeDetail(req.body);
                notification.date  = date;
                notification.save(
                    function (err,notificationData) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                            /* res.status(200).json(notificationData) */
                            SubscribeDetail.find({
                                'user': 'serviceProvider'
                            }, function (err, subscriptionData) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                  console.log('Total subscriptions', subscriptionData);
                        
                                 /*      const notificationPayload = {
                                        "notification": {
                                            "title": 'New customer subscribed',
                                            "body": 'Mobile Number' + ' ' +  req.body.mobileNumber,
                                            "icon": req.body.imageUrl != null ? req.body.imageUrl : appSetting.imageUrl,
                                            "vibrate": [100, 50, 100],
                                            "data": {
                                                "url": appSetting.notificationUrl ,
                                                "dateOfArrival": Date.now(),
                                                "primaryKey": 1
                                            }
                                        }
                                    };
                                    Promise.all(subscriptionData.map(sub => webpush.sendNotification(
                                            sub.userSubscriptions, JSON.stringify(notificationPayload))))
                                        .then(() => res.status(200).json({
                                            message: 'Push Notificatoin Successfull.'
                                        }))
                                        .catch(err => {
                                            console.error("Error sending notification, reason: ", err);
                                            res.sendStatus(500);
                                        }); */
                                }
                            });
                        }
                    });
            } 
        }
    });
};