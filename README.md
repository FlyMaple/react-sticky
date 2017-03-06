# React - Sticky

## Install

 * npm install -g create-react-app
 * create-react-app demo
 * cd demo
 * npm install jquery
 * download jquery.sticky.js put demo/plugins/sticky/
 * npm start

## Using

```
<Sticky className="skye-header"
    topSpacing={ 0 }
    bottomSpacing={ 0 }
    isStickyClassName={ 'is-sticly' }
    wrapperClassName={ 'sticky-wrapper' }
    center={ false }
    getWidthFrom={ '' }
    widthFromWrapper={ true }
    responsiveWidth={ false }
    zIndex={ 'auto' }
    onStarted={ () => {} }
    onEnded={ () => {} }
    onUpdated={ () => {} }
    onBottomReached={ () => {} }
    onBottomUnreached={ () => {} }>
    Header
</Sticky>

<Sticky className="skye-header2"
    topSpacing={ 80 }>
    123
</Sticky>
```

# Sticky

* https://github.com/garand/sticky

``` HTML
<!-- 原始 DOM -->
<div id="skye-header">
      Sticky
</div>
```

``` HTML
<!-- 初始化後會變成 -->
<div id="skye-header-sticky-wrapper" class="sticky-wrapper">
    <div id="skye-header">
          Sticky
    </div>
</div>
```

``` HTML
<!-- 若是 sticky 元素的時候，會增加 classname: is-sticky -->
<div id="skye-header-sticky-wrapper" class="sticky-wrapper is-sticky">
```


## Options

* topSpacing
  * 預設: 0 \
  元素離頂部多少px的時候要固定住

* bottomSpacing
  * 預設: 0 \
  元素離底部多少px的時候要取消 sticky \
  目前沒有找到實際用法

* className
  * 預設: 'is-sticky' \
  變成 sticky 元素時將這個 className 加入 wrapper Container

* wrapperClassName
  * 預設: 'sticky-wrapper' \
  目標元素的 wrapper container 的 className

* center
  * 預設: false \
  對 Wraper Container 增加 margin: 0 auto;

* getWidthFrom
  * 預設: '' \
  變成 sticky 後，每次滾動都會依照什麼 DOM 去計算寬度，預設空值會用 Wrapper Container

* widthFromWrapper
  * 預設: true \
  true: getWidthFrom 空值會用 Wrapper Container \
  false: 用原始DOM取得寬度

* responsiveWidth
  * 預設: false \
  使用 getWidthfrom \
  getWidthFrom 不為空值時才有作用 \
  變更視窗大小時，是否要重新計算寬度

* zIndex
  * 預設: auto \
  原始 DOM 的 z-index 值

## Event

``` JS
//  當元素變成 sticky 元素時觸發
$('#sticker').on('sticky-start', function() { console.log("Started"); });

//  當元素回到初始定位點時觸發
$('#sticker').on('sticky-end', function() { console.log("Ended"); });

//  某種更新的時候，不知道實際觸發時機
$('#sticker').on('sticky-update', function() { console.log("Update"); });

//  不知道實際觸發時機
$('#sticker').on('sticky-bottom-reached', function() { console.log("Bottom reached"); });

//  不知道實際觸發時機
$('#sticker').on('sticky-bottom-unreached', function() { console.log("Bottom unreached"); });
```












