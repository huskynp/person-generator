const IDtoImage = (id, emojis) => {
    $('#card > img').hide();
    $.get(`https://www.wikidata.org/w/api.php?action=wbgetclaims&format=json&property=P18&origin=*&entity=${id}`)
    .then(data =>{
        if(data.claims.P18) $('#card > img').attr('src', `https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/${data.claims.P18[0].mainsnak.datavalue.value}&width=100`);
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
    $('#card > #date').text(`${doc.born} - ${doc.died || ''} ${emojis.join(' ')}`);
    $('#card > p').text(removeDate(doc.description));
    $("#card > #death-reason").text(`cause of death: ${doc['death-reason'] || 'unkown'}`);
    $("#card > a").attr('href', `https://wikidata.org/wiki/${doc.id}`);
    $("#card").show()
}

$("#main").click(async function(){
    $("#card").hide();
    $("#article").attr('aria-busy', true);
    const docs = await collection.aggregate([{ $sample: { size: 1 } }]);
    const doc = docs[0];
    setCard(doc);
});

$("#card").hide();