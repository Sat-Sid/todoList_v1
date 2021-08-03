
module.exports.getDate = function(){

const today = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
return today.toLocaleDateString("en-US", options);
}


exports.getDay = function(){

const today = new Date();
const options = {
  weekday: "long",
  day: "numeric",

};
return today.toLocaleDateString("en-US", options);

}


//"module.exports" is same as "exports" check node>module>exports
//documents for more info
