'use strict';
var  marketCustomerDA = require('./marketCustomerDA');



exports.createMarketCustomer = function (req, res) {
    try {
        marketCustomerDA.createMarketCustomer(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
  exports.singleMarketCustomer = function (req, res) {
        try {
            marketCustomerDA.singleMarketCustomer(req, res);
        } catch (error) {
            console.log(error);
        }
    
    }
    exports.allMarketCustomers = function (req, res) {
        try {
            marketCustomerDA.allMarketCustomers(req, res);
        } catch (error) {
            console.log(error);
        }
    
    }
    exports.marketCustomerDetailsDelete = function (req, res) {
        try {
            marketCustomerDA.marketCustomerDetailsDelete(req, res);
        } catch (error) {
            console.log(error);
        }
    
    }
    exports.marketCustomerDetailsEdit = function (req, res) {
        try {
            marketCustomerDA.marketCustomerDetailsEdit(req, res);
        } catch (error) {
            console.log(error);
        }
    
    }
   /*  exports.marketCustomerDuplicateData = function (req, res) {
        try {
            marketCustomerDA.marketCustomerDuplicateData(req, res);
        } catch (error) {
            console.log(error);
        }
    
} */