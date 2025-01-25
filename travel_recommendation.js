const btnSearch=document.getElementById("btnSearch");
const btnClear=document.getElementById("btnClear");

let json = {};

function searchDestination() {
            const input = document.getElementById('destination').value.toLowerCase();
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML="";
            console.log(input);

            fetch('travel_recommendation_api.json')
                .then(response => response.json())
                .then(data =>{
                    json=data;
                    console.log(data);                    
                })
                .catch(error =>{
                    console.error('Error:',error);
                    resultDiv.innerHTML ="An Error occurred while fetching data.";
                });
            if (input) {
                        if (json[input]) {
                                const dataArray = json[input];
                                dataArray.forEach(item =>{
                                            resultDiv.innerHTML += `<img src="${item.imageUrl}" alt="hjh">`;
                                            resultDiv.innerHTML += `<p><strong>${item.name}</strong></p>`;

                                            resultDiv.innerHTML += `<p><strong></strong> ${item.description}</p>`;
                                })
                        }
            } else {
                        alert('Please enter a keyword to search.');
            }
               
}
btnSearch.addEventListener('click',searchDestination);

function resetForm() {
            document.getElementById("name").value="";
            document.getElementById('input[name="gender"]:checked').checked =false;
            document.getElementById("age").value="";
            document.getElementById("condition").value="";
}