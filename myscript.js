var str=window.location.search.substring(1);
function getValue(s,n){
  var t=str.split("&");
  for(var i=0;i<t.length;i++){
    if (t[i].split("=")[0]==n){
      return t[i].split("=")[1];
    }
  }
  return null;
}
document.getElementById("Tel.No.").value=getValue(str,"Tel.No.");
document.getElementById("PickUpDate").value=getValue(str,"PickUpDate");
document.getElementById("Delivery").value=getValue(str,"Delivery");
document.getElementById("PickUp").value=getValue(str,"PickUp");
/*window.localStorage.setItem("Tel.No.","getValue(str,"Tel.No.")");
window.localStorage.setItem("PickUpDate","getValue(str,"PickUpDate")");
window.localStorage.setItem("Delivery","getValue(str,"Delivery")");
window.localStorage.setItem("PickUp","getValue(str,"PickUp")");*/
