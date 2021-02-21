<template>
    <div id="app">
        <div class="container pt-5 ">
            <h1 class="d-flex justify-content-center">{{hello}}</h1>

            <form class="bg-light rounded p-3 " name="registration">
                <div class="row justify-content-center">
                    <div class="col-md">
                        <div class="form-group col-sm">
                            <label for="firstName">სახელი</label>
                            <input type="text" class="form-control" id="firstName" placeholder="შეიყვანიეთ სახელი" required>
                            <label for="lastName">გვარი</label>
                            <input type="text" class="form-control" id="lastName" placeholder="შეიყვანეთ გვარი" required>
                            <label for="IDnumber">ID</label>
                            <input type="number" class="form-control" id="IDnumber" placeholder="11 ციფრისგან შედგება" min="10000000000" max="99999999999" step="1" required>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-group col-sm">
                            <label for="gender" placeholder="asd">სქესი</label>
                            <select class="form-control" id="gender" required>
                                <option value="" disabled selected>კაცი/ქალი</option>
                                <option>კაცი</option>
                                <option>ქალი</option>
                            </select>
                            <label for="birthDate" class="mt-2">დაბადების თარიღი:</label>
                            <input type="date" id="birthDate" name="birthDate" value="2000-01-01"> </br>
                            <button type="button" class="btn btn-primary mt-2" onclick="insert('string')">რეგისტრაცია</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>