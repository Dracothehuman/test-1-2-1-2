var image_of_family=["https://i.postimg.cc/s2yjVKZR/2fqx11a40go1000.jpg","https://i.postimg.cc/9QBMwv2f/images.jpg","https://i.postimg.cc/yd2YzKmL/download.jpg"];
var name = ["Mum","Dad","Grandma"];
console.log(name);
    
var i=0;
function eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee()
{
    i++;
    var number_of_family_members=3;
    if(i>number_of_family_members){
        i=0;
    }
    var updateimage= image_of_family[i];
    var updateName= name[i];
    document.getElementById("family").src = updateimage;
    document.getElementById("family_name").innerHTML = updateName;

}