const ZSchema = require("z-schema");

const jsonSchemaValidator = new ZSchema();

const EMAIL_SCHEMA = {
    "type": "string",
    "description": "The user's email.",
    "format": "email",
    "defaultValue": "john.doe@gmail.com"
  };

var emailList = [
    "valid@test.com",
    "invalid..@test.com"
];

for (i in emailList) {
    const result = jsonSchemaValidator.validate( emailList[i], EMAIL_SCHEMA);
    result ? null : 
             console.log(emailList[i] + " is invalid");
}