let last = [];
let c_doc = undefined;

const IDtoImage = (id, emojis) => {
    $('#card > img').hide();
    $.get(`https://www.wikidata.org/w/api.php?action=wbgetclaims&format=json&property=P18&origin=*&entity=${id}`)
    .then(data =>{
        if(data.claims.P18 && !data.error) $('#card > img').attr('src', `https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/${data.claims.P18[0].mainsnak.datavalue.value}&width=100`);
        else if(emojis.length > 0) $('#card > img').attr('src', `https://emojicdn.elk.sh/${emojis[0]}?style=twitter`); 
        else $('#card > img').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg');
        $('#card > img').show();
    })
};

const re = /[(]+\d+[-]+\d+[)]/
const removeDate = (desc) => {
    return desc.replace(re, '').trim();
}

// mongo realm stuff
let collection;
(async () => {
    const app = new Realm.App( {id: 'random-personator-mcwml'} );
    const creds = Realm.Credentials.anonymous();
    const user = await app.logIn(creds);
    collection = user.mongoClient('people').db('people').collection('people');
})();

const setCard = (doc) => {
    let emojis = doc.country.map(c => {
        if (c !== '') return flag(c) || null;
        else return '';
    }).filter(c => c);


    $("#article").attr('aria-busy', false);
    IDtoImage(doc.id, emojis);
    $('#card > h2').text(doc.name);
    $('#card > #date').text(`${(doc.born < 0 ? `${doc.born*-1} BCE` : doc.born)} - ${(doc.died < 0 ? `${doc.died*-1} BCE` : (doc.born < 0 ? `${doc.died} CE` : doc.died)) || ''} ${emojis.join(' ')}`);
    $('#card > p').text(removeDate(doc.description));
    $("#card > #death-reason").text(`cause of death: ${doc['death-reason'] || 'unknown'}`);
    $("#card > #link").attr('href', `https://wikidata.org/wiki/${doc.id}`);
    if(last.length !== 0) $("#card > #back").attr("aria-disabled", false);
    $("#card").show()
}

$("#main").click(async function(){
    if(c_doc) last.push(c_doc);
    $("#card").hide();
    $("#article").attr('aria-busy', true);
    let queries = [{ $sample: { size: 1 } }];
    if($("#known-cod>input").is(':checked')) queries.unshift({$match: { 'death-reason': { $ne : '' }}});
    if($("#year>input").val() !== '') 
        queries.unshift({$match: { 'died': { $ne : '' }}});
        queries.unshift({$match: {$expr: {$gte: [{$toInt: "$died"}, parseInt($("#year>input").val())]}}});
        queries.unshift({$match: {$expr: {$lte: [{$toInt: "$born"}, parseInt($("#year>input").val())]}}});
    const docs = await collection.aggregate(queries);
    c_doc = docs[0];
    if(c_doc) setCard(c_doc);
    else alert("couldn't find any person alive in that year and/or with a cause of death.");

});

$("#back").click(function(){
    setCard(last[last.length-1]);
    last.pop();
    if(last.length === 0) $("#card > #back").attr("aria-disabled", true);
});

$("#card").hide();