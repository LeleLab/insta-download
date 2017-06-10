function getPic(link){	
alert(link);
	var url = "http://api.instagram.com/oembed?url="+link;
    $.ajax({
        url: url,
        dataType: "jsonp",
        cache: false,
        success: function (data) {
			var hdpicurl = data.thumbnail_url.replace(/s[0-9\.]+/i, "");
            var ath = "Author: " + data.author_name;
            var cpt = "Caption:" + data.title;
			
			
			var result = "<img src='" + hdpicurl + "'/> <br>"+ ath +"<br> <br>" + cpt + "<br>";
			$(".result").append(result);		
		}
    });
}
