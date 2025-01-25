const btnSearch=document.getElementById("btnSearch");
const btnClear=document.getElementById("btnClear");

function searchDestination() {
            const input = document.getElementById('destination').value.toLowerCase();
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML="";

            fetch('travel_recommendation_api.json')
                .then(response => response.json())
                .then(data =>{
                    console.log(data);
                    const countries = data.countries.find(item => item.name.toLowerCase() === input);
                    const temples = data.temples.find(item => item.name.toLowerCase() === input);
                    const beaches = data.beaches.find(item => item.name.toLowerCase() === input);

                    console.log(countries);
                    console.log(temples);
                    console.log(beaches);
                })
                .catch(error =>{
                    console.error('Error:',error);
                    resultDiv.innerHTML ="An Error occurred while fetching data.";
                });
               
}
btnSearch.addEventListener('click',searchDestination);

function resetForm() {
            document.getElementById("name").value="";
            document.getElementById('input[name="gender"]:checked').checked =false;
            document.getElementById("age").value="";
            document.getElementById("condition").value="";
}