var inp = document.querySelector("#inp");
var tudoList = document.querySelector("#tudoList")

inp.addEventListener(
    "keyup",
    function (e) {
        if (this.value != "") {
            if (e.key === "Enter") {
                addTudo(this.value)
                this.value = ""
            }
        }else{
            alert("Type.......")
        }


    }
)


function addTudo(value) {
    var li = document.createElement("li");
    li.innerHTML = `${value} <span ><i class="fa-solid fa-trash"></i></span>`
    tudoList.appendChild(li)

    li.addEventListener(
        'click',
        function () {
            this.classList.toggle("demo")
        }
    )

    li.querySelector("span").addEventListener(
        "click",
        function () {
            li.remove()
        }
    )



}
