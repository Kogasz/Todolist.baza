
async function gettodo(){
    const data = await fetch("http://localhost:3001/get")
     const json = await data.json()
    const oglo = document.getElementById("oglosenia")

    document.getElementById("oglosenia").innerHTML = ""
    console.log("usuniete")
    for(i=0;i<=json.length-1;i++){
        console.log("for")
    //div
    const diw = document.createElement("div")
    diw.setAttribute("id", "divy")
    
    //nazwa
    const nazwa = document.createElement("h1")
    nazwa.innerHTML = "Nazwa:" + json[i].Nazwa
    diw.appendChild(nazwa)
    //termin
    const h2 = document.createElement("h1")
    h2.innerHTML = "Dni do końca:" + json[i].Termin
    diw.appendChild(h2)

    const done = document.createElement("button")
    const p5 = document.createElement("p")
    p5.innerHTML = "Czy wykonane: "
    if(json[i].czy_wykonane == 0){
        done.innerHTML = "Nie"
    }
    else{
        done.innerHTML = "Tak"
    }
    done.setAttribute("onclick",`czyk(${json[i].ID},${json[i].czy_wykonane})`)


     //usun
     const guzik = document.createElement("button")
     guzik.innerHTML = "Kliknij aby usunąć"
     guzik.setAttribute("onclick",`dele(${json[i].ID})`)
     guzik.setAttribute("class","usun")
     diw.appendChild(p5)
    diw.appendChild(done)
    diw.appendChild(guzik)
    oglo.appendChild(diw)
    }
   
}
gettodo()

async function dodaj(){
    const nazw = document.getElementById("nazwa1").value
    const term = document.getElementById("termin1").value

    const url = `http://localhost:3001/add/${nazw}/${term}`

    await fetch(url)
    gettodo()
}
async function dele(ID){
    const url = `http://localhost:3001/del/'${ID}`
    await fetch(url)
    await gettodo()
}
async function czyk(Id,czy_wyk){
    await fetch(`http://localhost:3001/zaz/${Id}/${czy_wyk}`)
    console.log("prxed")
    gettodo()
    |console.log("popo")
}
