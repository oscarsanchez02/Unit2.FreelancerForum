const names = [ "Ross", "Kyle", "Lilly", "Billy", "Silly"];
const jobs = ["Writer", "Teacher", "Programer", "Teacher", "Programer"];
const price = ["$30", "$30", "$60", "$90", "$30"]


function insertTableData(arr, id){
    for (let i = 0; i < arr.length; i++){
        setTimeout(function(){
            document.querySelector("#" + id + " ul").innerHTML += `
            <li>${arr[i]}</li>`;
        }, (i + 1) * 1000);
    }
}

insertTableData(names, "first")
insertTableData(jobs, "occupation")
insertTableData(price, "price")