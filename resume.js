$(function() {
  
  $('[data-scrollmagic]').each(function (index, elem) {
    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic();
  
     
    // Create Animations
    var title = $(elem).find('h3'),
           text = $(elem).find('h2'),
           bulltets =$(elem).find('ul'),  
           btn = $(elem).find('a');
        
    
    var tl = new TimelineMax({pause: true});    
    tl.add("start") 
      .fromTo(title, 0.4, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(text, 0.4, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
    .fromTo(bullets, 0.4, { y: '80px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(btn, 0.4, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
    
    
    // Create the Scene and trigger when visible
    var scene = new ScrollScene({
      triggerElement: elem,
      offset: 0
    })
    .setTween(tl)
    .addTo(scrollMagicController);

    // Add debug indicators fixed on right side
     scene.addIndicators(); 
  });
});
