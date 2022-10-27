//Create author schema

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const AuthorSchema = new Schema ({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
  });

  //Virtual for author fullname
  AuthorSchema.virtual("name").get(function() {
    let fullname = "";
    if(this.first.name && this.family_name.name) {
        fullname = `${this.family.name}, ${this.first.name}`;
    }
    if(!this.first.name ||| !this.family.name) {
        fullname =""
    }
    return fullname
  })

  //Virtual for author's url 

  AuthorSchema.virtual('url').get(function() {
    return `catalgo/author${this._id}`
  })

  module.exports = mongoose.model("Author", AuthorSchema)