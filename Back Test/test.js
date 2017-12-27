const expect = require("chai").expect;
const req = require("supertest");
const chai = require("chai");
const chaiHttp = require("chai-http");
let should = chai.should();
const server = require("./server");
//optional
const port = process.env.port || 3000;
chai.use(chaiHttp);

//optional
const options = {url: 'http://localhost', port: port };

describe('Getting registers', ()=>{
	it("get all providers", ()=>{
		chai.request(server)
			.get("/api/providers")
			.end((err, res)=>{
				res.should.have.status(200);
				done();
		});
	});
});


describe('Getting register by id', ()=>{
	it("get provider by id", ()=>{
		const id = "5a1ee627d0e8cfb9049a792c";

		chai.request(server)
			.get("/api/provider/" + id)
			.end((err, res)=>{
				res.should.have.status(200);
				done();
		});
	});
});


describe('testing post', ()=>{
	it("post provider", ()=>{
		const params ={
			"firstName": "rafarocha",
			"lastName": "Witting",
			"middleName": "B",
			"email": "rafa@gmail.com",
			"employerId": 441,
			"providerType": "MD",
			"staffStatus": "TEACHING",
			"assignedTo": 90086,
			"status": "READY_FOR_REVIEW",
			"createdBy": 33108,
			"updatedBy": 72482
		};

		chai.request(server)
			.post("/api/provider/add")
			.send(params)
			.end((err, res)=>{
				if(err) donde(err);
				res.should.have.status(200);
				done();
		});
	})
});


describe('put provider', ()=>{
	it("put provider by id", ()=>{
		const id = "5a1ee627d0e8cfb9049a792c";
		const param ={
			"firstName": "rafarocha",
			"lastName": "i'm update",
			"middleName": "A",
			"email": "rafa@gmail.com",
			"employerId": 441,
			"providerType": "MD",
			"staffStatus": "TEACHING",
			"assignedTo": 90086,
			"status": "READY_FOR_REVIEW",
			"createdBy": 33108,
			"updatedBy": 72482
		};

		chai.request(server)
			.put("/api/provider/edit/" + id)
			.send(param)
			.end((err, res)=>{
				if(err) done(err);
				res.should.have.status(200);
				done();
		});

	});
});


describe('delete provider', ()=>{ 
	it("delete provider by id", ()=>{
		const id = "5a1ee627d0e8cfb9049a7933";
		chai.request(server)
			.get("/api/provider/delete/" + id)
			.end((err, res)=>{
				if(err) done(err);
				res.should.have.status(200);
				done();
		});

	});
});