console.log("linked")

function addtocart(cartAmount) {
    cartAmount.innerText++;
}

function switcH(wrd) {
    if (wrd.innerText === 'Best Selling') {
        wrd.innerText = "Price"
    }
    else {
        wrd.innerText = 'Best Selling'
    }
}