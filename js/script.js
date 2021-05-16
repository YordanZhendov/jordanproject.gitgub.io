function openForm() {
    if (document.getElementsByClassName('registerimage')[0].style.display == "block") {
        document.getElementsByClassName('registerimage')[0].style.display = "none";
    } else {
        document.getElementsByClassName('registerimage')[0].style.display = "block";
    }
}
function closeForm() {
    document.getElementsByClassName('registerimage')[0].style.display = "none";
}