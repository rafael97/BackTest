const db = require("../models/provider");


exports.get = async (req,res) => {
	try {
		const providers = await db.find();
		if(providers.length == 0) return res.status(404).json([]);
		return res.status(200).json(providers);

	}catch(err){
		console.log(err);
		res.status(500).json({error: "Something went wrong!"});
	}

};

exports.getById = (req,res) => {
	try {
		const ObjectId = require('mongoose').Types.ObjectId
		const id_provider = ObjectId(req.params.id);
		
		db.findById( id_provider, function(err, providers) {
			res.status(200).json(providers);
		});
	}catch(err){
		console.log(err);
		res.status(500).json({error: "Something went wrong!"});
	}

};

exports.post = (req, res) => {
	try{
		const params = req.body;
		params.specialty= {
			"_id": "5a1ee5e6d0e8cfb9049a7904",
			"name": "Adolescent Medicine",
			"createdBy": 5028,
			"updatedBy": 35}
		db.create(params , function(err, providers) {
			res.status(200).json(providers);
		});
	}catch(err){
		console.log(err);
		res.status(500).send();
	}
};

exports.put = (req,res) => {
	try{
		const ObjectId = require('mongoose').Types.ObjectId
		const id_provider = ObjectId(req.params.id);
		const params = req.body;
		
		db.findOneAndUpdate({"_id": id_provider}, params, function(err, providers) {
			res.status(200).json({success: "The register has been updated!"});
		});
	}catch(err){
		console.log(err);
		res.status(500).send();
	}
}

exports.delete = (req,res) => {
	try {
		const ObjectId = require('mongoose').Types.ObjectId
		const id_provider = ObjectId(req.params.id);
		
		db.deleteOne({"_id": id_provider}, function(err, providers) {
    		res.status(200).json({success: "The register has been deleted!"});
		});
	}catch(err){
		console.log(err);
		res.status(500).json({error: "Something went wrong!"});
	}
};