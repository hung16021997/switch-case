function tinh() {
    let nhap = Number(document.getElementById("nhapso").value);
    switch (nhap) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("ketqua").innerHTML = "Có 31 ngày";
            break;
        case 2:
            document.getElementById("ketqua").innerHTML = "Có 28 hoặc 29 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("ketqua").innerHTML = "Có 30 ngày";
            break;


    }

}