function box(element) {

    if (element)
    {
        if (element.className == 'box')
        {
            //把当前展开的box闭合
            while (document.getElementById('main').getElementsByClassName('box target')[0]) {
                document.getElementById('main').getElementsByClassName('box target')[0].className = 'box';
            }
            element.className = 'box target';
        }
        else
        {
            element.className = 'box';
        }
    }
}