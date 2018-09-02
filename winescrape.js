(function(){

console.log('title | year | origin_region | origin_country | rating | price');

$('.activity-card').each(function(i,ele){
    var title = $(ele).find('.wine-name a.bold').html();
    if (title === undefined) { title = ""; }
    var vintage = $(ele).find('.wine-name').clone().children().remove().end().text();
    if (vintage === undefined) { vintage = ""; }
    var origin_region = $(ele).find('.semi a').first().html();
    if (origin_region === undefined) { origin_region = ""; }
    var origin_country = $(ele).find('.semi a').last().html();
    if (origin_country === undefined) { origin_country = ""; }
    var avg_rating = $(ele).find('div.wine-rating span.header-large.text-block').html();
    if (avg_rating === undefined) { avg_rating = ""; }
    var avg_price = $(ele).find('.wine-rating .wine-price-value').html();
    if (avg_price === undefined) { avg_price = ""; }

    console.log(title.replace(/\d+/, '').trim()
        + ' | ' + vintage.trim()
        + ' | ' + origin_region.trim()
        + ' | ' + origin_country.trim()
        + ' | ' + avg_rating.trim()
        + ' | ' + avg_price.trim());
});
})();
