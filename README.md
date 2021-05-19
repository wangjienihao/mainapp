## 乾坤初尝

    子应用引入script出错可以通过动态引入

    const $script = document.createElement('script')
    $script.src = 'http://player.polyv.net/script/polyvplayer.min.js'
    document.body.appendChild($script)

    父应用

    start({
        excludeAssetFilter: url => url.indexOf('player.polyv.net') !== -1
    })
