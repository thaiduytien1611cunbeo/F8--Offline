Buổi 1: Các khái niệm cơ bản của lập trình WEB
    + 



Buổi 2: Các thẻ HTML cơ bản




Buổi 3: 
    + Form  
    + semantic trong html5   
    + Đặt tên class
    + Selector cho class and tagname

Buổi 4:
    + Selector cho element và attribute
    + Element pseudo
        - befor, after
        - placehoder
        - first-line, first-letter
        - selection : Bôi đen
    + Lớp giả 
        - hover
        - active
        - focus (tabindex)
        - checked : dùng riêng cho input
        - not(.nameclass) : loại trừ class đó ra
        - first-child, last-child : Thành phần con đầu tiên
        - first-of-type : Thành phần con đầu tiên cùng kiểu
        - nth-child(5) : Thành phần con thứ 5 
        - nth-of-type(5) : Thành phần con thứ 5 của cùng 1 kiểu

Buổi 5:
    + Các thuộc tính định dạng text
        - color : rgb, name, hexa
        - các giá trị kế thừa trong CSS (Áp dụng với tất cả thuộc tính)
            * initial : Mặc định của trình duyệt
            * inherit : Kế thừa từ cha trực tiếp
            * unset : 
        - font-size : px, em, rem;
        - text-align : chỉ dùng cho các thẻ block
    + Thuộc tính background
        - background-color
        - background-image
        - background-position : căn chỉnh hình ảnh
        - background-repeat : no-repeat, (repeat-x), (repeat-y);
        - background-attachment : cố định background
        - background-size

        => background: tổng hợp tất cả các cái ở trên trừ (size)
        
Buổi 6:
    + border
        - border-style : solid, dash, dotted, double
        * transparent : trong suốt 
    + width_height :
        - % : tỉ lệ với thành phần cha trực tiếp
        - vw : vewport width
        - vh : vewport height 
        - min-width, max-width, min-height, max-height
        * width & height : không có tác dụng với thẻ inline
        * vewport là nội dung người dùng nhìn thấy
(* CHÚ Ý : thẻ inline có 2 nhóm là : inline replace và inline Non-replace)
(* Chú ý : thẻ img chỉ là 1 thẻ để bọc text không có nội dung trước mà tải ảnh trên gg về)  
    + overflow
        - visible : mặc định
        - hidden : ẩn nội dung thừa
        - scroll : tạo khung để xem nội dung thừa
        - auto : 
    + Padding :
        - ratio box : để chia tỉ lệ khung hình
        - padding top, bottom : chỉ dùng cho thẻ block  
    + Margin :
        - margin : 0 auto --> Dùng để căn giữa thẻ block
        - text-align : center --> Dùng để căn giữa thẻ inline
    + Box model  

Buổi 7 :
    + float : left, right
    + clear : left, right, both (chống trôi 2 phía)
    + box-model :
    + display : Thay đổi cách hiển thị của thẻ html
        - none : ẩn (mất cả không gian ở đó)
        - inline : như inline
        - block : như block
        - inline-block : như block nhưng lại hiển thị trên 1 dòng
    + visibility : hidden
    + position :Thay đổi vị trí các element
        - relative : Vị trí tương đối
        - absolute : Vị trí tuyệt đối
        - fixed : Vị trí cố định
        - static : Không có position (Mặc định)
    + List-style :
        - list-style-position
        - list-style-type
    + Cách đếm trong CSS :
        * B1 : Khởi tạo bộ đếm : couter-reset:
        - B2 : Thực hiện đếm : counter-increment:
        - B3 : Hiển thị ra màn hình : couter(name) gọi ở before

Buổi 8 : FLEX = flexible box module 
    + thuộc tính trong nhóm flex container
        - display : flex | inline-flex--> kích hoạt flex
        - flex-direction : Chọn hướng cho trục chính
        - justify-content : căn chỉnh các item theo hướng song song trục chính
        - align-item : căn chỉnh các item theo hướng vuông góc với trục chính
        - flex-wrap : wrap các item
        - align-content : căn chỉnh các hàng hoặc hoặc cột theo hướng vuông góc với trục chính --> Áp dụng khi có nhiều hàng nhiều cột
        - gap : tạo khoảng cách giữa các item
    * Chú ý : align-item : căn chỉnh các item trong một hàng
              align-content : căn chỉnh các hàng cột trong container
    + Thuộc tính trong nhóm flex item
        - flex-grow : Dãn đều các item để lấp đầy phần còn trống của flex container
        - flex-shrink : Tự động co lại các item khi bị tràn
        - flex-basis : xét chiều ngang cho các item (theo chiều main axits) --> vẫn bị chặn bởi các thuộc tính min, max width, height --> khi dùng flex-basis thì width, height sẽ không ghi đè được
        - flex: gộp của grow, shrink, basis;
        - sắp xếp các item bằng oder
    + transition : Thiết lập thời gian thay đổi giá trị CSS --> chỉ áp dụng các thuộc tính có giá trị là số
        - transition-property : all | tên thuộc tính
        - transition-duration : time 
        - transition-delay
        - transition-timing-function : 
            . ease : chậm nhanh chậm
            . linear : đều
            . ease-in : chậm nhanh
            . ease-out : nhanh chậm
            . ease-in-out : chậm nhanh chậm (nhưng chậm hơn thằng ease)
            . cubic : chia thành 4 giai đoạn
        - Gộp Transition: property duration timing-fucion delay

Buổi 8 : 
    + transform : thay đổi kích thước vị trí cho việc tạo các animation
        - rotate(45deg) : xoay 45 độ
        - scale(2) : phóng to gấp đôi
        - skew(45deg) : nghiêng 45 độ
        - translate(a, b) : dịch sang trái a và duống dưới b
        - transform-origin : top right : vị trí thu phóng ở top right mặc định center
        - Lưu ý : Khi làm transition/ animation ưu tiên dùng các thuộc tính trên, khi nào không dùng được thì dùng thuộc tính khác (để tối ưu hiệu năng)
    + animation :

Buổi 9 :
    + Variable :
        + Biến toàn cục (global variable)
            . khai báo ở lớp giả root
            . sử dụng khắp mọi nơi
        + Biến cục bộ (local variable)
            . khai báo trong selector tương ứng
            . sử dụng cho các thằng con của nó
    - Shadow
        + Đổ bóng khối : box-shadow : x-offset y-offset blur spared color
        + Đổ bóng chữ : text-shadow : x-offset y-offset blur color
    - Backgroound-gradient
        + linear-gradient : background-images : linear-graient(color1, stopcolor1, color2, stopcolor2..)
        + radial-gradient : background-images : radial-graient(shape,color1, stopcolor1, color2, stopcolor2..)