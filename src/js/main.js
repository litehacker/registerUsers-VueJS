function validation(name,surname,ID,gender,date){
    if (name === "" || /\d/.test(name)) {
        alert("შეამოწმეთ სახელი");
        return false;
    }
    else if(surname === "" || /\d/.test(surname)) {
        alert("შეამოწმეთ გვარი");
        return false;
    }
    else if(ID === "" || isNaN(ID)|| ID>99999999999) {
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
const app = Vue.createApp({
    data(){
        return {
            title: 'რეგისტრაციის გვერდი',
            user: {
                firstName: "",
                lastName: "",
                IDnumber: "",
                gender: "",
                birthDate:"",
            },
            submitted: false
        }
    },
    methods: {
        handleSubmit(e) {
            // try to change state !!! needs attention
            if(!this.submitted){

        
                this.submitted = true;
                if(validation(
                    this.user.firstName,
                    this.user.lastName,
                    this.user.IDnumber,
                    this.user.gender,
                    this.user.birthDate
                    ))
                {
                        fetch("/insert", {
                            method: "POST",
                            body: JSON.stringify(this.user),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(r => r.json()).then(r => {
                            this.$router.push({ path : '/dashboard' });
                            
                        }).catch(e => console.log(e))
                    
                
                }
            }
        }
    }
})