const gm=require('gm');


gm('./pool.jpg')
// .flip()//倒立
// .magnify()//放大一倍
// .rotate('green', 45)
// .blur(7, 3)//模糊化
// .crop(305, 274, 65, 96)//裁剪
.crop(96, 65, 274, 305)//裁剪
// .edge(3)//边缘锐化
// .stroke("#ffffff")
// .drawCircle(100, 100, 20, 10)
// .font("Helvetica.ttf", 12)
// .drawText(30, 20, "GMagick!")
.write('./pool1.jpg', function (err) {
  console.log(err)
});
