const options = {
	headers: {
		'X-RapidAPI-Key': 'b02d93b443mshf1faef7c4c3f83ap1cea6ejsna21ef3aafc48',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};
export const SearchAll = async(p1)=>{
    options.method = 'GET';
    const peticio =  await fetch(`https://youtube138.p.rapidapi.com/channel/search/?id=UC8fkwsjcI_MhralEX1g4OBw&q=${p1}&hl=en&gl=US`, options);
    // const peticio =  await fetch(`../storage/Channel Search.json`, options);
    const json = await peticio.json();
    let h = 0, cont = 0;
    let array = json.contents.map((val,id)=>{
        if(val.playlist) return undefined;
        cont++;
        if(cont<=10) h = 30*cont;

        return `<li style="color: aliceblue;"><a href="https://www.youtube.com/watch?v=${val.video.videoId}" style="color: aliceblue;">${val.video.title}</a></li>`;
    })
    document.querySelector("#active").style.height = `${h}px`;
    document.querySelector("#SearchAll").innerHTML = null;
    document.querySelector("#SearchAll").insertAdjacentHTML("beforeend", array.join(" "));
}