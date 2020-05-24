function myFuntion() {
    let a;
    let b;
    let c;
    a = document.getElementById("number_a").value;
    b = document.getElementById("number_b").value;
    c = document.getElementById("number_c").value;
    if (a == 0) {
        if (b==0 && c!= 0) {
            alert("Phuong trinh vo nghiem");
        }
        if (b== 0 && c ==0) {
            alert("Phuong trinh vo so nghiem")
        } 
        else {
            let case_one = -c/b; 
            document.getElementById("result_one").innerHTML = "Nghiem cua chuong trinh la: "+ case_one;
        }
    }
    else{
        let delta = b*b - 4*a*c
        if (delta < 0) {
            alert("Phuong trinh vo nghiem")
        } 
        else{
            let x;
            let y;
            x = -b - Math.sqrt(delta)/(2*a);
            y = -b + Math.sqrt(delta)/(2*a);
            document.getElementById("result_one").innerHTML= "Nghiem thu nhat la: "+x;
            document.getElementById("result_two").innerHTML= "Nghiem thu hai la: "+y;
        }
    }

}