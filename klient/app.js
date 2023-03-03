
async function gettodo(){
    const data = await fetch("http://localhost:3001/get")
     const json = await data.json()


   
    for(i=0;i<=json.length-1;i++){
    //div
    const diw = document.createElement("div")
    diw.setAttribute("id", "divy")
    
    //nazwa
    const nazwa = document.createElement("h1")
    nazwa.innerHTML = "Nazwa:" + json[i].Nazwa
    diw.appendChild(nazwa)
    //wykonanie
    const p1 = document.createElement("p")
    p1.innerHTML = "Czy wykonane?:" + json[i].czy_wykonane
    diw.appendChild(p1)
    
    if(json[i].czy_wykonane == 1){
        p1.innerHTML = "Tak"
    }
    else{
        p1.innerHTML = "Nie"
    }
    //termin
    const p2 = document.createElement("p")
    p2.innerHTML = "Dni do końca:" + json[i].Termin
    diw.appendChild(p2)
    //usun
    const guzik = document.createElement("button")
    guzik.innerHTML = "X"
    guzik.setAttribute("onclick",`dele(${json[i].ID})`)
    diw.appendChild(guzik)


   
    document.getElementById("body").appendChild(diw)
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
    gettodo()
}