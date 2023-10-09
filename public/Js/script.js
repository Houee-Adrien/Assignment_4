   function supp(){
        const number = document.getElementById("input").value;
        console.log(number);
        fetch(`/api/delete/${number}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if(data.success){
                    alert("data submited")
                }
                else{
                    alert("error lol")
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function update(){
        const number = document.getElementById("input").value;
        const name = document.getElementById("name").value;
        console.log(number);
        fetch(`/api/update/${name}/${number}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if(data.success){
                    alert("data submited")
                }
                else{
                    alert("error lol")
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function select(){
        const name = document.getElementById("name").value;
        fetch(`/api/select/${name}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    console.log(data);
                    const displayElement = document.getElementById('result');
                    const paragraph = document.createElement('p');
                    paragraph.textContent = `Id: ${data[i].id}, Username: ${data[i].username}, Email: ${data[i].email}, Date: ${data[i].registration_date}`;
                    console.log(paragraph.textContent);
                    displayElement.appendChild(paragraph);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function create(){
        const mail = document.getElementById("mail").value;
        const name = document.getElementById("name").value;
        fetch(`/api/create/${name}/${mail}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    console.log(data);
                    const displayElement = document.getElementById('result');
                    const paragraph = document.createElement('p');
                    paragraph.textContent = `Id: ${data[i].id}, Username: ${data[i].username}, Email: ${data[i].email}, Date: ${data[i].registration_date}`;
                    console.log(paragraph.textContent);
                    displayElement.appendChild(paragraph);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }