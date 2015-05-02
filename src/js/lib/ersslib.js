/*
 * @author  Lars Hendahl
 */

 (function (e) {
    "use strict";
    e.fn.rssList = function (t) {
        var n = {
        	feedUrl: "http://feeds.bbci.co.uk/news/video_and_audio/world/rss.xml",
            maxCount: 5,
            showDesc: true,
            showPubDate: true,
            characterLimit: 0,
            titleLinkTarget: "_blank",
            errorText: "We couldnt show the rss feed",
            readMoreText: "Read more"
        }, r = e(this).attr("id"), i;
        if (t) {
            e.extend(n, t);
        }
        e("#" + r).empty();
        e.ajax({
            url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + n.maxCount + "&output=json&q=" + encodeURIComponent(n.feedUrl) + "&hl=en&callback=?",
            dataType: "json",
            success: function (t) {
                e("#" + r).empty();
                var s = "";
                if (t.responseData !== null) {
                    e.each(t.responseData.feed.entries, function (e, t) {
                        s += '<li><h3><a href="' + t.link + '" target="' + n.titleLinkTarget + '" >' + t.title + "</a></h3>";
                        if (n.showPubDate) {
                            i = new Date(t.publishedDate);
                            s += '<time datetime="' + i + '">' + i + "</time>";
                        }
                        if (n.showDesc) {
                            s += '<p class="eItemContent"><a class="eTeaserLinkText" href="' + t.link + '" target="' + n.titleLinkTarget + '" >';
                            if (n.DesccharacterLimit > 0 && t.content.length > n.DesccharacterLimit) {
                                s += t.content.substr(0, n.DesccharacterLimit) + "...";
                            } else {
                                s += t.content;
                            }
                            s += '</a> <a href="' + t.link + '" target="' + n.titleLinkTarget + '" >' + n.readMoreText +  '</a></p>';
                        }
                    });
e("#" + r).append( s );
} else {
    e("#" + r).append('<li>' + n.errorText + '</li>');
}
}
}).done(function () {
    e("#" + r).removeClass('eAjaxSpin');
});
};
}(jQuery));

