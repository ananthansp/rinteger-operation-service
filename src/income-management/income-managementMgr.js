var incomeDA = require('./income-managementDA');

exports.findByDate = function(req,res)
{
try{
    incomeDA.findByDate(req,res);
}
catch(error){
console.log(error)
}
}
exports.editIncome = function(req,res)
{
try{
    incomeDA.editIncome(req,res);
}
catch(error){
console.log(error)
}
}
exports.findallIncome = function(req,res)
{
try{
    incomeDA.findallIncome(req,res);
}
catch(error){
console.log(error)
}
}
exports.findallIncomeWorkOder = function(req,res)
{
try{
    incomeDA.findallIncomeWorkOder(req,res);
}
catch(error){
console.log(error)
}
}
exports.deleteCustomers = function(req,res)
{
try{
    incomeDA.deleteCustomers(req,res);
}
catch(error){
console.log(error)
}
}
exports.deleteIncome = function(req,res)
{
try{
    incomeDA.deleteIncome(req,res);
}
catch(error){
console.log(error)
}
}

exports.editIncomeSheet = function(req,res)
{
try{
    incomeDA.editIncomeSheet(req,res);
}
catch(error){
console.log(error)
}
}
exports.findTDS = function(req,res)
{
try{
    incomeDA.findTDS(req,res);
}
catch(error){
console.log(error)
}
}