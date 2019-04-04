var taskDA = require('./taskDA');
var taskDetail = require('../model/task-management.model');
var zeroFill = require('zero-fill');

exports.CreateTask = function (req,res){  
    try {            
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var date = day + "/" + month + "/" + year;
    var dateTime =  currentDate.getDay() + "/"+((currentDate.getMonth())+1 )
    + "/" + currentDate.getFullYear() + " @ " 
    + currentDate.getHours() + ":" 
    + currentDate.getMinutes() + ":" + currentDate.getSeconds()

    
        var oYear = year.toString();
        var orderYear = oYear.slice(-2);
        var order = "TSK";
        var locale = "en-us";
        var result = currentDate.toLocaleString(locale, {
          month: "long"
        });
        var orderMonth = result.substr(0, 3).toUpperCase();
    
    
        taskDetail.find().select().exec(function (err, details) {
          if(err) {
            res.status(500).send({
              message: "Some error occurred while retrieving notes."
            });
          } else{
             if (details[0] == null) {
              var taskNo= order + orderYear + orderMonth + "0001";
              taskDA.CreateTask(req, res, dateTime, taskNo);
            } else {
              var arrayLength = details.length - 1;
            var maxID =details[arrayLength].taskNo.substr(10,4);
              var incOrder = maxID.slice(-4);
              var addZero = zeroFill(4, 1);
              var result = parseInt(incOrder) + parseInt(addZero);
              var results = zeroFill(4, result);
              var taskNo = order + orderYear + orderMonth + results;
              taskDA.CreateTask(req, res, dateTime, taskNo);
              console.log(taskNo);
            }
          }
          
        })
      } catch (error) {
        console.log(error);
      }
}
exports.findAllTask = function(req,res) {
    try{
        taskDA.findAllTask(req,res)
    } catch (error) {
      console.log(error);
    }
  }
  exports.findSingleTask = function(req,res) {
    try{
        taskDA.findSingleTask(req,res)
    } catch (error) {
      console.log(error);
    }
  }
  exports.editTask = function(req,res) {
    try{
        taskDA.editTask(req,res)
    } catch (error) {
      console.log(error);
    }
  }
  exports.unitwisetask = function(req,res) {
    try{
        taskDA.unitwisetask(req,res)
    } catch (error) {
      console.log(error);
    }
  }

  exports.deadlinedTask = function(req,res) {
    try{
        taskDA.deadlinedTask(req,res)
    } catch (error) {
      console.log(error);
    }
  }
  exports.unitWiseName = function(req,res) {
    try{
        taskDA.unitWiseName(req,res)
    } catch (error) {
      console.log(error);
    }
  }
  exports.deleteTask = function(req,res) {
    try{
        taskDA.deleteTask(req,res)
    } catch (error) {
      console.log(error);
    }
  }
  exports.findAdmin = function(req,res) {
    try{
        taskDA.findAdmin(req,res)
    } catch (error) {
      console.log(error);
    }
  }
  exports.findByUserID = function(req,res) {
    try{
        taskDA.findByUserID(req,res)
    } catch (error) {
      console.log(error);
    }
  }

