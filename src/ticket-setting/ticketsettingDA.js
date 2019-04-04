var ticketsetting = require('./../model/ticket-setting.model');

exports.addDepartment = function (req, res) {
    ticketsetting.find({}).select().exec(function (err, departmentData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (departmentData.length == 0) {
                
                    var ticketsettings= new ticketsetting(req.body);
                    ticketsettings.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            ticketsetting.find({}).select().exec(function (err, departmentData) {
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
                            ticketsetting.find({}).select().exec(function (err, departmentData) {
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
exports.viewDepartment = function (req, res) {
    ticketsetting.find({}).select().exec(function (err, departmentData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(departmentData);
        }
    })
}
exports.deleteDepartment = function(req, res) {
    ticketsetting.find({}).select().exec(function (err, departmentData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.source;
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
                        ticketsetting.find({}).select().exec(function (err, departmentData) {
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







exports.addAssignedto = function (req, res) {
    ticketsetting.find({}).select().exec(function (err, assignedtoData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (assignedtoData.length == 0) {
                
                    var ticketsettings= new ticketsetting(req.body);
                    ticketsettings.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            ticketsetting.find({}).select().exec(function (err, assignedtoData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(assignedtoData);
                                }
                            })
                        }
                    })
                

            } else {
                var ID = req.body.assignedto;
                var i = assignedtoData[0].assignedto.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    assignedtoData[0].assignedto.push(req.body.assignedto);
                    assignedtoData[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            ticketsetting.find({}).select().exec(function (err, assignedtoData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(assignedtoData);
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}
exports.viewAssignedto = function (req, res) {
    ticketsetting.find({}).select().exec(function (err, assignedtoData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(assignedtoData);
        }
    })
}
exports.deleteAssignedto = function(req, res) {
    ticketsetting.find({}).select().exec(function (err, assignedtoData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.source;
            var list =  assignedtoData[0].assignedto;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                assignedtoData[0].save(function(err, data) {
                    if(err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        ticketsetting.find({}).select().exec(function (err, assignedtoData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(assignedtoData);
                            }
                        })
                    }
                })
            }
        }
    })
}







exports.addAssignedby = function (req, res) {
    ticketsetting.find({}).select().exec(function (err, assignedbyData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (assignedbyData.length == 0) {
                
                    var ticketsettings= new ticketsetting(req.body);
                    ticketsettings.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            ticketsetting.find({}).select().exec(function (err, assignedbyData) {
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
                var ID = req.body.assignedby;
                var i = assignedbyData[0].assignedby.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    assignedbyData[0].assignedby.push(req.body.assignedby);
                    assignedbyData[0].save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            ticketsetting.find({}).select().exec(function (err, assignedbyData) {
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
    ticketsetting.find({}).select().exec(function (err, assignedbyData) {
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
    ticketsetting.find({}).select().exec(function (err, assignedbyData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.source;
            var list =  assignedbyData[0].assignedby;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                assignedbyData[0].save(function(err, data) {
                    if(err) {
                        res.status(500).send({
                            "result": 'error occured while retreiving data'
                        })
                    } else {
                        ticketsetting.find({}).select().exec(function (err, assignedbyData) {
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





/* exports.addLeadStatus = function (req, res) {
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

exports.deleteLeadService = function(req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.service;
            var list =  leadData[0].service;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                leadData[0].save(function(err, data) {
                    if(err) {
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
exports.deleteLeadStatus = function(req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.status;
            var list =  leadData[0].leadStatus;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                leadData[0].save(function(err, data) {
                    if(err) {
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

exports.addLeadType = function(req, res) {
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
exports.deleteLeadType = function(req, res) {
    LeadSettings.find({}).select().exec(function (err, leadData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var element = req.params.type;
            var list =  leadData[0].type;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                leadData[0].save(function(err, data) {
                    if(err) {
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
exports.addGST = function(req, res) {
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
exports.addSGST = function(req, res) {
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
exports.addCGST = function(req, res) {
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
exports.addTerms = function(req, res) {
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
exports.addDigitalTerms = function(req, res) {
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
exports.addBankDetails = function(req, res) {
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
exports.addCompanyDetails = function(req, res) {
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
exports.addFooterDetails = function(req, res) {
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
exports.viewPdfWorkOrder = function(req, res) {
    WorkOrderSettings.find({}).select().exec(function (err, workorderData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(workorderData);
        }
    })
} */