//設置cookie
//name:cookie名稱、value:cookie值、deadline:cookie有效時間(單位:小時)
function setCookie(name, value, deadline) {
    var exp = new Date();
    exp.setTime(exp.getTime() + deadline * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//讀取cookie
//name:cookie名稱
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

//删除cookies
function deleteCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

//滾動事件
$(window).scroll(function() {
  var page0 = $('#page0').offset().top;
  var page1 = $('#page1').offset().top;
  var page2 = $('#page2').offset().top;
  var page3 = $('#page3').offset().top;
  if ($(this).scrollTop() >= page0 && $(this).scrollTop() <= page1) {
    page2animation(false)
  } else if ($(this).scrollTop() >= page1 && $(this).scrollTop() <= page2) {
    page2animation(true)
  } else if ($(this).scrollTop() >= page2 && $(this).scrollTop() <= page3) {
  }
});

function page2animation (toggle) {
  if (toggle) {
    $('.skill-box').addClass('openSkill')
    $('#h5').addClass('h5')
    $('#css').addClass('css')
    $('#js').addClass('js')
    $('#svg').addClass('svg')
    $('#vue').addClass('vue')
    $('#wg').addClass('wg')
    $('#c').addClass('c')
    $('#django').addClass('django')
    $('#go').addClass('go')
    $('#sql').addClass('sql')
    $('#docker').addClass('docker')
    $('#git').addClass('git')
    $('#arduino').addClass('arduino')
    $('#Illustrator').addClass('Illustrator')
    $('#Photoshop').addClass('Photoshop')
  } else {
    $('#h5').removeClass('h5')
    $('#css').removeClass('css')
    $('#js').removeClass('js')
    $('#svg').removeClass('svg')
    $('#vue').removeClass('vue')
    $('#wg').removeClass('wg')
    $('#c').removeClass('c')
    $('#django').removeClass('django')
    $('#go').removeClass('go')
    $('#sql').removeClass('sql')
    $('#docker').removeClass('docker')
    $('#git').removeClass('git')
    $('#arduino').removeClass('arduino')
    $('#Illustrator').removeClass('Illustrator')
    $('#Photoshop').removeClass('Photoshop')
  }
}

//設定錨點
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 400);
  });
});

//傳送mail表單
function send_mail() {
  if (confirm("確認送出?")) {
      $('#mail_form').submit();
  } else {}
}

$(function() {  
  const next = $('#slider-next')[0];
  const prev = $('#slider-prev')[0];
  const element = $('#slider')[0];
  const transformValue = $('#slider > ul')[0].offsetWidth
  const length = $('#slider > ul > li').length;
  let nextCount = 0;

  function changePrev() {
    nextCount -= 1;
    if (nextCount == -1) {
      nextCount = length - 1
    }
    element.style.transform = `translateX(${transformValue * nextCount * -1}px)`;
  }
  function changeNext() {
    nextCount += 1;
    if (Math.abs(nextCount) > length - 1) {
      nextCount = 0;
    }
    element.style.transform = `translateX(${transformValue * nextCount * -1}px)`;
  }
  prev.addEventListener('click', changePrev);
  next.addEventListener('click', changeNext);
}); 