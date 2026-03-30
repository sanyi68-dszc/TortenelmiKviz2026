valaszOssz=0
valaszJo=0
elozo=-1
sz=""
sorszam=0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        sz+=`<img src="img/a${sorszam}.jpg" class="kvizkep" id="a${sorszam}" onclick="kerdes(${sorszam})" onmouseover="szegely(${sorszam})" onmouseleave="szegelyOff(${sorszam})" style="border:2px solid white">`
        sorszam++
    }
    sz+="<br>"
}
document.getElementById("kepek").innerHTML=sz

function kerdes(szam){
    if(elozo!=-1) document.getElementById(`a${elozo}`).style.filter="invert(0%)"
    elozo=szam
    document.getElementById(`a${szam}`).style.filter="invert(100%)"
    sz=""
    sz+=`<img src="img/a${szam}.jpg">`
    document.getElementById("nagyKep").innerHTML=sz

    document.getElementById("kerdes").innerHTML=`Ki ez a személy?`
    document.getElementById("kerdes").style.textAlign="center"
    document.getElementById("kerdes").style.marginTop="5px"
    document.getElementById("kerdes").style.fontWeight="bold"

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
        gombok+=`<button onclick="ertekel('${szavakTomb[i]}',${szam})">${szavakTomb[i]}</button>`
    }
    document.getElementById("gombok").innerHTML=gombok
}

function ertekel(szemely,szam){
    valaszOssz++
    if(szemely==nevekTomb[szam].megoldas){
        swal.fire(pozitivTomb[Math.floor(Math.random()*pozitivTomb.length)])
        valaszJo++
    }
    else{
        swal.fire(negativTomb[Math.floor(Math.random()*negativTomb.length)])
    }
    document.getElementById("eredmeny").innerHTML=`Eredmény: ${valaszJo} jó válasz ${valaszOssz} kérdésből. Százalékos eredmény: ${Math.round((valaszJo/valaszOssz)*100)}%`
    document.getElementById("eredmeny").style.textAlign="center"
}

function szegely(sorszam){
    document.getElementById(`a${sorszam}`).style.border="2px solid cyan"
}

function szegelyOff(sorszam){
    document.getElementById(`a${sorszam}`).style.border="2px solid white"
}