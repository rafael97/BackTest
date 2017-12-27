var mongoose = require('../connection');  
var providerSchema = new mongoose.Schema({
	employerId: Number,
	email: String,
	firstName: String,
	middleName: String,
	lastName: String,
	assignedTo: Number,
	staffStatus: String,
	providerType: String,
	createdBy: Number,
	updatedBy: Number,
	projectedStartDate: { type: Date, default: Date.now },
	status: String,
	specialty : {
				createdAt: { type: Date, default: Date.now },
				createdBy: Number,
				name: String,
				_id: String,
				updatedBy: Number,
				updatedAt: { type: Date, default: Date.now }
				}
	 
});

const provider = mongoose.model("providers", providerSchema);
module.exports = provider;

