var LeadSettings = require('../model/leadsettings.model');
var WorkOrderSettings = require('../model/workorder-settings.model');
var ExpenseSettings = require('../model/expensesetting.model');
var IncomeSettings = require('../model/income-settings.model');
var MaterialSettings = require('../model/material-setting.model');
var TaskSettings = require('../model/task-setting.model');

exports.addLeadSource = function (req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (leadData.length == 0) {

                var leadsettings = new LeadSettings(req.body);
                leadsettings.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        LeadSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })

            } else {
                var ID = req.body.leadSource;
                var i = leadData[0].leadSource.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    leadData[0].leadSource.push(req.body.leadSource);
                    leadData[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            LeadSettings.find({}).select().exec(function (err, leadData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(leadData);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}
exports.viewLeadSource = function (req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(leadData);
        }
    })
}
exports.deleteLeadSource = function (req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.source;
            var list = leadData[0].leadSource;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                leadData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        LeadSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })
            }
        }
    })
}
exports.addLeadStatus = function (req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (leadData.length == 0) {

                var leadsettings = new LeadSettings(req.body);
                leadsettings.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        LeadSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })


            } else {
                var ID = req.body.leadStatus;
                var i = leadData[0].leadStatus.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    leadData[0].leadStatus.push(req.body.leadStatus);
                    leadData[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            LeadSettings.find({}).select().exec(function (err, leadData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(leadData);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}

exports.addServices = function (req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (leadData.length == 0) {

                var leadsettings = new LeadSettings(req.body);
                leadsettings.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        LeadSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                                console.log(leadData);
                            }
                        })
                    }
                })


            } else {
                var ID = req.body.service;
                var i = leadData[0].service.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    leadData[0].service.push(req.body.service);
                    leadData[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            LeadSettings.find({}).select().exec(function (err, leadData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(leadData);
                                    console.log(leadData);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}

exports.deleteLeadService = function (req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.service;
            var list = leadData[0].service;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                leadData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        LeadSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })
            }
        }
    })
}
exports.deleteLeadStatus = function (req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.status;
            var list = leadData[0].leadStatus;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                leadData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        LeadSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })
            }
        }
    })
}

exports.addLeadType = function (req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (leadData.length == 0) {

                var leadsettings = new LeadSettings(req.body);
                leadsettings.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        LeadSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })


            } else {
                var ID = req.body.type;
                var i = leadData[0].type.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    leadData[0].type.push(req.body.type);
                    leadData[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            LeadSettings.find({}).select().exec(function (err, leadData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(leadData);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}


exports.addLeadUnit = function (req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (leadData.length === 0) {
                var leadsettings = new LeadSettings(req.body);
                leadsettings.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        LeadSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })

            } else {
                var ID = req.body.unit;
                var i = leadData[0].leadUnit.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    leadData[0].leadUnit.push(req.body.leadUnit);
                    leadData[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            LeadSettings.find({}).select().exec(function (err, leadData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(leadData);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}

exports.deleteLeadUnit = function (req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.unit;
            var list = leadData[0].leadUnit;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                leadData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        LeadSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })
            }
        }
    })
}

exports.deleteLeadType = function (req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.type;
            var list = leadData[0].type;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                leadData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        LeadSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })
            }
        }
    })
}
exports.addGST = function (req, res) {
    var workorder = new WorkOrderSettings(req.body);
    WorkOrderSettings.find({}).select().exec(function (err, workData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (workData.length == 0) {
                workorder.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })

            } else {
                workData[0].gst = req.body.gst;
                workData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })


            }
        }
    });
}
exports.addSGST = function (req, res) {
    var workorder = new WorkOrderSettings(req.body);
    WorkOrderSettings.find({}).select().exec(function (err, workData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (workData.length == 0) {
                workorder.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })

            } else {
                workData[0].sgst = req.body.sgst;
                workData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })


            }
        }
    });
}
exports.addCGST = function (req, res) {
    var workorder = new WorkOrderSettings(req.body);
    WorkOrderSettings.find({}).select().exec(function (err, workData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (workData.length == 0) {
                workorder.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })

            } else {
                workData[0].cgst = req.body.cgst;
                workData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })


            }
        }
    });
}
exports.addTerms = function (req, res) {
    var workorder = new WorkOrderSettings(req.body);
    WorkOrderSettings.find({}).select().exec(function (err, workData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (workData.length == 0) {
                workorder.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })

            } else {
                workData[0].terms = req.body.terms;
                workData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })


            }
        }
    });
}
exports.addDigitalTerms = function (req, res) {
    var workorder = new WorkOrderSettings(req.body);
    WorkOrderSettings.find({}).select().exec(function (err, workData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (workData.length == 0) {
                workorder.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })

            } else {
                workData[0].digitalterms = req.body.digitalterms;
                workData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })


            }
        }
    });
}
exports.addBankDetails = function (req, res) {
    var workorder = new WorkOrderSettings(req.body);
    WorkOrderSettings.find({}).select().exec(function (err, workData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (workData.length == 0) {
                workData[0].bankdetails = req.body;
                workData.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })

            } else {
                workData[0].bankdetails = req.body;
                workData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, leadData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(leadData);
                            }
                        })
                    }
                })


            }
        }
    });
}
exports.addCompanyDetails = function (req, res) {
    var workorder = new WorkOrderSettings(req.body);
    WorkOrderSettings.find({}).select().exec(function (err, workData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (workData.length == 0) {
                workData[0].companydetails = req.body;
                workData.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, wordOrderSettings) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(wordOrderSettings);
                            }
                        })
                    }
                })

            } else {
                workData[0].companydetails = req.body;
                workData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, wordOrderSettings) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(wordOrderSettings);
                            }
                        })
                    }
                })


            }
        }
    });
}
exports.addFooterDetails = function (req, res) {
    var workorder = new WorkOrderSettings(req.body);
    WorkOrderSettings.find({}).select().exec(function (err, workData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (workData.length == 0) {
                workData[0].footerdetails = req.body;
                workData.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, wordOrderSettings) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(wordOrderSettings);
                            }
                        })
                    }
                })

            } else {
                workData[0].footerdetails = req.body;
                workData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        WorkOrderSettings.find({}).select().exec(function (err, wordOrderSettings) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(wordOrderSettings);
                            }
                        })
                    }
                })


            }
        }
    });
}
exports.viewPdfWorkOrder = function (req, res) {
    WorkOrderSettings.find({}).select().exec(function (err, workorderData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(workorderData);
        }
    })
}

/* expense */
exports.findExpense = function (req, res) {
    ExpenseSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "message": "error occure"
            })
        }
        else {
            res.status(200).json(data);
        }
    })
}
exports.addExpensePayment = function (req, res) {
    ExpenseSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "message": "error occure"
            })
        } else {
            if (data.length == 0) {
                var expensesetting = new ExpenseSettings(req.body);
                expensesetting.save(function (error, data) {
                    if (error) {
                        res.status(500).send({
                            "message": "error occure"
                        })
                    }
                    else {
                        ExpenseSettings.find({}).select().exec(function (error, data) {
                            if (error) {
                                res.status(500).sen({
                                    "message": "error occure"
                                })
                            }
                            else {
                                res.status(200).json(data);
                            }
                        })
                    }
                })
            }
            else {
                var ID = req.body.modeOfPayment;
                var i = data[0].modeOfPayment.indexOf(ID);
                if (i > -1) {
                    console.log('exist');
                }
                else {
                    data[0].modeOfPayment.push(req.body.modeOfPayment);
                    data[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "message": "error occur"
                            })
                        }
                        else {
                            ExpenseSettings.find({}).select().exec(function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "message": "error occur"
                                    })
                                } else {
                                    res.status(200).json(data);
                                }
                            })
                        }
                    })
                }
            }
        }
    })
}

exports.deleteExpensePayment = function (req, res) {
    ExpenseSettings.find({}).select().exec(function (err, Data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.modeOfPayment;
            var list = Data[0].modeOfPayment;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                Data[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        ExpenseSettings.find({}).select().exec(function (err, Data) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(Data);
                            }
                        })
                    }
                })
            }
        }
    })
}
exports.addExpenseType = function (req, res) {
    ExpenseSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "message": "error occure"
            })
        } else {
            if (data.length == 0) {
                var expensesetting = new ExpenseSettings(req.body);
                expensesetting.save(function (error, data) {
                    if (error) {
                        res.status(500).send({
                            "message": "error occure"
                        })
                    }
                    else {
                        ExpenseSettings.find({}).select().exec(function (error, data) {
                            if (error) {
                                res.status(500).sen({
                                    "message": "error occure"
                                })
                            }
                            else {
                                res.status(200).json(data);
                            }
                        })
                    }
                })
            }
            else {
                var ID = req.body.expenseType;
                var i = data[0].expenseType.indexOf(ID);
                if (i > -1) {
                    console.log('exist');
                }
                else {
                    data[0].expenseType.push(req.body.expenseType);
                    data[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "message": "error occur"
                            })
                        }
                        else {
                            ExpenseSettings.find({}).select().exec(function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "message": "error occur"
                                    })
                                } else {
                                    res.status(200).json(data);
                                }
                            })
                        }
                    })
                }
            }
        }
    })
}
exports.deleteExpenseType = function (req, res) {
    ExpenseSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "message": "error occure"
            })
        }
        else {
            var element = req.params.expenseType;
            var list = data[0].expenseType;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data[0].save(function (error, data) {
                    if (error) {
                        res.status(500).send({
                            "message": "error occure"
                        })
                    }
                    else {
                        ExpenseSettings.find({}).select().exec(function (error, data) {
                            if (error) {
                                res.status(500).send({
                                    "message": "error occure"
                                })
                            }
                            else {
                                res.status(200).json(data);
                            }
                        })
                    }
                })
            }
        }
    })
}
exports.addExpenseGst = function (req, res) {
    ExpenseSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "message": "error occure"
            })
        } else {
            if (data.length == 0) {
                var expensesetting = new ExpenseSettings(req.body);
                expensesetting.save(function (error, data) {
                    if (error) {
                        res.status(500).send({
                            "message": "error occure"
                        })
                    }
                    else {
                        ExpenseSettings.find({}).select().exec(function (error, data) {
                            if (error) {
                                res.status(500).send({
                                    "message": "error occure"
                                })
                            }
                            else {
                                res.status(200).json(data);
                            }
                        })
                    }
                })
            }
            else {
                var ID = req.body.gst;
                var i = data[0].gst.indexOf(ID);
                if (i > -1) {
                    console.log('exist');
                }
                else {
                    data[0].gst.push(req.body.gst);
                    data[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "message": "error occur"
                            })
                        }
                        else {
                            ExpenseSettings.find({}).select().exec(function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "message": "error occur"
                                    })
                                } else {
                                    res.status(200).json(data);
                                }
                            })
                        }
                    })
                }
            }
        }
    })
}
exports.deleteExpenseGst = function (req, res) {
    ExpenseSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "message": "error occure"
            })
        }
        else {
            var element = req.params.gst;
            var list = data[0].gst;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data[0].save(function (error, data) {
                    if (error) {
                        res.status(500).send({
                            "message": "error occure"
                        })
                    }
                    else {
                        ExpenseSettings.find({}).select().exec(function (error, data) {
                            if (error) {
                                res.status(500).send({
                                    "message": "error occure"
                                })
                            }
                            else {
                                res.status(200).json(data);
                            }
                        })
                    }
                })
            }
        }
    })
}

exports.addIncomePaymentModel = function (req, res) {
    IncomeSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (data.length == 0) {

                var incomesettings = new IncomeSettings(req.body);
                incomesettings.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        IncomeSettings.find({}).select().exec(function (err, data) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(data);
                            }
                        })
                    }
                })


            } else {
                var ID = req.body.modeOfPayment;
                var i = data[0].modeOfPayment.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    data[0].modeOfPayment.push(req.body.modeOfPayment);
                    data[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            IncomeSettings.find({}).select().exec(function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(data);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}
exports.getIncomeSettings = function (req, res) {
    IncomeSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(data);
        }
    })
}
exports.deleteIncomePaymentModel = function (req, res) {
    IncomeSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.modeOfPayment;
            var list = data[0].modeOfPayment;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        IncomeSettings.find({}).select().exec(function (err, data) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(data);
                            }
                        })
                    }
                })
            }
        }
    })
}
exports.addIncomeGst = function (req, res) {
    IncomeSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (data.length == 0) {

                var incomesettings = new IncomeSettings(req.body);
                incomesettings.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        IncomeSettings.find({}).select().exec(function (err, data) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(data);
                            }
                        })
                    }
                })


            } else {
                var ID = req.body.gst;
                var i = data[0].gst.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    data[0].gst.push(req.body.gst);
                    data[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            IncomeSettings.find({}).select().exec(function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(data);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}
exports.deleteIncomeGst = function (req, res) {
    IncomeSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.gst;
            var list = data[0].gst;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        IncomeSettings.find({}).select().exec(function (err, data) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(data);
                            }
                        })
                    }
                })
            }
        }
    })
}

exports.getMaterialSettings = function(req, res) {
    MaterialSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(data);
        }
    })
}
exports.addShootType = function (req, res) {
    MaterialSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (data.length == 0) {
                
                    var materialsettings = new MaterialSettings(req.body);
                    materialsettings.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            MaterialSettings.find({}).select().exec(function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(data);
                                }
                            })
                        }
                    })
                

            } else {
                var ID = req.body.shootType;
                var i = data[0].shootType.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    data[0].shootType.push(req.body.shootType);
                    data[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            MaterialSettings.find({}).select().exec(function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(data);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}

exports.deleteShootType = function(req, res) {
    MaterialSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.shootType;
            var list =  data[0].shootType;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data[0].save(function(err, data) {
                    if(err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        MaterialSettings.find({}).select().exec(function (err, data) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(data);
                            }
                        })
                    }
                })
            }
        }
    })
}

exports.addDispatchType = function (req, res) {
    MaterialSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (data.length == 0) {
                
                    var materialsettings = new MaterialSettings(req.body);
                    materialsettings.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            MaterialSettings.find({}).select().exec(function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(data);
                                }
                            })
                        }
                    })
                

            } else {
                var ID = req.body.dispatchType;
                var i = data[0].dispatchType.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    data[0].dispatchType.push(req.body.dispatchType);
                    data[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            MaterialSettings.find({}).select().exec(function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(data);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}

exports.deleteDispatchType = function(req, res) {
    MaterialSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.dispatchType;
            var list =  data[0].dispatchType;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data[0].save(function(err, data) {
                    if(err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        MaterialSettings.find({}).select().exec(function (err, data) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(data);
                            }
                        })
                    }
                })
            }
        }
    })
}

exports.addMaterialStatus = function (req, res) {
    MaterialSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (data.length == 0) {
                
                    var materialsettings = new MaterialSettings(req.body);
                    materialsettings.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            MaterialSettings.find({}).select().exec(function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(data);
                                }
                            })
                        }
                    })
                

            } else {
                var ID = req.body.materialStatus;
                var i = data[0].materialStatus.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    data[0].materialStatus.push(req.body.materialStatus);
                    data[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            MaterialSettings.find({}).select().exec(function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(data);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}

exports.deleteMaterialStatus = function(req, res) {
    MaterialSettings.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.materialStatus;
            var list =  data[0].materialStatus;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data[0].save(function(err, data) {
                    if(err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        MaterialSettings.find({}).select().exec(function (err, data) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(data);
                            }
                        })
                    }
                })
            }
        }
    })
}
exports.addTaskDepartment = function (req, res) {
    TaskSettings.find({}).select().exec(function (err, departmentData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (departmentData.length == 0) {
                
                    var tasksettings= new TaskSettings(req.body);
                    tasksettings.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            TaskSettings.find({}).select().exec(function (err, departmentData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(departmentData);
                                }
                            })
                        }
                    })
                

            } else {
                var ID = req.body.department;
                var i = departmentData[0].department.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    departmentData[0].department.push(req.body.department);
                    departmentData[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            TaskSettings.find({}).select().exec(function (err, departmentData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(departmentData);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}
exports.viewTaskDepartment = function (req, res) {
    TaskSettings.find({}).select().exec(function (err, departmentData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(departmentData);
        }
    })
}
exports.deleteTaskDepartment = function(req, res) {
    TaskSettings.find({}).select().exec(function (err, departmentData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.department;
            var list =  departmentData[0].department;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                departmentData[0].save(function(err, data) {
                    if(err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        TaskSettings.find({}).select().exec(function (err, departmentData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(departmentData);
                            }
                        })
                    }
                })
            }
        }
    })
}
exports.addAssignedby = function (req, res) {
    TaskSettings.find({}).select().exec(function (err, assignedbyData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (assignedbyData.length == 0) {
                
                    var tasksettings= new TaskSettings(req.body);
                    tasksettings.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            TaskSettings.find({}).select().exec(function (err, assignedbyData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(assignedbyData);
                                }
                            })
                        }
                    })
                

            } else {
                var ID = req.body.assignedBy;
                var i = assignedbyData[0].assignedBy.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    assignedbyData[0].assignedBy.push(req.body.assignedBy);
                    assignedbyData[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            TaskSettings.find({}).select().exec(function (err, assignedbyData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(assignedbyData);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}
exports.viewAssignedby = function (req, res) {
    TaskSettings.find({}).select().exec(function (err, assignedbyData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(assignedbyData);
        }
    })
}
exports.deleteAssignedby = function(req, res) {
    TaskSettings.find({}).select().exec(function (err, assignedbyData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.source;
            var list =  assignedbyData[0].assignedBy;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                assignedbyData[0].save(function(err, data) {
                    if(err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        TaskSettings.find({}).select().exec(function (err, assignedbyData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(assignedbyData);
                            }
                        })
                    }
                })
            }
        }
    })
}


