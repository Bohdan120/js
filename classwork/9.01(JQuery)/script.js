// Доступ до елементів.

// Підготовка роботи з веб-сторінкою JQuery:

// 1.

// $(document).ready(function () {

// })

// 2. Найпростіший. Будемо його використовувати.

// $(function () {

// })



// -----------------

$(function () {

    // 1. Універсальний селектор
    // $('*') - вибір всіх елементів на сторінці

    // $('*').css('color', 'green')
    // $('*')
    //     .css('color', 'green')
    //     .css('background-color', 'red')
    // $('*').css({
    //     color: 'red',
    //     // 'font-size': '25px'
    //     fontSize: '25px'
    // })

    // 2. Селектор імені тегу:
    // $('p') - шукає всі елементи, які відповідають селектору
    // $('p').css('color', 'red')
    // $('div p').css('color', 'red')

    // 3. Групування селекторів
    // $('p, ul') - шукає всі елементи, які перелічені через кому.
    // $('p, ul').css('color', 'aqua')

    // 4. Вибір сусідніх елементів:
    // $('p + div') - вибір всіх елементів div, яким беспосередньо є сусідніми параграфи на тому ж рівні вкладеності.
    // $('p + div').css('color', 'aqua')

    // 5. has() - шукає елементи, які містять в собі селектор вказаний в дужках.

    // $('div:has(ul)').css('background-color', 'aqua')


    // 6-7. Пошук по ID та Class

    // $('#p1').css('color', 'aqua')
    // $('.p1').css('font-size', '25px')

    // 8. Селектор атрибута:

    // $('a[target]').css('color', 'pink')
    // $('input[type=text]').val('ADMIN')

    // function jsSelection(){
    //     document.getElementsByTagName('p')[0].innerHTML = `
    //     <u>getElementsByTagName('p')</u>
    //     - вибірка по іменні класу`
    // }

    //додавання класів в елементи
    // $('#first').on('click', function(){
    //     let div = $('#testDiv')
    //     div.addClass('class1')        
    // })

    // $('#second').on('click', function(){
    //     let div = $('#testDiv')
    //     div.removeClass()
    //     div.addClass('class2')        
    // })

    //Завдання

    // function ChangeColor(){       
    //     $("#btn").click(function(){
    //         let selector = $("#text").val();  
    //         $(".highlight").removeClass();        
    //         $(selector).addClass("highlight");
    //     })
       
    // }
    // ChangeColor()

  //  $('p:contains("JavaScript")').css('background-color', 'red')

    
















})
