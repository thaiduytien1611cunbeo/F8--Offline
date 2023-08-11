# Ngôn ngữ tiền xử lý SCSS

## Cài đặt trình biên dịch

1. Cài đặt NodeJS

=>

2. Cài đặt SASS

npm -i sas -g

## Biên dịch SCSS

1. Biên dịch cả folder

sass folder-nguon : folder-dich
sass scss : css

=> Biên dịch các file scss trong thư mục scss sang thư mục css

Watch Mode

sass folder-nguon:folder-dich

sass scss:css --watch

2. Biên dịch 1 file 

sass duong-dan-file-scss duong-dan-file-css

3. Nén file css từ file scss

sass duong-dan-file-scss duong-dan-file-css --style compressed

## Câu lệnh rẽ nhánh

1. Câu lệnh rẽ 1 nhánh

@if (condition) {
    //body
}

2. Câu lệnh rẽ nhánh đủ (2 nhánh)

