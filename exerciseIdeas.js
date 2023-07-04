

const btnEl = document.getElementById("submitBtn")

const APIKEY ="H5ovQxGluleYbyN2bkum1w==8zCYF8ExRopEJzVA";

const options = {
    method : "GET",
    Headers: {
        "X-Api-Key" : APIKEY,
    },
};

const apiURL ="https://api.api-ninjas.com/v1/exercises ";

async function getContents(){
     const response = await fetch (apiURL, options);
     const data = await response.json();
     console.log(data);
     
}


btnEl.addEventListener("click", getContents)


 