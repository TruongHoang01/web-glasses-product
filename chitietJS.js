var inputText = document.querySelector(".change-amount-input");
function changeAmount(){ 
    inputText.addEventListener('change', ()=>{
        if(inputText.value == 0) inputText.value = 1;
    })
    inputText.addEventListener('keypress', (e)=>{
        var value = inputText.value + String.fromCharCode(e.keyCode);
        if(isNaN(value)) e.preventDefault();
    })
}
function buttonAmount(){
    var btnIncrease = document.querySelector(".increase");
    btnIncrease.addEventListener('click',()=>{
        inputText.value++;
    }) 
    var btnDecrease = document.querySelector(".decrease");
    btnDecrease.addEventListener('click',()=>{
        if(inputText.value > 1) inputText.value--; 
    }) 
}
//zoom image
function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.querySelector(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

//check class
function hasClass(element,name){
    var a = element.className.split(" ");
    for (var i = 0 ; i < a.length; i++) {
      if(a[i]==name) return true;
    }
    return false;
  }
  

  tabHeaderDescrip = document.querySelector(".tab-change_description");
  tabHeaderComment = document.querySelector(".tab-change_comment");

  tabDescrip = document.querySelector(".tab-detail-description");
  tabComment = document.querySelector(".tab-detail-comment");

  var textDescription = document.createElement("p");
  var textComment = document.createElement("p");

// xử lý description và comment
  function inputDescriptionComment(){ 
    if(hasClass(tabDescrip,"current")){
        tabDescrip.appendChild(textDescription);
        textComment.innerText = "";
        textDescription.innerText = "Kính Ray-Ban là một biểu tượng thời trang và khẳng định phong cách sống với lịch sử ra đời từ hơn 70 năm trước. Từ sản phẩm mắt kính Aviator đến kính Wayfarer và nhiều loại kính huyền thoại khác, Ray-Ban đã tạo nên một trào lưu văn hóa lan tỏa mạnh mẽ đến nhiều tầng lớp khác nhau, dù là Hollywood hay trong quân đội Mỹ. Theo đuổi thông điệp “Never hide” - “Không bao giờ che giấu”, Ray-Ban đã và đang là sản phẩm không thể thiếu dành cho những ai yêu thích sự chân thực, muốn thể hiện cái tôi độc lập và khác biệt của mình.";
        tabHeaderDescrip.style.color = "#428bca";
        tabHeaderComment.style.color = "#333";
        tabHeaderDescrip.style.borderTop = "4px solid #428bca ";

    }
    if(hasClass(tabComment,"current")){
        tabComment.appendChild(textComment);
        textDescription.innerText = "";
        textComment.innerText = "Kính đẹp quá";
        tabHeaderComment.style.color = "#428bca";
        tabHeaderDescrip.style.color = "#333";
        tabHeaderComment.style.borderTop = "4px solid #428bca ";
        
    }
}
function clickHeader(){
    tabHeaderComment.addEventListener('click',() =>{
        tabDescrip.classList.remove("current");
        tabComment.classList.add("current");
        tabHeaderDescrip.style.borderTop = "none";
        inputDescriptionComment();
    })
    tabHeaderDescrip.addEventListener('click',() =>{
        tabComment.classList.remove("current");
        tabDescrip.classList.add("current");
        tabHeaderComment.style.borderTop = "none";
        inputDescriptionComment();
    })
}
function start(){ 
    buttonAmount();
    changeAmount();
    //imageZoom("img_01","#myresult");
    inputDescriptionComment();
    clickHeader();  
}
start();
