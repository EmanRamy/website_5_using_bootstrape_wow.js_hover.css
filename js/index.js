


    
    $(document).ready(function()
                      
{
      
        
    
        
        
     $(".productrow img").click(function(){
       
                    $(".productrow h6").fadeToggle(1000);
                     $(".productrow p").fadeToggle(1000);
                                             
                                     

    });
    
  
    
    //show the color option when the icon clicked
    
    $(".cog-check").click(function(){
       $(".color-option").toggle(1000); 
    }); 
        
    //scroll up
    
        //cashing the scroll up icon section/button
        var scrollup=$("#myscrollup");
        
        $(window).scroll(function(){
      
            $(this).scrollTop()>=800 ?   scrollup.show():   scrollup.hide();
             
      });
        
       scrollup.click(function(){
               
                $("html,body").animate({scrollTop : 0},1000);
            });
});

//loading screen

$(window).on("load",function()
{
    //shwow scroll
   $("body").css("overflow","auto");
    
    //loading elemnts
    $(".loading-screen .sk-circle").fadeOut(2000, function()
                                   
   {
        $(this).parent().fadeOut(2000,function()
        {
            $(this).remove();
            
        });
        
    });
});
    
    