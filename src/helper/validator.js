import PasswordValidator from "password-validator";


function validator (password){
let schema = new PasswordValidator()
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(1)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123'])  //blacklist
.is(['!','@','#','$','%','^','&','*','-','_']) //special char
if( schema.validate(password))
{return true;}
else{
   return schema.validate(password, { list: true })
}
}
export default validator