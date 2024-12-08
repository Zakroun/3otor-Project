// function 1:
function scrollToHeader() {
    const header = document.getElementById('header');
    header.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

window.onscroll = function () {
    let scroll = document.getElementById("scrollButton");
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
    }
}

// function 2:
function updatePrice(prix) {
    let selectedOption = document.getElementById(prix + "_Contenance").value;
    if (selectedOption === "100ml") {
        let prixx = parseFloat(document.getElementById(prix).innerText.replace(" ", '').replace(",", ".").replace("MAD", "")) + 585;
        document.getElementById(prix).innerText = prixx.toFixed(2).replace(".", ",") + " MAD";
    } else if (selectedOption === "50ml" || selectedOption === "Choisissez") {
        document.getElementById(prix).innerText = initialPrices[prix];
    }
}
const initialPrices = {
    "prix": "765,00 MAD",
    "prix2": "960,00 MAD",
    "prix3": "1 004,00 MAD",
    "prix4": "932,80 MAD",
    "prix5": "2 000,00 MAD",
    "prix6": "799,20 MAD",
    "prix7": "680,00 MAD",
    "prix8": "1 528,80 MAD",
    "prix9": "1 500,80 MAD",
    "prix10": "666,40 MAD",
    "prix11": "1 084,00 MAD",
    "prix12": "1 499,80 MAD",
    "prix13": "1 115,20 MAD",
    "prix14": "644,80 MAD",
    "prix15": "880,00 MAD",
    "prix16": "2 008,00 MAD",
    "prix17": "860,00 MAD",
    "prix18": "3 275,00 MAD",
    "prix19": "800,00 MAD",
    "prix20": "1 000,00 MAD",
    "prix21": "999,00 MAD",
    "prix22": "769,00 MAD",
};

function complet() {
    let div = document.getElementById("parent")
    let input1 = document.getElementById("Adresse").value;
    let input2 = document.getElementById("password").value;
    let parent2 = document.getElementById("parent2")
    if (input1 !== "" && input2 !== "") {
        div.style.display = "none";
        parent2.style.display = "block";
    } else if (input1 === "" && input2 !== "") {
        let input11 = document.getElementById("Adresse")
        input11.style.border = "1px solid red";
    } else if (input1 !== "" && input2 === "") {
        let input22 = document.getElementById("password")
        input22.style.border = "1px solid red";
    } else {
        let input11 = document.getElementById("Adresse");
        let input22 = document.getElementById("password");
        input11.style.border = "1px solid red";
        input22.style.border = "1px solid red";
    }
}

function complet2() {
    let parent2 = document.getElementById("parent2");
    let input1 = document.getElementById("Nom").value;
    let input2 = document.getElementById("Adresse_livraison").value;
    let input3 = document.getElementById("Ville").value;
    let input4 = document.getElementById("Code").value;
    let input5 = document.getElementById("Pays").value;
    let input6 = document.getElementById("Numéro").value;
    let div3 = document.getElementById("parent3");
    if (input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "" && input5 !== "" && input6 !== "") {
        parent2.style.display = "none";
        div3.style.display = "block";
    } else {
        let input11 = document.getElementById("Nom");
        let input22 = document.getElementById("Adresse_livraison");
        let input33 = document.getElementById("Ville");
        let input44 = document.getElementById("Code");
        let input55 = document.getElementById("Pays");
        let input66 = document.getElementById("Numéro");
        input11.style.border = "1px solid red";
        input22.style.border = "1px solid red";
        input33.style.border = "1px solid red";
        input44.style.border = "1px solid red";
        input55.style.border = "1px solid red";
        input66.style.border = "1px solid red";
    }
}

function complet3() {
    let parent3 = document.getElementById("parent3");
    let input1 = document.getElementById("Nom_carte").value;
    let input2 = document.getElementById("Numéro_carte").value;
    let input3 = document.getElementById("Date").value;
    let input4 = document.getElementById("Code_sécurité").value;
    let div4 = document.getElementById("parent4");
    if (input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "") {
        parent3.style.display = "none";
        div4.style.display = "block";
    } else {
        let input11 = document.getElementById("Nom_carte");
        let input22 = document.getElementById("Numéro_carte");
        let input33 = document.getElementById("Date");
        let input44 = document.getElementById("Code_sécurité");
        input11.style.border = "1px solid red";
        input22.style.border = "1px solid red";
        input33.style.border = "1px solid red";
        input44.style.border = "1px solid red";
    }
}

function complet4() {
    let parent4 = document.getElementById("parent4");
    let div5 = document.getElementById("parent5");
    let select = document.getElementById("Mode").value;
    if (select !== "Mode de livraison") {
        parent4.style.display = "none";
        div5.style.display = "block";
    } else {
        let select2 = document.getElementById("Mode");
        select2.style.border = "1px solid red";
    }
}

function demander() {
    let prix = document.getElementsByClassName("Contenance")[0];
    let prixvalue = prix.value;
    let Price = document.querySelector('.spann1').textContent;
    let Name = document.querySelector('h1').textContent;
    let img = document.querySelector('.smallimg').src;
    if (prixvalue !== "Choisissez") {
        localStorage.setItem('Name', Name);
        localStorage.setItem('Price', Price);
        localStorage.setItem('img', img);
        window.location.href = "demander.html";
    } else {
        prix.style.border = "1px solid red";
    }
}

function Afficher() {
    let Name = localStorage.getItem('Name');
    let Price = parseFloat(localStorage.getItem('Price'));
    let img = localStorage.getItem('img');
    // 
    let nom = document.getElementById("Nom").value;
    let Adresse_livraison = document.getElementById("Adresse_livraison").value;
    let Ville = document.getElementById("Ville").value;
    let Code = document.getElementById("Code").value;
    let Pays = document.getElementById("Pays").value;
    let Numéro = document.getElementById("Numéro").value;
    let Numéro_carte = document.getElementById("Numéro_carte").value;
    let select = document.getElementById("Mode").value;
    let shippingCost = 0;
    switch(select) {
        case 'Livraison standard':
            shippingCost = 30;
            break;
        case 'Livraison express':
            shippingCost = 50;
            break;
        case 'Ramassage en magasin':
            shippingCost = 0;
            break;
        case 'Livraison internationale':
            shippingCost = 100;
            break;
        default:
            shippingCost = 0;
    }

    let prixtotal = Price + shippingCost;
    let div5 = document.getElementById("parent5");
    div5.innerHTML = `
    <table width=93% style='margin-left:20px;text-align: center;' border='1'  cellspacing=0 cellpadding=7>
<tr>
        <th><b>Le produit </b></th>
        <th><b>Le nom de produit </b></th>
        <th><b>Le prix de produit </b></th>
        <th><b>Le nom complet </b></th>
        <th><b>L'Adresse de livraison </b></th>
        <th><b>La Ville </b></th>
</tr>
<tr>
        <td><img src='${img}' alt='...' style='width:70px;height:75px;'></td>
        <td>${Name}</td>
        <td>${Price}</td>
        <td>${nom}</td>
        <td>${Adresse_livraison}</td>
        <td>${Ville}</td>
</tr>
<tr>
    <th><b>Le Code postal </b></th>
    <th><b>Le Pays </b></th>
    <th><b>Le Numéro de téléphone </b></th>
    <th><b>Le Numéro de carte bancaire </b></th>
    <th><b>Le mode de livraison </b></th>
    <th><b>Le prix total avec la livraison</b></th>
</tr>
<tr>
    <td>${Code}</td>
    <td>${Pays}</td>
    <td>${Numéro}</td>
    <td>${Numéro_carte}</td>
    <td>${select}</td>
    <td>${prixtotal} MAD</td>
</tr>
</table>
<br>
<button onclick="Valider()" id="demande_btn">Valider</button>`
}
function Valider() {
    alert("La commande a été complétée avec succès!")
    window.location.href = "homepage.html";
}