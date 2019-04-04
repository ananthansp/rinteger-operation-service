var mongoose = require('mongoose');

const AdminAccountSchema = new mongoose.Schema({
  userName: String,
  password: String,
  role: String,
  unit: String,
  isActive: Boolean
});

const AdminAccount = mongoose.model('masteradmin', AdminAccountSchema);
module.exports = AdminAccount;