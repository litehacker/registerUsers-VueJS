function validation(name,surname,ID,gender,date){
    if (name === "" || /\d/.test(name)) {
        alert("შეამოწმეთ სახელი");
        return false;
    }
    else if(surname === "" || /\d/.test(surname)) {
        alert("შეამოწმეთ გვარი");
        return false;
    }
    else if(ID === "" || isNaN(ID)||ID<10000000000 || ID>99999999999) {
        alert("შეამოწმეთ პირადი ნომერი");
        return false;
    }
    else if(gender === "" || (gender!="კაცი" && gender!="ქალი")) {
        alert("შეამოწმეთ სქესის ველი");
        return false;
    }
    else if(date === "") {
        alert("შეამოწმეთ დაბადების თარიღი");
        return false;
    }
    return true
}