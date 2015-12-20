/**
 * Created by andreeaper on 12/20/2015.
 */
var title = document.getElementsByClassName("title");
var alert = document.getElementById("alert");

function showBrandImg(){
    var brand = document.getElementById("brand").value;
    var img = document.getElementById("brand-img");

    if(brand == '0'){
        img.style.display = "none";
        return;
    }
    console.log(brand);
    img.style.display = "block";
    img.src = "img/"+ brand + ".jpg";
}
function showVehicleDetails(){
    var select = document.getElementById("vehicle").value;
    console.log(select);

    if(select == "yes"){
        document.getElementById("hiddenDetails").style.display = "block";
    }else{
        document.getElementById("hiddenDetails").style.display = "none";
    }
}


function submitFunc1(){
    //if(isEmpty(title) || isEmpty(brand)){
    //    document.getElementById("alert").style.display = 'block';
    //    return;
    //}
    //
    //document.getElementById("form1").submit();
}
//
//function isEmpty(value){
//    return (value == null || value.length === 0);
//}
