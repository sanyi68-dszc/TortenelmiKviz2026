sz=""
sorszam=0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        sz+=`<img src="img/a${sorszam}.jpg" class="kvizkep" onclick="kerdes(${sorszam})">`
        sorszam++
    }
    sz+="<br>"
}
document.getElementById("kepek").innerHTML=sz

function kerdes(szam){
    sz=""
    sz+=`<img src="img/a${szam}.jpg">`
    document.getElementById("nagyKep").innerHTML=sz

    szavakTomb=[]
    szavakTomb.push(nevekTomb[szam].megoldas)
    szavakTomb.push(nevekTomb[szam].tipp1)
    szavakTomb.push(nevekTomb[szam].tipp2)
    szavakTomb.push(nevekTomb[szam].tipp3)

    for (let i = 0; i < 100; i++) {
        r1=Math.floor(Math.random()*szavakTomb.length)
        r2=Math.floor(Math.random()*szavakTomb.length)
        temp=szavakTomb[r1]
        szavakTomb[r1]=szavakTomb[r2]
        szavakTomb[r2]=temp
    }

    gombok=""
    for (let i = 0; i < 4; i++) {
        gombok+=`<button onclick="ertekel('${szavakTomb[i]}')">${szavakTomb[i]}</button>`
    }
    document.getElementById("gombok").innerHTML=gombok
}

function ertekel(szemely){
    alert(szemely)
}