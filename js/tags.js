function existingTag(text)
{
	var existing = false,
		text = text.toLowerCase();

	$(".tags").each(function(){
		if ($(this).text().toLowerCase() == text) 
		{
			existing = true;
			return "";
		}
	});

	return existing;
}

$(function(){
  $(".tags-new input").focus();
  
  $(".tags-new input").keyup(function(){

		var tag = $(this).val().trim(),
		length = tag.length;

		if((tag.charAt(length - 1) == ',') && (tag != ","))
		{
			tag = tag.substring(0, length - 1);

			if(!existingTag(tag))
			{
				$('<li class="tags"><span>' + tag + '</span><i class="fa fa-times"></i></i></li>').insertBefore($(".tags-new"));
				$(this).val("");	
			}
			else
			{
				$(this).val(tag);
			}
		}
	});
  
  $(document).on("click", ".tags i", function(){
    $(this).parent("li").remove();
  });

});



////next


function existingTag(text)
{
	var existing = false,
		text = text.toLowerCase();

	$(".tags2").each(function(){
		if ($(this).text().toLowerCase() == text) 
		{
			existing = true;
			return "";
		}
	});

	return existing;
}

$(function(){
  $(".tags-new2 input").focus();
  
  $(".tags-new2 input").keyup(function(){

		var tag2 = $(this).val().trim(),
		length = tag2.length;

		if((tag2.charAt(length - 1) == ',') && (tag2 != ","))
		{
			tag2 = tag2.substring(0, length - 1);

			if(!existingTag(tag2))
			{
				$('<li class="tags"><span>' + tag2 + '</span><i class="fa fa-times"></i></i></li>').insertBefore($(".tags-new2"));
				$(this).val("");	
			}
			else
			{
				$(this).val(tag2);
			}
		}
	});
  
  $(document).on("click", ".tags2 i", function(){
    $(this).parent("li").remove();
  });

});
                                

