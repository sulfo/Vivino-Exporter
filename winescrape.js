(function(){

console.log('title | year | origin_region | origin_contry | rating | price');

$('.activity-card').each(function(i,ele){
    var title = $(ele).find('.wine-name a.bold').html();
    var vintage = $(ele).find('.wine-name').clone().children().remove().end().text();
    var origin_region = $(ele).find('.semi a').first().html();
    var origin_contry = $(ele).find('.semi a').last().html();
    var avg_rating = $(ele).find('div.wine-rating span.header-large.text-block').html();
    var avg_price = $(ele).find('.wine-rating .wine-price-value').html();
    
    
    console.log(title.replace(/\d+/, '').trim() 
        + ' | ' + vintage.trim() 
        + ' | ' + origin_region.trim() 
        + ' | ' + origin_contry.trim()
        + ' | ' + avg_rating.trim()
        + ' | ' + avg_price.trim());
});
})();
